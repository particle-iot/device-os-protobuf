import * as $protobuf from "protobufjs";
/** Namespace particle. */
export namespace particle {

    /** Namespace ctrl. */
    namespace ctrl {

        /** Namespace cellular. */
        namespace cellular {

            /**
             * SIM card types.
             *
             * The Boron 2G/3G and Boron LTE can use either the built-in MFF2 embedded Particle SIM card or an external nano SIM card in the SIM card connector.
             *
             * Note: The values of this enum should match the values defined by the `SimType` enum in the firmware.
             */
            enum SimType {
                INVALID_SIM_TYPE = 0,
                INTERNAL = 1,
                EXTERNAL = 2
            }

            /** Properties of an AccessPoint. */
            interface IAccessPoint {

                /** AccessPoint apn */
                apn?: (string|null);

                /** AccessPoint user */
                user?: (string|null);

                /** AccessPoint password */
                password?: (string|null);

                /** AccessPoint useDefaults */
                useDefaults?: (boolean|null);
            }

            /** Access point settings for 3rd party SIM credentials for the Cellular network. */
            class AccessPoint implements IAccessPoint {

                /**
                 * Constructs a new AccessPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IAccessPoint);

                /** AccessPoint apn. */
                public apn: string;

                /** AccessPoint user. */
                public user: string;

                /** AccessPoint password. */
                public password: string;

                /** AccessPoint useDefaults. */
                public useDefaults: boolean;

                /**
                 * Creates a new AccessPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccessPoint instance
                 */
                public static create(properties?: particle.ctrl.cellular.IAccessPoint): particle.ctrl.cellular.AccessPoint;

                /**
                 * Encodes the specified AccessPoint message. Does not implicitly {@link particle.ctrl.cellular.AccessPoint.verify|verify} messages.
                 * @param message AccessPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IAccessPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccessPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccessPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.AccessPoint;
            }

            /** Properties of a SetAccessPointRequest. */
            interface ISetAccessPointRequest {

                /** SetAccessPointRequest simType */
                simType?: (particle.ctrl.cellular.SimType|null);

                /** SetAccessPointRequest accessPoint */
                accessPoint?: (particle.ctrl.cellular.IAccessPoint|null);
            }

            /** Set access point settings. */
            class SetAccessPointRequest implements ISetAccessPointRequest {

                /**
                 * Constructs a new SetAccessPointRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.ISetAccessPointRequest);

                /** SetAccessPointRequest simType. */
                public simType: particle.ctrl.cellular.SimType;

                /** SetAccessPointRequest accessPoint. */
                public accessPoint?: (particle.ctrl.cellular.IAccessPoint|null);

                /**
                 * Creates a new SetAccessPointRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetAccessPointRequest instance
                 */
                public static create(properties?: particle.ctrl.cellular.ISetAccessPointRequest): particle.ctrl.cellular.SetAccessPointRequest;

                /**
                 * Encodes the specified SetAccessPointRequest message. Does not implicitly {@link particle.ctrl.cellular.SetAccessPointRequest.verify|verify} messages.
                 * @param message SetAccessPointRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.ISetAccessPointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetAccessPointRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetAccessPointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.SetAccessPointRequest;
            }

            /** Properties of a SetAccessPointReply. */
            interface ISetAccessPointReply {
            }

            /** Represents a SetAccessPointReply. */
            class SetAccessPointReply implements ISetAccessPointReply {

                /**
                 * Constructs a new SetAccessPointReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.ISetAccessPointReply);

                /**
                 * Creates a new SetAccessPointReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetAccessPointReply instance
                 */
                public static create(properties?: particle.ctrl.cellular.ISetAccessPointReply): particle.ctrl.cellular.SetAccessPointReply;

                /**
                 * Encodes the specified SetAccessPointReply message. Does not implicitly {@link particle.ctrl.cellular.SetAccessPointReply.verify|verify} messages.
                 * @param message SetAccessPointReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.ISetAccessPointReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetAccessPointReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetAccessPointReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.SetAccessPointReply;
            }

            /** Properties of a GetAccessPointRequest. */
            interface IGetAccessPointRequest {

                /** GetAccessPointRequest simType */
                simType?: (particle.ctrl.cellular.SimType|null);
            }

            /** Get access point settings. */
            class GetAccessPointRequest implements IGetAccessPointRequest {

                /**
                 * Constructs a new GetAccessPointRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IGetAccessPointRequest);

                /** GetAccessPointRequest simType. */
                public simType: particle.ctrl.cellular.SimType;

                /**
                 * Creates a new GetAccessPointRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAccessPointRequest instance
                 */
                public static create(properties?: particle.ctrl.cellular.IGetAccessPointRequest): particle.ctrl.cellular.GetAccessPointRequest;

                /**
                 * Encodes the specified GetAccessPointRequest message. Does not implicitly {@link particle.ctrl.cellular.GetAccessPointRequest.verify|verify} messages.
                 * @param message GetAccessPointRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IGetAccessPointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAccessPointRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAccessPointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.GetAccessPointRequest;
            }

            /** Properties of a GetAccessPointReply. */
            interface IGetAccessPointReply {

                /** GetAccessPointReply accessPoint */
                accessPoint?: (particle.ctrl.cellular.IAccessPoint|null);
            }

            /** Represents a GetAccessPointReply. */
            class GetAccessPointReply implements IGetAccessPointReply {

                /**
                 * Constructs a new GetAccessPointReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IGetAccessPointReply);

                /** GetAccessPointReply accessPoint. */
                public accessPoint?: (particle.ctrl.cellular.IAccessPoint|null);

                /**
                 * Creates a new GetAccessPointReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAccessPointReply instance
                 */
                public static create(properties?: particle.ctrl.cellular.IGetAccessPointReply): particle.ctrl.cellular.GetAccessPointReply;

                /**
                 * Encodes the specified GetAccessPointReply message. Does not implicitly {@link particle.ctrl.cellular.GetAccessPointReply.verify|verify} messages.
                 * @param message GetAccessPointReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IGetAccessPointReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAccessPointReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAccessPointReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.GetAccessPointReply;
            }

            /** Properties of a SetActiveSimRequest. */
            interface ISetActiveSimRequest {

                /** SetActiveSimRequest simType */
                simType?: (particle.ctrl.cellular.SimType|null);
            }

            /**
             * Set active SIM card.
             *
             * Note: The device needs to be reset in order for the settings to take effect.
             */
            class SetActiveSimRequest implements ISetActiveSimRequest {

                /**
                 * Constructs a new SetActiveSimRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.ISetActiveSimRequest);

                /** SetActiveSimRequest simType. */
                public simType: particle.ctrl.cellular.SimType;

                /**
                 * Creates a new SetActiveSimRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetActiveSimRequest instance
                 */
                public static create(properties?: particle.ctrl.cellular.ISetActiveSimRequest): particle.ctrl.cellular.SetActiveSimRequest;

                /**
                 * Encodes the specified SetActiveSimRequest message. Does not implicitly {@link particle.ctrl.cellular.SetActiveSimRequest.verify|verify} messages.
                 * @param message SetActiveSimRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.ISetActiveSimRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetActiveSimRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetActiveSimRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.SetActiveSimRequest;
            }

            /** Properties of a SetActiveSimReply. */
            interface ISetActiveSimReply {
            }

            /** Represents a SetActiveSimReply. */
            class SetActiveSimReply implements ISetActiveSimReply {

                /**
                 * Constructs a new SetActiveSimReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.ISetActiveSimReply);

                /**
                 * Creates a new SetActiveSimReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetActiveSimReply instance
                 */
                public static create(properties?: particle.ctrl.cellular.ISetActiveSimReply): particle.ctrl.cellular.SetActiveSimReply;

                /**
                 * Encodes the specified SetActiveSimReply message. Does not implicitly {@link particle.ctrl.cellular.SetActiveSimReply.verify|verify} messages.
                 * @param message SetActiveSimReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.ISetActiveSimReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetActiveSimReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetActiveSimReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.SetActiveSimReply;
            }

            /** Properties of a GetActiveSimRequest. */
            interface IGetActiveSimRequest {
            }

            /** Get active SIM card. */
            class GetActiveSimRequest implements IGetActiveSimRequest {

                /**
                 * Constructs a new GetActiveSimRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IGetActiveSimRequest);

                /**
                 * Creates a new GetActiveSimRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetActiveSimRequest instance
                 */
                public static create(properties?: particle.ctrl.cellular.IGetActiveSimRequest): particle.ctrl.cellular.GetActiveSimRequest;

                /**
                 * Encodes the specified GetActiveSimRequest message. Does not implicitly {@link particle.ctrl.cellular.GetActiveSimRequest.verify|verify} messages.
                 * @param message GetActiveSimRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IGetActiveSimRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetActiveSimRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetActiveSimRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.GetActiveSimRequest;
            }

            /** Properties of a GetActiveSimReply. */
            interface IGetActiveSimReply {

                /** GetActiveSimReply simType */
                simType?: (particle.ctrl.cellular.SimType|null);
            }

            /** Represents a GetActiveSimReply. */
            class GetActiveSimReply implements IGetActiveSimReply {

                /**
                 * Constructs a new GetActiveSimReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IGetActiveSimReply);

                /** GetActiveSimReply simType. */
                public simType: particle.ctrl.cellular.SimType;

                /**
                 * Creates a new GetActiveSimReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetActiveSimReply instance
                 */
                public static create(properties?: particle.ctrl.cellular.IGetActiveSimReply): particle.ctrl.cellular.GetActiveSimReply;

                /**
                 * Encodes the specified GetActiveSimReply message. Does not implicitly {@link particle.ctrl.cellular.GetActiveSimReply.verify|verify} messages.
                 * @param message GetActiveSimReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IGetActiveSimReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetActiveSimReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetActiveSimReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.GetActiveSimReply;
            }

            /** Properties of a GetIccidRequest. */
            interface IGetIccidRequest {
            }

            /** Get ICCID. */
            class GetIccidRequest implements IGetIccidRequest {

                /**
                 * Constructs a new GetIccidRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IGetIccidRequest);

                /**
                 * Creates a new GetIccidRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIccidRequest instance
                 */
                public static create(properties?: particle.ctrl.cellular.IGetIccidRequest): particle.ctrl.cellular.GetIccidRequest;

                /**
                 * Encodes the specified GetIccidRequest message. Does not implicitly {@link particle.ctrl.cellular.GetIccidRequest.verify|verify} messages.
                 * @param message GetIccidRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IGetIccidRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIccidRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIccidRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.GetIccidRequest;
            }

            /** Properties of a GetIccidReply. */
            interface IGetIccidReply {

                /** GetIccidReply iccid */
                iccid?: (string|null);
            }

            /** Represents a GetIccidReply. */
            class GetIccidReply implements IGetIccidReply {

                /**
                 * Constructs a new GetIccidReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cellular.IGetIccidReply);

                /** GetIccidReply iccid. */
                public iccid: string;

                /**
                 * Creates a new GetIccidReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIccidReply instance
                 */
                public static create(properties?: particle.ctrl.cellular.IGetIccidReply): particle.ctrl.cellular.GetIccidReply;

                /**
                 * Encodes the specified GetIccidReply message. Does not implicitly {@link particle.ctrl.cellular.GetIccidReply.verify|verify} messages.
                 * @param message GetIccidReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cellular.IGetIccidReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIccidReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIccidReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cellular.GetIccidReply;
            }
        }

        /** Namespace cloud. */
        namespace cloud {

            /** ConnectionStatus enum. */
            enum ConnectionStatus {
                DISCONNECTED = 0,
                CONNECTING = 1,
                CONNECTED = 2,
                DISCONNECTING = 3
            }

            /** Properties of a GetConnectionStatusRequest. */
            interface IGetConnectionStatusRequest {
            }

            /** Represents a GetConnectionStatusRequest. */
            class GetConnectionStatusRequest implements IGetConnectionStatusRequest {

                /**
                 * Constructs a new GetConnectionStatusRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cloud.IGetConnectionStatusRequest);

                /**
                 * Creates a new GetConnectionStatusRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetConnectionStatusRequest instance
                 */
                public static create(properties?: particle.ctrl.cloud.IGetConnectionStatusRequest): particle.ctrl.cloud.GetConnectionStatusRequest;

                /**
                 * Encodes the specified GetConnectionStatusRequest message. Does not implicitly {@link particle.ctrl.cloud.GetConnectionStatusRequest.verify|verify} messages.
                 * @param message GetConnectionStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cloud.IGetConnectionStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetConnectionStatusRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetConnectionStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cloud.GetConnectionStatusRequest;
            }

            /** Properties of a GetConnectionStatusReply. */
            interface IGetConnectionStatusReply {

                /** GetConnectionStatusReply status */
                status?: (particle.ctrl.cloud.ConnectionStatus|null);
            }

            /** Represents a GetConnectionStatusReply. */
            class GetConnectionStatusReply implements IGetConnectionStatusReply {

                /**
                 * Constructs a new GetConnectionStatusReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cloud.IGetConnectionStatusReply);

                /** GetConnectionStatusReply status. */
                public status: particle.ctrl.cloud.ConnectionStatus;

                /**
                 * Creates a new GetConnectionStatusReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetConnectionStatusReply instance
                 */
                public static create(properties?: particle.ctrl.cloud.IGetConnectionStatusReply): particle.ctrl.cloud.GetConnectionStatusReply;

                /**
                 * Encodes the specified GetConnectionStatusReply message. Does not implicitly {@link particle.ctrl.cloud.GetConnectionStatusReply.verify|verify} messages.
                 * @param message GetConnectionStatusReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cloud.IGetConnectionStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetConnectionStatusReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetConnectionStatusReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cloud.GetConnectionStatusReply;
            }

            /** Properties of a ConnectRequest. */
            interface IConnectRequest {
            }

            /** Represents a ConnectRequest. */
            class ConnectRequest implements IConnectRequest {

                /**
                 * Constructs a new ConnectRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cloud.IConnectRequest);

                /**
                 * Creates a new ConnectRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConnectRequest instance
                 */
                public static create(properties?: particle.ctrl.cloud.IConnectRequest): particle.ctrl.cloud.ConnectRequest;

                /**
                 * Encodes the specified ConnectRequest message. Does not implicitly {@link particle.ctrl.cloud.ConnectRequest.verify|verify} messages.
                 * @param message ConnectRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cloud.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConnectRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConnectRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cloud.ConnectRequest;
            }

            /** Properties of a ConnectReply. */
            interface IConnectReply {
            }

            /** Represents a ConnectReply. */
            class ConnectReply implements IConnectReply {

                /**
                 * Constructs a new ConnectReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cloud.IConnectReply);

                /**
                 * Creates a new ConnectReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConnectReply instance
                 */
                public static create(properties?: particle.ctrl.cloud.IConnectReply): particle.ctrl.cloud.ConnectReply;

                /**
                 * Encodes the specified ConnectReply message. Does not implicitly {@link particle.ctrl.cloud.ConnectReply.verify|verify} messages.
                 * @param message ConnectReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cloud.IConnectReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConnectReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConnectReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cloud.ConnectReply;
            }

            /** Properties of a DisconnectRequest. */
            interface IDisconnectRequest {
            }

            /** Represents a DisconnectRequest. */
            class DisconnectRequest implements IDisconnectRequest {

                /**
                 * Constructs a new DisconnectRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cloud.IDisconnectRequest);

                /**
                 * Creates a new DisconnectRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DisconnectRequest instance
                 */
                public static create(properties?: particle.ctrl.cloud.IDisconnectRequest): particle.ctrl.cloud.DisconnectRequest;

                /**
                 * Encodes the specified DisconnectRequest message. Does not implicitly {@link particle.ctrl.cloud.DisconnectRequest.verify|verify} messages.
                 * @param message DisconnectRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cloud.IDisconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DisconnectRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DisconnectRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cloud.DisconnectRequest;
            }

            /** Properties of a DisconnectReply. */
            interface IDisconnectReply {
            }

            /** Represents a DisconnectReply. */
            class DisconnectReply implements IDisconnectReply {

                /**
                 * Constructs a new DisconnectReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.cloud.IDisconnectReply);

                /**
                 * Creates a new DisconnectReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DisconnectReply instance
                 */
                public static create(properties?: particle.ctrl.cloud.IDisconnectReply): particle.ctrl.cloud.DisconnectReply;

                /**
                 * Encodes the specified DisconnectReply message. Does not implicitly {@link particle.ctrl.cloud.DisconnectReply.verify|verify} messages.
                 * @param message DisconnectReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.cloud.IDisconnectReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DisconnectReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DisconnectReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.cloud.DisconnectReply;
            }
        }

        /** ResultCode enum. */
        enum ResultCode {
            OK = 0,
            NOT_ALLOWED = 1,
            TIMEOUT = 2,
            NOT_FOUND = 3,
            ALREADY_EXIST = 4,
            INVALID_STATE = 5,
            NO_MEMORY = 6,
            INVALID_PARAM = 7
        }

        /** Properties of an Ipv4Address. */
        interface IIpv4Address {

            /** Ipv4Address address */
            address?: (number|null);
        }

        /** Represents an Ipv4Address. */
        class Ipv4Address implements IIpv4Address {

            /**
             * Constructs a new Ipv4Address.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIpv4Address);

            /** Ipv4Address address. */
            public address: number;

            /**
             * Creates a new Ipv4Address instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ipv4Address instance
             */
            public static create(properties?: particle.ctrl.IIpv4Address): particle.ctrl.Ipv4Address;

            /**
             * Encodes the specified Ipv4Address message. Does not implicitly {@link particle.ctrl.Ipv4Address.verify|verify} messages.
             * @param message Ipv4Address message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIpv4Address, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ipv4Address message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ipv4Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.Ipv4Address;
        }

        /** Properties of an Ipv6Address. */
        interface IIpv6Address {

            /** Ipv6Address address */
            address?: (Uint8Array|null);
        }

        /** Represents an Ipv6Address. */
        class Ipv6Address implements IIpv6Address {

            /**
             * Constructs a new Ipv6Address.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIpv6Address);

            /** Ipv6Address address. */
            public address: Uint8Array;

            /**
             * Creates a new Ipv6Address instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ipv6Address instance
             */
            public static create(properties?: particle.ctrl.IIpv6Address): particle.ctrl.Ipv6Address;

            /**
             * Encodes the specified Ipv6Address message. Does not implicitly {@link particle.ctrl.Ipv6Address.verify|verify} messages.
             * @param message Ipv6Address message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIpv6Address, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ipv6Address message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ipv6Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.Ipv6Address;
        }

        /** Properties of an IpAddress. */
        interface IIpAddress {

            /** IpAddress v4 */
            v4?: (particle.ctrl.IIpv4Address|null);

            /** IpAddress v6 */
            v6?: (particle.ctrl.IIpv6Address|null);
        }

        /** Represents an IpAddress. */
        class IpAddress implements IIpAddress {

            /**
             * Constructs a new IpAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIpAddress);

            /** IpAddress v4. */
            public v4?: (particle.ctrl.IIpv4Address|null);

            /** IpAddress v6. */
            public v6?: (particle.ctrl.IIpv6Address|null);

            /** IpAddress address. */
            public address?: ("v4"|"v6");

            /**
             * Creates a new IpAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IpAddress instance
             */
            public static create(properties?: particle.ctrl.IIpAddress): particle.ctrl.IpAddress;

            /**
             * Encodes the specified IpAddress message. Does not implicitly {@link particle.ctrl.IpAddress.verify|verify} messages.
             * @param message IpAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIpAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IpAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IpAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IpAddress;
        }

        /** Properties of a IPAddress. */
        interface IIPAddress {

            /** IPAddress protocol */
            protocol?: (particle.ctrl.IPAddress.Protocol|null);

            /** IPAddress address */
            address?: (Uint8Array|null);
        }

        /** Represents a IPAddress. */
        class IPAddress implements IIPAddress {

            /**
             * Constructs a new IPAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIPAddress);

            /** IPAddress protocol. */
            public protocol: particle.ctrl.IPAddress.Protocol;

            /** IPAddress address. */
            public address: Uint8Array;

            /**
             * Creates a new IPAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IPAddress instance
             */
            public static create(properties?: particle.ctrl.IIPAddress): particle.ctrl.IPAddress;

            /**
             * Encodes the specified IPAddress message. Does not implicitly {@link particle.ctrl.IPAddress.verify|verify} messages.
             * @param message IPAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IPAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IPAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IPAddress;
        }

        namespace IPAddress {

            /** Protocol enum. */
            enum Protocol {
                NONE = 0,
                IPv4 = 1,
                IPv6 = 2
            }
        }

        /** SecurityKeyType enum. */
        enum SecurityKeyType {
            INVALID_SECURITY_KEY = 0,
            TCP_DEVICE_PRIVATE_KEY = 1,
            TCP_DEVICE_PUBLIC_KEY = 2,
            TCP_SERVER_PUBLIC_KEY = 3,
            UDP_DEVICE_PRIVATE_KEY = 4,
            UDP_DEVICE_PUBLIC_KEY = 5,
            UDP_SERVER_PUBLIC_KEY = 6
        }

        /** ServerProtocolType enum. */
        enum ServerProtocolType {
            INVALID_PROTOCOL = 0,
            TCP_PROTOCOL = 1,
            UDP_PROTOCOL = 2
        }

        /** DeviceMode enum. */
        enum DeviceMode {
            NORMAL_MODE = 0,
            LISTENING_MODE = 1
        }

        /** SystemCapabilityFlag enum. */
        enum SystemCapabilityFlag {
            NO_SYSTEM_CAPABILITY_FLAGS = 0,
            COMPRESSED_OTA = 1
        }

        /** Feature enum. */
        enum Feature {
            INVALID_FEATURE = 0,
            ETHERNET_DETECTION = 1
        }

        /** Properties of a GetDeviceIdRequest. */
        interface IGetDeviceIdRequest {
        }

        /** Represents a GetDeviceIdRequest. */
        class GetDeviceIdRequest implements IGetDeviceIdRequest {

            /**
             * Constructs a new GetDeviceIdRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetDeviceIdRequest);

            /**
             * Creates a new GetDeviceIdRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDeviceIdRequest instance
             */
            public static create(properties?: particle.ctrl.IGetDeviceIdRequest): particle.ctrl.GetDeviceIdRequest;

            /**
             * Encodes the specified GetDeviceIdRequest message. Does not implicitly {@link particle.ctrl.GetDeviceIdRequest.verify|verify} messages.
             * @param message GetDeviceIdRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetDeviceIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDeviceIdRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDeviceIdRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetDeviceIdRequest;
        }

        /** Properties of a GetDeviceIdReply. */
        interface IGetDeviceIdReply {

            /** GetDeviceIdReply id */
            id?: (string|null);
        }

        /** Represents a GetDeviceIdReply. */
        class GetDeviceIdReply implements IGetDeviceIdReply {

            /**
             * Constructs a new GetDeviceIdReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetDeviceIdReply);

            /** GetDeviceIdReply id. */
            public id: string;

            /**
             * Creates a new GetDeviceIdReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDeviceIdReply instance
             */
            public static create(properties?: particle.ctrl.IGetDeviceIdReply): particle.ctrl.GetDeviceIdReply;

            /**
             * Encodes the specified GetDeviceIdReply message. Does not implicitly {@link particle.ctrl.GetDeviceIdReply.verify|verify} messages.
             * @param message GetDeviceIdReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetDeviceIdReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDeviceIdReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDeviceIdReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetDeviceIdReply;
        }

        /** Properties of a GetSerialNumberRequest. */
        interface IGetSerialNumberRequest {
        }

        /** Represents a GetSerialNumberRequest. */
        class GetSerialNumberRequest implements IGetSerialNumberRequest {

            /**
             * Constructs a new GetSerialNumberRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSerialNumberRequest);

            /**
             * Creates a new GetSerialNumberRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSerialNumberRequest instance
             */
            public static create(properties?: particle.ctrl.IGetSerialNumberRequest): particle.ctrl.GetSerialNumberRequest;

            /**
             * Encodes the specified GetSerialNumberRequest message. Does not implicitly {@link particle.ctrl.GetSerialNumberRequest.verify|verify} messages.
             * @param message GetSerialNumberRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSerialNumberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSerialNumberRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSerialNumberRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSerialNumberRequest;
        }

        /** Properties of a GetSerialNumberReply. */
        interface IGetSerialNumberReply {

            /** GetSerialNumberReply serial */
            serial?: (string|null);
        }

        /** Represents a GetSerialNumberReply. */
        class GetSerialNumberReply implements IGetSerialNumberReply {

            /**
             * Constructs a new GetSerialNumberReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSerialNumberReply);

            /** GetSerialNumberReply serial. */
            public serial: string;

            /**
             * Creates a new GetSerialNumberReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSerialNumberReply instance
             */
            public static create(properties?: particle.ctrl.IGetSerialNumberReply): particle.ctrl.GetSerialNumberReply;

            /**
             * Encodes the specified GetSerialNumberReply message. Does not implicitly {@link particle.ctrl.GetSerialNumberReply.verify|verify} messages.
             * @param message GetSerialNumberReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSerialNumberReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSerialNumberReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSerialNumberReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSerialNumberReply;
        }

        /** Properties of a GetSystemVersionRequest. */
        interface IGetSystemVersionRequest {
        }

        /** Represents a GetSystemVersionRequest. */
        class GetSystemVersionRequest implements IGetSystemVersionRequest {

            /**
             * Constructs a new GetSystemVersionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSystemVersionRequest);

            /**
             * Creates a new GetSystemVersionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSystemVersionRequest instance
             */
            public static create(properties?: particle.ctrl.IGetSystemVersionRequest): particle.ctrl.GetSystemVersionRequest;

            /**
             * Encodes the specified GetSystemVersionRequest message. Does not implicitly {@link particle.ctrl.GetSystemVersionRequest.verify|verify} messages.
             * @param message GetSystemVersionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSystemVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSystemVersionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSystemVersionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSystemVersionRequest;
        }

        /** Properties of a GetSystemVersionReply. */
        interface IGetSystemVersionReply {

            /** GetSystemVersionReply version */
            version?: (string|null);
        }

        /** Represents a GetSystemVersionReply. */
        class GetSystemVersionReply implements IGetSystemVersionReply {

            /**
             * Constructs a new GetSystemVersionReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSystemVersionReply);

            /** GetSystemVersionReply version. */
            public version: string;

            /**
             * Creates a new GetSystemVersionReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSystemVersionReply instance
             */
            public static create(properties?: particle.ctrl.IGetSystemVersionReply): particle.ctrl.GetSystemVersionReply;

            /**
             * Encodes the specified GetSystemVersionReply message. Does not implicitly {@link particle.ctrl.GetSystemVersionReply.verify|verify} messages.
             * @param message GetSystemVersionReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSystemVersionReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSystemVersionReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSystemVersionReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSystemVersionReply;
        }

        /** Properties of a GetNcpFirmwareVersionRequest. */
        interface IGetNcpFirmwareVersionRequest {
        }

        /** Represents a GetNcpFirmwareVersionRequest. */
        class GetNcpFirmwareVersionRequest implements IGetNcpFirmwareVersionRequest {

            /**
             * Constructs a new GetNcpFirmwareVersionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetNcpFirmwareVersionRequest);

            /**
             * Creates a new GetNcpFirmwareVersionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetNcpFirmwareVersionRequest instance
             */
            public static create(properties?: particle.ctrl.IGetNcpFirmwareVersionRequest): particle.ctrl.GetNcpFirmwareVersionRequest;

            /**
             * Encodes the specified GetNcpFirmwareVersionRequest message. Does not implicitly {@link particle.ctrl.GetNcpFirmwareVersionRequest.verify|verify} messages.
             * @param message GetNcpFirmwareVersionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetNcpFirmwareVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetNcpFirmwareVersionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetNcpFirmwareVersionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetNcpFirmwareVersionRequest;
        }

        /** Properties of a GetNcpFirmwareVersionReply. */
        interface IGetNcpFirmwareVersionReply {

            /** GetNcpFirmwareVersionReply version */
            version?: (string|null);

            /** GetNcpFirmwareVersionReply moduleVersion */
            moduleVersion?: (number|null);
        }

        /** Represents a GetNcpFirmwareVersionReply. */
        class GetNcpFirmwareVersionReply implements IGetNcpFirmwareVersionReply {

            /**
             * Constructs a new GetNcpFirmwareVersionReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetNcpFirmwareVersionReply);

            /** GetNcpFirmwareVersionReply version. */
            public version: string;

            /** GetNcpFirmwareVersionReply moduleVersion. */
            public moduleVersion: number;

            /**
             * Creates a new GetNcpFirmwareVersionReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetNcpFirmwareVersionReply instance
             */
            public static create(properties?: particle.ctrl.IGetNcpFirmwareVersionReply): particle.ctrl.GetNcpFirmwareVersionReply;

            /**
             * Encodes the specified GetNcpFirmwareVersionReply message. Does not implicitly {@link particle.ctrl.GetNcpFirmwareVersionReply.verify|verify} messages.
             * @param message GetNcpFirmwareVersionReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetNcpFirmwareVersionReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetNcpFirmwareVersionReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetNcpFirmwareVersionReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetNcpFirmwareVersionReply;
        }

        /** Properties of a GetSystemCapabilitiesRequest. */
        interface IGetSystemCapabilitiesRequest {
        }

        /** Represents a GetSystemCapabilitiesRequest. */
        class GetSystemCapabilitiesRequest implements IGetSystemCapabilitiesRequest {

