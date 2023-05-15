export = DeviceOSProtobuf;
declare class DeviceOSProtobuf {
    /**
     * Create a valid Buffer of bytes that can be sent to DeviceOS, typically used with "Request" messages.
     *
     * @example <caption>Encoding a request to get serial number</caption>
     * // returns a zero length Buffer because there is no properties for this message, just the option type_id
     * const buffer = DeviceOSProtobuf.encode('GetSerialNumberRequest');
     *
     * @param {string|ProtobufMessage} protobufMessageNameOrMessage - Protobuf message name or actual message object. See getDefinitions() to valid options.
     * @param {Object} protobufMessageData - An object containing key data/code to encode & decode protobufjs messages from Device OS
     * @returns {Buffer} - A Buffer of bytes representing a valid protobuf message that Device OS can interpret
     */
    static encode(protobufMessageNameOrMessage: string | {
        create: Function;
        encode: Function;
        decode: Function;
    }, protobufMessageData?: any): Buffer;
    static _resolveProtobufMessageNameOrMessageToMessage(protobufMessageNameOrMessage: any): any;
    /**
     * Create a JavaScript object by decoding a Buffer representing a protobuf message from DeviceOS; typically used with "Reply" messages"
     *
     * @example <caption>Decode a GetSerialNumberReply</caption>
     * // returns a Javascript object with .serial property
     * const object = DeviceOSProtobuf.decode('GetSerialNumberReply', buffer);
     * // shows the serial number as a string
     * console.log(object.serial);
     * @param {string|ProtobufMessage} protobufMessageNameOrMessage - Protobuf message name or actual message object. See getDefinitions() to valid options.
     * @param {Buffer} buffer - Buffer from DeviceOS representing valid non-decoded Protobuf message
     * @returns {Object} - A JavaScript object with properties for each data item declared in the *.proto file
     */
    static decode(protobufMessageNameOrMessage: string | {
        create: Function;
        encode: Function;
        decode: Function;
    }, buffer: Buffer): any;
    /**
     * @param {string} protobufMessageName - Protobuf definition from *.proto files like "GetSerialNumberRequest". To access definitions in a namespace, prefix with "<namespace>."
     * @returns {ProtobufDefinition} protobufDefinition An object containing code to encode & decode protobufjs messages from Device OS
     */
    static getDefinition(protobufMessageName: string): {
        /**
         * - protobufjs generated Javascript function that includes encode and decode methods.
         */
        message: Function;
        /**
         * - integer request ID of the message for "Request" protobuf definitions, null otherwise.
         */
        id: (number | null);
        /**
         * The corresponding reply message to a given "Request" message, null otherwise.
         */
        replyMessage: (Function | null);
    };
    /**
     * @typedef {Object} ProtobufDefinition
     * @property {Function} message - protobufjs generated Javascript function that includes encode and decode methods.
     * @property {(number|null)} id - integer request ID of the message for "Request" protobuf definitions, null otherwise.
     * @property {(Function | null)} replyMessage The corresponding reply message to a given "Request" message, null otherwise.
   */
    /**
     * This is typedef describing the auto-generated code that pbjs generates
     * @typedef {Object} ProtobufMessage
     * @property {Function} create
     * @property {Function} encode
     * @property {Function} decode
   */
    /**
     * @returns {Array} valid strings that can be passed to getDefinition(). Includes all Request/Reply style messages as well as non request messages and enums.
     */
    static getDefinitions(): any[];
    /**
     * @returns {Array} valid dot prefixes to getDefinition() arguments (i.e. the "cellular" from "cellular".GetIccidRequest, etc)
     */
    static getNamespaces(): any[];
    static _getIDFromJSON(protobufMessageName: any): any;
    static _isNamespaced(protobufMessageName: any): any;
    static _getNamespaceAndMessageName(protobufMessageName: any): any;
    static _getProtobufMessage(protobufMessageName: any): any;
    static _getProtobufReplyMessage(protobufMessageName: any): any;
}
declare namespace DeviceOSProtobuf {
    const _pbjsJSON: any;
    const schema: typeof pbjsGeneratedProtobufCode.particle;
    const definitions: typeof pbjsGeneratedProtobufCode.particle.ctrl;
    const cloudDefinitions: typeof pbjsGeneratedProtobufCode.particle.cloud;
}
import pbjsGeneratedProtobufCode = require("./pbjs-generated/definitions");
