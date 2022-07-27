# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cellular.proto](#cellular-proto)
    - [AccessPoint](#particle-ctrl-cellular-AccessPoint)
    - [GetAccessPointReply](#particle-ctrl-cellular-GetAccessPointReply)
    - [GetAccessPointRequest](#particle-ctrl-cellular-GetAccessPointRequest)
    - [GetActiveSimReply](#particle-ctrl-cellular-GetActiveSimReply)
    - [GetActiveSimRequest](#particle-ctrl-cellular-GetActiveSimRequest)
    - [GetIccidReply](#particle-ctrl-cellular-GetIccidReply)
    - [GetIccidRequest](#particle-ctrl-cellular-GetIccidRequest)
    - [SetAccessPointReply](#particle-ctrl-cellular-SetAccessPointReply)
    - [SetAccessPointRequest](#particle-ctrl-cellular-SetAccessPointRequest)
    - [SetActiveSimReply](#particle-ctrl-cellular-SetActiveSimReply)
    - [SetActiveSimRequest](#particle-ctrl-cellular-SetActiveSimRequest)
  
    - [SimType](#particle-ctrl-cellular-SimType)
  
- [cloud.proto](#cloud-proto)
    - [ConnectReply](#particle-ctrl-cloud-ConnectReply)
    - [ConnectRequest](#particle-ctrl-cloud-ConnectRequest)
    - [DisconnectReply](#particle-ctrl-cloud-DisconnectReply)
    - [DisconnectRequest](#particle-ctrl-cloud-DisconnectRequest)
    - [GetConnectionStatusReply](#particle-ctrl-cloud-GetConnectionStatusReply)
    - [GetConnectionStatusRequest](#particle-ctrl-cloud-GetConnectionStatusRequest)
  
    - [ConnectionStatus](#particle-ctrl-cloud-ConnectionStatus)
  
- [common.proto](#common-proto)
    - [IPAddress](#particle-ctrl-IPAddress)
    - [IpAddress](#particle-ctrl-IpAddress)
    - [Ipv4Address](#particle-ctrl-Ipv4Address)
    - [Ipv6Address](#particle-ctrl-Ipv6Address)
  
    - [IPAddress.Protocol](#particle-ctrl-IPAddress-Protocol)
    - [ResultCode](#particle-ctrl-ResultCode)
  
- [config.proto](#config-proto)
    - [GetDeviceIdReply](#particle-ctrl-GetDeviceIdReply)
    - [GetDeviceIdRequest](#particle-ctrl-GetDeviceIdRequest)
    - [GetDeviceModeReply](#particle-ctrl-GetDeviceModeReply)
    - [GetDeviceModeRequest](#particle-ctrl-GetDeviceModeRequest)
    - [GetFeatureReply](#particle-ctrl-GetFeatureReply)
    - [GetFeatureRequest](#particle-ctrl-GetFeatureRequest)
    - [GetNcpFirmwareVersionReply](#particle-ctrl-GetNcpFirmwareVersionReply)
    - [GetNcpFirmwareVersionRequest](#particle-ctrl-GetNcpFirmwareVersionRequest)
    - [GetSecurityKeyReply](#particle-ctrl-GetSecurityKeyReply)
    - [GetSecurityKeyRequest](#particle-ctrl-GetSecurityKeyRequest)
    - [GetSerialNumberReply](#particle-ctrl-GetSerialNumberReply)
    - [GetSerialNumberRequest](#particle-ctrl-GetSerialNumberRequest)
    - [GetServerAddressReply](#particle-ctrl-GetServerAddressReply)
    - [GetServerAddressRequest](#particle-ctrl-GetServerAddressRequest)
    - [GetServerProtocolReply](#particle-ctrl-GetServerProtocolReply)
    - [GetServerProtocolRequest](#particle-ctrl-GetServerProtocolRequest)
    - [GetSystemCapabilitiesReply](#particle-ctrl-GetSystemCapabilitiesReply)
    - [GetSystemCapabilitiesRequest](#particle-ctrl-GetSystemCapabilitiesRequest)
    - [GetSystemVersionReply](#particle-ctrl-GetSystemVersionReply)
    - [GetSystemVersionRequest](#particle-ctrl-GetSystemVersionRequest)
    - [IsClaimedReply](#particle-ctrl-IsClaimedReply)
    - [IsClaimedRequest](#particle-ctrl-IsClaimedRequest)
    - [IsDeviceSetupDoneReply](#particle-ctrl-IsDeviceSetupDoneReply)
    - [IsDeviceSetupDoneRequest](#particle-ctrl-IsDeviceSetupDoneRequest)
    - [SetClaimCodeReply](#particle-ctrl-SetClaimCodeReply)
    - [SetClaimCodeRequest](#particle-ctrl-SetClaimCodeRequest)
    - [SetDeviceSetupDoneReply](#particle-ctrl-SetDeviceSetupDoneReply)
    - [SetDeviceSetupDoneRequest](#particle-ctrl-SetDeviceSetupDoneRequest)
    - [SetFeatureReply](#particle-ctrl-SetFeatureReply)
    - [SetFeatureRequest](#particle-ctrl-SetFeatureRequest)
    - [SetSecurityKeyReply](#particle-ctrl-SetSecurityKeyReply)
    - [SetSecurityKeyRequest](#particle-ctrl-SetSecurityKeyRequest)
    - [SetServerAddressReply](#particle-ctrl-SetServerAddressReply)
    - [SetServerAddressRequest](#particle-ctrl-SetServerAddressRequest)
    - [SetServerProtocolReply](#particle-ctrl-SetServerProtocolReply)
    - [SetServerProtocolRequest](#particle-ctrl-SetServerProtocolRequest)
    - [SetSoftApSsidReply](#particle-ctrl-SetSoftApSsidReply)
    - [SetSoftApSsidRequest](#particle-ctrl-SetSoftApSsidRequest)
    - [SetStartupModeReply](#particle-ctrl-SetStartupModeReply)
    - [SetStartupModeRequest](#particle-ctrl-SetStartupModeRequest)
    - [StartListeningModeReply](#particle-ctrl-StartListeningModeReply)
    - [StartListeningModeRequest](#particle-ctrl-StartListeningModeRequest)
    - [StartNyanSignalReply](#particle-ctrl-StartNyanSignalReply)
    - [StartNyanSignalRequest](#particle-ctrl-StartNyanSignalRequest)
    - [StopListeningModeReply](#particle-ctrl-StopListeningModeReply)
    - [StopListeningModeRequest](#particle-ctrl-StopListeningModeRequest)
    - [StopNyanSignalReply](#particle-ctrl-StopNyanSignalReply)
    - [StopNyanSignalRequest](#particle-ctrl-StopNyanSignalRequest)
    - [SystemResetReply](#particle-ctrl-SystemResetReply)
    - [SystemResetRequest](#particle-ctrl-SystemResetRequest)
  
    - [DeviceMode](#particle-ctrl-DeviceMode)
    - [Feature](#particle-ctrl-Feature)
    - [SecurityKeyType](#particle-ctrl-SecurityKeyType)
    - [ServerProtocolType](#particle-ctrl-ServerProtocolType)
    - [SystemCapabilityFlag](#particle-ctrl-SystemCapabilityFlag)
  
- [extensions.proto](#extensions-proto)
    - [File-level Extensions](#extensions-proto-extensions)
    - [File-level Extensions](#extensions-proto-extensions)
  
- [network.proto](#network-proto)
    - [DNSConfiguration](#particle-ctrl-DNSConfiguration)
    - [GetInterfaceListReply](#particle-ctrl-GetInterfaceListReply)
    - [GetInterfaceListRequest](#particle-ctrl-GetInterfaceListRequest)
    - [GetInterfaceReply](#particle-ctrl-GetInterfaceReply)
    - [GetInterfaceRequest](#particle-ctrl-GetInterfaceRequest)
    - [IPConfiguration](#particle-ctrl-IPConfiguration)
    - [Interface](#particle-ctrl-Interface)
    - [InterfaceAddress](#particle-ctrl-InterfaceAddress)
    - [InterfaceEntry](#particle-ctrl-InterfaceEntry)
    - [Ipv4Config](#particle-ctrl-Ipv4Config)
    - [Ipv6Config](#particle-ctrl-Ipv6Config)
    - [NetworkConfiguration](#particle-ctrl-NetworkConfiguration)
    - [NetworkGetConfigurationReply](#particle-ctrl-NetworkGetConfigurationReply)
    - [NetworkGetConfigurationRequest](#particle-ctrl-NetworkGetConfigurationRequest)
    - [NetworkGetStatusReply](#particle-ctrl-NetworkGetStatusReply)
    - [NetworkGetStatusRequest](#particle-ctrl-NetworkGetStatusRequest)
    - [NetworkSetConfigurationReply](#particle-ctrl-NetworkSetConfigurationReply)
    - [NetworkSetConfigurationRequest](#particle-ctrl-NetworkSetConfigurationRequest)
  
    - [IPConfiguration.Type](#particle-ctrl-IPConfiguration-Type)
    - [InterfaceExtFlag](#particle-ctrl-InterfaceExtFlag)
    - [InterfaceFlag](#particle-ctrl-InterfaceFlag)
    - [InterfaceType](#particle-ctrl-InterfaceType)
    - [NetworkState](#particle-ctrl-NetworkState)
  
- [storage.proto](#storage-proto)
    - [CancelFirmwareUpdateReply](#particle-ctrl-CancelFirmwareUpdateReply)
    - [CancelFirmwareUpdateRequest](#particle-ctrl-CancelFirmwareUpdateRequest)
    - [ClearSectionDataReply](#particle-ctrl-ClearSectionDataReply)
    - [ClearSectionDataRequest](#particle-ctrl-ClearSectionDataRequest)
    - [DescribeStorageReply](#particle-ctrl-DescribeStorageReply)
    - [DescribeStorageReply.Section](#particle-ctrl-DescribeStorageReply-Section)
    - [DescribeStorageReply.Section.FirmwareModule](#particle-ctrl-DescribeStorageReply-Section-FirmwareModule)
    - [DescribeStorageReply.Storage](#particle-ctrl-DescribeStorageReply-Storage)
    - [DescribeStorageRequest](#particle-ctrl-DescribeStorageRequest)
    - [FinishFirmwareUpdateReply](#particle-ctrl-FinishFirmwareUpdateReply)
    - [FinishFirmwareUpdateRequest](#particle-ctrl-FinishFirmwareUpdateRequest)
    - [FirmwareUpdateDataReply](#particle-ctrl-FirmwareUpdateDataReply)
    - [FirmwareUpdateDataRequest](#particle-ctrl-FirmwareUpdateDataRequest)
    - [GetModuleInfoReply](#particle-ctrl-GetModuleInfoReply)
    - [GetModuleInfoReply.Dependency](#particle-ctrl-GetModuleInfoReply-Dependency)
    - [GetModuleInfoReply.Module](#particle-ctrl-GetModuleInfoReply-Module)
    - [GetModuleInfoRequest](#particle-ctrl-GetModuleInfoRequest)
    - [GetSectionDataSizeReply](#particle-ctrl-GetSectionDataSizeReply)
    - [GetSectionDataSizeRequest](#particle-ctrl-GetSectionDataSizeRequest)
    - [ReadSectionDataReply](#particle-ctrl-ReadSectionDataReply)
    - [ReadSectionDataRequest](#particle-ctrl-ReadSectionDataRequest)
    - [StartFirmwareUpdateReply](#particle-ctrl-StartFirmwareUpdateReply)
    - [StartFirmwareUpdateRequest](#particle-ctrl-StartFirmwareUpdateRequest)
    - [WriteSectionDataReply](#particle-ctrl-WriteSectionDataReply)
    - [WriteSectionDataRequest](#particle-ctrl-WriteSectionDataRequest)
  
    - [FileFormat](#particle-ctrl-FileFormat)
    - [FirmwareModuleType](#particle-ctrl-FirmwareModuleType)
    - [FirmwareModuleValidityFlag](#particle-ctrl-FirmwareModuleValidityFlag)
    - [SectionFlag](#particle-ctrl-SectionFlag)
    - [SectionType](#particle-ctrl-SectionType)
    - [StorageType](#particle-ctrl-StorageType)
  
- [wifi_new.proto](#wifi_new-proto)
    - [ClearKnownNetworksReply](#particle-ctrl-wifi-ClearKnownNetworksReply)
    - [ClearKnownNetworksRequest](#particle-ctrl-wifi-ClearKnownNetworksRequest)
    - [Credentials](#particle-ctrl-wifi-Credentials)
    - [GetCurrentNetworkReply](#particle-ctrl-wifi-GetCurrentNetworkReply)
    - [GetCurrentNetworkRequest](#particle-ctrl-wifi-GetCurrentNetworkRequest)
    - [GetKnownNetworksReply](#particle-ctrl-wifi-GetKnownNetworksReply)
    - [GetKnownNetworksReply.Network](#particle-ctrl-wifi-GetKnownNetworksReply-Network)
    - [GetKnownNetworksRequest](#particle-ctrl-wifi-GetKnownNetworksRequest)
    - [JoinKnownNetworkReply](#particle-ctrl-wifi-JoinKnownNetworkReply)
    - [JoinKnownNetworkRequest](#particle-ctrl-wifi-JoinKnownNetworkRequest)
    - [JoinNewNetworkReply](#particle-ctrl-wifi-JoinNewNetworkReply)
    - [JoinNewNetworkRequest](#particle-ctrl-wifi-JoinNewNetworkRequest)
    - [RemoveKnownNetworkReply](#particle-ctrl-wifi-RemoveKnownNetworkReply)
    - [RemoveKnownNetworkRequest](#particle-ctrl-wifi-RemoveKnownNetworkRequest)
    - [ScanNetworksReply](#particle-ctrl-wifi-ScanNetworksReply)
    - [ScanNetworksReply.Network](#particle-ctrl-wifi-ScanNetworksReply-Network)
    - [ScanNetworksRequest](#particle-ctrl-wifi-ScanNetworksRequest)
  
    - [CredentialsType](#particle-ctrl-wifi-CredentialsType)
    - [Security](#particle-ctrl-wifi-Security)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cellular-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cellular.proto



<a name="particle-ctrl-cellular-AccessPoint"></a>

### AccessPoint
Access point settings.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| apn | [string](#string) |  |  |
| user | [string](#string) |  |  |
| password | [string](#string) |  |  |
| use_defaults | [bool](#bool) |  |  |






<a name="particle-ctrl-cellular-GetAccessPointReply"></a>

### GetAccessPointReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_point | [AccessPoint](#particle-ctrl-cellular-AccessPoint) |  |  |






<a name="particle-ctrl-cellular-GetAccessPointRequest"></a>

### GetAccessPointRequest
Get access point settings.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sim_type | [SimType](#particle-ctrl-cellular-SimType) |  |  |






<a name="particle-ctrl-cellular-GetActiveSimReply"></a>

### GetActiveSimReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sim_type | [SimType](#particle-ctrl-cellular-SimType) |  |  |






<a name="particle-ctrl-cellular-GetActiveSimRequest"></a>

### GetActiveSimRequest
Get active SIM card.






<a name="particle-ctrl-cellular-GetIccidReply"></a>

### GetIccidReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| iccid | [string](#string) |  |  |






<a name="particle-ctrl-cellular-GetIccidRequest"></a>

### GetIccidRequest
Get ICCID.






<a name="particle-ctrl-cellular-SetAccessPointReply"></a>

### SetAccessPointReply







<a name="particle-ctrl-cellular-SetAccessPointRequest"></a>

### SetAccessPointRequest
Set access point settings.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sim_type | [SimType](#particle-ctrl-cellular-SimType) |  |  |
| access_point | [AccessPoint](#particle-ctrl-cellular-AccessPoint) |  |  |






<a name="particle-ctrl-cellular-SetActiveSimReply"></a>

### SetActiveSimReply







<a name="particle-ctrl-cellular-SetActiveSimRequest"></a>

### SetActiveSimRequest
Set active SIM card.

Note: The device needs to be reset in order for the settings to take effect.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sim_type | [SimType](#particle-ctrl-cellular-SimType) |  |  |





 


<a name="particle-ctrl-cellular-SimType"></a>

### SimType
SIM card types.

Note: The values of this enum should match the values defined by the `SimType` enum in the firmware.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_SIM_TYPE | 0 |  |
| INTERNAL | 1 |  |
| EXTERNAL | 2 |  |


 

 

 



<a name="cloud-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cloud.proto



<a name="particle-ctrl-cloud-ConnectReply"></a>

### ConnectReply







<a name="particle-ctrl-cloud-ConnectRequest"></a>

### ConnectRequest
Connect to the cloud






<a name="particle-ctrl-cloud-DisconnectReply"></a>

### DisconnectReply







<a name="particle-ctrl-cloud-DisconnectRequest"></a>

### DisconnectRequest
Disconnect from the cloud






<a name="particle-ctrl-cloud-GetConnectionStatusReply"></a>

### GetConnectionStatusReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ConnectionStatus](#particle-ctrl-cloud-ConnectionStatus) |  |  |






<a name="particle-ctrl-cloud-GetConnectionStatusRequest"></a>

### GetConnectionStatusRequest
Get the cloud connection status





 


<a name="particle-ctrl-cloud-ConnectionStatus"></a>

### ConnectionStatus
Make sure values of this enum match the values defined for the diagnostic info

| Name | Number | Description |
| ---- | ------ | ----------- |
| DISCONNECTED | 0 |  |
| CONNECTING | 1 |  |
| CONNECTED | 2 |  |
| DISCONNECTING | 3 |  |


 

 

 



<a name="common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common.proto



<a name="particle-ctrl-IPAddress"></a>

### IPAddress
Deprecated, IpAddress should be used instead


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [IPAddress.Protocol](#particle-ctrl-IPAddress-Protocol) |  |  |
| address | [bytes](#bytes) |  |  |






<a name="particle-ctrl-IpAddress"></a>

### IpAddress



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| v4 | [Ipv4Address](#particle-ctrl-Ipv4Address) |  |  |
| v6 | [Ipv6Address](#particle-ctrl-Ipv6Address) |  |  |






<a name="particle-ctrl-Ipv4Address"></a>

### Ipv4Address



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [fixed32](#fixed32) |  |  |






<a name="particle-ctrl-Ipv6Address"></a>

### Ipv6Address



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  |  |





 


<a name="particle-ctrl-IPAddress-Protocol"></a>

### IPAddress.Protocol


| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| IPv4 | 1 |  |
| IPv6 | 2 |  |



<a name="particle-ctrl-ResultCode"></a>

### ResultCode
The field numbers here are just protobuf details.  The value to pay attention to 
is the &#34;int_value&#34; option, which corresponds to the numeric value that will 
be set in reply frames (which itself ultimately comes from the numeric values
in the system_error_t enum in the firmware code).

| Name | Number | Description |
| ---- | ------ | ----------- |
| OK | 0 |  |
| NOT_ALLOWED | 1 |  |
| TIMEOUT | 2 |  |
| NOT_FOUND | 3 |  |
| ALREADY_EXIST | 4 |  |
| INVALID_STATE | 5 |  |
| NO_MEMORY | 6 |  |
| INVALID_PARAM | 7 |  |


 

 

 



<a name="config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## config.proto



<a name="particle-ctrl-GetDeviceIdReply"></a>

### GetDeviceIdReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Device ID (hex-encoded) |






<a name="particle-ctrl-GetDeviceIdRequest"></a>

### GetDeviceIdRequest
Get the device ID






<a name="particle-ctrl-GetDeviceModeReply"></a>

### GetDeviceModeReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [DeviceMode](#particle-ctrl-DeviceMode) |  |  |






<a name="particle-ctrl-GetDeviceModeRequest"></a>

### GetDeviceModeRequest







<a name="particle-ctrl-GetFeatureReply"></a>

### GetFeatureReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| enabled | [bool](#bool) |  |  |






<a name="particle-ctrl-GetFeatureRequest"></a>

### GetFeatureRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| feature | [Feature](#particle-ctrl-Feature) |  |  |






<a name="particle-ctrl-GetNcpFirmwareVersionReply"></a>

### GetNcpFirmwareVersionReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| module_version | [uint32](#uint32) |  |  |






<a name="particle-ctrl-GetNcpFirmwareVersionRequest"></a>

### GetNcpFirmwareVersionRequest
Get the NCP firmware version






<a name="particle-ctrl-GetSecurityKeyReply"></a>

### GetSecurityKeyReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | Key data in DER format |






<a name="particle-ctrl-GetSecurityKeyRequest"></a>

### GetSecurityKeyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SecurityKeyType](#particle-ctrl-SecurityKeyType) |  | Key type |






<a name="particle-ctrl-GetSerialNumberReply"></a>

### GetSerialNumberReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| serial | [string](#string) |  |  |






<a name="particle-ctrl-GetSerialNumberRequest"></a>

### GetSerialNumberRequest
Get the device&#39;s serial number






<a name="particle-ctrl-GetServerAddressReply"></a>

### GetServerAddressReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | Server address |
| port | [int32](#int32) |  | Port number |






<a name="particle-ctrl-GetServerAddressRequest"></a>

### GetServerAddressRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [ServerProtocolType](#particle-ctrl-ServerProtocolType) |  | Protocol type |






<a name="particle-ctrl-GetServerProtocolReply"></a>

### GetServerProtocolReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [ServerProtocolType](#particle-ctrl-ServerProtocolType) |  | Protocol type |






<a name="particle-ctrl-GetServerProtocolRequest"></a>

### GetServerProtocolRequest







<a name="particle-ctrl-GetSystemCapabilitiesReply"></a>

### GetSystemCapabilitiesReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flags | [fixed32](#fixed32) |  |  |






<a name="particle-ctrl-GetSystemCapabilitiesRequest"></a>

### GetSystemCapabilitiesRequest
Get system capabilities






<a name="particle-ctrl-GetSystemVersionReply"></a>

### GetSystemVersionReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |






<a name="particle-ctrl-GetSystemVersionRequest"></a>

### GetSystemVersionRequest
Get the firmware version






<a name="particle-ctrl-IsClaimedReply"></a>

### IsClaimedReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| claimed | [bool](#bool) |  |  |






<a name="particle-ctrl-IsClaimedRequest"></a>

### IsClaimedRequest







<a name="particle-ctrl-IsDeviceSetupDoneReply"></a>

### IsDeviceSetupDoneReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| done | [bool](#bool) |  |  |






<a name="particle-ctrl-IsDeviceSetupDoneRequest"></a>

### IsDeviceSetupDoneRequest







<a name="particle-ctrl-SetClaimCodeReply"></a>

### SetClaimCodeReply







<a name="particle-ctrl-SetClaimCodeRequest"></a>

### SetClaimCodeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [string](#string) |  | Claim code |






<a name="particle-ctrl-SetDeviceSetupDoneReply"></a>

### SetDeviceSetupDoneReply







<a name="particle-ctrl-SetDeviceSetupDoneRequest"></a>

### SetDeviceSetupDoneRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| done | [bool](#bool) |  |  |






<a name="particle-ctrl-SetFeatureReply"></a>

### SetFeatureReply







<a name="particle-ctrl-SetFeatureRequest"></a>

### SetFeatureRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| feature | [Feature](#particle-ctrl-Feature) |  |  |
| enabled | [bool](#bool) |  |  |






<a name="particle-ctrl-SetSecurityKeyReply"></a>

### SetSecurityKeyReply







<a name="particle-ctrl-SetSecurityKeyRequest"></a>

### SetSecurityKeyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SecurityKeyType](#particle-ctrl-SecurityKeyType) |  | Key type |
| data | [bytes](#bytes) |  | Key data in DER format |






<a name="particle-ctrl-SetServerAddressReply"></a>

### SetServerAddressReply







<a name="particle-ctrl-SetServerAddressRequest"></a>

### SetServerAddressRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [ServerProtocolType](#particle-ctrl-ServerProtocolType) |  | Protocol type |
| address | [string](#string) |  | Server address |
| port | [int32](#int32) |  | Port number |






<a name="particle-ctrl-SetServerProtocolReply"></a>

### SetServerProtocolReply







<a name="particle-ctrl-SetServerProtocolRequest"></a>

### SetServerProtocolRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [ServerProtocolType](#particle-ctrl-ServerProtocolType) |  | Protocol type |






<a name="particle-ctrl-SetSoftApSsidReply"></a>

### SetSoftApSsidReply







<a name="particle-ctrl-SetSoftApSsidRequest"></a>

### SetSoftApSsidRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prefix | [string](#string) |  |  |
| suffix | [string](#string) |  |  |






<a name="particle-ctrl-SetStartupModeReply"></a>

### SetStartupModeReply







<a name="particle-ctrl-SetStartupModeRequest"></a>

### SetStartupModeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [DeviceMode](#particle-ctrl-DeviceMode) |  |  |






<a name="particle-ctrl-StartListeningModeReply"></a>

### StartListeningModeReply







<a name="particle-ctrl-StartListeningModeRequest"></a>

### StartListeningModeRequest







<a name="particle-ctrl-StartNyanSignalReply"></a>

### StartNyanSignalReply







<a name="particle-ctrl-StartNyanSignalRequest"></a>

### StartNyanSignalRequest







<a name="particle-ctrl-StopListeningModeReply"></a>

### StopListeningModeReply







<a name="particle-ctrl-StopListeningModeRequest"></a>

### StopListeningModeRequest







<a name="particle-ctrl-StopNyanSignalReply"></a>

### StopNyanSignalReply







<a name="particle-ctrl-StopNyanSignalRequest"></a>

### StopNyanSignalRequest







<a name="particle-ctrl-SystemResetReply"></a>

### SystemResetReply







<a name="particle-ctrl-SystemResetRequest"></a>

### SystemResetRequest






 


<a name="particle-ctrl-DeviceMode"></a>

### DeviceMode
Device mode

| Name | Number | Description |
| ---- | ------ | ----------- |
| NORMAL_MODE | 0 |  |
| LISTENING_MODE | 1 |  |



<a name="particle-ctrl-Feature"></a>

### Feature
System features

| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_FEATURE | 0 |  |
| ETHERNET_DETECTION | 1 |  |



<a name="particle-ctrl-SecurityKeyType"></a>

### SecurityKeyType
Note: Use the same values as defined by the security_key_type enum

| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_SECURITY_KEY | 0 |  |
| TCP_DEVICE_PRIVATE_KEY | 1 |  |
| TCP_DEVICE_PUBLIC_KEY | 2 |  |
| TCP_SERVER_PUBLIC_KEY | 3 |  |
| UDP_DEVICE_PRIVATE_KEY | 4 |  |
| UDP_DEVICE_PUBLIC_KEY | 5 |  |
| UDP_SERVER_PUBLIC_KEY | 6 |  |



<a name="particle-ctrl-ServerProtocolType"></a>

### ServerProtocolType
Note: Use the same values as defined by the server_protocol_type enum

| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_PROTOCOL | 0 |  |
| TCP_PROTOCOL | 1 |  |
| UDP_PROTOCOL | 2 |  |



<a name="particle-ctrl-SystemCapabilityFlag"></a>

### SystemCapabilityFlag
System capability flags

| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_SYSTEM_CAPABILITY_FLAGS | 0 |  |
| COMPRESSED_OTA | 1 |  |


 

 

 



<a name="extensions-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## extensions.proto


 

 


<a name="extensions-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| int_value | int32 | .google.protobuf.EnumValueOptions | 50002 |  |
| type_id | int32 | .google.protobuf.MessageOptions | 50001 |  |

 

 



<a name="network-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## network.proto



<a name="particle-ctrl-DNSConfiguration"></a>

### DNSConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| servers | [IPAddress](#particle-ctrl-IPAddress) | repeated |  |






<a name="particle-ctrl-GetInterfaceListReply"></a>

### GetInterfaceListReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interfaces | [InterfaceEntry](#particle-ctrl-InterfaceEntry) | repeated |  |






<a name="particle-ctrl-GetInterfaceListRequest"></a>

### GetInterfaceListRequest







<a name="particle-ctrl-GetInterfaceReply"></a>

### GetInterfaceReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface | [Interface](#particle-ctrl-Interface) |  |  |






<a name="particle-ctrl-GetInterfaceRequest"></a>

### GetInterfaceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  |  |






<a name="particle-ctrl-IPConfiguration"></a>

### IPConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [IPConfiguration.Type](#particle-ctrl-IPConfiguration-Type) |  |  |
| address | [IPAddress](#particle-ctrl-IPAddress) |  |  |
| netmask | [IPAddress](#particle-ctrl-IPAddress) |  |  |
| gateway | [IPAddress](#particle-ctrl-IPAddress) |  |  |
| dhcp_server | [IPAddress](#particle-ctrl-IPAddress) |  |  |
| hostname | [string](#string) |  |  |






<a name="particle-ctrl-Interface"></a>

### Interface
Operation state of the interface


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  |  |
| name | [string](#string) |  |  |
| type | [InterfaceType](#particle-ctrl-InterfaceType) |  |  |
| flags | [uint32](#uint32) |  | InterfaceFlag |
| ext_flags | [uint32](#uint32) |  | InterfaceExtFlag |
| ipv4_config | [Ipv4Config](#particle-ctrl-Ipv4Config) |  |  |
| ipv6_config | [Ipv6Config](#particle-ctrl-Ipv6Config) |  |  |
| hw_address | [bytes](#bytes) |  |  |
| mtu | [uint32](#uint32) |  |  |
| metric | [uint32](#uint32) |  |  |






<a name="particle-ctrl-InterfaceAddress"></a>

### InterfaceAddress



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [IpAddress](#particle-ctrl-IpAddress) |  |  |
| prefix_length | [uint32](#uint32) |  | TODO: state, scope, lifetimes, etc. |






<a name="particle-ctrl-InterfaceEntry"></a>

### InterfaceEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  |  |
| name | [string](#string) |  |  |
| type | [InterfaceType](#particle-ctrl-InterfaceType) |  |  |






<a name="particle-ctrl-Ipv4Config"></a>

### Ipv4Config



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [InterfaceAddress](#particle-ctrl-InterfaceAddress) | repeated |  |
| peer | [Ipv4Address](#particle-ctrl-Ipv4Address) |  | On P2P links |
| gateway | [Ipv4Address](#particle-ctrl-Ipv4Address) |  | Temporary, will be moved to routing table |






<a name="particle-ctrl-Ipv6Config"></a>

### Ipv6Config



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [InterfaceAddress](#particle-ctrl-InterfaceAddress) | repeated |  |






<a name="particle-ctrl-NetworkConfiguration"></a>

### NetworkConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface | [int32](#int32) |  |  |
| state | [NetworkState](#particle-ctrl-NetworkState) |  |  |
| name | [string](#string) |  |  |
| mac | [bytes](#bytes) |  |  |
| ipconfig | [IPConfiguration](#particle-ctrl-IPConfiguration) |  |  |
| dnsconfig | [DNSConfiguration](#particle-ctrl-DNSConfiguration) |  |  |






<a name="particle-ctrl-NetworkGetConfigurationReply"></a>

### NetworkGetConfigurationReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [NetworkConfiguration](#particle-ctrl-NetworkConfiguration) |  |  |






<a name="particle-ctrl-NetworkGetConfigurationRequest"></a>

### NetworkGetConfigurationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface | [int32](#int32) |  |  |






<a name="particle-ctrl-NetworkGetStatusReply"></a>

### NetworkGetStatusReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [NetworkConfiguration](#particle-ctrl-NetworkConfiguration) |  |  |






<a name="particle-ctrl-NetworkGetStatusRequest"></a>

### NetworkGetStatusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface | [int32](#int32) |  |  |






<a name="particle-ctrl-NetworkSetConfigurationReply"></a>

### NetworkSetConfigurationReply







<a name="particle-ctrl-NetworkSetConfigurationRequest"></a>

### NetworkSetConfigurationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [NetworkConfiguration](#particle-ctrl-NetworkConfiguration) |  |  |





 


<a name="particle-ctrl-IPConfiguration-Type"></a>

### IPConfiguration.Type


| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| DHCP | 1 |  |
| STATIC | 2 |  |



<a name="particle-ctrl-InterfaceExtFlag"></a>

### InterfaceExtFlag
Direct mapping to if_xflags_t

| Name | Number | Description |
| ---- | ------ | ----------- |
| IFXF_NONE | 0 |  |
| IFXF_WOL | 16 |  |
| IFXF_AUTOCONF6 | 32 |  |
| IFXF_DHCP | 65536 |  |
| IFXF_DHCP6 | 131072 |  |
| IFXF_AUTOIP | 262144 |  |



<a name="particle-ctrl-InterfaceFlag"></a>

### InterfaceFlag
Direct mapping to if_flags_t

| Name | Number | Description |
| ---- | ------ | ----------- |
| IFF_NONE | 0 |  |
| IFF_UP | 1 |  |
| IFF_BROADCAST | 2 |  |
| IFF_DEBUG | 4 |  |
| IFF_LOOPBACK | 8 |  |
| IFF_POINTTOPOINT | 16 |  |
| IFF_RUNNING | 64 |  |
| IFF_LOWER_UP | 64 |  |
| IFF_NOARP | 128 |  |
| IFF_PROMISC | 256 |  |
| IFF_ALLMULTI | 512 |  |
| IFF_MULTICAST | 32768 |  |
| IFF_NOND6 | 65536 |  |



<a name="particle-ctrl-InterfaceType"></a>

### InterfaceType


| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_INTERFACE_TYPE | 0 |  |
| LOOPBACK | 1 |  |
| THREAD | 2 |  |
| ETHERNET | 4 |  |
| WIFI | 8 |  |
| PPP | 16 |  |



<a name="particle-ctrl-NetworkState"></a>

### NetworkState


| Name | Number | Description |
| ---- | ------ | ----------- |
| NETWORK_STATUS_NONE | 0 |  |
| DOWN | 1 |  |
| UP | 2 |  |


 

 

 



<a name="storage-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## storage.proto



<a name="particle-ctrl-CancelFirmwareUpdateReply"></a>

### CancelFirmwareUpdateReply







<a name="particle-ctrl-CancelFirmwareUpdateRequest"></a>

### CancelFirmwareUpdateRequest







<a name="particle-ctrl-ClearSectionDataReply"></a>

### ClearSectionDataReply







<a name="particle-ctrl-ClearSectionDataRequest"></a>

### ClearSectionDataRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| storage | [uint32](#uint32) |  | Storage index |
| section | [uint32](#uint32) |  | Section index |






<a name="particle-ctrl-DescribeStorageReply"></a>

### DescribeStorageReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| storage | [DescribeStorageReply.Storage](#particle-ctrl-DescribeStorageReply-Storage) | repeated |  |






<a name="particle-ctrl-DescribeStorageReply-Section"></a>

### DescribeStorageReply.Section



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SectionType](#particle-ctrl-SectionType) |  |  |
| size | [uint32](#uint32) |  |  |
| flags | [uint32](#uint32) |  |  |
| firmware_module | [DescribeStorageReply.Section.FirmwareModule](#particle-ctrl-DescribeStorageReply-Section-FirmwareModule) |  |  |






<a name="particle-ctrl-DescribeStorageReply-Section-FirmwareModule"></a>

### DescribeStorageReply.Section.FirmwareModule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [FirmwareModuleType](#particle-ctrl-FirmwareModuleType) |  |  |
| index | [uint32](#uint32) |  |  |






<a name="particle-ctrl-DescribeStorageReply-Storage"></a>

### DescribeStorageReply.Storage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [StorageType](#particle-ctrl-StorageType) |  |  |
| flags | [uint32](#uint32) |  |  |
| sections | [DescribeStorageReply.Section](#particle-ctrl-DescribeStorageReply-Section) | repeated |  |






<a name="particle-ctrl-DescribeStorageRequest"></a>

### DescribeStorageRequest







<a name="particle-ctrl-FinishFirmwareUpdateReply"></a>

### FinishFirmwareUpdateReply







<a name="particle-ctrl-FinishFirmwareUpdateRequest"></a>

### FinishFirmwareUpdateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validate_only | [bool](#bool) |  |  |






<a name="particle-ctrl-FirmwareUpdateDataReply"></a>

### FirmwareUpdateDataReply







<a name="particle-ctrl-FirmwareUpdateDataRequest"></a>

### FirmwareUpdateDataRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |






<a name="particle-ctrl-GetModuleInfoReply"></a>

### GetModuleInfoReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modules | [GetModuleInfoReply.Module](#particle-ctrl-GetModuleInfoReply-Module) | repeated | Firmware modules |






<a name="particle-ctrl-GetModuleInfoReply-Dependency"></a>

### GetModuleInfoReply.Dependency



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [FirmwareModuleType](#particle-ctrl-FirmwareModuleType) |  | Module type |
| index | [uint32](#uint32) |  | Module index |
| version | [uint32](#uint32) |  | Module version |






<a name="particle-ctrl-GetModuleInfoReply-Module"></a>

### GetModuleInfoReply.Module



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [FirmwareModuleType](#particle-ctrl-FirmwareModuleType) |  | Module type |
| index | [uint32](#uint32) |  | Module index |
| version | [uint32](#uint32) |  | Module version |
| size | [uint32](#uint32) |  | Module size |
| validity | [uint32](#uint32) |  | Validity flags (see FirmwareModuleValidityFlag) |
| dependencies | [GetModuleInfoReply.Dependency](#particle-ctrl-GetModuleInfoReply-Dependency) | repeated | Module dependencies |






<a name="particle-ctrl-GetModuleInfoRequest"></a>

### GetModuleInfoRequest
Get firmware module info.






<a name="particle-ctrl-GetSectionDataSizeReply"></a>

### GetSectionDataSizeReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [uint32](#uint32) |  |  |






<a name="particle-ctrl-GetSectionDataSizeRequest"></a>

### GetSectionDataSizeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| storage | [uint32](#uint32) |  | Storage index |
| section | [uint32](#uint32) |  | Section index |






<a name="particle-ctrl-ReadSectionDataReply"></a>

### ReadSectionDataReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |






<a name="particle-ctrl-ReadSectionDataRequest"></a>

### ReadSectionDataRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| storage | [uint32](#uint32) |  | Storage index |
| section | [uint32](#uint32) |  | Section index |
| offset | [uint32](#uint32) |  |  |
| size | [uint32](#uint32) |  |  |






<a name="particle-ctrl-StartFirmwareUpdateReply"></a>

### StartFirmwareUpdateReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chunk_size | [uint32](#uint32) |  | Maximum chunk size |






<a name="particle-ctrl-StartFirmwareUpdateRequest"></a>

### StartFirmwareUpdateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [uint32](#uint32) |  | Size of the firmware binary |
| format | [FileFormat](#particle-ctrl-FileFormat) |  | Format of the firmware binary |






<a name="particle-ctrl-WriteSectionDataReply"></a>

### WriteSectionDataReply







<a name="particle-ctrl-WriteSectionDataRequest"></a>

### WriteSectionDataRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| storage | [uint32](#uint32) |  | Storage index |
| section | [uint32](#uint32) |  | Section index |
| offset | [uint32](#uint32) |  |  |
| data | [bytes](#bytes) |  |  |





 


<a name="particle-ctrl-FileFormat"></a>

### FileFormat


| Name | Number | Description |
| ---- | ------ | ----------- |
| BIN | 0 |  |
| MINIZ | 1 |  |



<a name="particle-ctrl-FirmwareModuleType"></a>

### FirmwareModuleType


| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_FIRMWARE_MODULE | 0 |  |
| BOOTLOADER | 1 | Bootloader |
| SYSTEM_PART | 2 | System part |
| USER_PART | 3 | User part |
| MONO_FIRMWARE | 4 | Monolithic firmware |
| NCP_FIRMWARE | 5 | NCP firmware |
| RADIO_STACK | 6 | Radio stack binary |



<a name="particle-ctrl-FirmwareModuleValidityFlag"></a>

### FirmwareModuleValidityFlag


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_VALIDATION_ERRORS | 0 |  |
| INTEGRITY_CHECK_FAILED | 1 | Integrity check failed |
| DEPENDENCY_CHECK_FAILED | 2 | Dependency check failed |



<a name="particle-ctrl-SectionFlag"></a>

### SectionFlag


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_SECTION_FLAGS | 0 |  |
| CAN_READ | 1 | Section data is readable |
| CAN_WRITE | 2 | Section data is writable |
| CAN_CLEAR | 4 | Section can be cleared |
| CAN_GET_SIZE | 8 | Actual size of the section data can be determined |
| NEED_CLEAR | 16 | Section needs to be cleared before writing |



<a name="particle-ctrl-SectionType"></a>

### SectionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_SECTION | 0 |  |
| FIRMWARE | 1 | Firmware module |
| OTA_BACKUP | 2 | OTA backup |
| FACTORY_BACKUP | 3 | Factory backup |
| CONFIG | 4 | Device configuration |
| EEPROM | 5 | Emulated EEPROM |



<a name="particle-ctrl-StorageType"></a>

### StorageType


| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID_STORAGE | 0 |  |
| INTERNAL | 1 | Internal flash |


 

 

 



<a name="wifi_new-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## wifi_new.proto



<a name="particle-ctrl-wifi-ClearKnownNetworksReply"></a>

### ClearKnownNetworksReply







<a name="particle-ctrl-wifi-ClearKnownNetworksRequest"></a>

### ClearKnownNetworksRequest
Remove all known networks.






<a name="particle-ctrl-wifi-Credentials"></a>

### Credentials
Network credentials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [CredentialsType](#particle-ctrl-wifi-CredentialsType) |  |  |
| password | [string](#string) |  |  |






<a name="particle-ctrl-wifi-GetCurrentNetworkReply"></a>

### GetCurrentNetworkReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ssid | [string](#string) |  |  |
| bssid | [bytes](#bytes) |  |  |
| channel | [int32](#int32) |  |  |
| rssi | [int32](#int32) |  |  |






<a name="particle-ctrl-wifi-GetCurrentNetworkRequest"></a>

### GetCurrentNetworkRequest
Get the current network.

This request gets the network which the device is currently connected to.






<a name="particle-ctrl-wifi-GetKnownNetworksReply"></a>

### GetKnownNetworksReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| networks | [GetKnownNetworksReply.Network](#particle-ctrl-wifi-GetKnownNetworksReply-Network) | repeated |  |






<a name="particle-ctrl-wifi-GetKnownNetworksReply-Network"></a>

### GetKnownNetworksReply.Network



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ssid | [string](#string) |  |  |
| security | [Security](#particle-ctrl-wifi-Security) |  |  |
| credentials_type | [CredentialsType](#particle-ctrl-wifi-CredentialsType) |  |  |






<a name="particle-ctrl-wifi-GetKnownNetworksRequest"></a>

### GetKnownNetworksRequest
Get the list of known networks.






<a name="particle-ctrl-wifi-JoinKnownNetworkReply"></a>

### JoinKnownNetworkReply







<a name="particle-ctrl-wifi-JoinKnownNetworkRequest"></a>

### JoinKnownNetworkRequest
Join a known network.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ssid | [string](#string) |  |  |






<a name="particle-ctrl-wifi-JoinNewNetworkReply"></a>

### JoinNewNetworkReply







<a name="particle-ctrl-wifi-JoinNewNetworkRequest"></a>

### JoinNewNetworkRequest
Join a new network.

On success, the network credentials get saved to a persistent storage.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ssid | [string](#string) |  |  |
| bssid | [bytes](#bytes) |  |  |
| security | [Security](#particle-ctrl-wifi-Security) |  |  |
| credentials | [Credentials](#particle-ctrl-wifi-Credentials) |  |  |






<a name="particle-ctrl-wifi-RemoveKnownNetworkReply"></a>

### RemoveKnownNetworkReply







<a name="particle-ctrl-wifi-RemoveKnownNetworkRequest"></a>

### RemoveKnownNetworkRequest
Remove the network from the list of known networks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ssid | [string](#string) |  |  |






<a name="particle-ctrl-wifi-ScanNetworksReply"></a>

### ScanNetworksReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| networks | [ScanNetworksReply.Network](#particle-ctrl-wifi-ScanNetworksReply-Network) | repeated |  |






<a name="particle-ctrl-wifi-ScanNetworksReply-Network"></a>

### ScanNetworksReply.Network



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ssid | [string](#string) |  |  |
| bssid | [bytes](#bytes) |  |  |
| security | [Security](#particle-ctrl-wifi-Security) |  |  |
| channel | [int32](#int32) |  |  |
| rssi | [int32](#int32) |  |  |






<a name="particle-ctrl-wifi-ScanNetworksRequest"></a>

### ScanNetworksRequest
Scan for networks.





 


<a name="particle-ctrl-wifi-CredentialsType"></a>

### CredentialsType
Network credential types.

Note: The values of this enum should match the values defined by the `WiFiCredentials::Type` enum
in the firmware.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_CREDENTIALS | 0 |  |
| PASSWORD | 1 |  |



<a name="particle-ctrl-wifi-Security"></a>

### Security
WiFi security types.

Note: The values of this enum should match the values defined by the `WifiSecurity` enum in
the firmware.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_SECURITY | 0 |  |
| WEP | 1 |  |
| WPA_PSK | 2 |  |
| WPA2_PSK | 3 |  |
| WPA_WPA2_PSK | 4 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