            /**
             * Constructs a new GetSystemCapabilitiesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSystemCapabilitiesRequest);

            /**
             * Creates a new GetSystemCapabilitiesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSystemCapabilitiesRequest instance
             */
            public static create(properties?: particle.ctrl.IGetSystemCapabilitiesRequest): particle.ctrl.GetSystemCapabilitiesRequest;

            /**
             * Encodes the specified GetSystemCapabilitiesRequest message. Does not implicitly {@link particle.ctrl.GetSystemCapabilitiesRequest.verify|verify} messages.
             * @param message GetSystemCapabilitiesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSystemCapabilitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSystemCapabilitiesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSystemCapabilitiesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSystemCapabilitiesRequest;
        }

        /** Properties of a GetSystemCapabilitiesReply. */
        interface IGetSystemCapabilitiesReply {

            /** GetSystemCapabilitiesReply flags */
            flags?: (number|null);
        }

        /** Represents a GetSystemCapabilitiesReply. */
        class GetSystemCapabilitiesReply implements IGetSystemCapabilitiesReply {

            /**
             * Constructs a new GetSystemCapabilitiesReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSystemCapabilitiesReply);

            /** GetSystemCapabilitiesReply flags. */
            public flags: number;

            /**
             * Creates a new GetSystemCapabilitiesReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSystemCapabilitiesReply instance
             */
            public static create(properties?: particle.ctrl.IGetSystemCapabilitiesReply): particle.ctrl.GetSystemCapabilitiesReply;

            /**
             * Encodes the specified GetSystemCapabilitiesReply message. Does not implicitly {@link particle.ctrl.GetSystemCapabilitiesReply.verify|verify} messages.
             * @param message GetSystemCapabilitiesReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSystemCapabilitiesReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSystemCapabilitiesReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSystemCapabilitiesReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSystemCapabilitiesReply;
        }

        /** Properties of a SetClaimCodeRequest. */
        interface ISetClaimCodeRequest {

            /** SetClaimCodeRequest code */
            code?: (string|null);
        }

        /** Represents a SetClaimCodeRequest. */
        class SetClaimCodeRequest implements ISetClaimCodeRequest {

            /**
             * Constructs a new SetClaimCodeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetClaimCodeRequest);

            /** SetClaimCodeRequest code. */
            public code: string;

            /**
             * Creates a new SetClaimCodeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetClaimCodeRequest instance
             */
            public static create(properties?: particle.ctrl.ISetClaimCodeRequest): particle.ctrl.SetClaimCodeRequest;

            /**
             * Encodes the specified SetClaimCodeRequest message. Does not implicitly {@link particle.ctrl.SetClaimCodeRequest.verify|verify} messages.
             * @param message SetClaimCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetClaimCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetClaimCodeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetClaimCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetClaimCodeRequest;
        }

        /** Properties of a SetClaimCodeReply. */
        interface ISetClaimCodeReply {
        }

        /** Represents a SetClaimCodeReply. */
        class SetClaimCodeReply implements ISetClaimCodeReply {

            /**
             * Constructs a new SetClaimCodeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetClaimCodeReply);

            /**
             * Creates a new SetClaimCodeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetClaimCodeReply instance
             */
            public static create(properties?: particle.ctrl.ISetClaimCodeReply): particle.ctrl.SetClaimCodeReply;

            /**
             * Encodes the specified SetClaimCodeReply message. Does not implicitly {@link particle.ctrl.SetClaimCodeReply.verify|verify} messages.
             * @param message SetClaimCodeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetClaimCodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetClaimCodeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetClaimCodeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetClaimCodeReply;
        }

        /** Properties of an IsClaimedRequest. */
        interface IIsClaimedRequest {
        }

        /** Represents an IsClaimedRequest. */
        class IsClaimedRequest implements IIsClaimedRequest {

            /**
             * Constructs a new IsClaimedRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIsClaimedRequest);

            /**
             * Creates a new IsClaimedRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IsClaimedRequest instance
             */
            public static create(properties?: particle.ctrl.IIsClaimedRequest): particle.ctrl.IsClaimedRequest;

            /**
             * Encodes the specified IsClaimedRequest message. Does not implicitly {@link particle.ctrl.IsClaimedRequest.verify|verify} messages.
             * @param message IsClaimedRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIsClaimedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IsClaimedRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IsClaimedRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IsClaimedRequest;
        }

        /** Properties of an IsClaimedReply. */
        interface IIsClaimedReply {

            /** IsClaimedReply claimed */
            claimed?: (boolean|null);
        }

        /** Represents an IsClaimedReply. */
        class IsClaimedReply implements IIsClaimedReply {

            /**
             * Constructs a new IsClaimedReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIsClaimedReply);

            /** IsClaimedReply claimed. */
            public claimed: boolean;

            /**
             * Creates a new IsClaimedReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IsClaimedReply instance
             */
            public static create(properties?: particle.ctrl.IIsClaimedReply): particle.ctrl.IsClaimedReply;

            /**
             * Encodes the specified IsClaimedReply message. Does not implicitly {@link particle.ctrl.IsClaimedReply.verify|verify} messages.
             * @param message IsClaimedReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIsClaimedReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IsClaimedReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IsClaimedReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IsClaimedReply;
        }

        /** Properties of a SetSecurityKeyRequest. */
        interface ISetSecurityKeyRequest {

            /** SetSecurityKeyRequest type */
            type?: (particle.ctrl.SecurityKeyType|null);

            /** SetSecurityKeyRequest data */
            data?: (Uint8Array|null);
        }

        /** Represents a SetSecurityKeyRequest. */
        class SetSecurityKeyRequest implements ISetSecurityKeyRequest {

            /**
             * Constructs a new SetSecurityKeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetSecurityKeyRequest);

            /** SetSecurityKeyRequest type. */
            public type: particle.ctrl.SecurityKeyType;

            /** SetSecurityKeyRequest data. */
            public data: Uint8Array;

            /**
             * Creates a new SetSecurityKeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetSecurityKeyRequest instance
             */
            public static create(properties?: particle.ctrl.ISetSecurityKeyRequest): particle.ctrl.SetSecurityKeyRequest;

            /**
             * Encodes the specified SetSecurityKeyRequest message. Does not implicitly {@link particle.ctrl.SetSecurityKeyRequest.verify|verify} messages.
             * @param message SetSecurityKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetSecurityKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetSecurityKeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetSecurityKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetSecurityKeyRequest;
        }

        /** Properties of a SetSecurityKeyReply. */
        interface ISetSecurityKeyReply {
        }

        /** Represents a SetSecurityKeyReply. */
        class SetSecurityKeyReply implements ISetSecurityKeyReply {

            /**
             * Constructs a new SetSecurityKeyReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetSecurityKeyReply);

            /**
             * Creates a new SetSecurityKeyReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetSecurityKeyReply instance
             */
            public static create(properties?: particle.ctrl.ISetSecurityKeyReply): particle.ctrl.SetSecurityKeyReply;

            /**
             * Encodes the specified SetSecurityKeyReply message. Does not implicitly {@link particle.ctrl.SetSecurityKeyReply.verify|verify} messages.
             * @param message SetSecurityKeyReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetSecurityKeyReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetSecurityKeyReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetSecurityKeyReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetSecurityKeyReply;
        }

        /** Properties of a GetSecurityKeyRequest. */
        interface IGetSecurityKeyRequest {

            /** GetSecurityKeyRequest type */
            type?: (particle.ctrl.SecurityKeyType|null);
        }

        /** Represents a GetSecurityKeyRequest. */
        class GetSecurityKeyRequest implements IGetSecurityKeyRequest {

            /**
             * Constructs a new GetSecurityKeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSecurityKeyRequest);

            /** GetSecurityKeyRequest type. */
            public type: particle.ctrl.SecurityKeyType;

            /**
             * Creates a new GetSecurityKeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSecurityKeyRequest instance
             */
            public static create(properties?: particle.ctrl.IGetSecurityKeyRequest): particle.ctrl.GetSecurityKeyRequest;

            /**
             * Encodes the specified GetSecurityKeyRequest message. Does not implicitly {@link particle.ctrl.GetSecurityKeyRequest.verify|verify} messages.
             * @param message GetSecurityKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSecurityKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSecurityKeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSecurityKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSecurityKeyRequest;
        }

        /** Properties of a GetSecurityKeyReply. */
        interface IGetSecurityKeyReply {

            /** GetSecurityKeyReply data */
            data?: (Uint8Array|null);
        }

        /** Represents a GetSecurityKeyReply. */
        class GetSecurityKeyReply implements IGetSecurityKeyReply {

            /**
             * Constructs a new GetSecurityKeyReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSecurityKeyReply);

            /** GetSecurityKeyReply data. */
            public data: Uint8Array;

            /**
             * Creates a new GetSecurityKeyReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSecurityKeyReply instance
             */
            public static create(properties?: particle.ctrl.IGetSecurityKeyReply): particle.ctrl.GetSecurityKeyReply;

            /**
             * Encodes the specified GetSecurityKeyReply message. Does not implicitly {@link particle.ctrl.GetSecurityKeyReply.verify|verify} messages.
             * @param message GetSecurityKeyReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSecurityKeyReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSecurityKeyReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSecurityKeyReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSecurityKeyReply;
        }

        /** Properties of a SetServerAddressRequest. */
        interface ISetServerAddressRequest {

            /** SetServerAddressRequest protocol */
            protocol?: (particle.ctrl.ServerProtocolType|null);

            /** SetServerAddressRequest address */
            address?: (string|null);

            /** SetServerAddressRequest port */
            port?: (number|null);
        }

        /** Represents a SetServerAddressRequest. */
        class SetServerAddressRequest implements ISetServerAddressRequest {

            /**
             * Constructs a new SetServerAddressRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetServerAddressRequest);

            /** SetServerAddressRequest protocol. */
            public protocol: particle.ctrl.ServerProtocolType;

            /** SetServerAddressRequest address. */
            public address: string;

            /** SetServerAddressRequest port. */
            public port: number;

            /**
             * Creates a new SetServerAddressRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetServerAddressRequest instance
             */
            public static create(properties?: particle.ctrl.ISetServerAddressRequest): particle.ctrl.SetServerAddressRequest;

            /**
             * Encodes the specified SetServerAddressRequest message. Does not implicitly {@link particle.ctrl.SetServerAddressRequest.verify|verify} messages.
             * @param message SetServerAddressRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetServerAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetServerAddressRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetServerAddressRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetServerAddressRequest;
        }

        /** Properties of a SetServerAddressReply. */
        interface ISetServerAddressReply {
        }

        /** Represents a SetServerAddressReply. */
        class SetServerAddressReply implements ISetServerAddressReply {

            /**
             * Constructs a new SetServerAddressReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetServerAddressReply);

            /**
             * Creates a new SetServerAddressReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetServerAddressReply instance
             */
            public static create(properties?: particle.ctrl.ISetServerAddressReply): particle.ctrl.SetServerAddressReply;

            /**
             * Encodes the specified SetServerAddressReply message. Does not implicitly {@link particle.ctrl.SetServerAddressReply.verify|verify} messages.
             * @param message SetServerAddressReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetServerAddressReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetServerAddressReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetServerAddressReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetServerAddressReply;
        }

        /** Properties of a GetServerAddressRequest. */
        interface IGetServerAddressRequest {

            /** GetServerAddressRequest protocol */
            protocol?: (particle.ctrl.ServerProtocolType|null);
        }

        /** Represents a GetServerAddressRequest. */
        class GetServerAddressRequest implements IGetServerAddressRequest {

            /**
             * Constructs a new GetServerAddressRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetServerAddressRequest);

            /** GetServerAddressRequest protocol. */
            public protocol: particle.ctrl.ServerProtocolType;

            /**
             * Creates a new GetServerAddressRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetServerAddressRequest instance
             */
            public static create(properties?: particle.ctrl.IGetServerAddressRequest): particle.ctrl.GetServerAddressRequest;

            /**
             * Encodes the specified GetServerAddressRequest message. Does not implicitly {@link particle.ctrl.GetServerAddressRequest.verify|verify} messages.
             * @param message GetServerAddressRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetServerAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetServerAddressRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetServerAddressRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetServerAddressRequest;
        }

        /** Properties of a GetServerAddressReply. */
        interface IGetServerAddressReply {

            /** GetServerAddressReply address */
            address?: (string|null);

            /** GetServerAddressReply port */
            port?: (number|null);
        }

        /** Represents a GetServerAddressReply. */
        class GetServerAddressReply implements IGetServerAddressReply {

            /**
             * Constructs a new GetServerAddressReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetServerAddressReply);

            /** GetServerAddressReply address. */
            public address: string;

            /** GetServerAddressReply port. */
            public port: number;

            /**
             * Creates a new GetServerAddressReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetServerAddressReply instance
             */
            public static create(properties?: particle.ctrl.IGetServerAddressReply): particle.ctrl.GetServerAddressReply;

            /**
             * Encodes the specified GetServerAddressReply message. Does not implicitly {@link particle.ctrl.GetServerAddressReply.verify|verify} messages.
             * @param message GetServerAddressReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetServerAddressReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetServerAddressReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetServerAddressReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetServerAddressReply;
        }

        /** Properties of a SetServerProtocolRequest. */
        interface ISetServerProtocolRequest {

            /** SetServerProtocolRequest protocol */
            protocol?: (particle.ctrl.ServerProtocolType|null);
        }

        /** Represents a SetServerProtocolRequest. */
        class SetServerProtocolRequest implements ISetServerProtocolRequest {

            /**
             * Constructs a new SetServerProtocolRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetServerProtocolRequest);

            /** SetServerProtocolRequest protocol. */
            public protocol: particle.ctrl.ServerProtocolType;

            /**
             * Creates a new SetServerProtocolRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetServerProtocolRequest instance
             */
            public static create(properties?: particle.ctrl.ISetServerProtocolRequest): particle.ctrl.SetServerProtocolRequest;

            /**
             * Encodes the specified SetServerProtocolRequest message. Does not implicitly {@link particle.ctrl.SetServerProtocolRequest.verify|verify} messages.
             * @param message SetServerProtocolRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetServerProtocolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetServerProtocolRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetServerProtocolRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetServerProtocolRequest;
        }

        /** Properties of a SetServerProtocolReply. */
        interface ISetServerProtocolReply {
        }

        /** Represents a SetServerProtocolReply. */
        class SetServerProtocolReply implements ISetServerProtocolReply {

            /**
             * Constructs a new SetServerProtocolReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetServerProtocolReply);

            /**
             * Creates a new SetServerProtocolReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetServerProtocolReply instance
             */
            public static create(properties?: particle.ctrl.ISetServerProtocolReply): particle.ctrl.SetServerProtocolReply;

            /**
             * Encodes the specified SetServerProtocolReply message. Does not implicitly {@link particle.ctrl.SetServerProtocolReply.verify|verify} messages.
             * @param message SetServerProtocolReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetServerProtocolReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetServerProtocolReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetServerProtocolReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetServerProtocolReply;
        }

        /** Properties of a GetServerProtocolRequest. */
        interface IGetServerProtocolRequest {
        }

        /** Represents a GetServerProtocolRequest. */
        class GetServerProtocolRequest implements IGetServerProtocolRequest {

            /**
             * Constructs a new GetServerProtocolRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetServerProtocolRequest);

            /**
             * Creates a new GetServerProtocolRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetServerProtocolRequest instance
             */
            public static create(properties?: particle.ctrl.IGetServerProtocolRequest): particle.ctrl.GetServerProtocolRequest;

            /**
             * Encodes the specified GetServerProtocolRequest message. Does not implicitly {@link particle.ctrl.GetServerProtocolRequest.verify|verify} messages.
             * @param message GetServerProtocolRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetServerProtocolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetServerProtocolRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetServerProtocolRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetServerProtocolRequest;
        }

        /** Properties of a GetServerProtocolReply. */
        interface IGetServerProtocolReply {

            /** GetServerProtocolReply protocol */
            protocol?: (particle.ctrl.ServerProtocolType|null);
        }

        /** Represents a GetServerProtocolReply. */
        class GetServerProtocolReply implements IGetServerProtocolReply {

            /**
             * Constructs a new GetServerProtocolReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetServerProtocolReply);

            /** GetServerProtocolReply protocol. */
            public protocol: particle.ctrl.ServerProtocolType;

            /**
             * Creates a new GetServerProtocolReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetServerProtocolReply instance
             */
            public static create(properties?: particle.ctrl.IGetServerProtocolReply): particle.ctrl.GetServerProtocolReply;

            /**
             * Encodes the specified GetServerProtocolReply message. Does not implicitly {@link particle.ctrl.GetServerProtocolReply.verify|verify} messages.
             * @param message GetServerProtocolReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetServerProtocolReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetServerProtocolReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetServerProtocolReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetServerProtocolReply;
        }

        /** Properties of a SetSoftApSsidRequest. */
        interface ISetSoftApSsidRequest {

            /** SetSoftApSsidRequest prefix */
            prefix?: (string|null);

            /** SetSoftApSsidRequest suffix */
            suffix?: (string|null);
        }

        /** Represents a SetSoftApSsidRequest. */
        class SetSoftApSsidRequest implements ISetSoftApSsidRequest {

            /**
             * Constructs a new SetSoftApSsidRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetSoftApSsidRequest);

            /** SetSoftApSsidRequest prefix. */
            public prefix: string;

            /** SetSoftApSsidRequest suffix. */
            public suffix: string;

            /**
             * Creates a new SetSoftApSsidRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetSoftApSsidRequest instance
             */
            public static create(properties?: particle.ctrl.ISetSoftApSsidRequest): particle.ctrl.SetSoftApSsidRequest;

            /**
             * Encodes the specified SetSoftApSsidRequest message. Does not implicitly {@link particle.ctrl.SetSoftApSsidRequest.verify|verify} messages.
             * @param message SetSoftApSsidRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetSoftApSsidRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetSoftApSsidRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetSoftApSsidRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetSoftApSsidRequest;
        }

        /** Properties of a SetSoftApSsidReply. */
        interface ISetSoftApSsidReply {
        }

        /** Represents a SetSoftApSsidReply. */
        class SetSoftApSsidReply implements ISetSoftApSsidReply {

            /**
             * Constructs a new SetSoftApSsidReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetSoftApSsidReply);

            /**
             * Creates a new SetSoftApSsidReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetSoftApSsidReply instance
             */
            public static create(properties?: particle.ctrl.ISetSoftApSsidReply): particle.ctrl.SetSoftApSsidReply;

            /**
             * Encodes the specified SetSoftApSsidReply message. Does not implicitly {@link particle.ctrl.SetSoftApSsidReply.verify|verify} messages.
             * @param message SetSoftApSsidReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetSoftApSsidReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetSoftApSsidReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetSoftApSsidReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetSoftApSsidReply;
        }

        /** Properties of a StartListeningModeRequest. */
        interface IStartListeningModeRequest {
        }

        /** Represents a StartListeningModeRequest. */
        class StartListeningModeRequest implements IStartListeningModeRequest {

            /**
             * Constructs a new StartListeningModeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStartListeningModeRequest);

            /**
             * Creates a new StartListeningModeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartListeningModeRequest instance
             */
            public static create(properties?: particle.ctrl.IStartListeningModeRequest): particle.ctrl.StartListeningModeRequest;

            /**
             * Encodes the specified StartListeningModeRequest message. Does not implicitly {@link particle.ctrl.StartListeningModeRequest.verify|verify} messages.
             * @param message StartListeningModeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStartListeningModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartListeningModeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartListeningModeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StartListeningModeRequest;
        }

        /** Properties of a StartListeningModeReply. */
        interface IStartListeningModeReply {
        }

        /** Represents a StartListeningModeReply. */
        class StartListeningModeReply implements IStartListeningModeReply {

            /**
             * Constructs a new StartListeningModeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStartListeningModeReply);

            /**
             * Creates a new StartListeningModeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartListeningModeReply instance
             */
            public static create(properties?: particle.ctrl.IStartListeningModeReply): particle.ctrl.StartListeningModeReply;

            /**
             * Encodes the specified StartListeningModeReply message. Does not implicitly {@link particle.ctrl.StartListeningModeReply.verify|verify} messages.
             * @param message StartListeningModeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStartListeningModeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartListeningModeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartListeningModeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StartListeningModeReply;
        }

        /** Properties of a StopListeningModeRequest. */
        interface IStopListeningModeRequest {
        }

        /** Represents a StopListeningModeRequest. */
        class StopListeningModeRequest implements IStopListeningModeRequest {

            /**
             * Constructs a new StopListeningModeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStopListeningModeRequest);

            /**
             * Creates a new StopListeningModeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopListeningModeRequest instance
             */
            public static create(properties?: particle.ctrl.IStopListeningModeRequest): particle.ctrl.StopListeningModeRequest;

            /**
             * Encodes the specified StopListeningModeRequest message. Does not implicitly {@link particle.ctrl.StopListeningModeRequest.verify|verify} messages.
             * @param message StopListeningModeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStopListeningModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopListeningModeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopListeningModeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StopListeningModeRequest;
        }

        /** Properties of a StopListeningModeReply. */
        interface IStopListeningModeReply {
        }

        /** Represents a StopListeningModeReply. */
        class StopListeningModeReply implements IStopListeningModeReply {

            /**
             * Constructs a new StopListeningModeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStopListeningModeReply);

            /**
             * Creates a new StopListeningModeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopListeningModeReply instance
             */
            public static create(properties?: particle.ctrl.IStopListeningModeReply): particle.ctrl.StopListeningModeReply;

            /**
             * Encodes the specified StopListeningModeReply message. Does not implicitly {@link particle.ctrl.StopListeningModeReply.verify|verify} messages.
             * @param message StopListeningModeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStopListeningModeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopListeningModeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopListeningModeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StopListeningModeReply;
        }

        /** Properties of a GetDeviceModeRequest. */
        interface IGetDeviceModeRequest {
        }

        /** Represents a GetDeviceModeRequest. */
        class GetDeviceModeRequest implements IGetDeviceModeRequest {

            /**
             * Constructs a new GetDeviceModeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetDeviceModeRequest);

            /**
             * Creates a new GetDeviceModeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDeviceModeRequest instance
             */
            public static create(properties?: particle.ctrl.IGetDeviceModeRequest): particle.ctrl.GetDeviceModeRequest;

            /**
             * Encodes the specified GetDeviceModeRequest message. Does not implicitly {@link particle.ctrl.GetDeviceModeRequest.verify|verify} messages.
             * @param message GetDeviceModeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetDeviceModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDeviceModeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDeviceModeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetDeviceModeRequest;
        }

        /** Properties of a GetDeviceModeReply. */
        interface IGetDeviceModeReply {

            /** GetDeviceModeReply mode */
            mode?: (particle.ctrl.DeviceMode|null);
        }

        /** Represents a GetDeviceModeReply. */
        class GetDeviceModeReply implements IGetDeviceModeReply {

            /**
             * Constructs a new GetDeviceModeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetDeviceModeReply);

            /** GetDeviceModeReply mode. */
            public mode: particle.ctrl.DeviceMode;

            /**
             * Creates a new GetDeviceModeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDeviceModeReply instance
             */
            public static create(properties?: particle.ctrl.IGetDeviceModeReply): particle.ctrl.GetDeviceModeReply;

            /**
             * Encodes the specified GetDeviceModeReply message. Does not implicitly {@link particle.ctrl.GetDeviceModeReply.verify|verify} messages.
             * @param message GetDeviceModeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetDeviceModeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDeviceModeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDeviceModeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetDeviceModeReply;
        }

        /** Properties of a SetDeviceSetupDoneRequest. */
        interface ISetDeviceSetupDoneRequest {

            /** SetDeviceSetupDoneRequest done */
            done?: (boolean|null);
        }

        /** Represents a SetDeviceSetupDoneRequest. */
        class SetDeviceSetupDoneRequest implements ISetDeviceSetupDoneRequest {

            /**
             * Constructs a new SetDeviceSetupDoneRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetDeviceSetupDoneRequest);

            /** SetDeviceSetupDoneRequest done. */
            public done: boolean;

            /**
             * Creates a new SetDeviceSetupDoneRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetDeviceSetupDoneRequest instance
             */
            public static create(properties?: particle.ctrl.ISetDeviceSetupDoneRequest): particle.ctrl.SetDeviceSetupDoneRequest;

            /**
             * Encodes the specified SetDeviceSetupDoneRequest message. Does not implicitly {@link particle.ctrl.SetDeviceSetupDoneRequest.verify|verify} messages.
             * @param message SetDeviceSetupDoneRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetDeviceSetupDoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetDeviceSetupDoneRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetDeviceSetupDoneRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetDeviceSetupDoneRequest;
        }

        /** Properties of a SetDeviceSetupDoneReply. */
        interface ISetDeviceSetupDoneReply {
        }

        /** Represents a SetDeviceSetupDoneReply. */
        class SetDeviceSetupDoneReply implements ISetDeviceSetupDoneReply {

            /**
             * Constructs a new SetDeviceSetupDoneReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetDeviceSetupDoneReply);

            /**
             * Creates a new SetDeviceSetupDoneReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetDeviceSetupDoneReply instance
             */
            public static create(properties?: particle.ctrl.ISetDeviceSetupDoneReply): particle.ctrl.SetDeviceSetupDoneReply;

            /**
             * Encodes the specified SetDeviceSetupDoneReply message. Does not implicitly {@link particle.ctrl.SetDeviceSetupDoneReply.verify|verify} messages.
             * @param message SetDeviceSetupDoneReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetDeviceSetupDoneReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetDeviceSetupDoneReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetDeviceSetupDoneReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetDeviceSetupDoneReply;
        }

        /** Properties of an IsDeviceSetupDoneRequest. */
        interface IIsDeviceSetupDoneRequest {
        }

        /** Represents an IsDeviceSetupDoneRequest. */
        class IsDeviceSetupDoneRequest implements IIsDeviceSetupDoneRequest {

            /**
             * Constructs a new IsDeviceSetupDoneRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIsDeviceSetupDoneRequest);

            /**
             * Creates a new IsDeviceSetupDoneRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IsDeviceSetupDoneRequest instance
             */
            public static create(properties?: particle.ctrl.IIsDeviceSetupDoneRequest): particle.ctrl.IsDeviceSetupDoneRequest;

            /**
             * Encodes the specified IsDeviceSetupDoneRequest message. Does not implicitly {@link particle.ctrl.IsDeviceSetupDoneRequest.verify|verify} messages.
             * @param message IsDeviceSetupDoneRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIsDeviceSetupDoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IsDeviceSetupDoneRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IsDeviceSetupDoneRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IsDeviceSetupDoneRequest;
        }

        /** Properties of an IsDeviceSetupDoneReply. */
        interface IIsDeviceSetupDoneReply {

            /** IsDeviceSetupDoneReply done */
            done?: (boolean|null);
        }

        /** Represents an IsDeviceSetupDoneReply. */
        class IsDeviceSetupDoneReply implements IIsDeviceSetupDoneReply {

            /**
             * Constructs a new IsDeviceSetupDoneReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIsDeviceSetupDoneReply);

            /** IsDeviceSetupDoneReply done. */
            public done: boolean;

            /**
             * Creates a new IsDeviceSetupDoneReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IsDeviceSetupDoneReply instance
             */
            public static create(properties?: particle.ctrl.IIsDeviceSetupDoneReply): particle.ctrl.IsDeviceSetupDoneReply;

            /**
             * Encodes the specified IsDeviceSetupDoneReply message. Does not implicitly {@link particle.ctrl.IsDeviceSetupDoneReply.verify|verify} messages.
             * @param message IsDeviceSetupDoneReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIsDeviceSetupDoneReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IsDeviceSetupDoneReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IsDeviceSetupDoneReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IsDeviceSetupDoneReply;
        }

        /** Properties of a SetStartupModeRequest. */
        interface ISetStartupModeRequest {

            /** SetStartupModeRequest mode */
            mode?: (particle.ctrl.DeviceMode|null);
        }

        /** Represents a SetStartupModeRequest. */
        class SetStartupModeRequest implements ISetStartupModeRequest {

            /**
             * Constructs a new SetStartupModeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetStartupModeRequest);

            /** SetStartupModeRequest mode. */
            public mode: particle.ctrl.DeviceMode;

            /**
             * Creates a new SetStartupModeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetStartupModeRequest instance
             */
            public static create(properties?: particle.ctrl.ISetStartupModeRequest): particle.ctrl.SetStartupModeRequest;

            /**
             * Encodes the specified SetStartupModeRequest message. Does not implicitly {@link particle.ctrl.SetStartupModeRequest.verify|verify} messages.
             * @param message SetStartupModeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetStartupModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetStartupModeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetStartupModeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetStartupModeRequest;
        }

        /** Properties of a SetStartupModeReply. */
        interface ISetStartupModeReply {
        }

        /** Represents a SetStartupModeReply. */
        class SetStartupModeReply implements ISetStartupModeReply {

            /**
             * Constructs a new SetStartupModeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetStartupModeReply);

            /**
             * Creates a new SetStartupModeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetStartupModeReply instance
             */
            public static create(properties?: particle.ctrl.ISetStartupModeReply): particle.ctrl.SetStartupModeReply;

            /**
             * Encodes the specified SetStartupModeReply message. Does not implicitly {@link particle.ctrl.SetStartupModeReply.verify|verify} messages.
             * @param message SetStartupModeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetStartupModeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetStartupModeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetStartupModeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetStartupModeReply;
        }

        /** Properties of a SystemResetRequest. */
        interface ISystemResetRequest {
        }

        /** Represents a SystemResetRequest. */
        class SystemResetRequest implements ISystemResetRequest {

