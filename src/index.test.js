const expect = require('chai').expect;
const sinon = require('sinon');
const DeviceOSProtobuf = require('./');

describe('deviceOSProtobuf', () => {
	// valid 15 char serial number
	const mockExpectedSerialNumber = 'P046AF1450000FC';

	let protobufMessageName, requestID;

	afterEach(() => {
		sinon.restore();
	});

	describe('encode(protobufMessageName, object)', () => {
		it('works for string "GetSerialNumberRequest"', () => {
			const buffer = DeviceOSProtobuf.encode('GetSerialNumberRequest');
			expect(buffer).to.be.an.instanceOf(Buffer);
			expect(buffer.length).to.eql(0);
		});

		it('works for object GetSerialNumberRequest', () => {
			const obj = DeviceOSProtobuf.getDefinition('GetSerialNumberRequest');
			const buffer = DeviceOSProtobuf.encode(obj.message);
			expect(buffer).to.be.an.instanceOf(Buffer);
			expect(buffer.length).to.eql(0);
		});

		it('works for GetSerialNumberReply', () => {
			const buffer = DeviceOSProtobuf.encode('GetSerialNumberReply', { serial: mockExpectedSerialNumber });
			expect(buffer).to.be.an.instanceOf(Buffer);
			expect(buffer.length).to.eql(17);
		});

		it('works for wifi.JoinNewNetworkRequest; which has embedded messages/enums within the request', () => {
			// TODO (goggins): Validate that this is the right way to send Credentials within another message
			// Nuance: our encode method does .finish(), will that be a problem?
			const mockWifiSSID = 'mock-ssid';
			const mockWifiPassword = 'wifi-password';
			const buffer = DeviceOSProtobuf.encode('wifi.JoinNewNetworkRequest', {
				ssid: mockWifiSSID,
				// TODO (goggins): Figure out how to set bssid, does it come from  'wifi.ScanNetworksRequest'?
				// bytes bssid = 2 [(nanopb).max_size = 6];
				security: 2, // WPA_PSK
				credentials: {
					type: 1, // PASSWORD mode
					password: mockWifiPassword
				}
			});
			expect(buffer).to.be.an.instanceOf(Buffer);
			expect(buffer.length).to.eql(32);
		});
	});

	describe('decode(protobufMessageName, object)', () => {
		it('works for string "GetSerialNumberReply"', () => {
			const buffer = DeviceOSProtobuf.encode('GetSerialNumberReply', { serial: mockExpectedSerialNumber });
			const replyObject = DeviceOSProtobuf.decode('GetSerialNumberReply', buffer);
			expect(replyObject).to.be.an('object');
			expect(replyObject.serial).to.eql(mockExpectedSerialNumber);
		});

		it('works for object GetSerialNumberReply', () => {
			const buffer = DeviceOSProtobuf.encode('GetSerialNumberReply', { serial: mockExpectedSerialNumber });
			const obj = DeviceOSProtobuf.getDefinition('GetSerialNumberReply');
			const replyObject = DeviceOSProtobuf.decode(obj.message, buffer);
			expect(replyObject).to.be.an('object');
			expect(replyObject.serial).to.eql(mockExpectedSerialNumber);
		});
	});

	describe('getDefinition(protobufMessageName) without protobuf namespace', () => {
		beforeEach(() => {
			protobufMessageName = 'GetSerialNumberRequest';
			requestID = 21;
		});
		it('provides getDefinition(protobufMessageName) with non null id and replyMessage properties', () => {
			const stubID = 47;
			sinon.stub(DeviceOSProtobuf, '_getIDFromJSON').returns(stubID);
			const stubMessage = () => { };
			stubMessage.create = sinon.stub();
			stubMessage.encode = sinon.stub();
			stubMessage.decode = sinon.stub();
			sinon.stub(DeviceOSProtobuf, '_getProtobufMessage').returns(stubMessage);
			const protobufDefinition = DeviceOSProtobuf.getDefinition(protobufMessageName);
			expect(protobufDefinition).to.have.haveOwnProperty('id');
			expect(protobufDefinition).to.have.haveOwnProperty('message');
			expect(protobufDefinition).to.have.haveOwnProperty('replyMessage');
			expect(DeviceOSProtobuf._getIDFromJSON).to.have.property('callCount', 1);
			expect(DeviceOSProtobuf._getProtobufMessage).to.have.property('callCount', 2);
		});

		it('implements _getIDFromJSON(protobufMessageName) correctly with valid input', () => {
			const result = DeviceOSProtobuf._getIDFromJSON(protobufMessageName);
			expect(result).to.eql(requestID);
		});
		it('implements _getIDFromJSON(protobufMessageName) correctly with invalid input', () => {
			let error;
			try {
				DeviceOSProtobuf._getIDFromJSON('foobar');
			} catch (e) {
				error = e;
			}
			expect(error).to.be.an.instanceOf(Error);
			expect(error.message).to.eql(
				`Could not extract request type id from pbjs json where protobufMessageName=foobar`
			);
		});

		it('implements _getProtobufMessage(protobufMessageName) correctly', () => {
			const result = DeviceOSProtobuf._getProtobufMessage(protobufMessageName);
			assertValidProtobufMessage(result);
		});

		it('implements _getProtobufMessage(protobufMessageName) correctly when message name includes "."', () => {
			protobufMessageName = 'cellular.GetIccidRequest';
			const result = DeviceOSProtobuf._getProtobufMessage(protobufMessageName);
			assertValidProtobufMessage(result);
		});

		it('implements _getProtobufMessage(protobufMessageName) correctly with invalid', () => {
			let error;
			try {
				DeviceOSProtobuf._getProtobufMessage('foobar');
			} catch (e) {
				error = e;
			}
			expect(error).to.be.an.instanceOf(Error);
			expect(error.message).to.eql(
				'There is no pbjs generated protobuf Function for protobufMessageName=foobar'
			);
		});
	});

	describe('getDefinition(protobufMessageName) real world examples of definitions with id, request message, and reply message', () => {
		it('works with wifi.ScanNetworksRequest', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('wifi.ScanNetworksRequest');
			expect(protobufDefinition.id).to.eql(506);
			assertValidProtobufMessage(protobufDefinition.message);
			// console.log('Request',protobufDefinition.message);
			assertValidProtobufMessage(protobufDefinition.replyMessage);
			// Note that replyMessages can have what appears to be message nesting,
			// `console.log('Reply',protobufDefinition.replyMessage);` shows:
			//
			// Reply [Function: ScanNetworksReply] {
			// 	create: [Function: create],
			// 	encode: [Function: encode],
			// 	decode: [Function: decode],
			// 	Network: [Function: Network] {
			// 	  create: [Function: create],
			// 	  encode: [Function: encode],
			// 	  decode: [Function: decode]
			// 	}
			//   }
		});

		it('works with wifi.JoinNewNetworkRequest', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('wifi.JoinNewNetworkRequest');
			expect(protobufDefinition.id).to.eql(500);
			assertValidProtobufMessage(protobufDefinition.message);
			assertValidProtobufMessage(protobufDefinition.replyMessage);
		});

		it('works with GetSystemVersionRequest', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('GetSystemVersionRequest');
			expect(protobufDefinition.id).to.eql(30);
			assertValidProtobufMessage(protobufDefinition.message);
			assertValidProtobufMessage(protobufDefinition.replyMessage);
		});

		it('works with GetSecurityKeyRequest', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('GetSecurityKeyRequest');
			expect(protobufDefinition.id).to.eql(211);
			assertValidProtobufMessage(protobufDefinition.message);
			assertValidProtobufMessage(protobufDefinition.replyMessage);
		});

		it('works with StartNyanSignalRequest', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('StartNyanSignalRequest');
			expect(protobufDefinition.id).to.eql(230);
			assertValidProtobufMessage(protobufDefinition.message);
			assertValidProtobufMessage(protobufDefinition.replyMessage);
		});

		it('works with StopNyanSignalRequest', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('StopNyanSignalRequest');
			expect(protobufDefinition.id).to.eql(231);
			assertValidProtobufMessage(protobufDefinition.message);
			assertValidProtobufMessage(protobufDefinition.replyMessage);
		});
	});

	describe('getDefinition(protobufMessageName) real world examples of definitions without id or replyMessage', () => {
		it('works with logging.SerialStreamParams', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('logging.SerialStreamParams');
			expect(protobufDefinition.id).to.eql(null);
			expect(protobufDefinition.replyMessage).to.eql(null);
			assertValidProtobufMessage(protobufDefinition.message);
		});

		// Note: There are lots of other options of things we could test, but don't, see https://app.shortcut.com/particle/story/95530/introduce-deviceosprotobuf-getdefinition-name-to-device-os-protobuf#activity-95768
	});

	describe('getDefinitions()', () => {
		it('provides getDefinitions()', () => {
			let defs = DeviceOSProtobuf.getDefinitions();
			expect(defs).to.be.an('Array');
			const defCount = defs.length;
			defs = new Set(defs);
			expect(defs.size).to.equal(defCount); // No duplicates

			const expectedDefs = new Set([
				'cellular.SimType',
				'cellular.AccessPoint',
				'cellular.SetAccessPointRequest',
				'cellular.SetAccessPointReply',
				'cellular.GetAccessPointRequest',
				'cellular.GetAccessPointReply',
				'cellular.SetActiveSimRequest',
				'cellular.SetActiveSimReply',
				'cellular.GetActiveSimRequest',
				'cellular.GetActiveSimReply',
				'cellular.GetIccidRequest',
				'cellular.GetIccidReply',
				'ResultCode',
				'Ipv4Address',
				'Ipv6Address',
				'IpAddress',
				'IPAddress',
				'cloud.ConnectionStatus',
				'cloud.GetConnectionStatusRequest',
				'cloud.GetConnectionStatusReply',
				'cloud.ConnectRequest',
				'cloud.ConnectReply',
				'cloud.DisconnectRequest',
				'cloud.DisconnectReply',
				'SecurityKeyType',
				'ServerProtocolType',
				'DeviceMode',
				'SystemCapabilityFlag',
				'Feature',
				'GetDeviceIdRequest',
				'GetDeviceIdReply',
				'GetSerialNumberRequest',
				'GetSerialNumberReply',
				'GetSystemVersionRequest',
				'GetSystemVersionReply',
				'GetNcpFirmwareVersionRequest',
				'GetNcpFirmwareVersionReply',
				'GetSystemCapabilitiesRequest',
				'GetSystemCapabilitiesReply',
				'SetClaimCodeRequest',
				'SetClaimCodeReply',
				'IsClaimedRequest',
				'IsClaimedReply',
				'SetSecurityKeyRequest',
				'SetSecurityKeyReply',
				'GetSecurityKeyRequest',
				'GetSecurityKeyReply',
				'SetServerAddressRequest',
				'SetServerAddressReply',
				'GetServerAddressRequest',
				'GetServerAddressReply',
				'SetServerProtocolRequest',
				'SetServerProtocolReply',
				'GetServerProtocolRequest',
				'GetServerProtocolReply',
				'SetSoftApSsidRequest',
				'SetSoftApSsidReply',
				'StartListeningModeRequest',
				'StartListeningModeReply',
				'StopListeningModeRequest',
				'StopListeningModeReply',
				'GetDeviceModeRequest',
				'GetDeviceModeReply',
				'SetDeviceSetupDoneRequest',
				'SetDeviceSetupDoneReply',
				'IsDeviceSetupDoneRequest',
				'IsDeviceSetupDoneReply',
				'SetStartupModeRequest',
				'SetStartupModeReply',
				'SystemResetRequest',
				'SystemResetReply',
				'SetFeatureRequest',
				'SetFeatureReply',
				'GetFeatureRequest',
				'GetFeatureReply',
				'StartNyanSignalRequest',
				'StartNyanSignalReply',
				'StopNyanSignalRequest',
				'StopNyanSignalReply',
				'WiFiGetAntennaRequest',
				'WiFiGetAntennaReply',
				'WiFiSetAntennaRequest',
				'WiFiSetAntennaReply',
				'WiFiScanRequest',
				'WiFiScanReply',
				'WiFiGetCredentialsRequest',
				'WiFiGetCredentialsReply',
				'WiFiSetCredentialsRequest',
				'WiFiSetCredentialsReply',
				'WiFiClearCredentialsRequest',
				'WiFiClearCredentialsReply',
				'WiFiAntenna',
				'WiFiSecurityType',
				'WiFiSecurityCipher',
				'EapType',
				'WiFiAccessPoint',
				'WiFiAccessPointList',
				'NetworkGetStatusRequest',
				'NetworkGetStatusReply',
				'NetworkGetConfigurationRequest',
				'NetworkGetConfigurationReply',
				'NetworkSetConfigurationRequest',
				'NetworkSetConfigurationReply',
				'NetworkState',
				'IPConfiguration',
				'DNSConfiguration',
				'NetworkConfiguration',
				'InterfaceAddress',
				'Ipv4Config',
				'Ipv6Config',
				'InterfaceFlag',
				'InterfaceExtFlag',
				'InterfaceType',
				'Interface',
				'InterfaceEntry',
				'GetInterfaceListRequest',
				'GetInterfaceListReply',
				'GetInterfaceRequest',
				'GetInterfaceReply',
				'wifi.Security',
				'wifi.CredentialsType',
				'wifi.Credentials',
				'wifi.JoinNewNetworkRequest',
				'wifi.JoinNewNetworkReply',
				'wifi.JoinKnownNetworkRequest',
				'wifi.JoinKnownNetworkReply',
				'wifi.GetKnownNetworksRequest',
				'wifi.GetKnownNetworksReply',
				'wifi.RemoveKnownNetworkRequest',
				'wifi.RemoveKnownNetworkReply',
				'wifi.ClearKnownNetworksRequest',
				'wifi.ClearKnownNetworksReply',
				'wifi.GetCurrentNetworkRequest',
				'wifi.GetCurrentNetworkReply',
				'wifi.ScanNetworksRequest',
				'wifi.ScanNetworksReply',
				'logging.LogLevel',
				'logging.LogHandlerType',
				'logging.StreamType',
				'logging.LogFilter',
				'logging.SerialStreamParams',
				'logging.AddLogHandlerRequest',
				'logging.AddLogHandlerReply',
				'logging.RemoveLogHandlerRequest',
				'logging.RemoveLogHandlerReply',
				'logging.GetLogHandlersRequest',
				'logging.GetLogHandlersReply',
				'mesh.NetworkInfo',
				'mesh.AuthRequest',
				'mesh.AuthReply',
				'mesh.CreateNetworkRequest',
				'mesh.CreateNetworkReply',
				'mesh.StartCommissionerRequest',
				'mesh.StartCommissionerReply',
				'mesh.StopCommissionerRequest',
				'mesh.StopCommissionerReply',
				'mesh.PrepareJoinerRequest',
				'mesh.PrepareJoinerReply',
				'mesh.AddJoinerRequest',
				'mesh.AddJoinerReply',
				'mesh.RemoveJoinerRequest',
				'mesh.RemoveJoinerReply',
				'mesh.JoinNetworkRequest',
				'mesh.JoinNetworkReply',
				'mesh.LeaveNetworkRequest',
				'mesh.LeaveNetworkReply',
				'mesh.GetNetworkInfoRequest',
				'mesh.GetNetworkInfoReply',
				'mesh.ScanNetworksRequest',
				'mesh.ScanNetworksReply',
				'mesh.DiagnosticType',
				'mesh.DiagnosticInfo',
				'mesh.GetNetworkDiagnosticsRequest',
				'mesh.GetNetworkDiagnosticsReply',
				'StorageType',
				'SectionType',
				'FirmwareModuleType',
				'FirmwareModuleValidityFlag',
				'SectionFlag',
				'FileFormat',
				'StartFirmwareUpdateRequest',
				'StartFirmwareUpdateReply',
				'FinishFirmwareUpdateRequest',
				'FinishFirmwareUpdateReply',
				'CancelFirmwareUpdateRequest',
				'CancelFirmwareUpdateReply',
				'FirmwareUpdateDataRequest',
				'FirmwareUpdateDataReply',
				'DescribeStorageRequest',
				'DescribeStorageReply',
				'ReadSectionDataRequest',
				'ReadSectionDataReply',
				'WriteSectionDataRequest',
				'WriteSectionDataReply',
				'ClearSectionDataRequest',
				'ClearSectionDataReply',
				'GetSectionDataSizeRequest',
				'GetSectionDataSizeReply',
				'GetModuleInfoRequest',
				'GetModuleInfoReply',
				'InterfaceConfigurationSource',
				'GetInterfaceStoredConfigurationRequest',
				'GetInterfaceStoredConfigurationReply',
				'SetInterfaceStoredConfigurationRequest',
				'SetInterfaceStoredConfigurationReply',
				'DeleteInterfaceStoredConfigurationRequest',
				'DeleteInterfaceStoredConfigurationReply'
			]);

			const missingDefs = [];
			for (const d of expectedDefs) {
				if (!defs.has(d)) {
					missingDefs.push(d);
				}
			}
			expect(missingDefs).to.have.members([]);

			const extraDefs = [];
			for (const d of defs) {
				if (!expectedDefs.has(d)) {
					extraDefs.push(d);
				}
			}
			expect(extraDefs).to.have.members([]);
		});
	});

	it('provides _pbjsJSON (parsed JSON rendered via `npm run build:json` command)', () => {
		expect(DeviceOSProtobuf._pbjsJSON).to.be.an('object');
	});

	it('provides definitions (generated Javascript via `npm run build` command)', () => {
		expect(DeviceOSProtobuf.definitions).to.be.an('object');
		expect(DeviceOSProtobuf.definitions).to.have.property('GetSerialNumberRequest');
	});

	describe('Usage of getDefinition() result', () => {
		it('demonstrates how to use ProtobufDefinition .message', () => {
			const protobufDefinition = DeviceOSProtobuf.getDefinition('GetSerialNumberRequest');
			assertValidProtobufMessage(protobufDefinition.message);
			const msg = protobufDefinition.message.create({});
			expect(msg).to.be.an.instanceOf(protobufDefinition.message);
			const buffer = protobufDefinition.message.encode(msg).finish();
			expect(buffer).to.be.an.instanceOf(Buffer);
		});

		it('demonstrates how to use ProtobufDefinition .replyMessage', () => {
			// Normally, Device OS creates and encodes Reply messages rather than protobufjs
			// However, this same process is also doable in pure JavaScript illustrated below
			const protobufDefinition = DeviceOSProtobuf.getDefinition('GetSerialNumberRequest');
			const replyMsg = protobufDefinition.replyMessage.create({ serial: mockExpectedSerialNumber });
			const replyBuffer = protobufDefinition.replyMessage.encode(replyMsg).finish();
			const decodedReplyMsg = protobufDefinition.replyMessage.decode(replyBuffer);
			expect(decodedReplyMsg.serial).to.eql(mockExpectedSerialNumber);
		});
	});
});


// Test helper function to validate  pbjs generated JS code returns object like we expect
function assertValidProtobufMessage(message) {
	expect(message).to.be.a('Function');
	expect(message.create).to.be.a('Function');
	expect(message.encode).to.be.a('Function');
	expect(message.decode).to.be.a('Function');
}
