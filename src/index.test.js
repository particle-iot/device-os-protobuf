const expect = require('chai').expect;
const sinon = require('sinon');
const DeviceOSProtobuf = require('./');

describe('deviceOSProtobuf', () => {
	let protobufMessageName, requestID;

	afterEach(() => {
		sinon.restore();
	});

	describe('getDefinition(protobufMessageName) without protobuf namespace', () => {
		beforeEach(() => {
			protobufMessageName = 'GetSerialNumberRequest';
			requestID = 21;
		});
		it('provides getDefinition(protobufMessageName)', () => {
			const stubID = 47;
			sinon.stub(DeviceOSProtobuf, '_getIDFromJSON').returns(stubID);
			const stubMessage = () => {};
			stubMessage.create = sinon.stub();
			stubMessage.encode = sinon.stub();
			stubMessage.decode = sinon.stub();
			sinon.stub(DeviceOSProtobuf, '_getProtobufMessage').returns(stubMessage);
			const protobufDefinition = DeviceOSProtobuf.getDefinition(protobufMessageName);
			expect(protobufDefinition).to.have.haveOwnProperty('id');
			expect(protobufDefinition).to.have.haveOwnProperty('message');
			expect(DeviceOSProtobuf._getIDFromJSON).to.have.property('callCount', 1);
			// expect(DeviceOSProtobuf._getProtobufMessage).to.have.property('callCount', 1);
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

	describe('getDefinitions()', () => {
		it('provides getDefinitions()', () => {
			const definitions = DeviceOSProtobuf.getDefinitions();
			expect(definitions).to.be.an('Array');
			expect(definitions).to.eql([
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
				'GetModuleInfoReply'
			]);
		});
	});

	it('provides _pbjsJSON (parsed JSON rendered via `npm run build:json` command)', () => {
		expect(DeviceOSProtobuf._pbjsJSON).to.be.an('object');
	});

	it('provides _pbjsObjects (generated Javascript via `npm run build` command)', () => {
		expect(DeviceOSProtobuf._pbjsObjects).to.be.an('object');
		expect(DeviceOSProtobuf._pbjsObjects).to.have.property('GetSerialNumberRequest');
	});
});


// Test helper function to validate  pbjs generated JS code returns object like we expect
function assertValidProtobufMessage(message) {
	expect(message).to.be.a('Function');
	expect(message.create).to.be.a('Function');
	expect(message.encode).to.be.a('Function');
	expect(message.decode).to.be.a('Function');
}