            /**
             * Constructs a new SystemResetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISystemResetRequest);

            /**
             * Creates a new SystemResetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemResetRequest instance
             */
            public static create(properties?: particle.ctrl.ISystemResetRequest): particle.ctrl.SystemResetRequest;

            /**
             * Encodes the specified SystemResetRequest message. Does not implicitly {@link particle.ctrl.SystemResetRequest.verify|verify} messages.
             * @param message SystemResetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISystemResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemResetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemResetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SystemResetRequest;
        }

        /** Properties of a SystemResetReply. */
        interface ISystemResetReply {
        }

        /** Represents a SystemResetReply. */
        class SystemResetReply implements ISystemResetReply {

            /**
             * Constructs a new SystemResetReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISystemResetReply);

            /**
             * Creates a new SystemResetReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemResetReply instance
             */
            public static create(properties?: particle.ctrl.ISystemResetReply): particle.ctrl.SystemResetReply;

            /**
             * Encodes the specified SystemResetReply message. Does not implicitly {@link particle.ctrl.SystemResetReply.verify|verify} messages.
             * @param message SystemResetReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISystemResetReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemResetReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemResetReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SystemResetReply;
        }

        /** Properties of a SetFeatureRequest. */
        interface ISetFeatureRequest {

            /** SetFeatureRequest feature */
            feature?: (particle.ctrl.Feature|null);

            /** SetFeatureRequest enabled */
            enabled?: (boolean|null);
        }

        /** Represents a SetFeatureRequest. */
        class SetFeatureRequest implements ISetFeatureRequest {

            /**
             * Constructs a new SetFeatureRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetFeatureRequest);

            /** SetFeatureRequest feature. */
            public feature: particle.ctrl.Feature;

            /** SetFeatureRequest enabled. */
            public enabled: boolean;

            /**
             * Creates a new SetFeatureRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetFeatureRequest instance
             */
            public static create(properties?: particle.ctrl.ISetFeatureRequest): particle.ctrl.SetFeatureRequest;

            /**
             * Encodes the specified SetFeatureRequest message. Does not implicitly {@link particle.ctrl.SetFeatureRequest.verify|verify} messages.
             * @param message SetFeatureRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetFeatureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetFeatureRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetFeatureRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetFeatureRequest;
        }

        /** Properties of a SetFeatureReply. */
        interface ISetFeatureReply {
        }

        /** Represents a SetFeatureReply. */
        class SetFeatureReply implements ISetFeatureReply {

            /**
             * Constructs a new SetFeatureReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetFeatureReply);

            /**
             * Creates a new SetFeatureReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetFeatureReply instance
             */
            public static create(properties?: particle.ctrl.ISetFeatureReply): particle.ctrl.SetFeatureReply;

            /**
             * Encodes the specified SetFeatureReply message. Does not implicitly {@link particle.ctrl.SetFeatureReply.verify|verify} messages.
             * @param message SetFeatureReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetFeatureReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetFeatureReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetFeatureReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetFeatureReply;
        }

        /** Properties of a GetFeatureRequest. */
        interface IGetFeatureRequest {

            /** GetFeatureRequest feature */
            feature?: (particle.ctrl.Feature|null);
        }

        /** Represents a GetFeatureRequest. */
        class GetFeatureRequest implements IGetFeatureRequest {

            /**
             * Constructs a new GetFeatureRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetFeatureRequest);

            /** GetFeatureRequest feature. */
            public feature: particle.ctrl.Feature;

            /**
             * Creates a new GetFeatureRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetFeatureRequest instance
             */
            public static create(properties?: particle.ctrl.IGetFeatureRequest): particle.ctrl.GetFeatureRequest;

            /**
             * Encodes the specified GetFeatureRequest message. Does not implicitly {@link particle.ctrl.GetFeatureRequest.verify|verify} messages.
             * @param message GetFeatureRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetFeatureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetFeatureRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetFeatureRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetFeatureRequest;
        }

        /** Properties of a GetFeatureReply. */
        interface IGetFeatureReply {

            /** GetFeatureReply enabled */
            enabled?: (boolean|null);
        }

        /** Represents a GetFeatureReply. */
        class GetFeatureReply implements IGetFeatureReply {

            /**
             * Constructs a new GetFeatureReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetFeatureReply);

            /** GetFeatureReply enabled. */
            public enabled: boolean;

            /**
             * Creates a new GetFeatureReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetFeatureReply instance
             */
            public static create(properties?: particle.ctrl.IGetFeatureReply): particle.ctrl.GetFeatureReply;

            /**
             * Encodes the specified GetFeatureReply message. Does not implicitly {@link particle.ctrl.GetFeatureReply.verify|verify} messages.
             * @param message GetFeatureReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetFeatureReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetFeatureReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetFeatureReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetFeatureReply;
        }

        /** Properties of a StartNyanSignalRequest. */
        interface IStartNyanSignalRequest {
        }

        /** Represents a StartNyanSignalRequest. */
        class StartNyanSignalRequest implements IStartNyanSignalRequest {

            /**
             * Constructs a new StartNyanSignalRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStartNyanSignalRequest);

            /**
             * Creates a new StartNyanSignalRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartNyanSignalRequest instance
             */
            public static create(properties?: particle.ctrl.IStartNyanSignalRequest): particle.ctrl.StartNyanSignalRequest;

            /**
             * Encodes the specified StartNyanSignalRequest message. Does not implicitly {@link particle.ctrl.StartNyanSignalRequest.verify|verify} messages.
             * @param message StartNyanSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStartNyanSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartNyanSignalRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartNyanSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StartNyanSignalRequest;
        }

        /** Properties of a StartNyanSignalReply. */
        interface IStartNyanSignalReply {
        }

        /** Represents a StartNyanSignalReply. */
        class StartNyanSignalReply implements IStartNyanSignalReply {

            /**
             * Constructs a new StartNyanSignalReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStartNyanSignalReply);

            /**
             * Creates a new StartNyanSignalReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartNyanSignalReply instance
             */
            public static create(properties?: particle.ctrl.IStartNyanSignalReply): particle.ctrl.StartNyanSignalReply;

            /**
             * Encodes the specified StartNyanSignalReply message. Does not implicitly {@link particle.ctrl.StartNyanSignalReply.verify|verify} messages.
             * @param message StartNyanSignalReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStartNyanSignalReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartNyanSignalReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartNyanSignalReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StartNyanSignalReply;
        }

        /** Properties of a StopNyanSignalRequest. */
        interface IStopNyanSignalRequest {
        }

        /** Represents a StopNyanSignalRequest. */
        class StopNyanSignalRequest implements IStopNyanSignalRequest {

            /**
             * Constructs a new StopNyanSignalRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStopNyanSignalRequest);

            /**
             * Creates a new StopNyanSignalRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopNyanSignalRequest instance
             */
            public static create(properties?: particle.ctrl.IStopNyanSignalRequest): particle.ctrl.StopNyanSignalRequest;

            /**
             * Encodes the specified StopNyanSignalRequest message. Does not implicitly {@link particle.ctrl.StopNyanSignalRequest.verify|verify} messages.
             * @param message StopNyanSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStopNyanSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopNyanSignalRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopNyanSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StopNyanSignalRequest;
        }

        /** Properties of a StopNyanSignalReply. */
        interface IStopNyanSignalReply {
        }

        /** Represents a StopNyanSignalReply. */
        class StopNyanSignalReply implements IStopNyanSignalReply {

            /**
             * Constructs a new StopNyanSignalReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStopNyanSignalReply);

            /**
             * Creates a new StopNyanSignalReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopNyanSignalReply instance
             */
            public static create(properties?: particle.ctrl.IStopNyanSignalReply): particle.ctrl.StopNyanSignalReply;

            /**
             * Encodes the specified StopNyanSignalReply message. Does not implicitly {@link particle.ctrl.StopNyanSignalReply.verify|verify} messages.
             * @param message StopNyanSignalReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStopNyanSignalReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopNyanSignalReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopNyanSignalReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StopNyanSignalReply;
        }

        /** Namespace logging. */
        namespace logging {

            /** Logging levels. */
            enum LogLevel {
                INVALID_LOG_LEVEL = 0,
                ALL = 1,
                TRACE = 1,
                INFO = 30,
                WARN = 40,
                ERROR = 50,
                NONE = 70
            }

            /** Log handler types. */
            enum LogHandlerType {
                INVALID_LOG_HANDLER_TYPE = 0,
                DEFAULT_STREAM_HANDLER = 1,
                JSON_STREAM_HANDLER = 2
            }

            /** Stream types. */
            enum StreamType {
                INVALID_STREAM_TYPE = 0,
                USB_SERIAL_STREAM = 1,
                HW_SERIAL_STREAM = 2
            }

            /** Properties of a LogFilter. */
            interface ILogFilter {

                /** LogFilter category */
                category?: (string|null);

                /** LogFilter level */
                level?: (particle.ctrl.logging.LogLevel|null);
            }

            /** Category filter. */
            class LogFilter implements ILogFilter {

                /**
                 * Constructs a new LogFilter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.ILogFilter);

                /** LogFilter category. */
                public category: string;

                /** LogFilter level. */
                public level: particle.ctrl.logging.LogLevel;

                /**
                 * Creates a new LogFilter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogFilter instance
                 */
                public static create(properties?: particle.ctrl.logging.ILogFilter): particle.ctrl.logging.LogFilter;

                /**
                 * Encodes the specified LogFilter message. Does not implicitly {@link particle.ctrl.logging.LogFilter.verify|verify} messages.
                 * @param message LogFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.ILogFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogFilter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.LogFilter;
            }

            /** Properties of a SerialStreamParams. */
            interface ISerialStreamParams {

                /** SerialStreamParams index */
                index?: (number|null);

                /** SerialStreamParams baudRate */
                baudRate?: (number|null);
            }

            /** Serial stream parameters. */
            class SerialStreamParams implements ISerialStreamParams {

                /**
                 * Constructs a new SerialStreamParams.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.ISerialStreamParams);

                /** SerialStreamParams index. */
                public index: number;

                /** SerialStreamParams baudRate. */
                public baudRate: number;

                /**
                 * Creates a new SerialStreamParams instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SerialStreamParams instance
                 */
                public static create(properties?: particle.ctrl.logging.ISerialStreamParams): particle.ctrl.logging.SerialStreamParams;

                /**
                 * Encodes the specified SerialStreamParams message. Does not implicitly {@link particle.ctrl.logging.SerialStreamParams.verify|verify} messages.
                 * @param message SerialStreamParams message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.ISerialStreamParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SerialStreamParams message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SerialStreamParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.SerialStreamParams;
            }

            /** Properties of an AddLogHandlerRequest. */
            interface IAddLogHandlerRequest {

                /** AddLogHandlerRequest id */
                id?: (string|null);

                /** AddLogHandlerRequest handlerType */
                handlerType?: (particle.ctrl.logging.LogHandlerType|null);

                /** AddLogHandlerRequest level */
                level?: (particle.ctrl.logging.LogLevel|null);

                /** AddLogHandlerRequest filters */
                filters?: (particle.ctrl.logging.ILogFilter[]|null);

                /** AddLogHandlerRequest streamType */
                streamType?: (particle.ctrl.logging.StreamType|null);

                /** AddLogHandlerRequest serial */
                serial?: (particle.ctrl.logging.ISerialStreamParams|null);
            }

            /** Add a log handler. */
            class AddLogHandlerRequest implements IAddLogHandlerRequest {

                /**
                 * Constructs a new AddLogHandlerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.IAddLogHandlerRequest);

                /** AddLogHandlerRequest id. */
                public id: string;

                /** AddLogHandlerRequest handlerType. */
                public handlerType: particle.ctrl.logging.LogHandlerType;

                /** AddLogHandlerRequest level. */
                public level: particle.ctrl.logging.LogLevel;

                /** AddLogHandlerRequest filters. */
                public filters: particle.ctrl.logging.ILogFilter[];

                /** AddLogHandlerRequest streamType. */
                public streamType: particle.ctrl.logging.StreamType;

                /** AddLogHandlerRequest serial. */
                public serial?: (particle.ctrl.logging.ISerialStreamParams|null);

                /** AddLogHandlerRequest streamParams. */
                public streamParams?: "serial";

                /**
                 * Creates a new AddLogHandlerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddLogHandlerRequest instance
                 */
                public static create(properties?: particle.ctrl.logging.IAddLogHandlerRequest): particle.ctrl.logging.AddLogHandlerRequest;

                /**
                 * Encodes the specified AddLogHandlerRequest message. Does not implicitly {@link particle.ctrl.logging.AddLogHandlerRequest.verify|verify} messages.
                 * @param message AddLogHandlerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.IAddLogHandlerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddLogHandlerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddLogHandlerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.AddLogHandlerRequest;
            }

            /** Properties of an AddLogHandlerReply. */
            interface IAddLogHandlerReply {
            }

            /** Represents an AddLogHandlerReply. */
            class AddLogHandlerReply implements IAddLogHandlerReply {

                /**
                 * Constructs a new AddLogHandlerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.IAddLogHandlerReply);

                /**
                 * Creates a new AddLogHandlerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddLogHandlerReply instance
                 */
                public static create(properties?: particle.ctrl.logging.IAddLogHandlerReply): particle.ctrl.logging.AddLogHandlerReply;

                /**
                 * Encodes the specified AddLogHandlerReply message. Does not implicitly {@link particle.ctrl.logging.AddLogHandlerReply.verify|verify} messages.
                 * @param message AddLogHandlerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.IAddLogHandlerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddLogHandlerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddLogHandlerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.AddLogHandlerReply;
            }

            /** Properties of a RemoveLogHandlerRequest. */
            interface IRemoveLogHandlerRequest {

                /** RemoveLogHandlerRequest id */
                id?: (string|null);
            }

            /** Remove a log handler. */
            class RemoveLogHandlerRequest implements IRemoveLogHandlerRequest {

                /**
                 * Constructs a new RemoveLogHandlerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.IRemoveLogHandlerRequest);

                /** RemoveLogHandlerRequest id. */
                public id: string;

                /**
                 * Creates a new RemoveLogHandlerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveLogHandlerRequest instance
                 */
                public static create(properties?: particle.ctrl.logging.IRemoveLogHandlerRequest): particle.ctrl.logging.RemoveLogHandlerRequest;

                /**
                 * Encodes the specified RemoveLogHandlerRequest message. Does not implicitly {@link particle.ctrl.logging.RemoveLogHandlerRequest.verify|verify} messages.
                 * @param message RemoveLogHandlerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.IRemoveLogHandlerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveLogHandlerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveLogHandlerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.RemoveLogHandlerRequest;
            }

            /** Properties of a RemoveLogHandlerReply. */
            interface IRemoveLogHandlerReply {
            }

            /** Represents a RemoveLogHandlerReply. */
            class RemoveLogHandlerReply implements IRemoveLogHandlerReply {

                /**
                 * Constructs a new RemoveLogHandlerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.IRemoveLogHandlerReply);

                /**
                 * Creates a new RemoveLogHandlerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveLogHandlerReply instance
                 */
                public static create(properties?: particle.ctrl.logging.IRemoveLogHandlerReply): particle.ctrl.logging.RemoveLogHandlerReply;

                /**
                 * Encodes the specified RemoveLogHandlerReply message. Does not implicitly {@link particle.ctrl.logging.RemoveLogHandlerReply.verify|verify} messages.
                 * @param message RemoveLogHandlerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.IRemoveLogHandlerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveLogHandlerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveLogHandlerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.RemoveLogHandlerReply;
            }

            /** Properties of a GetLogHandlersRequest. */
            interface IGetLogHandlersRequest {
            }

            /** Get the list of active log handlers. */
            class GetLogHandlersRequest implements IGetLogHandlersRequest {

                /**
                 * Constructs a new GetLogHandlersRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.IGetLogHandlersRequest);

                /**
                 * Creates a new GetLogHandlersRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLogHandlersRequest instance
                 */
                public static create(properties?: particle.ctrl.logging.IGetLogHandlersRequest): particle.ctrl.logging.GetLogHandlersRequest;

                /**
                 * Encodes the specified GetLogHandlersRequest message. Does not implicitly {@link particle.ctrl.logging.GetLogHandlersRequest.verify|verify} messages.
                 * @param message GetLogHandlersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.IGetLogHandlersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLogHandlersRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLogHandlersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.GetLogHandlersRequest;
            }

            /** Properties of a GetLogHandlersReply. */
            interface IGetLogHandlersReply {

                /** GetLogHandlersReply handlers */
                handlers?: (particle.ctrl.logging.GetLogHandlersReply.IHandler[]|null);
            }

            /** Represents a GetLogHandlersReply. */
            class GetLogHandlersReply implements IGetLogHandlersReply {

                /**
                 * Constructs a new GetLogHandlersReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.logging.IGetLogHandlersReply);

                /** GetLogHandlersReply handlers. */
                public handlers: particle.ctrl.logging.GetLogHandlersReply.IHandler[];

                /**
                 * Creates a new GetLogHandlersReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLogHandlersReply instance
                 */
                public static create(properties?: particle.ctrl.logging.IGetLogHandlersReply): particle.ctrl.logging.GetLogHandlersReply;

                /**
                 * Encodes the specified GetLogHandlersReply message. Does not implicitly {@link particle.ctrl.logging.GetLogHandlersReply.verify|verify} messages.
                 * @param message GetLogHandlersReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.logging.IGetLogHandlersReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLogHandlersReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLogHandlersReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.GetLogHandlersReply;
            }

            namespace GetLogHandlersReply {

                /** Properties of a Handler. */
                interface IHandler {

                    /** Handler id */
                    id?: (string|null);
                }

                /** Represents a Handler. */
                class Handler implements IHandler {

                    /**
                     * Constructs a new Handler.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.logging.GetLogHandlersReply.IHandler);

                    /** Handler id. */
                    public id: string;

                    /**
                     * Creates a new Handler instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Handler instance
                     */
                    public static create(properties?: particle.ctrl.logging.GetLogHandlersReply.IHandler): particle.ctrl.logging.GetLogHandlersReply.Handler;

                    /**
                     * Encodes the specified Handler message. Does not implicitly {@link particle.ctrl.logging.GetLogHandlersReply.Handler.verify|verify} messages.
                     * @param message Handler message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.logging.GetLogHandlersReply.IHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Handler message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Handler
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.logging.GetLogHandlersReply.Handler;
                }
            }
        }

        /** Namespace mesh. */
        namespace mesh {

            /** Properties of a NetworkInfo. */
            interface INetworkInfo {

                /** NetworkInfo name */
                name?: (string|null);

                /** NetworkInfo extPanId */
                extPanId?: (string|null);

                /** NetworkInfo panId */
                panId?: (number|null);

                /** NetworkInfo channel */
                channel?: (number|null);

                /** NetworkInfo networkId */
                networkId?: (string|null);
            }

            /** Represents a NetworkInfo. */
            class NetworkInfo implements INetworkInfo {

                /**
                 * Constructs a new NetworkInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.INetworkInfo);

                /** NetworkInfo name. */
                public name: string;

                /** NetworkInfo extPanId. */
                public extPanId: string;

                /** NetworkInfo panId. */
                public panId: number;

                /** NetworkInfo channel. */
                public channel: number;

                /** NetworkInfo networkId. */
                public networkId: string;

                /**
                 * Creates a new NetworkInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkInfo instance
                 */
                public static create(properties?: particle.ctrl.mesh.INetworkInfo): particle.ctrl.mesh.NetworkInfo;

                /**
                 * Encodes the specified NetworkInfo message. Does not implicitly {@link particle.ctrl.mesh.NetworkInfo.verify|verify} messages.
                 * @param message NetworkInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.NetworkInfo;
            }

            /** Properties of an AuthRequest. */
            interface IAuthRequest {

                /** AuthRequest password */
                password?: (string|null);
            }

            /** Represents an AuthRequest. */
            class AuthRequest implements IAuthRequest {

                /**
                 * Constructs a new AuthRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IAuthRequest);

                /** AuthRequest password. */
                public password: string;

                /**
                 * Creates a new AuthRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IAuthRequest): particle.ctrl.mesh.AuthRequest;

                /**
                 * Encodes the specified AuthRequest message. Does not implicitly {@link particle.ctrl.mesh.AuthRequest.verify|verify} messages.
                 * @param message AuthRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.AuthRequest;
            }

            /** Properties of an AuthReply. */
            interface IAuthReply {
            }

            /** Represents an AuthReply. */
            class AuthReply implements IAuthReply {

                /**
                 * Constructs a new AuthReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IAuthReply);

                /**
                 * Creates a new AuthReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IAuthReply): particle.ctrl.mesh.AuthReply;

                /**
                 * Encodes the specified AuthReply message. Does not implicitly {@link particle.ctrl.mesh.AuthReply.verify|verify} messages.
                 * @param message AuthReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IAuthReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.AuthReply;
            }

            /** Properties of a CreateNetworkRequest. */
            interface ICreateNetworkRequest {

                /** CreateNetworkRequest name */
                name?: (string|null);

                /** CreateNetworkRequest password */
                password?: (string|null);

                /** CreateNetworkRequest channel */
                channel?: (number|null);

                /** CreateNetworkRequest networkId */
                networkId?: (string|null);
            }

            /** Represents a CreateNetworkRequest. */
            class CreateNetworkRequest implements ICreateNetworkRequest {

                /**
                 * Constructs a new CreateNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.ICreateNetworkRequest);

                /** CreateNetworkRequest name. */
                public name: string;

                /** CreateNetworkRequest password. */
                public password: string;

                /** CreateNetworkRequest channel. */
                public channel: number;

                /** CreateNetworkRequest networkId. */
                public networkId: string;

                /**
                 * Creates a new CreateNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.ICreateNetworkRequest): particle.ctrl.mesh.CreateNetworkRequest;

                /**
                 * Encodes the specified CreateNetworkRequest message. Does not implicitly {@link particle.ctrl.mesh.CreateNetworkRequest.verify|verify} messages.
                 * @param message CreateNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.ICreateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.CreateNetworkRequest;
            }

            /** Properties of a CreateNetworkReply. */
            interface ICreateNetworkReply {

                /** CreateNetworkReply network */
                network?: (particle.ctrl.mesh.INetworkInfo|null);
            }

            /** Represents a CreateNetworkReply. */
            class CreateNetworkReply implements ICreateNetworkReply {

                /**
                 * Constructs a new CreateNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.ICreateNetworkReply);

                /** CreateNetworkReply network. */
                public network?: (particle.ctrl.mesh.INetworkInfo|null);

                /**
                 * Creates a new CreateNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.ICreateNetworkReply): particle.ctrl.mesh.CreateNetworkReply;

                /**
                 * Encodes the specified CreateNetworkReply message. Does not implicitly {@link particle.ctrl.mesh.CreateNetworkReply.verify|verify} messages.
                 * @param message CreateNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.ICreateNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.CreateNetworkReply;
            }

            /** Properties of a StartCommissionerRequest. */
            interface IStartCommissionerRequest {

                /** StartCommissionerRequest timeout */
                timeout?: (number|null);
            }

            /** Represents a StartCommissionerRequest. */
            class StartCommissionerRequest implements IStartCommissionerRequest {

                /**
                 * Constructs a new StartCommissionerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IStartCommissionerRequest);

                /** StartCommissionerRequest timeout. */
                public timeout: number;

                /**
                 * Creates a new StartCommissionerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartCommissionerRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IStartCommissionerRequest): particle.ctrl.mesh.StartCommissionerRequest;

                /**
                 * Encodes the specified StartCommissionerRequest message. Does not implicitly {@link particle.ctrl.mesh.StartCommissionerRequest.verify|verify} messages.
                 * @param message StartCommissionerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IStartCommissionerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StartCommissionerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartCommissionerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.StartCommissionerRequest;
            }

            /** Properties of a StartCommissionerReply. */
            interface IStartCommissionerReply {
            }

            /** Represents a StartCommissionerReply. */
            class StartCommissionerReply implements IStartCommissionerReply {

                /**
                 * Constructs a new StartCommissionerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IStartCommissionerReply);

                /**
                 * Creates a new StartCommissionerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartCommissionerReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IStartCommissionerReply): particle.ctrl.mesh.StartCommissionerReply;

                /**
                 * Encodes the specified StartCommissionerReply message. Does not implicitly {@link particle.ctrl.mesh.StartCommissionerReply.verify|verify} messages.
                 * @param message StartCommissionerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IStartCommissionerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StartCommissionerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartCommissionerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.StartCommissionerReply;
            }

            /** Properties of a StopCommissionerRequest. */
            interface IStopCommissionerRequest {
            }

            /** Represents a StopCommissionerRequest. */
            class StopCommissionerRequest implements IStopCommissionerRequest {

                /**
                 * Constructs a new StopCommissionerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IStopCommissionerRequest);

                /**
                 * Creates a new StopCommissionerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StopCommissionerRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IStopCommissionerRequest): particle.ctrl.mesh.StopCommissionerRequest;

                /**
                 * Encodes the specified StopCommissionerRequest message. Does not implicitly {@link particle.ctrl.mesh.StopCommissionerRequest.verify|verify} messages.
                 * @param message StopCommissionerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IStopCommissionerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StopCommissionerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StopCommissionerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.StopCommissionerRequest;
            }

            /** Properties of a StopCommissionerReply. */
            interface IStopCommissionerReply {
            }

            /** Represents a StopCommissionerReply. */
            class StopCommissionerReply implements IStopCommissionerReply {

                /**
                 * Constructs a new StopCommissionerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IStopCommissionerReply);

                /**
                 * Creates a new StopCommissionerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StopCommissionerReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IStopCommissionerReply): particle.ctrl.mesh.StopCommissionerReply;

                /**
                 * Encodes the specified StopCommissionerReply message. Does not implicitly {@link particle.ctrl.mesh.StopCommissionerReply.verify|verify} messages.
                 * @param message StopCommissionerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IStopCommissionerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StopCommissionerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StopCommissionerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.StopCommissionerReply;
            }

            /** Properties of a PrepareJoinerRequest. */
            interface IPrepareJoinerRequest {

                /** PrepareJoinerRequest network */
                network?: (particle.ctrl.mesh.INetworkInfo|null);
            }

            /** Represents a PrepareJoinerRequest. */
            class PrepareJoinerRequest implements IPrepareJoinerRequest {

                /**
                 * Constructs a new PrepareJoinerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IPrepareJoinerRequest);

                /** PrepareJoinerRequest network. */
                public network?: (particle.ctrl.mesh.INetworkInfo|null);

                /**
                 * Creates a new PrepareJoinerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrepareJoinerRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IPrepareJoinerRequest): particle.ctrl.mesh.PrepareJoinerRequest;

                /**
                 * Encodes the specified PrepareJoinerRequest message. Does not implicitly {@link particle.ctrl.mesh.PrepareJoinerRequest.verify|verify} messages.
                 * @param message PrepareJoinerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IPrepareJoinerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrepareJoinerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrepareJoinerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.PrepareJoinerRequest;
            }

            /** Properties of a PrepareJoinerReply. */
            interface IPrepareJoinerReply {

                /** PrepareJoinerReply eui64 */
                eui64?: (string|null);

                /** PrepareJoinerReply password */
                password?: (string|null);
            }

            /** Represents a PrepareJoinerReply. */
            class PrepareJoinerReply implements IPrepareJoinerReply {

                /**
                 * Constructs a new PrepareJoinerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IPrepareJoinerReply);

                /** PrepareJoinerReply eui64. */
                public eui64: string;

                /** PrepareJoinerReply password. */
                public password: string;

                /**
                 * Creates a new PrepareJoinerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrepareJoinerReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IPrepareJoinerReply): particle.ctrl.mesh.PrepareJoinerReply;

                /**
                 * Encodes the specified PrepareJoinerReply message. Does not implicitly {@link particle.ctrl.mesh.PrepareJoinerReply.verify|verify} messages.
                 * @param message PrepareJoinerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IPrepareJoinerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrepareJoinerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrepareJoinerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.PrepareJoinerReply;
            }

            /** Properties of an AddJoinerRequest. */
            interface IAddJoinerRequest {

                /** AddJoinerRequest eui64 */
                eui64?: (string|null);

                /** AddJoinerRequest password */
                password?: (string|null);

                /** AddJoinerRequest timeout */
                timeout?: (number|null);
            }

            /** Represents an AddJoinerRequest. */
            class AddJoinerRequest implements IAddJoinerRequest {

                /**
                 * Constructs a new AddJoinerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IAddJoinerRequest);

                /** AddJoinerRequest eui64. */
                public eui64: string;

                /** AddJoinerRequest password. */
                public password: string;

                /** AddJoinerRequest timeout. */
                public timeout: number;

                /**
                 * Creates a new AddJoinerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddJoinerRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IAddJoinerRequest): particle.ctrl.mesh.AddJoinerRequest;

                /**
                 * Encodes the specified AddJoinerRequest message. Does not implicitly {@link particle.ctrl.mesh.AddJoinerRequest.verify|verify} messages.
                 * @param message AddJoinerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IAddJoinerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddJoinerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddJoinerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.AddJoinerRequest;
            }

            /** Properties of an AddJoinerReply. */
            interface IAddJoinerReply {
            }

            /** Represents an AddJoinerReply. */
            class AddJoinerReply implements IAddJoinerReply {

                /**
                 * Constructs a new AddJoinerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IAddJoinerReply);

                /**
                 * Creates a new AddJoinerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddJoinerReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IAddJoinerReply): particle.ctrl.mesh.AddJoinerReply;

                /**
                 * Encodes the specified AddJoinerReply message. Does not implicitly {@link particle.ctrl.mesh.AddJoinerReply.verify|verify} messages.
                 * @param message AddJoinerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IAddJoinerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddJoinerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddJoinerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.AddJoinerReply;
            }

            /** Properties of a RemoveJoinerRequest. */
            interface IRemoveJoinerRequest {

                /** RemoveJoinerRequest eui64 */
                eui64?: (string|null);
            }

            /** Represents a RemoveJoinerRequest. */
            class RemoveJoinerRequest implements IRemoveJoinerRequest {

                /**
                 * Constructs a new RemoveJoinerRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IRemoveJoinerRequest);

                /** RemoveJoinerRequest eui64. */
                public eui64: string;

                /**
                 * Creates a new RemoveJoinerRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveJoinerRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IRemoveJoinerRequest): particle.ctrl.mesh.RemoveJoinerRequest;

                /**
                 * Encodes the specified RemoveJoinerRequest message. Does not implicitly {@link particle.ctrl.mesh.RemoveJoinerRequest.verify|verify} messages.
                 * @param message RemoveJoinerRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IRemoveJoinerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveJoinerRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveJoinerRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.RemoveJoinerRequest;
            }

            /** Properties of a RemoveJoinerReply. */
            interface IRemoveJoinerReply {
            }

            /** Represents a RemoveJoinerReply. */
            class RemoveJoinerReply implements IRemoveJoinerReply {

                /**
                 * Constructs a new RemoveJoinerReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IRemoveJoinerReply);

                /**
                 * Creates a new RemoveJoinerReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveJoinerReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IRemoveJoinerReply): particle.ctrl.mesh.RemoveJoinerReply;

                /**
                 * Encodes the specified RemoveJoinerReply message. Does not implicitly {@link particle.ctrl.mesh.RemoveJoinerReply.verify|verify} messages.
                 * @param message RemoveJoinerReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IRemoveJoinerReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveJoinerReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveJoinerReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.RemoveJoinerReply;
            }

            /** Properties of a JoinNetworkRequest. */
            interface IJoinNetworkRequest {

                /** JoinNetworkRequest timeout */
                timeout?: (number|null);
            }

            /** Represents a JoinNetworkRequest. */
            class JoinNetworkRequest implements IJoinNetworkRequest {

                /**
                 * Constructs a new JoinNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IJoinNetworkRequest);

                /** JoinNetworkRequest timeout. */
                public timeout: number;

                /**
                 * Creates a new JoinNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JoinNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IJoinNetworkRequest): particle.ctrl.mesh.JoinNetworkRequest;

                /**
                 * Encodes the specified JoinNetworkRequest message. Does not implicitly {@link particle.ctrl.mesh.JoinNetworkRequest.verify|verify} messages.
                 * @param message JoinNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IJoinNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JoinNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JoinNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.JoinNetworkRequest;
            }

            /** Properties of a JoinNetworkReply. */
            interface IJoinNetworkReply {
            }

            /** Represents a JoinNetworkReply. */
            class JoinNetworkReply implements IJoinNetworkReply {

                /**
                 * Constructs a new JoinNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IJoinNetworkReply);

                /**
                 * Creates a new JoinNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JoinNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IJoinNetworkReply): particle.ctrl.mesh.JoinNetworkReply;

                /**
                 * Encodes the specified JoinNetworkReply message. Does not implicitly {@link particle.ctrl.mesh.JoinNetworkReply.verify|verify} messages.
                 * @param message JoinNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IJoinNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JoinNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JoinNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.JoinNetworkReply;
            }

            /** Properties of a LeaveNetworkRequest. */
            interface ILeaveNetworkRequest {
            }

            /** Represents a LeaveNetworkRequest. */
            class LeaveNetworkRequest implements ILeaveNetworkRequest {

                /**
                 * Constructs a new LeaveNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.ILeaveNetworkRequest);

                /**
                 * Creates a new LeaveNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LeaveNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.ILeaveNetworkRequest): particle.ctrl.mesh.LeaveNetworkRequest;

                /**
                 * Encodes the specified LeaveNetworkRequest message. Does not implicitly {@link particle.ctrl.mesh.LeaveNetworkRequest.verify|verify} messages.
                 * @param message LeaveNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.ILeaveNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LeaveNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LeaveNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.LeaveNetworkRequest;
            }

            /** Properties of a LeaveNetworkReply. */
            interface ILeaveNetworkReply {
            }

            /** Represents a LeaveNetworkReply. */
            class LeaveNetworkReply implements ILeaveNetworkReply {

                /**
                 * Constructs a new LeaveNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.ILeaveNetworkReply);

                /**
                 * Creates a new LeaveNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LeaveNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.ILeaveNetworkReply): particle.ctrl.mesh.LeaveNetworkReply;

                /**
                 * Encodes the specified LeaveNetworkReply message. Does not implicitly {@link particle.ctrl.mesh.LeaveNetworkReply.verify|verify} messages.
                 * @param message LeaveNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.ILeaveNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LeaveNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LeaveNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.LeaveNetworkReply;
            }

            /** Properties of a GetNetworkInfoRequest. */
            interface IGetNetworkInfoRequest {
            }

            /** Represents a GetNetworkInfoRequest. */
            class GetNetworkInfoRequest implements IGetNetworkInfoRequest {

                /**
                 * Constructs a new GetNetworkInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IGetNetworkInfoRequest);

                /**
                 * Creates a new GetNetworkInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNetworkInfoRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IGetNetworkInfoRequest): particle.ctrl.mesh.GetNetworkInfoRequest;

                /**
                 * Encodes the specified GetNetworkInfoRequest message. Does not implicitly {@link particle.ctrl.mesh.GetNetworkInfoRequest.verify|verify} messages.
                 * @param message GetNetworkInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IGetNetworkInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNetworkInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNetworkInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.GetNetworkInfoRequest;
            }

            /** Properties of a GetNetworkInfoReply. */
            interface IGetNetworkInfoReply {

                /** GetNetworkInfoReply network */
                network?: (particle.ctrl.mesh.INetworkInfo|null);
            }

            /** Represents a GetNetworkInfoReply. */
            class GetNetworkInfoReply implements IGetNetworkInfoReply {

                /**
                 * Constructs a new GetNetworkInfoReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IGetNetworkInfoReply);

                /** GetNetworkInfoReply network. */
                public network?: (particle.ctrl.mesh.INetworkInfo|null);

                /**
                 * Creates a new GetNetworkInfoReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNetworkInfoReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IGetNetworkInfoReply): particle.ctrl.mesh.GetNetworkInfoReply;

                /**
                 * Encodes the specified GetNetworkInfoReply message. Does not implicitly {@link particle.ctrl.mesh.GetNetworkInfoReply.verify|verify} messages.
                 * @param message GetNetworkInfoReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IGetNetworkInfoReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNetworkInfoReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNetworkInfoReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.GetNetworkInfoReply;
            }

            /** Properties of a ScanNetworksRequest. */
            interface IScanNetworksRequest {

                /** ScanNetworksRequest duration */
                duration?: (number|null);
            }

            /** Represents a ScanNetworksRequest. */
            class ScanNetworksRequest implements IScanNetworksRequest {

                /**
                 * Constructs a new ScanNetworksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IScanNetworksRequest);

                /** ScanNetworksRequest duration. */
                public duration: number;

                /**
                 * Creates a new ScanNetworksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScanNetworksRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IScanNetworksRequest): particle.ctrl.mesh.ScanNetworksRequest;

                /**
                 * Encodes the specified ScanNetworksRequest message. Does not implicitly {@link particle.ctrl.mesh.ScanNetworksRequest.verify|verify} messages.
                 * @param message ScanNetworksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IScanNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScanNetworksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScanNetworksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.ScanNetworksRequest;
            }

            /** Properties of a ScanNetworksReply. */
            interface IScanNetworksReply {

                /** ScanNetworksReply networks */
                networks?: (particle.ctrl.mesh.INetworkInfo[]|null);
            }

            /** Represents a ScanNetworksReply. */
            class ScanNetworksReply implements IScanNetworksReply {

                /**
                 * Constructs a new ScanNetworksReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IScanNetworksReply);

                /** ScanNetworksReply networks. */
                public networks: particle.ctrl.mesh.INetworkInfo[];

                /**
                 * Creates a new ScanNetworksReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScanNetworksReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IScanNetworksReply): particle.ctrl.mesh.ScanNetworksReply;

                /**
                 * Encodes the specified ScanNetworksReply message. Does not implicitly {@link particle.ctrl.mesh.ScanNetworksReply.verify|verify} messages.
                 * @param message ScanNetworksReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IScanNetworksReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScanNetworksReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScanNetworksReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.ScanNetworksReply;
            }

            /** DiagnosticType enum. */
            enum DiagnosticType {
                MAC_EXTENDED_ADDRESS = 0,
                RLOC = 1,
                MAC_ADDRESS = 1,
                MODE = 2,
                TIMEOUT = 3,
                CONNECTIVITY = 4,
                ROUTE64 = 5,
                LEADER_DATA = 6,
                NETWORK_DATA = 7,
                IPV6_ADDRESS_LIST = 8,
                MAC_COUNTERS = 9,
                BATTERY_LEVEL = 14,
                SUPPLY_VOLTAGE = 15,
                CHILD_TABLE = 16,
                CHANNEL_PAGES = 17,
                TYPE_LIST = 18,
                MAX_CHILD_TIMEOUT = 19
            }

            /** Properties of a DiagnosticInfo. */
            interface IDiagnosticInfo {

                /** DiagnosticInfo extMacAddress */
                extMacAddress?: (Uint8Array|null);

                /** DiagnosticInfo rloc */
                rloc?: (number|null);

                /** DiagnosticInfo mode */
                mode?: (number|null);

                /** DiagnosticInfo timeout */
                timeout?: (number|null);

                /** DiagnosticInfo connectivity */
                connectivity?: (particle.ctrl.mesh.DiagnosticInfo.IConnectivity|null);

                /** DiagnosticInfo route64 */
                route64?: (particle.ctrl.mesh.DiagnosticInfo.IRoute64|null);

                /** DiagnosticInfo leaderData */
                leaderData?: (particle.ctrl.mesh.DiagnosticInfo.ILeaderData|null);

                /** DiagnosticInfo networkData */
                networkData?: (particle.ctrl.mesh.DiagnosticInfo.INetworkData|null);

                /** DiagnosticInfo ipv6AddressList */
                ipv6AddressList?: (particle.ctrl.IIpv6Address[]|null);

                /** DiagnosticInfo macCounters */
                macCounters?: (particle.ctrl.mesh.DiagnosticInfo.IMacCounters|null);

                /** DiagnosticInfo batteryLevel */
                batteryLevel?: (number|null);

                /** DiagnosticInfo supplyVoltage */
                supplyVoltage?: (number|null);

                /** DiagnosticInfo childTable */
                childTable?: (particle.ctrl.mesh.DiagnosticInfo.IChildTable|null);

                /** DiagnosticInfo channelPages */
                channelPages?: (Uint8Array|null);

                /** DiagnosticInfo typeList */
                typeList?: (particle.ctrl.mesh.DiagnosticType[]|null);

                /** DiagnosticInfo maxChildTimeout */
                maxChildTimeout?: (number|null);

                /** DiagnosticInfo deviceId */
                deviceId?: (Uint8Array|null);
            }

            /** Represents a DiagnosticInfo. */
            class DiagnosticInfo implements IDiagnosticInfo {

                /**
                 * Constructs a new DiagnosticInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IDiagnosticInfo);

                /** DiagnosticInfo extMacAddress. */
                public extMacAddress: Uint8Array;

                /** DiagnosticInfo rloc. */
                public rloc: number;

                /** DiagnosticInfo mode. */
                public mode: number;

                /** DiagnosticInfo timeout. */
                public timeout: number;

                /** DiagnosticInfo connectivity. */
                public connectivity?: (particle.ctrl.mesh.DiagnosticInfo.IConnectivity|null);

                /** DiagnosticInfo route64. */
                public route64?: (particle.ctrl.mesh.DiagnosticInfo.IRoute64|null);

                /** DiagnosticInfo leaderData. */
                public leaderData?: (particle.ctrl.mesh.DiagnosticInfo.ILeaderData|null);

                /** DiagnosticInfo networkData. */
                public networkData?: (particle.ctrl.mesh.DiagnosticInfo.INetworkData|null);

                /** DiagnosticInfo ipv6AddressList. */
                public ipv6AddressList: particle.ctrl.IIpv6Address[];

                /** DiagnosticInfo macCounters. */
                public macCounters?: (particle.ctrl.mesh.DiagnosticInfo.IMacCounters|null);

                /** DiagnosticInfo batteryLevel. */
                public batteryLevel: number;

                /** DiagnosticInfo supplyVoltage. */
                public supplyVoltage: number;

                /** DiagnosticInfo childTable. */
                public childTable?: (particle.ctrl.mesh.DiagnosticInfo.IChildTable|null);

                /** DiagnosticInfo channelPages. */
                public channelPages: Uint8Array;

                /** DiagnosticInfo typeList. */
                public typeList: particle.ctrl.mesh.DiagnosticType[];

                /** DiagnosticInfo maxChildTimeout. */
                public maxChildTimeout: number;

                /** DiagnosticInfo deviceId. */
                public deviceId: Uint8Array;

                /**
                 * Creates a new DiagnosticInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DiagnosticInfo instance
                 */
                public static create(properties?: particle.ctrl.mesh.IDiagnosticInfo): particle.ctrl.mesh.DiagnosticInfo;

                /**
                 * Encodes the specified DiagnosticInfo message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.verify|verify} messages.
                 * @param message DiagnosticInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IDiagnosticInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DiagnosticInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DiagnosticInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo;
            }

            namespace DiagnosticInfo {

                /** Mode enum. */
                enum Mode {
                    INVALID = 0,
                    RECEIVER_ON_WHEN_IDLE = 16,
                    SECURE_DATA_REQUESTS = 32,
                    DEVICE_TYPE = 48,
                    DEVICE_TYPE_FTD = 48,
                    NETWORK_DATA = 64,
                    NETWORK_DATA_FULL = 64
                }

                /** Properties of a Connectivity. */
                interface IConnectivity {

                    /** Connectivity parentPriority */
                    parentPriority?: (number|null);

                    /** Connectivity linkQuality_1 */
                    linkQuality_1?: (number|null);

                    /** Connectivity linkQuality_2 */
                    linkQuality_2?: (number|null);

                    /** Connectivity linkQuality_3 */
                    linkQuality_3?: (number|null);

                    /** Connectivity leaderCost */
                    leaderCost?: (number|null);

                    /** Connectivity idSequence */
                    idSequence?: (number|null);

                    /** Connectivity activeRouters */
                    activeRouters?: (number|null);

                    /** Connectivity sedBufferSize */
                    sedBufferSize?: (number|null);

                    /** Connectivity sedDatagramCount */
                    sedDatagramCount?: (number|null);
                }

                /** Represents a Connectivity. */
                class Connectivity implements IConnectivity {

                    /**
                     * Constructs a new Connectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.IConnectivity);

                    /** Connectivity parentPriority. */
                    public parentPriority: number;

                    /** Connectivity linkQuality_1. */
                    public linkQuality_1: number;

                    /** Connectivity linkQuality_2. */
                    public linkQuality_2: number;

                    /** Connectivity linkQuality_3. */
                    public linkQuality_3: number;

                    /** Connectivity leaderCost. */
                    public leaderCost: number;

                    /** Connectivity idSequence. */
                    public idSequence: number;

                    /** Connectivity activeRouters. */
                    public activeRouters: number;

                    /** Connectivity sedBufferSize. */
                    public sedBufferSize: number;

                    /** Connectivity sedDatagramCount. */
                    public sedDatagramCount: number;

                    /**
                     * Creates a new Connectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Connectivity instance
                     */
                    public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.IConnectivity): particle.ctrl.mesh.DiagnosticInfo.Connectivity;

                    /**
                     * Encodes the specified Connectivity message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.Connectivity.verify|verify} messages.
                     * @param message Connectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.mesh.DiagnosticInfo.IConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Connectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Connectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.Connectivity;
                }

                /** Properties of a Route64. */
                interface IRoute64 {

                    /** Route64 idSequence */
                    idSequence?: (number|null);

                    /** Route64 routes */
                    routes?: (particle.ctrl.mesh.DiagnosticInfo.Route64.IRouteData[]|null);
                }

                /** Represents a Route64. */
                class Route64 implements IRoute64 {

                    /**
                     * Constructs a new Route64.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.IRoute64);

                    /** Route64 idSequence. */
                    public idSequence: number;

                    /** Route64 routes. */
                    public routes: particle.ctrl.mesh.DiagnosticInfo.Route64.IRouteData[];

                    /**
                     * Creates a new Route64 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Route64 instance
                     */
                    public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.IRoute64): particle.ctrl.mesh.DiagnosticInfo.Route64;

                    /**
                     * Encodes the specified Route64 message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.Route64.verify|verify} messages.
                     * @param message Route64 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.mesh.DiagnosticInfo.IRoute64, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Route64 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Route64
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.Route64;
                }

                namespace Route64 {

                    /** Properties of a RouteData. */
                    interface IRouteData {

                        /** RouteData routerRloc */
                        routerRloc?: (number|null);

                        /** RouteData linkQualityOut */
                        linkQualityOut?: (number|null);

                        /** RouteData linkQualityIn */
                        linkQualityIn?: (number|null);

                        /** RouteData routeCost */
                        routeCost?: (number|null);
                    }

                    /** Represents a RouteData. */
                    class RouteData implements IRouteData {

                        /**
                         * Constructs a new RouteData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.Route64.IRouteData);

                        /** RouteData routerRloc. */
                        public routerRloc: number;

                        /** RouteData linkQualityOut. */
                        public linkQualityOut: number;

                        /** RouteData linkQualityIn. */
                        public linkQualityIn: number;

                        /** RouteData routeCost. */
                        public routeCost: number;

                        /**
                         * Creates a new RouteData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteData instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.Route64.IRouteData): particle.ctrl.mesh.DiagnosticInfo.Route64.RouteData;

                        /**
                         * Encodes the specified RouteData message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.Route64.RouteData.verify|verify} messages.
                         * @param message RouteData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.Route64.IRouteData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.Route64.RouteData;
                    }
                }

                /** Properties of a LeaderData. */
                interface ILeaderData {

                    /** LeaderData partitionId */
                    partitionId?: (number|null);

                    /** LeaderData weighting */
                    weighting?: (number|null);

                    /** LeaderData dataVersion */
                    dataVersion?: (number|null);

                    /** LeaderData stableDataVersion */
                    stableDataVersion?: (number|null);

                    /** LeaderData leaderRloc */
                    leaderRloc?: (number|null);
                }

                /** Represents a LeaderData. */
                class LeaderData implements ILeaderData {

                    /**
                     * Constructs a new LeaderData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.ILeaderData);

                    /** LeaderData partitionId. */
                    public partitionId: number;

                    /** LeaderData weighting. */
                    public weighting: number;

                    /** LeaderData dataVersion. */
                    public dataVersion: number;

                    /** LeaderData stableDataVersion. */
                    public stableDataVersion: number;

                    /** LeaderData leaderRloc. */
                    public leaderRloc: number;

                    /**
                     * Creates a new LeaderData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LeaderData instance
                     */
                    public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.ILeaderData): particle.ctrl.mesh.DiagnosticInfo.LeaderData;

                    /**
                     * Encodes the specified LeaderData message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.LeaderData.verify|verify} messages.
                     * @param message LeaderData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.mesh.DiagnosticInfo.ILeaderData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LeaderData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LeaderData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.LeaderData;
                }

                /** RoutePreference enum. */
                enum RoutePreference {
                    MEDIUM = 0,
                    HIGH = 1,
                    LOW = -1
                }

                /** Properties of a NetworkData. */
                interface INetworkData {

                    /** NetworkData stable */
                    stable?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData|null);

                    /** NetworkData temporary */
                    temporary?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData|null);
                }

                /** Represents a NetworkData. */
                class NetworkData implements INetworkData {

                    /**
                     * Constructs a new NetworkData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.INetworkData);

                    /** NetworkData stable. */
                    public stable?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData|null);

                    /** NetworkData temporary. */
                    public temporary?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData|null);

                    /**
                     * Creates a new NetworkData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkData instance
                     */
                    public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.INetworkData): particle.ctrl.mesh.DiagnosticInfo.NetworkData;

                    /**
                     * Encodes the specified NetworkData message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.verify|verify} messages.
                     * @param message NetworkData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.mesh.DiagnosticInfo.INetworkData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData;
                }

                namespace NetworkData {

                    /** Properties of a HasRoute. */
                    interface IHasRoute {

                        /** HasRoute entries */
                        entries?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.IHasRouteEntry[]|null);
                    }

                    /** Represents a HasRoute. */
                    class HasRoute implements IHasRoute {

                        /**
                         * Constructs a new HasRoute.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IHasRoute);

                        /** HasRoute entries. */
                        public entries: particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.IHasRouteEntry[];

                        /**
                         * Creates a new HasRoute instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HasRoute instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IHasRoute): particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute;

                        /**
                         * Encodes the specified HasRoute message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.verify|verify} messages.
                         * @param message HasRoute message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IHasRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HasRoute message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HasRoute
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute;
                    }

                    namespace HasRoute {

                        /** Properties of a HasRouteEntry. */
                        interface IHasRouteEntry {

                            /** HasRouteEntry rloc */
                            rloc?: (number|null);

                            /** HasRouteEntry preference */
                            preference?: (particle.ctrl.mesh.DiagnosticInfo.RoutePreference|null);
                        }

                        /** Represents a HasRouteEntry. */
                        class HasRouteEntry implements IHasRouteEntry {

                            /**
                             * Constructs a new HasRouteEntry.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.IHasRouteEntry);

                            /** HasRouteEntry rloc. */
                            public rloc: number;

                            /** HasRouteEntry preference. */
                            public preference: particle.ctrl.mesh.DiagnosticInfo.RoutePreference;

                            /**
                             * Creates a new HasRouteEntry instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HasRouteEntry instance
                             */
                            public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.IHasRouteEntry): particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.HasRouteEntry;

                            /**
                             * Encodes the specified HasRouteEntry message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.HasRouteEntry.verify|verify} messages.
                             * @param message HasRouteEntry message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.IHasRouteEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HasRouteEntry message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HasRouteEntry
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.HasRoute.HasRouteEntry;
                        }
                    }

                    /** Properties of a BorderRouter. */
                    interface IBorderRouter {

                        /** BorderRouter entries */
                        entries?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.IBorderRouterEntry[]|null);
                    }

                    /** Represents a BorderRouter. */
                    class BorderRouter implements IBorderRouter {

                        /**
                         * Constructs a new BorderRouter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IBorderRouter);

                        /** BorderRouter entries. */
                        public entries: particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.IBorderRouterEntry[];

                        /**
                         * Creates a new BorderRouter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BorderRouter instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IBorderRouter): particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter;

                        /**
                         * Encodes the specified BorderRouter message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.verify|verify} messages.
                         * @param message BorderRouter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IBorderRouter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BorderRouter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BorderRouter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter;
                    }

                    namespace BorderRouter {

                        /** Properties of a BorderRouterEntry. */
                        interface IBorderRouterEntry {

                            /** BorderRouterEntry rloc */
                            rloc?: (number|null);

                            /** BorderRouterEntry preference */
                            preference?: (particle.ctrl.mesh.DiagnosticInfo.RoutePreference|null);

                            /** BorderRouterEntry flags */
                            flags?: (number|null);
                        }

                        /** Represents a BorderRouterEntry. */
                        class BorderRouterEntry implements IBorderRouterEntry {

                            /**
                             * Constructs a new BorderRouterEntry.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.IBorderRouterEntry);

                            /** BorderRouterEntry rloc. */
                            public rloc: number;

                            /** BorderRouterEntry preference. */
                            public preference: particle.ctrl.mesh.DiagnosticInfo.RoutePreference;

                            /** BorderRouterEntry flags. */
                            public flags: number;

                            /**
                             * Creates a new BorderRouterEntry instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns BorderRouterEntry instance
                             */
                            public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.IBorderRouterEntry): particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.BorderRouterEntry;

                            /**
                             * Encodes the specified BorderRouterEntry message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.BorderRouterEntry.verify|verify} messages.
                             * @param message BorderRouterEntry message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.IBorderRouterEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a BorderRouterEntry message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns BorderRouterEntry
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.BorderRouter.BorderRouterEntry;
                        }

                        namespace BorderRouterEntry {

                            /** Flags enum. */
                            enum Flags {
                                NONE = 0,
                                PREFERRED = 1,
                                SLAAC = 2,
                                DHCP = 4,
                                CONFIGURE = 8,
                                DEFAULT_ROUTE = 16,
                                ON_MESH = 32,
                                ND_DNS = 64
                            }
                        }
                    }

                    /** Properties of a Context. */
                    interface IContext {

                        /** Context cid */
                        cid?: (number|null);

                        /** Context compress */
                        compress?: (boolean|null);

                        /** Context contextLength */
                        contextLength?: (number|null);
                    }

                    /** Represents a Context. */
                    class Context implements IContext {

                        /**
                         * Constructs a new Context.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IContext);

                        /** Context cid. */
                        public cid: number;

                        /** Context compress. */
                        public compress: boolean;

                        /** Context contextLength. */
                        public contextLength: number;

                        /**
                         * Creates a new Context instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Context instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IContext): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Context;

                        /**
                         * Encodes the specified Context message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.Context.verify|verify} messages.
                         * @param message Context message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Context message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Context
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Context;
                    }

                    /** Properties of a Prefix. */
                    interface IPrefix {

                        /** Prefix domainId */
                        domainId?: (number|null);

                        /** Prefix prefixLength */
                        prefixLength?: (number|null);

                        /** Prefix prefix */
                        prefix?: (Uint8Array|null);

                        /** Prefix context */
                        context?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IContext[]|null);

                        /** Prefix hasRoute */
                        hasRoute?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IHasRoute|null);

                        /** Prefix borderRouter */
                        borderRouter?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IBorderRouter|null);
                    }

                    /** Represents a Prefix. */
                    class Prefix implements IPrefix {

                        /**
                         * Constructs a new Prefix.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IPrefix);

                        /** Prefix domainId. */
                        public domainId: number;

                        /** Prefix prefixLength. */
                        public prefixLength: number;

                        /** Prefix prefix. */
                        public prefix: Uint8Array;

                        /** Prefix context. */
                        public context: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IContext[];

                        /** Prefix hasRoute. */
                        public hasRoute?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IHasRoute|null);

                        /** Prefix borderRouter. */
                        public borderRouter?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IBorderRouter|null);

                        /**
                         * Creates a new Prefix instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Prefix instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IPrefix): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Prefix;

                        /**
                         * Encodes the specified Prefix message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.Prefix.verify|verify} messages.
                         * @param message Prefix message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IPrefix, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Prefix message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Prefix
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Prefix;
                    }

                    /** Properties of a Server. */
                    interface IServer {

                        /** Server rloc */
                        rloc?: (number|null);

                        /** Server data */
                        data?: (Uint8Array|null);
                    }

                    /** Represents a Server. */
                    class Server implements IServer {

                        /**
                         * Constructs a new Server.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IServer);

                        /** Server rloc. */
                        public rloc: number;

                        /** Server data. */
                        public data: Uint8Array;

                        /**
                         * Creates a new Server instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Server instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IServer): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Server;

                        /**
                         * Encodes the specified Server message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.Server.verify|verify} messages.
                         * @param message Server message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IServer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Server message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Server
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Server;
                    }

                    /** Properties of a Service. */
                    interface IService {

                        /** Service sid */
                        sid?: (number|null);

                        /** Service enterpriseNumber */
                        enterpriseNumber?: (number|null);

                        /** Service data */
                        data?: (Uint8Array|null);

                        /** Service servers */
                        servers?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IServer[]|null);
                    }

                    /** Represents a Service. */
                    class Service implements IService {

                        /**
                         * Constructs a new Service.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IService);

                        /** Service sid. */
                        public sid: number;

                        /** Service enterpriseNumber. */
                        public enterpriseNumber: number;

                        /** Service data. */
                        public data: Uint8Array;

                        /** Service servers. */
                        public servers: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IServer[];

                        /**
                         * Creates a new Service instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Service instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IService): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Service;

                        /**
                         * Encodes the specified Service message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.Service.verify|verify} messages.
                         * @param message Service message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Service message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Service
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Service;
                    }

                    /** Properties of a Data. */
                    interface IData {

                        /** Data prefixes */
                        prefixes?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IPrefix[]|null);

                        /** Data services */
                        services?: (particle.ctrl.mesh.DiagnosticInfo.NetworkData.IService[]|null);
                    }

                    /** Represents a Data. */
                    class Data implements IData {

                        /**
                         * Constructs a new Data.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData);

                        /** Data prefixes. */
                        public prefixes: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IPrefix[];

                        /** Data services. */
                        public services: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IService[];

                        /**
                         * Creates a new Data instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Data instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Data;

                        /**
                         * Encodes the specified Data message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.NetworkData.Data.verify|verify} messages.
                         * @param message Data message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.NetworkData.IData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Data message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Data
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.NetworkData.Data;
                    }
                }

                /** Properties of a MacCounters. */
                interface IMacCounters {

                    /** MacCounters ifInUnknownProtos */
                    ifInUnknownProtos?: (number|null);

                    /** MacCounters ifInErrors */
                    ifInErrors?: (number|null);

                    /** MacCounters ifOutErrors */
                    ifOutErrors?: (number|null);

                    /** MacCounters ifInUcastPkts */
                    ifInUcastPkts?: (number|null);

                    /** MacCounters ifInBroadcastPkts */
                    ifInBroadcastPkts?: (number|null);

                    /** MacCounters ifInDiscards */
                    ifInDiscards?: (number|null);

                    /** MacCounters ifOutUcastPkts */
                    ifOutUcastPkts?: (number|null);

                    /** MacCounters ifOutBroadcastPkts */
                    ifOutBroadcastPkts?: (number|null);

                    /** MacCounters ifOutDiscards */
                    ifOutDiscards?: (number|null);
                }

                /** Represents a MacCounters. */
                class MacCounters implements IMacCounters {

                    /**
                     * Constructs a new MacCounters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.IMacCounters);

                    /** MacCounters ifInUnknownProtos. */
                    public ifInUnknownProtos: number;

                    /** MacCounters ifInErrors. */
                    public ifInErrors: number;

                    /** MacCounters ifOutErrors. */
                    public ifOutErrors: number;

                    /** MacCounters ifInUcastPkts. */
                    public ifInUcastPkts: number;

                    /** MacCounters ifInBroadcastPkts. */
                    public ifInBroadcastPkts: number;

                    /** MacCounters ifInDiscards. */
                    public ifInDiscards: number;

                    /** MacCounters ifOutUcastPkts. */
                    public ifOutUcastPkts: number;

                    /** MacCounters ifOutBroadcastPkts. */
                    public ifOutBroadcastPkts: number;

                    /** MacCounters ifOutDiscards. */
                    public ifOutDiscards: number;

                    /**
                     * Creates a new MacCounters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MacCounters instance
                     */
                    public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.IMacCounters): particle.ctrl.mesh.DiagnosticInfo.MacCounters;

                    /**
                     * Encodes the specified MacCounters message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.MacCounters.verify|verify} messages.
                     * @param message MacCounters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.mesh.DiagnosticInfo.IMacCounters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MacCounters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MacCounters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.MacCounters;
                }

                /** Properties of a ChildTable. */
                interface IChildTable {

                    /** ChildTable children */
                    children?: (particle.ctrl.mesh.DiagnosticInfo.ChildTable.IChildEntry[]|null);
                }

                /** Represents a ChildTable. */
                class ChildTable implements IChildTable {

                    /**
                     * Constructs a new ChildTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.IChildTable);

                    /** ChildTable children. */
                    public children: particle.ctrl.mesh.DiagnosticInfo.ChildTable.IChildEntry[];

                    /**
                     * Creates a new ChildTable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChildTable instance
                     */
                    public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.IChildTable): particle.ctrl.mesh.DiagnosticInfo.ChildTable;

                    /**
                     * Encodes the specified ChildTable message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.ChildTable.verify|verify} messages.
                     * @param message ChildTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.mesh.DiagnosticInfo.IChildTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChildTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChildTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.ChildTable;
                }

                namespace ChildTable {

                    /** Properties of a ChildEntry. */
                    interface IChildEntry {

                        /** ChildEntry timeout */
                        timeout?: (number|null);

                        /** ChildEntry childId */
                        childId?: (number|null);

                        /** ChildEntry mode */
                        mode?: (number|null);
                    }

                    /** Represents a ChildEntry. */
                    class ChildEntry implements IChildEntry {

                        /**
                         * Constructs a new ChildEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: particle.ctrl.mesh.DiagnosticInfo.ChildTable.IChildEntry);

                        /** ChildEntry timeout. */
                        public timeout: number;

                        /** ChildEntry childId. */
                        public childId: number;

                        /** ChildEntry mode. */
                        public mode: number;

                        /**
                         * Creates a new ChildEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChildEntry instance
                         */
                        public static create(properties?: particle.ctrl.mesh.DiagnosticInfo.ChildTable.IChildEntry): particle.ctrl.mesh.DiagnosticInfo.ChildTable.ChildEntry;

                        /**
                         * Encodes the specified ChildEntry message. Does not implicitly {@link particle.ctrl.mesh.DiagnosticInfo.ChildTable.ChildEntry.verify|verify} messages.
                         * @param message ChildEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: particle.ctrl.mesh.DiagnosticInfo.ChildTable.IChildEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChildEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChildEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.DiagnosticInfo.ChildTable.ChildEntry;
                    }
                }
            }

            /** Properties of a GetNetworkDiagnosticsRequest. */
            interface IGetNetworkDiagnosticsRequest {

                /** GetNetworkDiagnosticsRequest flags */
                flags?: (number|null);

                /** GetNetworkDiagnosticsRequest diagnosticTypes */
                diagnosticTypes?: (particle.ctrl.mesh.DiagnosticType[]|null);

                /** GetNetworkDiagnosticsRequest timeout */
                timeout?: (number|null);
            }

            /** Represents a GetNetworkDiagnosticsRequest. */
            class GetNetworkDiagnosticsRequest implements IGetNetworkDiagnosticsRequest {

                /**
                 * Constructs a new GetNetworkDiagnosticsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IGetNetworkDiagnosticsRequest);

                /** GetNetworkDiagnosticsRequest flags. */
                public flags: number;

                /** GetNetworkDiagnosticsRequest diagnosticTypes. */
                public diagnosticTypes: particle.ctrl.mesh.DiagnosticType[];

                /** GetNetworkDiagnosticsRequest timeout. */
                public timeout: number;

                /**
                 * Creates a new GetNetworkDiagnosticsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNetworkDiagnosticsRequest instance
                 */
                public static create(properties?: particle.ctrl.mesh.IGetNetworkDiagnosticsRequest): particle.ctrl.mesh.GetNetworkDiagnosticsRequest;

                /**
                 * Encodes the specified GetNetworkDiagnosticsRequest message. Does not implicitly {@link particle.ctrl.mesh.GetNetworkDiagnosticsRequest.verify|verify} messages.
                 * @param message GetNetworkDiagnosticsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IGetNetworkDiagnosticsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNetworkDiagnosticsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNetworkDiagnosticsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.GetNetworkDiagnosticsRequest;
            }

            namespace GetNetworkDiagnosticsRequest {

                /** Flags enum. */
                enum Flags {
                    INVALID = 0,
                    QUERY_CHILDREN = 1,
                    RESOLVE_DEVICE_ID = 2
                }
            }

            /** Properties of a GetNetworkDiagnosticsReply. */
            interface IGetNetworkDiagnosticsReply {

                /** GetNetworkDiagnosticsReply nodes */
                nodes?: (particle.ctrl.mesh.IDiagnosticInfo[]|null);
            }

            /** Represents a GetNetworkDiagnosticsReply. */
            class GetNetworkDiagnosticsReply implements IGetNetworkDiagnosticsReply {

                /**
                 * Constructs a new GetNetworkDiagnosticsReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.mesh.IGetNetworkDiagnosticsReply);

                /** GetNetworkDiagnosticsReply nodes. */
                public nodes: particle.ctrl.mesh.IDiagnosticInfo[];

                /**
                 * Creates a new GetNetworkDiagnosticsReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNetworkDiagnosticsReply instance
                 */
                public static create(properties?: particle.ctrl.mesh.IGetNetworkDiagnosticsReply): particle.ctrl.mesh.GetNetworkDiagnosticsReply;

                /**
                 * Encodes the specified GetNetworkDiagnosticsReply message. Does not implicitly {@link particle.ctrl.mesh.GetNetworkDiagnosticsReply.verify|verify} messages.
                 * @param message GetNetworkDiagnosticsReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.mesh.IGetNetworkDiagnosticsReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNetworkDiagnosticsReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNetworkDiagnosticsReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.mesh.GetNetworkDiagnosticsReply;
            }
        }

        /** Properties of a NetworkGetStatusRequest. */
        interface INetworkGetStatusRequest {

            /** NetworkGetStatusRequest interface */
            "interface"?: (number|null);
        }

        /** Represents a NetworkGetStatusRequest. */
        class NetworkGetStatusRequest implements INetworkGetStatusRequest {

            /**
             * Constructs a new NetworkGetStatusRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkGetStatusRequest);

            /** NetworkGetStatusRequest interface. */
            public interface: number;

            /**
             * Creates a new NetworkGetStatusRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkGetStatusRequest instance
             */
            public static create(properties?: particle.ctrl.INetworkGetStatusRequest): particle.ctrl.NetworkGetStatusRequest;

            /**
             * Encodes the specified NetworkGetStatusRequest message. Does not implicitly {@link particle.ctrl.NetworkGetStatusRequest.verify|verify} messages.
             * @param message NetworkGetStatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkGetStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkGetStatusRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkGetStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkGetStatusRequest;
        }

        /** Properties of a NetworkGetStatusReply. */
        interface INetworkGetStatusReply {

            /** NetworkGetStatusReply config */
            config?: (particle.ctrl.INetworkConfiguration|null);
        }

        /** Represents a NetworkGetStatusReply. */
        class NetworkGetStatusReply implements INetworkGetStatusReply {

            /**
             * Constructs a new NetworkGetStatusReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkGetStatusReply);

            /** NetworkGetStatusReply config. */
            public config?: (particle.ctrl.INetworkConfiguration|null);

            /**
             * Creates a new NetworkGetStatusReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkGetStatusReply instance
             */
            public static create(properties?: particle.ctrl.INetworkGetStatusReply): particle.ctrl.NetworkGetStatusReply;

            /**
             * Encodes the specified NetworkGetStatusReply message. Does not implicitly {@link particle.ctrl.NetworkGetStatusReply.verify|verify} messages.
             * @param message NetworkGetStatusReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkGetStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkGetStatusReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkGetStatusReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkGetStatusReply;
        }

        /** Properties of a NetworkGetConfigurationRequest. */
        interface INetworkGetConfigurationRequest {

            /** NetworkGetConfigurationRequest interface */
            "interface"?: (number|null);
        }

        /** Represents a NetworkGetConfigurationRequest. */
        class NetworkGetConfigurationRequest implements INetworkGetConfigurationRequest {

            /**
             * Constructs a new NetworkGetConfigurationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkGetConfigurationRequest);

            /** NetworkGetConfigurationRequest interface. */
            public interface: number;

            /**
             * Creates a new NetworkGetConfigurationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkGetConfigurationRequest instance
             */
            public static create(properties?: particle.ctrl.INetworkGetConfigurationRequest): particle.ctrl.NetworkGetConfigurationRequest;

            /**
             * Encodes the specified NetworkGetConfigurationRequest message. Does not implicitly {@link particle.ctrl.NetworkGetConfigurationRequest.verify|verify} messages.
             * @param message NetworkGetConfigurationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkGetConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkGetConfigurationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkGetConfigurationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkGetConfigurationRequest;
        }

        /** Properties of a NetworkGetConfigurationReply. */
        interface INetworkGetConfigurationReply {

            /** NetworkGetConfigurationReply config */
            config?: (particle.ctrl.INetworkConfiguration|null);
        }

        /** Represents a NetworkGetConfigurationReply. */
        class NetworkGetConfigurationReply implements INetworkGetConfigurationReply {

            /**
             * Constructs a new NetworkGetConfigurationReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkGetConfigurationReply);

            /** NetworkGetConfigurationReply config. */
            public config?: (particle.ctrl.INetworkConfiguration|null);

            /**
             * Creates a new NetworkGetConfigurationReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkGetConfigurationReply instance
             */
            public static create(properties?: particle.ctrl.INetworkGetConfigurationReply): particle.ctrl.NetworkGetConfigurationReply;

            /**
             * Encodes the specified NetworkGetConfigurationReply message. Does not implicitly {@link particle.ctrl.NetworkGetConfigurationReply.verify|verify} messages.
             * @param message NetworkGetConfigurationReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkGetConfigurationReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkGetConfigurationReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkGetConfigurationReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkGetConfigurationReply;
        }

        /** Properties of a NetworkSetConfigurationRequest. */
        interface INetworkSetConfigurationRequest {

            /** NetworkSetConfigurationRequest config */
            config?: (particle.ctrl.INetworkConfiguration|null);
        }

        /** Represents a NetworkSetConfigurationRequest. */
        class NetworkSetConfigurationRequest implements INetworkSetConfigurationRequest {

            /**
             * Constructs a new NetworkSetConfigurationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkSetConfigurationRequest);

            /** NetworkSetConfigurationRequest config. */
            public config?: (particle.ctrl.INetworkConfiguration|null);

            /**
             * Creates a new NetworkSetConfigurationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkSetConfigurationRequest instance
             */
            public static create(properties?: particle.ctrl.INetworkSetConfigurationRequest): particle.ctrl.NetworkSetConfigurationRequest;

            /**
             * Encodes the specified NetworkSetConfigurationRequest message. Does not implicitly {@link particle.ctrl.NetworkSetConfigurationRequest.verify|verify} messages.
             * @param message NetworkSetConfigurationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkSetConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkSetConfigurationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkSetConfigurationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkSetConfigurationRequest;
        }

        /** Properties of a NetworkSetConfigurationReply. */
        interface INetworkSetConfigurationReply {
        }

        /** Represents a NetworkSetConfigurationReply. */
        class NetworkSetConfigurationReply implements INetworkSetConfigurationReply {

            /**
             * Constructs a new NetworkSetConfigurationReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkSetConfigurationReply);

            /**
             * Creates a new NetworkSetConfigurationReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkSetConfigurationReply instance
             */
            public static create(properties?: particle.ctrl.INetworkSetConfigurationReply): particle.ctrl.NetworkSetConfigurationReply;

            /**
             * Encodes the specified NetworkSetConfigurationReply message. Does not implicitly {@link particle.ctrl.NetworkSetConfigurationReply.verify|verify} messages.
             * @param message NetworkSetConfigurationReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkSetConfigurationReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkSetConfigurationReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkSetConfigurationReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkSetConfigurationReply;
        }

        /** NetworkState enum. */
        enum NetworkState {
            NETWORK_STATUS_NONE = 0,
            DOWN = 1,
            UP = 2
        }

        /** Properties of a IPConfiguration. */
        interface IIPConfiguration {

            /** IPConfiguration type */
            type?: (particle.ctrl.IPConfiguration.Type|null);

            /** IPConfiguration address */
            address?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration netmask */
            netmask?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration gateway */
            gateway?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration dhcpServer */
            dhcpServer?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration hostname */
            hostname?: (string|null);
        }

        /** Represents a IPConfiguration. */
        class IPConfiguration implements IIPConfiguration {

            /**
             * Constructs a new IPConfiguration.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIPConfiguration);

            /** IPConfiguration type. */
            public type: particle.ctrl.IPConfiguration.Type;

            /** IPConfiguration address. */
            public address?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration netmask. */
            public netmask?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration gateway. */
            public gateway?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration dhcpServer. */
            public dhcpServer?: (particle.ctrl.IIPAddress|null);

            /** IPConfiguration hostname. */
            public hostname: string;

            /**
             * Creates a new IPConfiguration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IPConfiguration instance
             */
            public static create(properties?: particle.ctrl.IIPConfiguration): particle.ctrl.IPConfiguration;

            /**
             * Encodes the specified IPConfiguration message. Does not implicitly {@link particle.ctrl.IPConfiguration.verify|verify} messages.
             * @param message IPConfiguration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIPConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IPConfiguration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IPConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.IPConfiguration;
        }

        namespace IPConfiguration {

            /** Type enum. */
            enum Type {
                NONE = 0,
                DHCP = 1,
                STATIC = 2
            }
        }

        /** Properties of a DNSConfiguration. */
        interface IDNSConfiguration {

            /** DNSConfiguration servers */
            servers?: (particle.ctrl.IIPAddress[]|null);
        }

        /** Represents a DNSConfiguration. */
        class DNSConfiguration implements IDNSConfiguration {

            /**
             * Constructs a new DNSConfiguration.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IDNSConfiguration);

            /** DNSConfiguration servers. */
            public servers: particle.ctrl.IIPAddress[];

            /**
             * Creates a new DNSConfiguration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DNSConfiguration instance
             */
            public static create(properties?: particle.ctrl.IDNSConfiguration): particle.ctrl.DNSConfiguration;

            /**
             * Encodes the specified DNSConfiguration message. Does not implicitly {@link particle.ctrl.DNSConfiguration.verify|verify} messages.
             * @param message DNSConfiguration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IDNSConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DNSConfiguration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DNSConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DNSConfiguration;
        }

        /** Properties of a NetworkConfiguration. */
        interface INetworkConfiguration {

            /** NetworkConfiguration interface */
            "interface"?: (number|null);

            /** NetworkConfiguration state */
            state?: (particle.ctrl.NetworkState|null);

            /** NetworkConfiguration name */
            name?: (string|null);

            /** NetworkConfiguration mac */
            mac?: (Uint8Array|null);

            /** NetworkConfiguration ipconfig */
            ipconfig?: (particle.ctrl.IIPConfiguration|null);

            /** NetworkConfiguration dnsconfig */
            dnsconfig?: (particle.ctrl.IDNSConfiguration|null);
        }

        /** Represents a NetworkConfiguration. */
        class NetworkConfiguration implements INetworkConfiguration {

            /**
             * Constructs a new NetworkConfiguration.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.INetworkConfiguration);

            /** NetworkConfiguration interface. */
            public interface: number;

            /** NetworkConfiguration state. */
            public state: particle.ctrl.NetworkState;

            /** NetworkConfiguration name. */
            public name: string;

            /** NetworkConfiguration mac. */
            public mac: Uint8Array;

            /** NetworkConfiguration ipconfig. */
            public ipconfig?: (particle.ctrl.IIPConfiguration|null);

            /** NetworkConfiguration dnsconfig. */
            public dnsconfig?: (particle.ctrl.IDNSConfiguration|null);

            /**
             * Creates a new NetworkConfiguration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkConfiguration instance
             */
            public static create(properties?: particle.ctrl.INetworkConfiguration): particle.ctrl.NetworkConfiguration;

            /**
             * Encodes the specified NetworkConfiguration message. Does not implicitly {@link particle.ctrl.NetworkConfiguration.verify|verify} messages.
             * @param message NetworkConfiguration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.INetworkConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkConfiguration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.NetworkConfiguration;
        }

        /** InterfaceConfigurationSource enum. */
        enum InterfaceConfigurationSource {
            NONE = 0,
            DHCP = 1,
            STATIC = 2,
            SLAAC = 3,
            DHCPV6 = 4
        }

        /** Properties of an InterfaceAddress. */
        interface IInterfaceAddress {

            /** InterfaceAddress address */
            address?: (particle.ctrl.IIpAddress|null);

            /** InterfaceAddress prefixLength */
            prefixLength?: (number|null);
        }

        /** Represents an InterfaceAddress. */
        class InterfaceAddress implements IInterfaceAddress {

            /**
             * Constructs a new InterfaceAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IInterfaceAddress);

            /** InterfaceAddress address. */
            public address?: (particle.ctrl.IIpAddress|null);

            /** InterfaceAddress prefixLength. */
            public prefixLength: number;

            /**
             * Creates a new InterfaceAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InterfaceAddress instance
             */
            public static create(properties?: particle.ctrl.IInterfaceAddress): particle.ctrl.InterfaceAddress;

            /**
             * Encodes the specified InterfaceAddress message. Does not implicitly {@link particle.ctrl.InterfaceAddress.verify|verify} messages.
             * @param message InterfaceAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IInterfaceAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InterfaceAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InterfaceAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.InterfaceAddress;
        }

        /** Properties of an Ipv4Config. */
        interface IIpv4Config {

            /** Ipv4Config addresses */
            addresses?: (particle.ctrl.IInterfaceAddress[]|null);

            /** Ipv4Config peer */
            peer?: (particle.ctrl.IIpv4Address|null);

            /** Ipv4Config gateway */
            gateway?: (particle.ctrl.IIpv4Address|null);

            /** Ipv4Config dns */
            dns?: (particle.ctrl.IIpv4Address[]|null);

            /** Ipv4Config source */
            source?: (particle.ctrl.InterfaceConfigurationSource|null);
        }

        /** Represents an Ipv4Config. */
        class Ipv4Config implements IIpv4Config {

            /**
             * Constructs a new Ipv4Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIpv4Config);

            /** Ipv4Config addresses. */
            public addresses: particle.ctrl.IInterfaceAddress[];

            /** Ipv4Config peer. */
            public peer?: (particle.ctrl.IIpv4Address|null);

            /** Ipv4Config gateway. */
            public gateway?: (particle.ctrl.IIpv4Address|null);

            /** Ipv4Config dns. */
            public dns: particle.ctrl.IIpv4Address[];

            /** Ipv4Config source. */
            public source: particle.ctrl.InterfaceConfigurationSource;

            /**
             * Creates a new Ipv4Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ipv4Config instance
             */
            public static create(properties?: particle.ctrl.IIpv4Config): particle.ctrl.Ipv4Config;

            /**
             * Encodes the specified Ipv4Config message. Does not implicitly {@link particle.ctrl.Ipv4Config.verify|verify} messages.
             * @param message Ipv4Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIpv4Config, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ipv4Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ipv4Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.Ipv4Config;
        }

        /** Properties of an Ipv6Config. */
        interface IIpv6Config {

            /** Ipv6Config addresses */
            addresses?: (particle.ctrl.IInterfaceAddress[]|null);

            /** Ipv6Config dns */
            dns?: (particle.ctrl.IIpv6Address[]|null);

            /** Ipv6Config source */
            source?: (particle.ctrl.InterfaceConfigurationSource|null);

            /** Ipv6Config gateway */
            gateway?: (particle.ctrl.IIpv6Address|null);
        }

        /** Represents an Ipv6Config. */
        class Ipv6Config implements IIpv6Config {

            /**
             * Constructs a new Ipv6Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IIpv6Config);

            /** Ipv6Config addresses. */
            public addresses: particle.ctrl.IInterfaceAddress[];

            /** Ipv6Config dns. */
            public dns: particle.ctrl.IIpv6Address[];

            /** Ipv6Config source. */
            public source: particle.ctrl.InterfaceConfigurationSource;

            /** Ipv6Config gateway. */
            public gateway?: (particle.ctrl.IIpv6Address|null);

            /**
             * Creates a new Ipv6Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ipv6Config instance
             */
            public static create(properties?: particle.ctrl.IIpv6Config): particle.ctrl.Ipv6Config;

            /**
             * Encodes the specified Ipv6Config message. Does not implicitly {@link particle.ctrl.Ipv6Config.verify|verify} messages.
             * @param message Ipv6Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IIpv6Config, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ipv6Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ipv6Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.Ipv6Config;
        }

        /** InterfaceFlag enum. */
        enum InterfaceFlag {
            IFF_NONE = 0,
            IFF_UP = 1,
            IFF_BROADCAST = 2,
            IFF_DEBUG = 4,
            IFF_LOOPBACK = 8,
            IFF_POINTTOPOINT = 16,
            IFF_RUNNING = 64,
            IFF_LOWER_UP = 64,
            IFF_NOARP = 128,
            IFF_PROMISC = 256,
            IFF_ALLMULTI = 512,
            IFF_MULTICAST = 32768,
            IFF_NOND6 = 65536
        }

        /** InterfaceExtFlag enum. */
        enum InterfaceExtFlag {
            IFXF_NONE = 0,
            IFXF_WOL = 16,
            IFXF_AUTOCONF6 = 32,
            IFXF_DHCP = 65536,
            IFXF_DHCP6 = 131072,
            IFXF_AUTOIP = 262144
        }

        /** InterfaceType enum. */
        enum InterfaceType {
            INVALID_INTERFACE_TYPE = 0,
            LOOPBACK = 1,
            THREAD = 2,
            ETHERNET = 4,
            WIFI = 8,
            PPP = 16
        }

        /** Properties of an Interface. */
        interface IInterface {

            /** Interface index */
            index?: (number|null);

            /** Interface name */
            name?: (string|null);

            /** Interface type */
            type?: (particle.ctrl.InterfaceType|null);

            /** Interface flags */
            flags?: (number|null);

            /** Interface extFlags */
            extFlags?: (number|null);

            /** Interface ipv4Config */
            ipv4Config?: (particle.ctrl.IIpv4Config|null);

            /** Interface ipv6Config */
            ipv6Config?: (particle.ctrl.IIpv6Config|null);

            /** Interface hwAddress */
            hwAddress?: (Uint8Array|null);

            /** Interface mtu */
            mtu?: (number|null);

            /** Interface metric */
            metric?: (number|null);

            /** Interface profile */
            profile?: (Uint8Array|null);
        }

        /** Represents an Interface. */
        class Interface implements IInterface {

            /**
             * Constructs a new Interface.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IInterface);

            /** Interface index. */
            public index: number;

            /** Interface name. */
            public name: string;

            /** Interface type. */
            public type: particle.ctrl.InterfaceType;

            /** Interface flags. */
            public flags: number;

            /** Interface extFlags. */
            public extFlags: number;

            /** Interface ipv4Config. */
            public ipv4Config?: (particle.ctrl.IIpv4Config|null);

            /** Interface ipv6Config. */
            public ipv6Config?: (particle.ctrl.IIpv6Config|null);

            /** Interface hwAddress. */
            public hwAddress: Uint8Array;

            /** Interface mtu. */
            public mtu: number;

            /** Interface metric. */
            public metric: number;

            /** Interface profile. */
            public profile: Uint8Array;

            /**
             * Creates a new Interface instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Interface instance
             */
            public static create(properties?: particle.ctrl.IInterface): particle.ctrl.Interface;

            /**
             * Encodes the specified Interface message. Does not implicitly {@link particle.ctrl.Interface.verify|verify} messages.
             * @param message Interface message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IInterface, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Interface message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Interface
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.Interface;
        }

        /** Properties of an InterfaceEntry. */
        interface IInterfaceEntry {

            /** InterfaceEntry index */
            index?: (number|null);

            /** InterfaceEntry name */
            name?: (string|null);

            /** InterfaceEntry type */
            type?: (particle.ctrl.InterfaceType|null);
        }

        /** Represents an InterfaceEntry. */
        class InterfaceEntry implements IInterfaceEntry {

            /**
             * Constructs a new InterfaceEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IInterfaceEntry);

            /** InterfaceEntry index. */
            public index: number;

            /** InterfaceEntry name. */
            public name: string;

            /** InterfaceEntry type. */
            public type: particle.ctrl.InterfaceType;

            /**
             * Creates a new InterfaceEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InterfaceEntry instance
             */
            public static create(properties?: particle.ctrl.IInterfaceEntry): particle.ctrl.InterfaceEntry;

            /**
             * Encodes the specified InterfaceEntry message. Does not implicitly {@link particle.ctrl.InterfaceEntry.verify|verify} messages.
             * @param message InterfaceEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IInterfaceEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InterfaceEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InterfaceEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.InterfaceEntry;
        }

        /** Properties of a GetInterfaceListRequest. */
        interface IGetInterfaceListRequest {
        }

        /** Represents a GetInterfaceListRequest. */
        class GetInterfaceListRequest implements IGetInterfaceListRequest {

            /**
             * Constructs a new GetInterfaceListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetInterfaceListRequest);

            /**
             * Creates a new GetInterfaceListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInterfaceListRequest instance
             */
            public static create(properties?: particle.ctrl.IGetInterfaceListRequest): particle.ctrl.GetInterfaceListRequest;

            /**
             * Encodes the specified GetInterfaceListRequest message. Does not implicitly {@link particle.ctrl.GetInterfaceListRequest.verify|verify} messages.
             * @param message GetInterfaceListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetInterfaceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInterfaceListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInterfaceListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetInterfaceListRequest;
        }

        /** Properties of a GetInterfaceListReply. */
        interface IGetInterfaceListReply {

            /** GetInterfaceListReply interfaces */
            interfaces?: (particle.ctrl.IInterfaceEntry[]|null);
        }

        /** Represents a GetInterfaceListReply. */
        class GetInterfaceListReply implements IGetInterfaceListReply {

            /**
             * Constructs a new GetInterfaceListReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetInterfaceListReply);

            /** GetInterfaceListReply interfaces. */
            public interfaces: particle.ctrl.IInterfaceEntry[];

            /**
             * Creates a new GetInterfaceListReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInterfaceListReply instance
             */
            public static create(properties?: particle.ctrl.IGetInterfaceListReply): particle.ctrl.GetInterfaceListReply;

            /**
             * Encodes the specified GetInterfaceListReply message. Does not implicitly {@link particle.ctrl.GetInterfaceListReply.verify|verify} messages.
             * @param message GetInterfaceListReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetInterfaceListReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInterfaceListReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInterfaceListReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetInterfaceListReply;
        }

        /** Properties of a GetInterfaceRequest. */
        interface IGetInterfaceRequest {

            /** GetInterfaceRequest index */
            index?: (number|null);
        }

        /** Represents a GetInterfaceRequest. */
        class GetInterfaceRequest implements IGetInterfaceRequest {

            /**
             * Constructs a new GetInterfaceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetInterfaceRequest);

            /** GetInterfaceRequest index. */
            public index: number;

            /**
             * Creates a new GetInterfaceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInterfaceRequest instance
             */
            public static create(properties?: particle.ctrl.IGetInterfaceRequest): particle.ctrl.GetInterfaceRequest;

            /**
             * Encodes the specified GetInterfaceRequest message. Does not implicitly {@link particle.ctrl.GetInterfaceRequest.verify|verify} messages.
             * @param message GetInterfaceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetInterfaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInterfaceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInterfaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetInterfaceRequest;
        }

        /** Properties of a GetInterfaceReply. */
        interface IGetInterfaceReply {

            /** GetInterfaceReply interface */
            "interface"?: (particle.ctrl.IInterface|null);
        }

        /** Represents a GetInterfaceReply. */
        class GetInterfaceReply implements IGetInterfaceReply {

            /**
             * Constructs a new GetInterfaceReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetInterfaceReply);

            /** GetInterfaceReply interface. */
            public interface?: (particle.ctrl.IInterface|null);

            /**
             * Creates a new GetInterfaceReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInterfaceReply instance
             */
            public static create(properties?: particle.ctrl.IGetInterfaceReply): particle.ctrl.GetInterfaceReply;

            /**
             * Encodes the specified GetInterfaceReply message. Does not implicitly {@link particle.ctrl.GetInterfaceReply.verify|verify} messages.
             * @param message GetInterfaceReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetInterfaceReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInterfaceReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInterfaceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetInterfaceReply;
        }

        /** Properties of a GetInterfaceStoredConfigurationRequest. */
        interface IGetInterfaceStoredConfigurationRequest {

            /** GetInterfaceStoredConfigurationRequest index */
            index?: (number|null);
        }

        /** Represents a GetInterfaceStoredConfigurationRequest. */
        class GetInterfaceStoredConfigurationRequest implements IGetInterfaceStoredConfigurationRequest {

            /**
             * Constructs a new GetInterfaceStoredConfigurationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetInterfaceStoredConfigurationRequest);

            /** GetInterfaceStoredConfigurationRequest index. */
            public index: number;

            /**
             * Creates a new GetInterfaceStoredConfigurationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInterfaceStoredConfigurationRequest instance
             */
            public static create(properties?: particle.ctrl.IGetInterfaceStoredConfigurationRequest): particle.ctrl.GetInterfaceStoredConfigurationRequest;

            /**
             * Encodes the specified GetInterfaceStoredConfigurationRequest message. Does not implicitly {@link particle.ctrl.GetInterfaceStoredConfigurationRequest.verify|verify} messages.
             * @param message GetInterfaceStoredConfigurationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetInterfaceStoredConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInterfaceStoredConfigurationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInterfaceStoredConfigurationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetInterfaceStoredConfigurationRequest;
        }

        /** Properties of a GetInterfaceStoredConfigurationReply. */
        interface IGetInterfaceStoredConfigurationReply {

            /** GetInterfaceStoredConfigurationReply config */
            config?: (particle.ctrl.IInterface[]|null);
        }

        /** Represents a GetInterfaceStoredConfigurationReply. */
        class GetInterfaceStoredConfigurationReply implements IGetInterfaceStoredConfigurationReply {

            /**
             * Constructs a new GetInterfaceStoredConfigurationReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetInterfaceStoredConfigurationReply);

            /** GetInterfaceStoredConfigurationReply config. */
            public config: particle.ctrl.IInterface[];

            /**
             * Creates a new GetInterfaceStoredConfigurationReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInterfaceStoredConfigurationReply instance
             */
            public static create(properties?: particle.ctrl.IGetInterfaceStoredConfigurationReply): particle.ctrl.GetInterfaceStoredConfigurationReply;

            /**
             * Encodes the specified GetInterfaceStoredConfigurationReply message. Does not implicitly {@link particle.ctrl.GetInterfaceStoredConfigurationReply.verify|verify} messages.
             * @param message GetInterfaceStoredConfigurationReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetInterfaceStoredConfigurationReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInterfaceStoredConfigurationReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInterfaceStoredConfigurationReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetInterfaceStoredConfigurationReply;
        }

        /** Properties of a SetInterfaceStoredConfigurationRequest. */
        interface ISetInterfaceStoredConfigurationRequest {

            /** SetInterfaceStoredConfigurationRequest config */
            config?: (particle.ctrl.IInterface|null);
        }

        /** Represents a SetInterfaceStoredConfigurationRequest. */
        class SetInterfaceStoredConfigurationRequest implements ISetInterfaceStoredConfigurationRequest {

            /**
             * Constructs a new SetInterfaceStoredConfigurationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetInterfaceStoredConfigurationRequest);

            /** SetInterfaceStoredConfigurationRequest config. */
            public config?: (particle.ctrl.IInterface|null);

            /**
             * Creates a new SetInterfaceStoredConfigurationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetInterfaceStoredConfigurationRequest instance
             */
            public static create(properties?: particle.ctrl.ISetInterfaceStoredConfigurationRequest): particle.ctrl.SetInterfaceStoredConfigurationRequest;

            /**
             * Encodes the specified SetInterfaceStoredConfigurationRequest message. Does not implicitly {@link particle.ctrl.SetInterfaceStoredConfigurationRequest.verify|verify} messages.
             * @param message SetInterfaceStoredConfigurationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetInterfaceStoredConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetInterfaceStoredConfigurationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetInterfaceStoredConfigurationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetInterfaceStoredConfigurationRequest;
        }

        /** Properties of a SetInterfaceStoredConfigurationReply. */
        interface ISetInterfaceStoredConfigurationReply {
        }

        /** Represents a SetInterfaceStoredConfigurationReply. */
        class SetInterfaceStoredConfigurationReply implements ISetInterfaceStoredConfigurationReply {

            /**
             * Constructs a new SetInterfaceStoredConfigurationReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ISetInterfaceStoredConfigurationReply);

            /**
             * Creates a new SetInterfaceStoredConfigurationReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetInterfaceStoredConfigurationReply instance
             */
            public static create(properties?: particle.ctrl.ISetInterfaceStoredConfigurationReply): particle.ctrl.SetInterfaceStoredConfigurationReply;

            /**
             * Encodes the specified SetInterfaceStoredConfigurationReply message. Does not implicitly {@link particle.ctrl.SetInterfaceStoredConfigurationReply.verify|verify} messages.
             * @param message SetInterfaceStoredConfigurationReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ISetInterfaceStoredConfigurationReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetInterfaceStoredConfigurationReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetInterfaceStoredConfigurationReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.SetInterfaceStoredConfigurationReply;
        }

        /** Properties of a DeleteInterfaceStoredConfigurationRequest. */
        interface IDeleteInterfaceStoredConfigurationRequest {

            /** DeleteInterfaceStoredConfigurationRequest index */
            index?: (number|null);

            /** DeleteInterfaceStoredConfigurationRequest profile */
            profile?: (Uint8Array|null);
        }

        /** Represents a DeleteInterfaceStoredConfigurationRequest. */
        class DeleteInterfaceStoredConfigurationRequest implements IDeleteInterfaceStoredConfigurationRequest {

            /**
             * Constructs a new DeleteInterfaceStoredConfigurationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IDeleteInterfaceStoredConfigurationRequest);

            /** DeleteInterfaceStoredConfigurationRequest index. */
            public index: number;

            /** DeleteInterfaceStoredConfigurationRequest profile. */
            public profile: Uint8Array;

            /**
             * Creates a new DeleteInterfaceStoredConfigurationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteInterfaceStoredConfigurationRequest instance
             */
            public static create(properties?: particle.ctrl.IDeleteInterfaceStoredConfigurationRequest): particle.ctrl.DeleteInterfaceStoredConfigurationRequest;

            /**
             * Encodes the specified DeleteInterfaceStoredConfigurationRequest message. Does not implicitly {@link particle.ctrl.DeleteInterfaceStoredConfigurationRequest.verify|verify} messages.
             * @param message DeleteInterfaceStoredConfigurationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IDeleteInterfaceStoredConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteInterfaceStoredConfigurationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteInterfaceStoredConfigurationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DeleteInterfaceStoredConfigurationRequest;
        }

        /** Properties of a DeleteInterfaceStoredConfigurationReply. */
        interface IDeleteInterfaceStoredConfigurationReply {
        }

        /** Represents a DeleteInterfaceStoredConfigurationReply. */
        class DeleteInterfaceStoredConfigurationReply implements IDeleteInterfaceStoredConfigurationReply {

            /**
             * Constructs a new DeleteInterfaceStoredConfigurationReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IDeleteInterfaceStoredConfigurationReply);

            /**
             * Creates a new DeleteInterfaceStoredConfigurationReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteInterfaceStoredConfigurationReply instance
             */
            public static create(properties?: particle.ctrl.IDeleteInterfaceStoredConfigurationReply): particle.ctrl.DeleteInterfaceStoredConfigurationReply;

            /**
             * Encodes the specified DeleteInterfaceStoredConfigurationReply message. Does not implicitly {@link particle.ctrl.DeleteInterfaceStoredConfigurationReply.verify|verify} messages.
             * @param message DeleteInterfaceStoredConfigurationReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IDeleteInterfaceStoredConfigurationReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteInterfaceStoredConfigurationReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteInterfaceStoredConfigurationReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DeleteInterfaceStoredConfigurationReply;
        }

        /** StorageType enum. */
        enum StorageType {
            INVALID_STORAGE = 0,
            INTERNAL = 1
        }

        /** SectionType enum. */
        enum SectionType {
            INVALID_SECTION = 0,
            FIRMWARE = 1,
            OTA_BACKUP = 2,
            FACTORY_BACKUP = 3,
            CONFIG = 4,
            EEPROM = 5
        }

        /** FirmwareModuleType enum. */
        enum FirmwareModuleType {
            INVALID_FIRMWARE_MODULE = 0,
            BOOTLOADER = 1,
            SYSTEM_PART = 2,
            USER_PART = 3,
            MONO_FIRMWARE = 4,
            NCP_FIRMWARE = 5,
            RADIO_STACK = 6
        }

        /** FirmwareModuleValidityFlag enum. */
        enum FirmwareModuleValidityFlag {
            NO_VALIDATION_ERRORS = 0,
            INTEGRITY_CHECK_FAILED = 1,
            DEPENDENCY_CHECK_FAILED = 2
        }

        /** SectionFlag enum. */
        enum SectionFlag {
            NO_SECTION_FLAGS = 0,
            CAN_READ = 1,
            CAN_WRITE = 2,
            CAN_CLEAR = 4,
            CAN_GET_SIZE = 8,
            NEED_CLEAR = 16
        }

        /** FileFormat enum. */
        enum FileFormat {
            BIN = 0,
            MINIZ = 1
        }

        /** Properties of a StartFirmwareUpdateRequest. */
        interface IStartFirmwareUpdateRequest {

            /** StartFirmwareUpdateRequest size */
            size?: (number|null);

            /** StartFirmwareUpdateRequest format */
            format?: (particle.ctrl.FileFormat|null);
        }

        /** Represents a StartFirmwareUpdateRequest. */
        class StartFirmwareUpdateRequest implements IStartFirmwareUpdateRequest {

            /**
             * Constructs a new StartFirmwareUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStartFirmwareUpdateRequest);

            /** StartFirmwareUpdateRequest size. */
            public size: number;

            /** StartFirmwareUpdateRequest format. */
            public format: particle.ctrl.FileFormat;

            /**
             * Creates a new StartFirmwareUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartFirmwareUpdateRequest instance
             */
            public static create(properties?: particle.ctrl.IStartFirmwareUpdateRequest): particle.ctrl.StartFirmwareUpdateRequest;

            /**
             * Encodes the specified StartFirmwareUpdateRequest message. Does not implicitly {@link particle.ctrl.StartFirmwareUpdateRequest.verify|verify} messages.
             * @param message StartFirmwareUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStartFirmwareUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartFirmwareUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartFirmwareUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StartFirmwareUpdateRequest;
        }

        /** Properties of a StartFirmwareUpdateReply. */
        interface IStartFirmwareUpdateReply {

            /** StartFirmwareUpdateReply chunkSize */
            chunkSize?: (number|null);
        }

        /** Represents a StartFirmwareUpdateReply. */
        class StartFirmwareUpdateReply implements IStartFirmwareUpdateReply {

            /**
             * Constructs a new StartFirmwareUpdateReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IStartFirmwareUpdateReply);

            /** StartFirmwareUpdateReply chunkSize. */
            public chunkSize: number;

            /**
             * Creates a new StartFirmwareUpdateReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartFirmwareUpdateReply instance
             */
            public static create(properties?: particle.ctrl.IStartFirmwareUpdateReply): particle.ctrl.StartFirmwareUpdateReply;

            /**
             * Encodes the specified StartFirmwareUpdateReply message. Does not implicitly {@link particle.ctrl.StartFirmwareUpdateReply.verify|verify} messages.
             * @param message StartFirmwareUpdateReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IStartFirmwareUpdateReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartFirmwareUpdateReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartFirmwareUpdateReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.StartFirmwareUpdateReply;
        }

        /** Properties of a FinishFirmwareUpdateRequest. */
        interface IFinishFirmwareUpdateRequest {

            /** FinishFirmwareUpdateRequest validateOnly */
            validateOnly?: (boolean|null);
        }

        /** Represents a FinishFirmwareUpdateRequest. */
        class FinishFirmwareUpdateRequest implements IFinishFirmwareUpdateRequest {

            /**
             * Constructs a new FinishFirmwareUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IFinishFirmwareUpdateRequest);

            /** FinishFirmwareUpdateRequest validateOnly. */
            public validateOnly: boolean;

            /**
             * Creates a new FinishFirmwareUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FinishFirmwareUpdateRequest instance
             */
            public static create(properties?: particle.ctrl.IFinishFirmwareUpdateRequest): particle.ctrl.FinishFirmwareUpdateRequest;

            /**
             * Encodes the specified FinishFirmwareUpdateRequest message. Does not implicitly {@link particle.ctrl.FinishFirmwareUpdateRequest.verify|verify} messages.
             * @param message FinishFirmwareUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IFinishFirmwareUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FinishFirmwareUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FinishFirmwareUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.FinishFirmwareUpdateRequest;
        }

        /** Properties of a FinishFirmwareUpdateReply. */
        interface IFinishFirmwareUpdateReply {
        }

        /** Represents a FinishFirmwareUpdateReply. */
        class FinishFirmwareUpdateReply implements IFinishFirmwareUpdateReply {

            /**
             * Constructs a new FinishFirmwareUpdateReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IFinishFirmwareUpdateReply);

            /**
             * Creates a new FinishFirmwareUpdateReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FinishFirmwareUpdateReply instance
             */
            public static create(properties?: particle.ctrl.IFinishFirmwareUpdateReply): particle.ctrl.FinishFirmwareUpdateReply;

            /**
             * Encodes the specified FinishFirmwareUpdateReply message. Does not implicitly {@link particle.ctrl.FinishFirmwareUpdateReply.verify|verify} messages.
             * @param message FinishFirmwareUpdateReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IFinishFirmwareUpdateReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FinishFirmwareUpdateReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FinishFirmwareUpdateReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.FinishFirmwareUpdateReply;
        }

        /** Properties of a CancelFirmwareUpdateRequest. */
        interface ICancelFirmwareUpdateRequest {
        }

        /** Represents a CancelFirmwareUpdateRequest. */
        class CancelFirmwareUpdateRequest implements ICancelFirmwareUpdateRequest {

            /**
             * Constructs a new CancelFirmwareUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ICancelFirmwareUpdateRequest);

            /**
             * Creates a new CancelFirmwareUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelFirmwareUpdateRequest instance
             */
            public static create(properties?: particle.ctrl.ICancelFirmwareUpdateRequest): particle.ctrl.CancelFirmwareUpdateRequest;

            /**
             * Encodes the specified CancelFirmwareUpdateRequest message. Does not implicitly {@link particle.ctrl.CancelFirmwareUpdateRequest.verify|verify} messages.
             * @param message CancelFirmwareUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ICancelFirmwareUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelFirmwareUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelFirmwareUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.CancelFirmwareUpdateRequest;
        }

        /** Properties of a CancelFirmwareUpdateReply. */
        interface ICancelFirmwareUpdateReply {
        }

        /** Represents a CancelFirmwareUpdateReply. */
        class CancelFirmwareUpdateReply implements ICancelFirmwareUpdateReply {

            /**
             * Constructs a new CancelFirmwareUpdateReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.ICancelFirmwareUpdateReply);

            /**
             * Creates a new CancelFirmwareUpdateReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelFirmwareUpdateReply instance
             */
            public static create(properties?: particle.ctrl.ICancelFirmwareUpdateReply): particle.ctrl.CancelFirmwareUpdateReply;

            /**
             * Encodes the specified CancelFirmwareUpdateReply message. Does not implicitly {@link particle.ctrl.CancelFirmwareUpdateReply.verify|verify} messages.
             * @param message CancelFirmwareUpdateReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.ICancelFirmwareUpdateReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelFirmwareUpdateReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelFirmwareUpdateReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.CancelFirmwareUpdateReply;
        }

        /** Properties of a FirmwareUpdateDataRequest. */
        interface IFirmwareUpdateDataRequest {

            /** FirmwareUpdateDataRequest data */
            data?: (Uint8Array|null);
        }

        /** Represents a FirmwareUpdateDataRequest. */
        class FirmwareUpdateDataRequest implements IFirmwareUpdateDataRequest {

            /**
             * Constructs a new FirmwareUpdateDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IFirmwareUpdateDataRequest);

            /** FirmwareUpdateDataRequest data. */
            public data: Uint8Array;

            /**
             * Creates a new FirmwareUpdateDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FirmwareUpdateDataRequest instance
             */
            public static create(properties?: particle.ctrl.IFirmwareUpdateDataRequest): particle.ctrl.FirmwareUpdateDataRequest;

            /**
             * Encodes the specified FirmwareUpdateDataRequest message. Does not implicitly {@link particle.ctrl.FirmwareUpdateDataRequest.verify|verify} messages.
             * @param message FirmwareUpdateDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IFirmwareUpdateDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirmwareUpdateDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FirmwareUpdateDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.FirmwareUpdateDataRequest;
        }

        /** Properties of a FirmwareUpdateDataReply. */
        interface IFirmwareUpdateDataReply {
        }

        /** Represents a FirmwareUpdateDataReply. */
        class FirmwareUpdateDataReply implements IFirmwareUpdateDataReply {

            /**
             * Constructs a new FirmwareUpdateDataReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IFirmwareUpdateDataReply);

            /**
             * Creates a new FirmwareUpdateDataReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FirmwareUpdateDataReply instance
             */
            public static create(properties?: particle.ctrl.IFirmwareUpdateDataReply): particle.ctrl.FirmwareUpdateDataReply;

            /**
             * Encodes the specified FirmwareUpdateDataReply message. Does not implicitly {@link particle.ctrl.FirmwareUpdateDataReply.verify|verify} messages.
             * @param message FirmwareUpdateDataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IFirmwareUpdateDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirmwareUpdateDataReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FirmwareUpdateDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.FirmwareUpdateDataReply;
        }

        /** Properties of a DescribeStorageRequest. */
        interface IDescribeStorageRequest {
        }

        /** Represents a DescribeStorageRequest. */
        class DescribeStorageRequest implements IDescribeStorageRequest {

            /**
             * Constructs a new DescribeStorageRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IDescribeStorageRequest);

            /**
             * Creates a new DescribeStorageRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeStorageRequest instance
             */
            public static create(properties?: particle.ctrl.IDescribeStorageRequest): particle.ctrl.DescribeStorageRequest;

            /**
             * Encodes the specified DescribeStorageRequest message. Does not implicitly {@link particle.ctrl.DescribeStorageRequest.verify|verify} messages.
             * @param message DescribeStorageRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IDescribeStorageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeStorageRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeStorageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DescribeStorageRequest;
        }

        /** Properties of a DescribeStorageReply. */
        interface IDescribeStorageReply {

            /** DescribeStorageReply storage */
            storage?: (particle.ctrl.DescribeStorageReply.IStorage[]|null);
        }

        /** Represents a DescribeStorageReply. */
        class DescribeStorageReply implements IDescribeStorageReply {

            /**
             * Constructs a new DescribeStorageReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IDescribeStorageReply);

            /** DescribeStorageReply storage. */
            public storage: particle.ctrl.DescribeStorageReply.IStorage[];

            /**
             * Creates a new DescribeStorageReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeStorageReply instance
             */
            public static create(properties?: particle.ctrl.IDescribeStorageReply): particle.ctrl.DescribeStorageReply;

            /**
             * Encodes the specified DescribeStorageReply message. Does not implicitly {@link particle.ctrl.DescribeStorageReply.verify|verify} messages.
             * @param message DescribeStorageReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IDescribeStorageReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeStorageReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeStorageReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DescribeStorageReply;
        }

        namespace DescribeStorageReply {

            /** Properties of a Section. */
            interface ISection {

                /** Section type */
                type?: (particle.ctrl.SectionType|null);

                /** Section size */
                size?: (number|null);

                /** Section flags */
                flags?: (number|null);

                /** Section firmwareModule */
                firmwareModule?: (particle.ctrl.DescribeStorageReply.Section.IFirmwareModule|null);
            }

            /** Represents a Section. */
            class Section implements ISection {

                /**
                 * Constructs a new Section.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.DescribeStorageReply.ISection);

                /** Section type. */
                public type: particle.ctrl.SectionType;

                /** Section size. */
                public size: number;

                /** Section flags. */
                public flags: number;

                /** Section firmwareModule. */
                public firmwareModule?: (particle.ctrl.DescribeStorageReply.Section.IFirmwareModule|null);

                /**
                 * Creates a new Section instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Section instance
                 */
                public static create(properties?: particle.ctrl.DescribeStorageReply.ISection): particle.ctrl.DescribeStorageReply.Section;

                /**
                 * Encodes the specified Section message. Does not implicitly {@link particle.ctrl.DescribeStorageReply.Section.verify|verify} messages.
                 * @param message Section message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.DescribeStorageReply.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Section message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Section
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DescribeStorageReply.Section;
            }

            namespace Section {

                /** Properties of a FirmwareModule. */
                interface IFirmwareModule {

                    /** FirmwareModule type */
                    type?: (particle.ctrl.FirmwareModuleType|null);

                    /** FirmwareModule index */
                    index?: (number|null);
                }

                /** Represents a FirmwareModule. */
                class FirmwareModule implements IFirmwareModule {

                    /**
                     * Constructs a new FirmwareModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.DescribeStorageReply.Section.IFirmwareModule);

                    /** FirmwareModule type. */
                    public type: particle.ctrl.FirmwareModuleType;

                    /** FirmwareModule index. */
                    public index: number;

                    /**
                     * Creates a new FirmwareModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirmwareModule instance
                     */
                    public static create(properties?: particle.ctrl.DescribeStorageReply.Section.IFirmwareModule): particle.ctrl.DescribeStorageReply.Section.FirmwareModule;

                    /**
                     * Encodes the specified FirmwareModule message. Does not implicitly {@link particle.ctrl.DescribeStorageReply.Section.FirmwareModule.verify|verify} messages.
                     * @param message FirmwareModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.DescribeStorageReply.Section.IFirmwareModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirmwareModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirmwareModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DescribeStorageReply.Section.FirmwareModule;
                }
            }

            /** Properties of a Storage. */
            interface IStorage {

                /** Storage type */
                type?: (particle.ctrl.StorageType|null);

                /** Storage flags */
                flags?: (number|null);

                /** Storage sections */
                sections?: (particle.ctrl.DescribeStorageReply.ISection[]|null);
            }

            /** Represents a Storage. */
            class Storage implements IStorage {

                /**
                 * Constructs a new Storage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.DescribeStorageReply.IStorage);

                /** Storage type. */
                public type: particle.ctrl.StorageType;

                /** Storage flags. */
                public flags: number;

                /** Storage sections. */
                public sections: particle.ctrl.DescribeStorageReply.ISection[];

                /**
                 * Creates a new Storage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Storage instance
                 */
                public static create(properties?: particle.ctrl.DescribeStorageReply.IStorage): particle.ctrl.DescribeStorageReply.Storage;

                /**
                 * Encodes the specified Storage message. Does not implicitly {@link particle.ctrl.DescribeStorageReply.Storage.verify|verify} messages.
                 * @param message Storage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.DescribeStorageReply.IStorage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Storage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Storage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.DescribeStorageReply.Storage;
            }
        }

        /** Properties of a ReadSectionDataRequest. */
        interface IReadSectionDataRequest {

            /** ReadSectionDataRequest storage */
            storage?: (number|null);

            /** ReadSectionDataRequest section */
            section?: (number|null);

            /** ReadSectionDataRequest offset */
            offset?: (number|null);

            /** ReadSectionDataRequest size */
            size?: (number|null);
        }

        /** Represents a ReadSectionDataRequest. */
        class ReadSectionDataRequest implements IReadSectionDataRequest {

            /**
             * Constructs a new ReadSectionDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IReadSectionDataRequest);

            /** ReadSectionDataRequest storage. */
            public storage: number;

            /** ReadSectionDataRequest section. */
            public section: number;

            /** ReadSectionDataRequest offset. */
            public offset: number;

            /** ReadSectionDataRequest size. */
            public size: number;

            /**
             * Creates a new ReadSectionDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadSectionDataRequest instance
             */
            public static create(properties?: particle.ctrl.IReadSectionDataRequest): particle.ctrl.ReadSectionDataRequest;

            /**
             * Encodes the specified ReadSectionDataRequest message. Does not implicitly {@link particle.ctrl.ReadSectionDataRequest.verify|verify} messages.
             * @param message ReadSectionDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IReadSectionDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadSectionDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadSectionDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.ReadSectionDataRequest;
        }

        /** Properties of a ReadSectionDataReply. */
        interface IReadSectionDataReply {

            /** ReadSectionDataReply data */
            data?: (Uint8Array|null);
        }

        /** Represents a ReadSectionDataReply. */
        class ReadSectionDataReply implements IReadSectionDataReply {

            /**
             * Constructs a new ReadSectionDataReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IReadSectionDataReply);

            /** ReadSectionDataReply data. */
            public data: Uint8Array;

            /**
             * Creates a new ReadSectionDataReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadSectionDataReply instance
             */
            public static create(properties?: particle.ctrl.IReadSectionDataReply): particle.ctrl.ReadSectionDataReply;

            /**
             * Encodes the specified ReadSectionDataReply message. Does not implicitly {@link particle.ctrl.ReadSectionDataReply.verify|verify} messages.
             * @param message ReadSectionDataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IReadSectionDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadSectionDataReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadSectionDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.ReadSectionDataReply;
        }

        /** Properties of a WriteSectionDataRequest. */
        interface IWriteSectionDataRequest {

            /** WriteSectionDataRequest storage */
            storage?: (number|null);

            /** WriteSectionDataRequest section */
            section?: (number|null);

            /** WriteSectionDataRequest offset */
            offset?: (number|null);

            /** WriteSectionDataRequest data */
            data?: (Uint8Array|null);
        }

        /** Represents a WriteSectionDataRequest. */
        class WriteSectionDataRequest implements IWriteSectionDataRequest {

            /**
             * Constructs a new WriteSectionDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWriteSectionDataRequest);

            /** WriteSectionDataRequest storage. */
            public storage: number;

            /** WriteSectionDataRequest section. */
            public section: number;

            /** WriteSectionDataRequest offset. */
            public offset: number;

            /** WriteSectionDataRequest data. */
            public data: Uint8Array;

            /**
             * Creates a new WriteSectionDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteSectionDataRequest instance
             */
            public static create(properties?: particle.ctrl.IWriteSectionDataRequest): particle.ctrl.WriteSectionDataRequest;

            /**
             * Encodes the specified WriteSectionDataRequest message. Does not implicitly {@link particle.ctrl.WriteSectionDataRequest.verify|verify} messages.
             * @param message WriteSectionDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWriteSectionDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteSectionDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteSectionDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WriteSectionDataRequest;
        }

        /** Properties of a WriteSectionDataReply. */
        interface IWriteSectionDataReply {
        }

        /** Represents a WriteSectionDataReply. */
        class WriteSectionDataReply implements IWriteSectionDataReply {

            /**
             * Constructs a new WriteSectionDataReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWriteSectionDataReply);

            /**
             * Creates a new WriteSectionDataReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteSectionDataReply instance
             */
            public static create(properties?: particle.ctrl.IWriteSectionDataReply): particle.ctrl.WriteSectionDataReply;

            /**
             * Encodes the specified WriteSectionDataReply message. Does not implicitly {@link particle.ctrl.WriteSectionDataReply.verify|verify} messages.
             * @param message WriteSectionDataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWriteSectionDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteSectionDataReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteSectionDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WriteSectionDataReply;
        }

        /** Properties of a ClearSectionDataRequest. */
        interface IClearSectionDataRequest {

            /** ClearSectionDataRequest storage */
            storage?: (number|null);

            /** ClearSectionDataRequest section */
            section?: (number|null);
        }

        /** Represents a ClearSectionDataRequest. */
        class ClearSectionDataRequest implements IClearSectionDataRequest {

            /**
             * Constructs a new ClearSectionDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IClearSectionDataRequest);

            /** ClearSectionDataRequest storage. */
            public storage: number;

            /** ClearSectionDataRequest section. */
            public section: number;

            /**
             * Creates a new ClearSectionDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClearSectionDataRequest instance
             */
            public static create(properties?: particle.ctrl.IClearSectionDataRequest): particle.ctrl.ClearSectionDataRequest;

            /**
             * Encodes the specified ClearSectionDataRequest message. Does not implicitly {@link particle.ctrl.ClearSectionDataRequest.verify|verify} messages.
             * @param message ClearSectionDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IClearSectionDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClearSectionDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClearSectionDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.ClearSectionDataRequest;
        }

        /** Properties of a ClearSectionDataReply. */
        interface IClearSectionDataReply {
        }

        /** Represents a ClearSectionDataReply. */
        class ClearSectionDataReply implements IClearSectionDataReply {

            /**
             * Constructs a new ClearSectionDataReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IClearSectionDataReply);

            /**
             * Creates a new ClearSectionDataReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClearSectionDataReply instance
             */
            public static create(properties?: particle.ctrl.IClearSectionDataReply): particle.ctrl.ClearSectionDataReply;

            /**
             * Encodes the specified ClearSectionDataReply message. Does not implicitly {@link particle.ctrl.ClearSectionDataReply.verify|verify} messages.
             * @param message ClearSectionDataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IClearSectionDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClearSectionDataReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClearSectionDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.ClearSectionDataReply;
        }

        /** Properties of a GetSectionDataSizeRequest. */
        interface IGetSectionDataSizeRequest {

            /** GetSectionDataSizeRequest storage */
            storage?: (number|null);

            /** GetSectionDataSizeRequest section */
            section?: (number|null);
        }

        /** Represents a GetSectionDataSizeRequest. */
        class GetSectionDataSizeRequest implements IGetSectionDataSizeRequest {

            /**
             * Constructs a new GetSectionDataSizeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSectionDataSizeRequest);

            /** GetSectionDataSizeRequest storage. */
            public storage: number;

            /** GetSectionDataSizeRequest section. */
            public section: number;

            /**
             * Creates a new GetSectionDataSizeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSectionDataSizeRequest instance
             */
            public static create(properties?: particle.ctrl.IGetSectionDataSizeRequest): particle.ctrl.GetSectionDataSizeRequest;

            /**
             * Encodes the specified GetSectionDataSizeRequest message. Does not implicitly {@link particle.ctrl.GetSectionDataSizeRequest.verify|verify} messages.
             * @param message GetSectionDataSizeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSectionDataSizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSectionDataSizeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSectionDataSizeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSectionDataSizeRequest;
        }

        /** Properties of a GetSectionDataSizeReply. */
        interface IGetSectionDataSizeReply {

            /** GetSectionDataSizeReply size */
            size?: (number|null);
        }

        /** Represents a GetSectionDataSizeReply. */
        class GetSectionDataSizeReply implements IGetSectionDataSizeReply {

            /**
             * Constructs a new GetSectionDataSizeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetSectionDataSizeReply);

            /** GetSectionDataSizeReply size. */
            public size: number;

            /**
             * Creates a new GetSectionDataSizeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSectionDataSizeReply instance
             */
            public static create(properties?: particle.ctrl.IGetSectionDataSizeReply): particle.ctrl.GetSectionDataSizeReply;

            /**
             * Encodes the specified GetSectionDataSizeReply message. Does not implicitly {@link particle.ctrl.GetSectionDataSizeReply.verify|verify} messages.
             * @param message GetSectionDataSizeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetSectionDataSizeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSectionDataSizeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSectionDataSizeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetSectionDataSizeReply;
        }

        /** Properties of a GetModuleInfoRequest. */
        interface IGetModuleInfoRequest {
        }

        /** Get firmware module info. */
        class GetModuleInfoRequest implements IGetModuleInfoRequest {

            /**
             * Constructs a new GetModuleInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetModuleInfoRequest);

            /**
             * Creates a new GetModuleInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetModuleInfoRequest instance
             */
            public static create(properties?: particle.ctrl.IGetModuleInfoRequest): particle.ctrl.GetModuleInfoRequest;

            /**
             * Encodes the specified GetModuleInfoRequest message. Does not implicitly {@link particle.ctrl.GetModuleInfoRequest.verify|verify} messages.
             * @param message GetModuleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetModuleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetModuleInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetModuleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetModuleInfoRequest;
        }

        /** Properties of a GetModuleInfoReply. */
        interface IGetModuleInfoReply {

            /** GetModuleInfoReply modules */
            modules?: (particle.ctrl.GetModuleInfoReply.IModule[]|null);
        }

        /** Represents a GetModuleInfoReply. */
        class GetModuleInfoReply implements IGetModuleInfoReply {

            /**
             * Constructs a new GetModuleInfoReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IGetModuleInfoReply);

            /** GetModuleInfoReply modules. */
            public modules: particle.ctrl.GetModuleInfoReply.IModule[];

            /**
             * Creates a new GetModuleInfoReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetModuleInfoReply instance
             */
            public static create(properties?: particle.ctrl.IGetModuleInfoReply): particle.ctrl.GetModuleInfoReply;

            /**
             * Encodes the specified GetModuleInfoReply message. Does not implicitly {@link particle.ctrl.GetModuleInfoReply.verify|verify} messages.
             * @param message GetModuleInfoReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IGetModuleInfoReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetModuleInfoReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetModuleInfoReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetModuleInfoReply;
        }

        namespace GetModuleInfoReply {

            /** Properties of a Dependency. */
            interface IDependency {

                /** Dependency type */
                type?: (particle.ctrl.FirmwareModuleType|null);

                /** Dependency index */
                index?: (number|null);

                /** Dependency version */
                version?: (number|null);
            }

            /** Represents a Dependency. */
            class Dependency implements IDependency {

                /**
                 * Constructs a new Dependency.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.GetModuleInfoReply.IDependency);

                /** Dependency type. */
                public type: particle.ctrl.FirmwareModuleType;

                /** Dependency index. */
                public index: number;

                /** Dependency version. */
                public version: number;

                /**
                 * Creates a new Dependency instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Dependency instance
                 */
                public static create(properties?: particle.ctrl.GetModuleInfoReply.IDependency): particle.ctrl.GetModuleInfoReply.Dependency;

                /**
                 * Encodes the specified Dependency message. Does not implicitly {@link particle.ctrl.GetModuleInfoReply.Dependency.verify|verify} messages.
                 * @param message Dependency message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.GetModuleInfoReply.IDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Dependency message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Dependency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetModuleInfoReply.Dependency;
            }

            /** Properties of a Module. */
            interface IModule {

                /** Module type */
                type?: (particle.ctrl.FirmwareModuleType|null);

                /** Module index */
                index?: (number|null);

                /** Module version */
                version?: (number|null);

                /** Module size */
                size?: (number|null);

                /** Module validity */
                validity?: (number|null);

                /** Module dependencies */
                dependencies?: (particle.ctrl.GetModuleInfoReply.IDependency[]|null);
            }

            /** Represents a Module. */
            class Module implements IModule {

                /**
                 * Constructs a new Module.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.GetModuleInfoReply.IModule);

                /** Module type. */
                public type: particle.ctrl.FirmwareModuleType;

                /** Module index. */
                public index: number;

                /** Module version. */
                public version: number;

                /** Module size. */
                public size: number;

                /** Module validity. */
                public validity: number;

                /** Module dependencies. */
                public dependencies: particle.ctrl.GetModuleInfoReply.IDependency[];

                /**
                 * Creates a new Module instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Module instance
                 */
                public static create(properties?: particle.ctrl.GetModuleInfoReply.IModule): particle.ctrl.GetModuleInfoReply.Module;

                /**
                 * Encodes the specified Module message. Does not implicitly {@link particle.ctrl.GetModuleInfoReply.Module.verify|verify} messages.
                 * @param message Module message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.GetModuleInfoReply.IModule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Module message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Module
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.GetModuleInfoReply.Module;
            }
        }

        /** Namespace wifi. */
        namespace wifi {

            /**
             * WiFi security types.
             *
             * Note: The values of this enum should match the values defined by the `WifiSecurity` enum in
             * the firmware.
             */
            enum Security {
                NO_SECURITY = 0,
                WEP = 1,
                WPA_PSK = 2,
                WPA2_PSK = 3,
                WPA_WPA2_PSK = 4
            }

            /**
             * Network credential types.
             *
             * Note: The values of this enum should match the values defined by the `WiFiCredentials::Type` enum
             * in the firmware.
             */
            enum CredentialsType {
                NO_CREDENTIALS = 0,
                PASSWORD = 1
            }

            /** Properties of a Credentials. */
            interface ICredentials {

                /** Credentials type */
                type?: (particle.ctrl.wifi.CredentialsType|null);

                /** Credentials password */
                password?: (string|null);
            }

            /** Network credentials. */
            class Credentials implements ICredentials {

                /**
                 * Constructs a new Credentials.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.ICredentials);

                /** Credentials type. */
                public type: particle.ctrl.wifi.CredentialsType;

                /** Credentials password. */
                public password: string;

                /**
                 * Creates a new Credentials instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Credentials instance
                 */
                public static create(properties?: particle.ctrl.wifi.ICredentials): particle.ctrl.wifi.Credentials;

                /**
                 * Encodes the specified Credentials message. Does not implicitly {@link particle.ctrl.wifi.Credentials.verify|verify} messages.
                 * @param message Credentials message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Credentials message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Credentials
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.Credentials;
            }

            /** Properties of a JoinNewNetworkRequest. */
            interface IJoinNewNetworkRequest {

                /** JoinNewNetworkRequest ssid */
                ssid?: (string|null);

                /** JoinNewNetworkRequest bssid */
                bssid?: (Uint8Array|null);

                /** JoinNewNetworkRequest security */
                security?: (particle.ctrl.wifi.Security|null);

                /** JoinNewNetworkRequest credentials */
                credentials?: (particle.ctrl.wifi.ICredentials|null);

                /** JoinNewNetworkRequest interfaceConfig */
                interfaceConfig?: (particle.ctrl.IInterface|null);
            }

            /**
             * Join a new network.
             *
             * On success, the network credentials get saved to a persistent storage.
             */
            class JoinNewNetworkRequest implements IJoinNewNetworkRequest {

                /**
                 * Constructs a new JoinNewNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IJoinNewNetworkRequest);

                /** JoinNewNetworkRequest ssid. */
                public ssid: string;

                /** JoinNewNetworkRequest bssid. */
                public bssid: Uint8Array;

                /** JoinNewNetworkRequest security. */
                public security: particle.ctrl.wifi.Security;

                /** JoinNewNetworkRequest credentials. */
                public credentials?: (particle.ctrl.wifi.ICredentials|null);

                /** JoinNewNetworkRequest interfaceConfig. */
                public interfaceConfig?: (particle.ctrl.IInterface|null);

                /**
                 * Creates a new JoinNewNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JoinNewNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IJoinNewNetworkRequest): particle.ctrl.wifi.JoinNewNetworkRequest;

                /**
                 * Encodes the specified JoinNewNetworkRequest message. Does not implicitly {@link particle.ctrl.wifi.JoinNewNetworkRequest.verify|verify} messages.
                 * @param message JoinNewNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IJoinNewNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JoinNewNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JoinNewNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.JoinNewNetworkRequest;
            }

            /** Properties of a JoinNewNetworkReply. */
            interface IJoinNewNetworkReply {
            }

            /** Represents a JoinNewNetworkReply. */
            class JoinNewNetworkReply implements IJoinNewNetworkReply {

                /**
                 * Constructs a new JoinNewNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IJoinNewNetworkReply);

                /**
                 * Creates a new JoinNewNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JoinNewNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IJoinNewNetworkReply): particle.ctrl.wifi.JoinNewNetworkReply;

                /**
                 * Encodes the specified JoinNewNetworkReply message. Does not implicitly {@link particle.ctrl.wifi.JoinNewNetworkReply.verify|verify} messages.
                 * @param message JoinNewNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IJoinNewNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JoinNewNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JoinNewNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.JoinNewNetworkReply;
            }

            /** Properties of a JoinKnownNetworkRequest. */
            interface IJoinKnownNetworkRequest {

                /** JoinKnownNetworkRequest ssid */
                ssid?: (string|null);
            }

            /** Join a known network. */
            class JoinKnownNetworkRequest implements IJoinKnownNetworkRequest {

                /**
                 * Constructs a new JoinKnownNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IJoinKnownNetworkRequest);

                /** JoinKnownNetworkRequest ssid. */
                public ssid: string;

                /**
                 * Creates a new JoinKnownNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JoinKnownNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IJoinKnownNetworkRequest): particle.ctrl.wifi.JoinKnownNetworkRequest;

                /**
                 * Encodes the specified JoinKnownNetworkRequest message. Does not implicitly {@link particle.ctrl.wifi.JoinKnownNetworkRequest.verify|verify} messages.
                 * @param message JoinKnownNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IJoinKnownNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JoinKnownNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JoinKnownNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.JoinKnownNetworkRequest;
            }

            /** Properties of a JoinKnownNetworkReply. */
            interface IJoinKnownNetworkReply {
            }

            /** Represents a JoinKnownNetworkReply. */
            class JoinKnownNetworkReply implements IJoinKnownNetworkReply {

                /**
                 * Constructs a new JoinKnownNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IJoinKnownNetworkReply);

                /**
                 * Creates a new JoinKnownNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JoinKnownNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IJoinKnownNetworkReply): particle.ctrl.wifi.JoinKnownNetworkReply;

                /**
                 * Encodes the specified JoinKnownNetworkReply message. Does not implicitly {@link particle.ctrl.wifi.JoinKnownNetworkReply.verify|verify} messages.
                 * @param message JoinKnownNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IJoinKnownNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JoinKnownNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JoinKnownNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.JoinKnownNetworkReply;
            }

            /** Properties of a GetKnownNetworksRequest. */
            interface IGetKnownNetworksRequest {
            }

            /** Get the list of known networks. */
            class GetKnownNetworksRequest implements IGetKnownNetworksRequest {

                /**
                 * Constructs a new GetKnownNetworksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IGetKnownNetworksRequest);

                /**
                 * Creates a new GetKnownNetworksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetKnownNetworksRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IGetKnownNetworksRequest): particle.ctrl.wifi.GetKnownNetworksRequest;

                /**
                 * Encodes the specified GetKnownNetworksRequest message. Does not implicitly {@link particle.ctrl.wifi.GetKnownNetworksRequest.verify|verify} messages.
                 * @param message GetKnownNetworksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IGetKnownNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetKnownNetworksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetKnownNetworksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.GetKnownNetworksRequest;
            }

            /** Properties of a GetKnownNetworksReply. */
            interface IGetKnownNetworksReply {

                /** GetKnownNetworksReply networks */
                networks?: (particle.ctrl.wifi.GetKnownNetworksReply.INetwork[]|null);
            }

            /** Represents a GetKnownNetworksReply. */
            class GetKnownNetworksReply implements IGetKnownNetworksReply {

                /**
                 * Constructs a new GetKnownNetworksReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IGetKnownNetworksReply);

                /** GetKnownNetworksReply networks. */
                public networks: particle.ctrl.wifi.GetKnownNetworksReply.INetwork[];

                /**
                 * Creates a new GetKnownNetworksReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetKnownNetworksReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IGetKnownNetworksReply): particle.ctrl.wifi.GetKnownNetworksReply;

                /**
                 * Encodes the specified GetKnownNetworksReply message. Does not implicitly {@link particle.ctrl.wifi.GetKnownNetworksReply.verify|verify} messages.
                 * @param message GetKnownNetworksReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IGetKnownNetworksReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetKnownNetworksReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetKnownNetworksReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.GetKnownNetworksReply;
            }

            namespace GetKnownNetworksReply {

                /** Properties of a Network. */
                interface INetwork {

                    /** Network ssid */
                    ssid?: (string|null);

                    /** Network security */
                    security?: (particle.ctrl.wifi.Security|null);

                    /** Network credentialsType */
                    credentialsType?: (particle.ctrl.wifi.CredentialsType|null);
                }

                /** Represents a Network. */
                class Network implements INetwork {

                    /**
                     * Constructs a new Network.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.wifi.GetKnownNetworksReply.INetwork);

                    /** Network ssid. */
                    public ssid: string;

                    /** Network security. */
                    public security: particle.ctrl.wifi.Security;

                    /** Network credentialsType. */
                    public credentialsType: particle.ctrl.wifi.CredentialsType;

                    /**
                     * Creates a new Network instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Network instance
                     */
                    public static create(properties?: particle.ctrl.wifi.GetKnownNetworksReply.INetwork): particle.ctrl.wifi.GetKnownNetworksReply.Network;

                    /**
                     * Encodes the specified Network message. Does not implicitly {@link particle.ctrl.wifi.GetKnownNetworksReply.Network.verify|verify} messages.
                     * @param message Network message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.wifi.GetKnownNetworksReply.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Network message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Network
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.GetKnownNetworksReply.Network;
                }
            }

            /** Properties of a RemoveKnownNetworkRequest. */
            interface IRemoveKnownNetworkRequest {

                /** RemoveKnownNetworkRequest ssid */
                ssid?: (string|null);
            }

            /** Remove the network from the list of known networks. */
            class RemoveKnownNetworkRequest implements IRemoveKnownNetworkRequest {

                /**
                 * Constructs a new RemoveKnownNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IRemoveKnownNetworkRequest);

                /** RemoveKnownNetworkRequest ssid. */
                public ssid: string;

                /**
                 * Creates a new RemoveKnownNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveKnownNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IRemoveKnownNetworkRequest): particle.ctrl.wifi.RemoveKnownNetworkRequest;

                /**
                 * Encodes the specified RemoveKnownNetworkRequest message. Does not implicitly {@link particle.ctrl.wifi.RemoveKnownNetworkRequest.verify|verify} messages.
                 * @param message RemoveKnownNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IRemoveKnownNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveKnownNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveKnownNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.RemoveKnownNetworkRequest;
            }

            /** Properties of a RemoveKnownNetworkReply. */
            interface IRemoveKnownNetworkReply {
            }

            /** Represents a RemoveKnownNetworkReply. */
            class RemoveKnownNetworkReply implements IRemoveKnownNetworkReply {

                /**
                 * Constructs a new RemoveKnownNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IRemoveKnownNetworkReply);

                /**
                 * Creates a new RemoveKnownNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveKnownNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IRemoveKnownNetworkReply): particle.ctrl.wifi.RemoveKnownNetworkReply;

                /**
                 * Encodes the specified RemoveKnownNetworkReply message. Does not implicitly {@link particle.ctrl.wifi.RemoveKnownNetworkReply.verify|verify} messages.
                 * @param message RemoveKnownNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IRemoveKnownNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveKnownNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveKnownNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.RemoveKnownNetworkReply;
            }

            /** Properties of a ClearKnownNetworksRequest. */
            interface IClearKnownNetworksRequest {
            }

            /** Remove all known networks. */
            class ClearKnownNetworksRequest implements IClearKnownNetworksRequest {

                /**
                 * Constructs a new ClearKnownNetworksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IClearKnownNetworksRequest);

                /**
                 * Creates a new ClearKnownNetworksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClearKnownNetworksRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IClearKnownNetworksRequest): particle.ctrl.wifi.ClearKnownNetworksRequest;

                /**
                 * Encodes the specified ClearKnownNetworksRequest message. Does not implicitly {@link particle.ctrl.wifi.ClearKnownNetworksRequest.verify|verify} messages.
                 * @param message ClearKnownNetworksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IClearKnownNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClearKnownNetworksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClearKnownNetworksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.ClearKnownNetworksRequest;
            }

            /** Properties of a ClearKnownNetworksReply. */
            interface IClearKnownNetworksReply {
            }

            /** Represents a ClearKnownNetworksReply. */
            class ClearKnownNetworksReply implements IClearKnownNetworksReply {

                /**
                 * Constructs a new ClearKnownNetworksReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IClearKnownNetworksReply);

                /**
                 * Creates a new ClearKnownNetworksReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClearKnownNetworksReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IClearKnownNetworksReply): particle.ctrl.wifi.ClearKnownNetworksReply;

                /**
                 * Encodes the specified ClearKnownNetworksReply message. Does not implicitly {@link particle.ctrl.wifi.ClearKnownNetworksReply.verify|verify} messages.
                 * @param message ClearKnownNetworksReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IClearKnownNetworksReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClearKnownNetworksReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClearKnownNetworksReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.ClearKnownNetworksReply;
            }

            /** Properties of a GetCurrentNetworkRequest. */
            interface IGetCurrentNetworkRequest {
            }

            /**
             * Get the current network.
             *
             * This request gets the network which the device is currently connected to.
             */
            class GetCurrentNetworkRequest implements IGetCurrentNetworkRequest {

                /**
                 * Constructs a new GetCurrentNetworkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IGetCurrentNetworkRequest);

                /**
                 * Creates a new GetCurrentNetworkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetCurrentNetworkRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IGetCurrentNetworkRequest): particle.ctrl.wifi.GetCurrentNetworkRequest;

                /**
                 * Encodes the specified GetCurrentNetworkRequest message. Does not implicitly {@link particle.ctrl.wifi.GetCurrentNetworkRequest.verify|verify} messages.
                 * @param message GetCurrentNetworkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IGetCurrentNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetCurrentNetworkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetCurrentNetworkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.GetCurrentNetworkRequest;
            }

            /** Properties of a GetCurrentNetworkReply. */
            interface IGetCurrentNetworkReply {

                /** GetCurrentNetworkReply ssid */
                ssid?: (string|null);

                /** GetCurrentNetworkReply bssid */
                bssid?: (Uint8Array|null);

                /** GetCurrentNetworkReply channel */
                channel?: (number|null);

                /** GetCurrentNetworkReply rssi */
                rssi?: (number|null);
            }

            /** Represents a GetCurrentNetworkReply. */
            class GetCurrentNetworkReply implements IGetCurrentNetworkReply {

                /**
                 * Constructs a new GetCurrentNetworkReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IGetCurrentNetworkReply);

                /** GetCurrentNetworkReply ssid. */
                public ssid: string;

                /** GetCurrentNetworkReply bssid. */
                public bssid: Uint8Array;

                /** GetCurrentNetworkReply channel. */
                public channel: number;

                /** GetCurrentNetworkReply rssi. */
                public rssi: number;

                /**
                 * Creates a new GetCurrentNetworkReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetCurrentNetworkReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IGetCurrentNetworkReply): particle.ctrl.wifi.GetCurrentNetworkReply;

                /**
                 * Encodes the specified GetCurrentNetworkReply message. Does not implicitly {@link particle.ctrl.wifi.GetCurrentNetworkReply.verify|verify} messages.
                 * @param message GetCurrentNetworkReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IGetCurrentNetworkReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetCurrentNetworkReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetCurrentNetworkReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.GetCurrentNetworkReply;
            }

            /** Properties of a ScanNetworksRequest. */
            interface IScanNetworksRequest {
            }

            /** Scan for networks. */
            class ScanNetworksRequest implements IScanNetworksRequest {

                /**
                 * Constructs a new ScanNetworksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IScanNetworksRequest);

                /**
                 * Creates a new ScanNetworksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScanNetworksRequest instance
                 */
                public static create(properties?: particle.ctrl.wifi.IScanNetworksRequest): particle.ctrl.wifi.ScanNetworksRequest;

                /**
                 * Encodes the specified ScanNetworksRequest message. Does not implicitly {@link particle.ctrl.wifi.ScanNetworksRequest.verify|verify} messages.
                 * @param message ScanNetworksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IScanNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScanNetworksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScanNetworksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.ScanNetworksRequest;
            }

            /** Properties of a ScanNetworksReply. */
            interface IScanNetworksReply {

                /** ScanNetworksReply networks */
                networks?: (particle.ctrl.wifi.ScanNetworksReply.INetwork[]|null);
            }

            /** Represents a ScanNetworksReply. */
            class ScanNetworksReply implements IScanNetworksReply {

                /**
                 * Constructs a new ScanNetworksReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: particle.ctrl.wifi.IScanNetworksReply);

                /** ScanNetworksReply networks. */
                public networks: particle.ctrl.wifi.ScanNetworksReply.INetwork[];

                /**
                 * Creates a new ScanNetworksReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScanNetworksReply instance
                 */
                public static create(properties?: particle.ctrl.wifi.IScanNetworksReply): particle.ctrl.wifi.ScanNetworksReply;

                /**
                 * Encodes the specified ScanNetworksReply message. Does not implicitly {@link particle.ctrl.wifi.ScanNetworksReply.verify|verify} messages.
                 * @param message ScanNetworksReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: particle.ctrl.wifi.IScanNetworksReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScanNetworksReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScanNetworksReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.ScanNetworksReply;
            }

            namespace ScanNetworksReply {

                /** Properties of a Network. */
                interface INetwork {

                    /** Network ssid */
                    ssid?: (string|null);

                    /** Network bssid */
                    bssid?: (Uint8Array|null);

                    /** Network security */
                    security?: (particle.ctrl.wifi.Security|null);

                    /** Network channel */
                    channel?: (number|null);

                    /** Network rssi */
                    rssi?: (number|null);
                }

                /** Represents a Network. */
                class Network implements INetwork {

                    /**
                     * Constructs a new Network.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: particle.ctrl.wifi.ScanNetworksReply.INetwork);

                    /** Network ssid. */
                    public ssid: string;

                    /** Network bssid. */
                    public bssid: Uint8Array;

                    /** Network security. */
                    public security: particle.ctrl.wifi.Security;

                    /** Network channel. */
                    public channel: number;

                    /** Network rssi. */
                    public rssi: number;

                    /**
                     * Creates a new Network instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Network instance
                     */
                    public static create(properties?: particle.ctrl.wifi.ScanNetworksReply.INetwork): particle.ctrl.wifi.ScanNetworksReply.Network;

                    /**
                     * Encodes the specified Network message. Does not implicitly {@link particle.ctrl.wifi.ScanNetworksReply.Network.verify|verify} messages.
                     * @param message Network message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: particle.ctrl.wifi.ScanNetworksReply.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Network message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Network
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.wifi.ScanNetworksReply.Network;
                }
            }
        }

        /** Properties of a WiFiGetAntennaRequest. */
        interface IWiFiGetAntennaRequest {
        }

        /** Represents a WiFiGetAntennaRequest. */
        class WiFiGetAntennaRequest implements IWiFiGetAntennaRequest {

            /**
             * Constructs a new WiFiGetAntennaRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiGetAntennaRequest);

            /**
             * Creates a new WiFiGetAntennaRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiGetAntennaRequest instance
             */
            public static create(properties?: particle.ctrl.IWiFiGetAntennaRequest): particle.ctrl.WiFiGetAntennaRequest;

            /**
             * Encodes the specified WiFiGetAntennaRequest message. Does not implicitly {@link particle.ctrl.WiFiGetAntennaRequest.verify|verify} messages.
             * @param message WiFiGetAntennaRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiGetAntennaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiGetAntennaRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiGetAntennaRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiGetAntennaRequest;
        }

        /** Properties of a WiFiGetAntennaReply. */
        interface IWiFiGetAntennaReply {

            /** WiFiGetAntennaReply antenna */
            antenna?: (particle.ctrl.WiFiAntenna|null);
        }

        /** Represents a WiFiGetAntennaReply. */
        class WiFiGetAntennaReply implements IWiFiGetAntennaReply {

            /**
             * Constructs a new WiFiGetAntennaReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiGetAntennaReply);

            /** WiFiGetAntennaReply antenna. */
            public antenna: particle.ctrl.WiFiAntenna;

            /**
             * Creates a new WiFiGetAntennaReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiGetAntennaReply instance
             */
            public static create(properties?: particle.ctrl.IWiFiGetAntennaReply): particle.ctrl.WiFiGetAntennaReply;

            /**
             * Encodes the specified WiFiGetAntennaReply message. Does not implicitly {@link particle.ctrl.WiFiGetAntennaReply.verify|verify} messages.
             * @param message WiFiGetAntennaReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiGetAntennaReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiGetAntennaReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiGetAntennaReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiGetAntennaReply;
        }

        /** Properties of a WiFiSetAntennaRequest. */
        interface IWiFiSetAntennaRequest {

            /** WiFiSetAntennaRequest antenna */
            antenna?: (particle.ctrl.WiFiAntenna|null);
        }

        /** Represents a WiFiSetAntennaRequest. */
        class WiFiSetAntennaRequest implements IWiFiSetAntennaRequest {

            /**
             * Constructs a new WiFiSetAntennaRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiSetAntennaRequest);

            /** WiFiSetAntennaRequest antenna. */
            public antenna: particle.ctrl.WiFiAntenna;

            /**
             * Creates a new WiFiSetAntennaRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiSetAntennaRequest instance
             */
            public static create(properties?: particle.ctrl.IWiFiSetAntennaRequest): particle.ctrl.WiFiSetAntennaRequest;

            /**
             * Encodes the specified WiFiSetAntennaRequest message. Does not implicitly {@link particle.ctrl.WiFiSetAntennaRequest.verify|verify} messages.
             * @param message WiFiSetAntennaRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiSetAntennaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiSetAntennaRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiSetAntennaRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiSetAntennaRequest;
        }

        /** Properties of a WiFiSetAntennaReply. */
        interface IWiFiSetAntennaReply {
        }

        /** Represents a WiFiSetAntennaReply. */
        class WiFiSetAntennaReply implements IWiFiSetAntennaReply {

            /**
             * Constructs a new WiFiSetAntennaReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiSetAntennaReply);

            /**
             * Creates a new WiFiSetAntennaReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiSetAntennaReply instance
             */
            public static create(properties?: particle.ctrl.IWiFiSetAntennaReply): particle.ctrl.WiFiSetAntennaReply;

            /**
             * Encodes the specified WiFiSetAntennaReply message. Does not implicitly {@link particle.ctrl.WiFiSetAntennaReply.verify|verify} messages.
             * @param message WiFiSetAntennaReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiSetAntennaReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiSetAntennaReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiSetAntennaReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiSetAntennaReply;
        }

        /** Properties of a WiFiScanRequest. */
        interface IWiFiScanRequest {
        }

        /** Represents a WiFiScanRequest. */
        class WiFiScanRequest implements IWiFiScanRequest {

            /**
             * Constructs a new WiFiScanRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiScanRequest);

            /**
             * Creates a new WiFiScanRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiScanRequest instance
             */
            public static create(properties?: particle.ctrl.IWiFiScanRequest): particle.ctrl.WiFiScanRequest;

            /**
             * Encodes the specified WiFiScanRequest message. Does not implicitly {@link particle.ctrl.WiFiScanRequest.verify|verify} messages.
             * @param message WiFiScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiScanRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiScanRequest;
        }

        /** Properties of a WiFiScanReply. */
        interface IWiFiScanReply {

            /** WiFiScanReply list */
            list?: (particle.ctrl.IWiFiAccessPointList|null);
        }

        /** Represents a WiFiScanReply. */
        class WiFiScanReply implements IWiFiScanReply {

            /**
             * Constructs a new WiFiScanReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiScanReply);

            /** WiFiScanReply list. */
            public list?: (particle.ctrl.IWiFiAccessPointList|null);

            /**
             * Creates a new WiFiScanReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiScanReply instance
             */
            public static create(properties?: particle.ctrl.IWiFiScanReply): particle.ctrl.WiFiScanReply;

            /**
             * Encodes the specified WiFiScanReply message. Does not implicitly {@link particle.ctrl.WiFiScanReply.verify|verify} messages.
             * @param message WiFiScanReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiScanReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiScanReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiScanReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiScanReply;
        }

        /** Properties of a WiFiGetCredentialsRequest. */
        interface IWiFiGetCredentialsRequest {
        }

        /** Represents a WiFiGetCredentialsRequest. */
        class WiFiGetCredentialsRequest implements IWiFiGetCredentialsRequest {

            /**
             * Constructs a new WiFiGetCredentialsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiGetCredentialsRequest);

            /**
             * Creates a new WiFiGetCredentialsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiGetCredentialsRequest instance
             */
            public static create(properties?: particle.ctrl.IWiFiGetCredentialsRequest): particle.ctrl.WiFiGetCredentialsRequest;

            /**
             * Encodes the specified WiFiGetCredentialsRequest message. Does not implicitly {@link particle.ctrl.WiFiGetCredentialsRequest.verify|verify} messages.
             * @param message WiFiGetCredentialsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiGetCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiGetCredentialsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiGetCredentialsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiGetCredentialsRequest;
        }

        /** Properties of a WiFiGetCredentialsReply. */
        interface IWiFiGetCredentialsReply {

            /** WiFiGetCredentialsReply list */
            list?: (particle.ctrl.IWiFiAccessPointList|null);
        }

        /** Represents a WiFiGetCredentialsReply. */
        class WiFiGetCredentialsReply implements IWiFiGetCredentialsReply {

            /**
             * Constructs a new WiFiGetCredentialsReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiGetCredentialsReply);

            /** WiFiGetCredentialsReply list. */
            public list?: (particle.ctrl.IWiFiAccessPointList|null);

            /**
             * Creates a new WiFiGetCredentialsReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiGetCredentialsReply instance
             */
            public static create(properties?: particle.ctrl.IWiFiGetCredentialsReply): particle.ctrl.WiFiGetCredentialsReply;

            /**
             * Encodes the specified WiFiGetCredentialsReply message. Does not implicitly {@link particle.ctrl.WiFiGetCredentialsReply.verify|verify} messages.
             * @param message WiFiGetCredentialsReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiGetCredentialsReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiGetCredentialsReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiGetCredentialsReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiGetCredentialsReply;
        }

        /** Properties of a WiFiSetCredentialsRequest. */
        interface IWiFiSetCredentialsRequest {

            /** WiFiSetCredentialsRequest ap */
            ap?: (particle.ctrl.IWiFiAccessPoint|null);
        }

        /** Represents a WiFiSetCredentialsRequest. */
        class WiFiSetCredentialsRequest implements IWiFiSetCredentialsRequest {

            /**
             * Constructs a new WiFiSetCredentialsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiSetCredentialsRequest);

            /** WiFiSetCredentialsRequest ap. */
            public ap?: (particle.ctrl.IWiFiAccessPoint|null);

            /**
             * Creates a new WiFiSetCredentialsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiSetCredentialsRequest instance
             */
            public static create(properties?: particle.ctrl.IWiFiSetCredentialsRequest): particle.ctrl.WiFiSetCredentialsRequest;

            /**
             * Encodes the specified WiFiSetCredentialsRequest message. Does not implicitly {@link particle.ctrl.WiFiSetCredentialsRequest.verify|verify} messages.
             * @param message WiFiSetCredentialsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiSetCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiSetCredentialsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiSetCredentialsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiSetCredentialsRequest;
        }

        /** Properties of a WiFiSetCredentialsReply. */
        interface IWiFiSetCredentialsReply {
        }

        /** Represents a WiFiSetCredentialsReply. */
        class WiFiSetCredentialsReply implements IWiFiSetCredentialsReply {

            /**
             * Constructs a new WiFiSetCredentialsReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiSetCredentialsReply);

            /**
             * Creates a new WiFiSetCredentialsReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiSetCredentialsReply instance
             */
            public static create(properties?: particle.ctrl.IWiFiSetCredentialsReply): particle.ctrl.WiFiSetCredentialsReply;

            /**
             * Encodes the specified WiFiSetCredentialsReply message. Does not implicitly {@link particle.ctrl.WiFiSetCredentialsReply.verify|verify} messages.
             * @param message WiFiSetCredentialsReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiSetCredentialsReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiSetCredentialsReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiSetCredentialsReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiSetCredentialsReply;
        }

        /** Properties of a WiFiClearCredentialsRequest. */
        interface IWiFiClearCredentialsRequest {
        }

        /** Represents a WiFiClearCredentialsRequest. */
        class WiFiClearCredentialsRequest implements IWiFiClearCredentialsRequest {

            /**
             * Constructs a new WiFiClearCredentialsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiClearCredentialsRequest);

            /**
             * Creates a new WiFiClearCredentialsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiClearCredentialsRequest instance
             */
            public static create(properties?: particle.ctrl.IWiFiClearCredentialsRequest): particle.ctrl.WiFiClearCredentialsRequest;

            /**
             * Encodes the specified WiFiClearCredentialsRequest message. Does not implicitly {@link particle.ctrl.WiFiClearCredentialsRequest.verify|verify} messages.
             * @param message WiFiClearCredentialsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiClearCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiClearCredentialsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiClearCredentialsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiClearCredentialsRequest;
        }

        /** Properties of a WiFiClearCredentialsReply. */
        interface IWiFiClearCredentialsReply {
        }

        /** Represents a WiFiClearCredentialsReply. */
        class WiFiClearCredentialsReply implements IWiFiClearCredentialsReply {

            /**
             * Constructs a new WiFiClearCredentialsReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiClearCredentialsReply);

            /**
             * Creates a new WiFiClearCredentialsReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiClearCredentialsReply instance
             */
            public static create(properties?: particle.ctrl.IWiFiClearCredentialsReply): particle.ctrl.WiFiClearCredentialsReply;

            /**
             * Encodes the specified WiFiClearCredentialsReply message. Does not implicitly {@link particle.ctrl.WiFiClearCredentialsReply.verify|verify} messages.
             * @param message WiFiClearCredentialsReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiClearCredentialsReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiClearCredentialsReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiClearCredentialsReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiClearCredentialsReply;
        }

        /** WiFiAntenna enum. */
        enum WiFiAntenna {
            ANTENNA_NONE = 0,
            INTERNAL = 1,
            EXTERNAL = 2,
            AUTO = 3
        }

        /** WiFiSecurityType enum. */
        enum WiFiSecurityType {
            UNSEC = 0,
            WEP = 1,
            WPA = 2,
            WPA2 = 3,
            WPA_ENTERPRISE = 4,
            WPA2_ENTERPRISE = 5,
            UNKNOWN = 255
        }

        /** WiFiSecurityCipher enum. */
        enum WiFiSecurityCipher {
            CIPHER_NONE = 0,
            AES = 1,
            TKIP = 2,
            AES_TKIP = 3
        }

        /** EapType enum. */
        enum EapType {
            EAP_TYPE_NONE = 0,
            TLS = 13,
            PEAP = 25
        }

        /** Properties of a WiFiAccessPoint. */
        interface IWiFiAccessPoint {

            /** WiFiAccessPoint ssid */
            ssid?: (string|null);

            /** WiFiAccessPoint bssid */
            bssid?: (Uint8Array|null);

            /** WiFiAccessPoint security */
            security?: (particle.ctrl.WiFiSecurityType|null);

            /** WiFiAccessPoint cipher */
            cipher?: (particle.ctrl.WiFiSecurityCipher|null);

            /** WiFiAccessPoint channel */
            channel?: (number|null);

            /** WiFiAccessPoint maxDataRate */
            maxDataRate?: (number|null);

            /** WiFiAccessPoint rssi */
            rssi?: (number|null);

            /** WiFiAccessPoint password */
            password?: (string|null);

            /** WiFiAccessPoint eapType */
            eapType?: (particle.ctrl.EapType|null);

            /** WiFiAccessPoint innerIdentity */
            innerIdentity?: (string|null);

            /** WiFiAccessPoint outerIdentity */
            outerIdentity?: (string|null);

            /** WiFiAccessPoint privateKey */
            privateKey?: (Uint8Array|null);

            /** WiFiAccessPoint clientCertificate */
            clientCertificate?: (Uint8Array|null);

            /** WiFiAccessPoint caCertificate */
            caCertificate?: (Uint8Array|null);
        }

        /** Represents a WiFiAccessPoint. */
        class WiFiAccessPoint implements IWiFiAccessPoint {

            /**
             * Constructs a new WiFiAccessPoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiAccessPoint);

            /** WiFiAccessPoint ssid. */
            public ssid: string;

            /** WiFiAccessPoint bssid. */
            public bssid: Uint8Array;

            /** WiFiAccessPoint security. */
            public security: particle.ctrl.WiFiSecurityType;

            /** WiFiAccessPoint cipher. */
            public cipher: particle.ctrl.WiFiSecurityCipher;

            /** WiFiAccessPoint channel. */
            public channel: number;

            /** WiFiAccessPoint maxDataRate. */
            public maxDataRate: number;

            /** WiFiAccessPoint rssi. */
            public rssi: number;

            /** WiFiAccessPoint password. */
            public password: string;

            /** WiFiAccessPoint eapType. */
            public eapType: particle.ctrl.EapType;

            /** WiFiAccessPoint innerIdentity. */
            public innerIdentity: string;

            /** WiFiAccessPoint outerIdentity. */
            public outerIdentity: string;

            /** WiFiAccessPoint privateKey. */
            public privateKey: Uint8Array;

            /** WiFiAccessPoint clientCertificate. */
            public clientCertificate: Uint8Array;

            /** WiFiAccessPoint caCertificate. */
            public caCertificate: Uint8Array;

            /**
             * Creates a new WiFiAccessPoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiAccessPoint instance
             */
            public static create(properties?: particle.ctrl.IWiFiAccessPoint): particle.ctrl.WiFiAccessPoint;

            /**
             * Encodes the specified WiFiAccessPoint message. Does not implicitly {@link particle.ctrl.WiFiAccessPoint.verify|verify} messages.
             * @param message WiFiAccessPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiAccessPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiAccessPoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiAccessPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiAccessPoint;
        }

        /** Properties of a WiFiAccessPointList. */
        interface IWiFiAccessPointList {

            /** WiFiAccessPointList aps */
            aps?: (particle.ctrl.IWiFiAccessPoint[]|null);
        }

        /** Represents a WiFiAccessPointList. */
        class WiFiAccessPointList implements IWiFiAccessPointList {

            /**
             * Constructs a new WiFiAccessPointList.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.ctrl.IWiFiAccessPointList);

            /** WiFiAccessPointList aps. */
            public aps: particle.ctrl.IWiFiAccessPoint[];

            /**
             * Creates a new WiFiAccessPointList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WiFiAccessPointList instance
             */
            public static create(properties?: particle.ctrl.IWiFiAccessPointList): particle.ctrl.WiFiAccessPointList;

            /**
             * Encodes the specified WiFiAccessPointList message. Does not implicitly {@link particle.ctrl.WiFiAccessPointList.verify|verify} messages.
             * @param message WiFiAccessPointList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.ctrl.IWiFiAccessPointList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WiFiAccessPointList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WiFiAccessPointList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.ctrl.WiFiAccessPointList;
        }
    }

    /** Namespace cloud. */
    namespace cloud {

        /** Properties of a ServerMovedPermanentlyRequest. */
        interface IServerMovedPermanentlyRequest {

            /**
             * The address of the new server.
             *
             * The address can be a domain name or IP address. A domain name may contain placeholder arguments
             * such as `$id`.
             */
            serverAddr?: (string|null);

            /** The port number of the new server. The default value is 5684. */
            serverPort?: (number|null);

            /** The public key of the new server in DER format. */
            serverPubKey?: (Uint8Array|null);

            /** The signature of the server details. */
            sign?: (Uint8Array|null);
        }

        /**
         * A request sent to the device to notify it that it must disconnect from the current server and
         * use another server for further connections to the Cloud.
         */
        class ServerMovedPermanentlyRequest implements IServerMovedPermanentlyRequest {

            /**
             * Constructs a new ServerMovedPermanentlyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.cloud.IServerMovedPermanentlyRequest);

            /**
             * The address of the new server.
             *
             * The address can be a domain name or IP address. A domain name may contain placeholder arguments
             * such as `$id`.
             */
            public serverAddr: string;

            /** The port number of the new server. The default value is 5684. */
            public serverPort: number;

            /** The public key of the new server in DER format. */
            public serverPubKey: Uint8Array;

            /** The signature of the server details. */
            public sign: Uint8Array;

            /**
             * Creates a new ServerMovedPermanentlyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerMovedPermanentlyRequest instance
             */
            public static create(properties?: particle.cloud.IServerMovedPermanentlyRequest): particle.cloud.ServerMovedPermanentlyRequest;

            /**
             * Encodes the specified ServerMovedPermanentlyRequest message. Does not implicitly {@link particle.cloud.ServerMovedPermanentlyRequest.verify|verify} messages.
             * @param message ServerMovedPermanentlyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.cloud.IServerMovedPermanentlyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerMovedPermanentlyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerMovedPermanentlyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.cloud.ServerMovedPermanentlyRequest;
        }

        /** Properties of a ServerMovedPermanentlyResponse. */
        interface IServerMovedPermanentlyResponse {
        }

        /** A response for a ServerMovedPermanentlyRequest. */
        class ServerMovedPermanentlyResponse implements IServerMovedPermanentlyResponse {

            /**
             * Constructs a new ServerMovedPermanentlyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.cloud.IServerMovedPermanentlyResponse);

            /**
             * Creates a new ServerMovedPermanentlyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerMovedPermanentlyResponse instance
             */
            public static create(properties?: particle.cloud.IServerMovedPermanentlyResponse): particle.cloud.ServerMovedPermanentlyResponse;

            /**
             * Encodes the specified ServerMovedPermanentlyResponse message. Does not implicitly {@link particle.cloud.ServerMovedPermanentlyResponse.verify|verify} messages.
             * @param message ServerMovedPermanentlyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.cloud.IServerMovedPermanentlyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerMovedPermanentlyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerMovedPermanentlyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.cloud.ServerMovedPermanentlyResponse;
        }

        /** Firmware module types. */
        enum FirmwareModuleType {
            INVALID_MODULE = 0,
            RESOURCE_MODULE = 1,
            BOOTLOADER_MODULE = 2,
            MONO_FIRMWARE_MODULE = 3,
            SYSTEM_PART_MODULE = 4,
            USER_PART_MODULE = 5,
            SETTINGS_MODULE = 6,
            NCP_FIRMWARE_MODULE = 7,
            RADIO_STACK_MODULE = 8,
            ASSET_MODULE = 9
        }

        /** Firmware module store. */
        enum FirmwareModuleStore {
            MAIN_MODULE_STORE = 0,
            FACTORY_MODULE_STORE = 1,
            BACKUP_MODULE_STORE = 2,
            SCRATCHPAD_MODULE_STORE = 3
        }

        /** Firmware module validation flags. */
        enum FirmwareModuleValidityFlag {
            MODULE_NO_VALID_FLAGS = 0,
            MODULE_INTEGRITY_VALID_FLAG = 2,
            MODULE_DEPENDENCIES_VALID_FLAG = 4,
            MODULE_RANGE_VALID_FLAG = 8,
            MODULE_PLATFORM_VALID_FLAG = 16
        }

        /** Properties of a FirmwareModuleDependency. */
        interface IFirmwareModuleDependency {

            /** < Module type */
            type?: (particle.cloud.FirmwareModuleType|null);

            /** < Module index */
            index?: (number|null);

            /** < Module version */
            version?: (number|null);
        }

        /** Firmware module dependency. */
        class FirmwareModuleDependency implements IFirmwareModuleDependency {

            /**
             * Constructs a new FirmwareModuleDependency.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.cloud.IFirmwareModuleDependency);

            /** < Module type */
            public type: particle.cloud.FirmwareModuleType;

            /** < Module index */
            public index: number;

            /** < Module version */
            public version: number;

            /**
             * Creates a new FirmwareModuleDependency instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FirmwareModuleDependency instance
             */
            public static create(properties?: particle.cloud.IFirmwareModuleDependency): particle.cloud.FirmwareModuleDependency;

            /**
             * Encodes the specified FirmwareModuleDependency message. Does not implicitly {@link particle.cloud.FirmwareModuleDependency.verify|verify} messages.
             * @param message FirmwareModuleDependency message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.cloud.IFirmwareModuleDependency, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirmwareModuleDependency message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FirmwareModuleDependency
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.cloud.FirmwareModuleDependency;
        }

        /** Properties of a FirmwareModuleAsset. */
        interface IFirmwareModuleAsset {

            /** < SHA-256 hash */
            hash?: (Uint8Array|null);

            /** < Asset name */
            name?: (string|null);
        }

        /** Represents a FirmwareModuleAsset. */
        class FirmwareModuleAsset implements IFirmwareModuleAsset {

            /**
             * Constructs a new FirmwareModuleAsset.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.cloud.IFirmwareModuleAsset);

            /** < SHA-256 hash */
            public hash: Uint8Array;

            /** < Asset name */
            public name: string;

            /**
             * Creates a new FirmwareModuleAsset instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FirmwareModuleAsset instance
             */
            public static create(properties?: particle.cloud.IFirmwareModuleAsset): particle.cloud.FirmwareModuleAsset;

            /**
             * Encodes the specified FirmwareModuleAsset message. Does not implicitly {@link particle.cloud.FirmwareModuleAsset.verify|verify} messages.
             * @param message FirmwareModuleAsset message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.cloud.IFirmwareModuleAsset, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirmwareModuleAsset message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FirmwareModuleAsset
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.cloud.FirmwareModuleAsset;
        }

        /** Properties of a FirmwareModule. */
        interface IFirmwareModule {

            /** < Module type */
            type?: (particle.cloud.FirmwareModuleType|null);

            /** < Module index */
            index?: (number|null);

            /** < Module version */
            version?: (number|null);

            /** < Module store */
            store?: (particle.cloud.FirmwareModuleStore|null);

            /** < Maximum module size */
            maxSize?: (number|null);

            /** < Performed validation checks (see FirmwareModuleValidityFlag) */
            checkedFlags?: (number|null);

            /** < Passed validation checks (see FirmwareModuleValidityFlag) */
            passedFlags?: (number|null);

            /** < SHA-256 hash */
            hash?: (Uint8Array|null);

            /** < Module dependencies */
            dependencies?: (particle.cloud.IFirmwareModuleDependency[]|null);

            /** < Asset dependencies */
            assetDependencies?: (particle.cloud.IFirmwareModuleAsset[]|null);
        }

        /** Firmware module info. */
        class FirmwareModule implements IFirmwareModule {

            /**
             * Constructs a new FirmwareModule.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.cloud.IFirmwareModule);

            /** < Module type */
            public type: particle.cloud.FirmwareModuleType;

            /** < Module index */
            public index: number;

            /** < Module version */
            public version: number;

            /** < Module store */
            public store: particle.cloud.FirmwareModuleStore;

            /** < Maximum module size */
            public maxSize: number;

            /** < Performed validation checks (see FirmwareModuleValidityFlag) */
            public checkedFlags: number;

            /** < Passed validation checks (see FirmwareModuleValidityFlag) */
            public passedFlags: number;

            /** < SHA-256 hash */
            public hash?: (Uint8Array|null);

            /** < Module dependencies */
            public dependencies: particle.cloud.IFirmwareModuleDependency[];

            /** < Asset dependencies */
            public assetDependencies: particle.cloud.IFirmwareModuleAsset[];

            /** FirmwareModule _hash. */
            public _hash?: "hash";

            /**
             * Creates a new FirmwareModule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FirmwareModule instance
             */
            public static create(properties?: particle.cloud.IFirmwareModule): particle.cloud.FirmwareModule;

            /**
             * Encodes the specified FirmwareModule message. Does not implicitly {@link particle.cloud.FirmwareModule.verify|verify} messages.
             * @param message FirmwareModule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.cloud.IFirmwareModule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirmwareModule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FirmwareModule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.cloud.FirmwareModule;
        }

        /** Properties of a SystemDescribe. */
        interface ISystemDescribe {

            /** < Firmware modules */
            firmwareModules?: (particle.cloud.IFirmwareModule[]|null);

            /** < IMEI (cellular platforms only) */
            imei?: (string|null);

            /** < ICCID (cellular platforms only) */
            iccid?: (string|null);

            /** < Modem firmware version (cellular platforms only) */
            modemFirmwareVersion?: (string|null);

            /** < List of valid assets currently present in device storage */
            assets?: (particle.cloud.IFirmwareModuleAsset[]|null);
        }

        /** System describe. */
        class SystemDescribe implements ISystemDescribe {

            /**
             * Constructs a new SystemDescribe.
             * @param [properties] Properties to set
             */
            constructor(properties?: particle.cloud.ISystemDescribe);

            /** < Firmware modules */
            public firmwareModules: particle.cloud.IFirmwareModule[];

            /** < IMEI (cellular platforms only) */
            public imei?: (string|null);

            /** < ICCID (cellular platforms only) */
            public iccid?: (string|null);

            /** < Modem firmware version (cellular platforms only) */
            public modemFirmwareVersion?: (string|null);

            /** < List of valid assets currently present in device storage */
            public assets: particle.cloud.IFirmwareModuleAsset[];

            /** SystemDescribe _imei. */
            public _imei?: "imei";

            /** SystemDescribe _iccid. */
            public _iccid?: "iccid";

            /** SystemDescribe _modemFirmwareVersion. */
            public _modemFirmwareVersion?: "modemFirmwareVersion";

            /**
             * Creates a new SystemDescribe instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemDescribe instance
             */
            public static create(properties?: particle.cloud.ISystemDescribe): particle.cloud.SystemDescribe;

            /**
             * Encodes the specified SystemDescribe message. Does not implicitly {@link particle.cloud.SystemDescribe.verify|verify} messages.
             * @param message SystemDescribe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: particle.cloud.ISystemDescribe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemDescribe message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemDescribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): particle.cloud.SystemDescribe;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .nanopbFileopt */
            ".nanopbFileopt"?: (INanoPBOptions|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** FileOptions .nanopbFileopt. */
            public nanopbFileopt?: (INanoPBOptions|null);

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .typeId */
            ".typeId"?: (number|null);

            /** MessageOptions .nanopbMsgopt */
            ".nanopbMsgopt"?: (INanoPBOptions|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** MessageOptions .typeId. */
            public typeId: number;

            /** MessageOptions .nanopbMsgopt. */
            public nanopbMsgopt?: (INanoPBOptions|null);

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .nanopb */
            ".nanopb"?: (INanoPBOptions|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** FieldOptions .nanopb. */
            public nanopb?: (INanoPBOptions|null);

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .nanopbEnumopt */
            ".nanopbEnumopt"?: (INanoPBOptions|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** EnumOptions .nanopbEnumopt. */
            public nanopbEnumopt?: (INanoPBOptions|null);

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .intValue */
            ".intValue"?: (number|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** EnumValueOptions .intValue. */
            public intValue: number;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
            }
        }
    }
}

/** Properties of a NanoPBOptions. */
export interface INanoPBOptions {

    /** NanoPBOptions maxSize */
    maxSize?: (number|null);

    /** NanoPBOptions maxLength */
    maxLength?: (number|null);

    /** NanoPBOptions maxCount */
    maxCount?: (number|null);

    /** NanoPBOptions intSize */
    intSize?: (IntSize|null);

    /** NanoPBOptions type */
    type?: (FieldType|null);

    /** NanoPBOptions longNames */
    longNames?: (boolean|null);

    /** NanoPBOptions packedStruct */
    packedStruct?: (boolean|null);

    /** NanoPBOptions packedEnum */
    packedEnum?: (boolean|null);

    /** NanoPBOptions skipMessage */
    skipMessage?: (boolean|null);

    /** NanoPBOptions noUnions */
    noUnions?: (boolean|null);

    /** NanoPBOptions msgid */
    msgid?: (number|null);

    /** NanoPBOptions anonymousOneof */
    anonymousOneof?: (boolean|null);

    /** NanoPBOptions proto3 */
    proto3?: (boolean|null);

    /** NanoPBOptions proto3SingularMsgs */
    proto3SingularMsgs?: (boolean|null);

    /** NanoPBOptions enumToString */
    enumToString?: (boolean|null);

    /** NanoPBOptions fixedLength */
    fixedLength?: (boolean|null);

    /** NanoPBOptions fixedCount */
    fixedCount?: (boolean|null);

    /** NanoPBOptions submsgCallback */
    submsgCallback?: (boolean|null);

    /** NanoPBOptions mangleNames */
    mangleNames?: (TypenameMangling|null);

    /** NanoPBOptions callbackDatatype */
    callbackDatatype?: (string|null);

    /** NanoPBOptions callbackFunction */
    callbackFunction?: (string|null);

    /** NanoPBOptions descriptorsize */
    descriptorsize?: (DescriptorSize|null);

    /** NanoPBOptions defaultHas */
    defaultHas?: (boolean|null);

    /** NanoPBOptions include */
    include?: (string[]|null);

    /** NanoPBOptions exclude */
    exclude?: (string[]|null);

    /** NanoPBOptions package */
    "package"?: (string|null);

    /** NanoPBOptions typeOverride */
    typeOverride?: (google.protobuf.FieldDescriptorProto.Type|null);

    /** NanoPBOptions sortByTag */
    sortByTag?: (boolean|null);
}

/** Represents a NanoPBOptions. */
export class NanoPBOptions implements INanoPBOptions {

    /**
     * Constructs a new NanoPBOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: INanoPBOptions);

    /** NanoPBOptions maxSize. */
    public maxSize: number;

    /** NanoPBOptions maxLength. */
    public maxLength: number;

    /** NanoPBOptions maxCount. */
    public maxCount: number;

    /** NanoPBOptions intSize. */
    public intSize: IntSize;

    /** NanoPBOptions type. */
    public type: FieldType;

    /** NanoPBOptions longNames. */
    public longNames: boolean;

    /** NanoPBOptions packedStruct. */
    public packedStruct: boolean;

    /** NanoPBOptions packedEnum. */
    public packedEnum: boolean;

    /** NanoPBOptions skipMessage. */
    public skipMessage: boolean;

    /** NanoPBOptions noUnions. */
    public noUnions: boolean;

    /** NanoPBOptions msgid. */
    public msgid: number;

    /** NanoPBOptions anonymousOneof. */
    public anonymousOneof: boolean;

    /** NanoPBOptions proto3. */
    public proto3: boolean;

    /** NanoPBOptions proto3SingularMsgs. */
    public proto3SingularMsgs: boolean;

    /** NanoPBOptions enumToString. */
    public enumToString: boolean;

    /** NanoPBOptions fixedLength. */
    public fixedLength: boolean;

    /** NanoPBOptions fixedCount. */
    public fixedCount: boolean;

    /** NanoPBOptions submsgCallback. */
    public submsgCallback: boolean;

    /** NanoPBOptions mangleNames. */
    public mangleNames: TypenameMangling;

    /** NanoPBOptions callbackDatatype. */
    public callbackDatatype: string;

    /** NanoPBOptions callbackFunction. */
    public callbackFunction: string;

    /** NanoPBOptions descriptorsize. */
    public descriptorsize: DescriptorSize;

    /** NanoPBOptions defaultHas. */
    public defaultHas: boolean;

    /** NanoPBOptions include. */
    public include: string[];

    /** NanoPBOptions exclude. */
    public exclude: string[];

    /** NanoPBOptions package. */
    public package: string;

    /** NanoPBOptions typeOverride. */
    public typeOverride: google.protobuf.FieldDescriptorProto.Type;

    /** NanoPBOptions sortByTag. */
    public sortByTag: boolean;

    /**
     * Creates a new NanoPBOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NanoPBOptions instance
     */
    public static create(properties?: INanoPBOptions): NanoPBOptions;

    /**
     * Encodes the specified NanoPBOptions message. Does not implicitly {@link NanoPBOptions.verify|verify} messages.
     * @param message NanoPBOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INanoPBOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NanoPBOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NanoPBOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NanoPBOptions;
}

/** FieldType enum. */
export enum FieldType {
    FT_DEFAULT = 0,
    FT_CALLBACK = 1,
    FT_POINTER = 4,
    FT_STATIC = 2,
    FT_IGNORE = 3,
    FT_INLINE = 5
}

/** IntSize enum. */
export enum IntSize {
    IS_DEFAULT = 0,
    IS_8 = 8,
    IS_16 = 16,
    IS_32 = 32,
    IS_64 = 64
}

/** TypenameMangling enum. */
export enum TypenameMangling {
    M_NONE = 0,
    M_STRIP_PACKAGE = 1,
    M_FLATTEN = 2,
    M_PACKAGE_INITIALS = 3
}

/** DescriptorSize enum. */
export enum DescriptorSize {
    DS_AUTO = 0,
    DS_1 = 1,
    DS_2 = 2,
    DS_4 = 4,
    DS_8 = 8
}
