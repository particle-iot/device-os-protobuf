const pbjsGeneratedProtobufCode = require('./pbjs-generated/definitions');

class DeviceOSProtobuf {
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
	static encode(protobufMessageNameOrMessage, protobufMessageData = null) {
		const message = this._resolveProtobufMessageNameOrMessageToMessage(protobufMessageNameOrMessage);
		const msg = message.create(protobufMessageData);
		const buffer = message.encode(msg).finish();
		return buffer;
	}

	static _resolveProtobufMessageNameOrMessageToMessage(protobufMessageNameOrMessage) {
		let message;
		if (typeof protobufMessageNameOrMessage === 'string') {
			const protobufDefinition = this.getDefinition(protobufMessageNameOrMessage);
			message = protobufDefinition.message;
		} else {
			message = protobufMessageNameOrMessage;
		}
		return message;
	}

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
	static decode(protobufMessageNameOrMessage, buffer) {
		const message = this._resolveProtobufMessageNameOrMessageToMessage(protobufMessageNameOrMessage);
		return message.decode(buffer);
	}

	/**
	 * @param {string} protobufMessageName - Protobuf definition from *.proto files like "GetSerialNumberRequest". To access definitions in a namespace, prefix with "<namespace>."
	 * @returns {ProtobufDefinition} protobufDefinition An object containing code to encode & decode protobufjs messages from Device OS
	 */
	static getDefinition(protobufMessageName) {
		const message = this._getProtobufMessage(protobufMessageName);

		let id, replyMessage;
		if (protobufMessageName.match(/Request$/)) {
			id = this._getIDFromJSON(protobufMessageName);
			replyMessage = this._getProtobufReplyMessage(protobufMessageName);
		} else {
			id = null;
			replyMessage = null;
		}

		return {
			message,
			id,
			replyMessage
		};
	}

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
	static getDefinitions() {
		const namespaces = this.getNamespaces();
		const returnThis = [];
		for (const key of Object.keys(this.definitions)) {
			if (namespaces.includes(key)) {
				const namespace = namespaces[namespaces.indexOf(key)];
				for (const namespacedKey of Object.keys(this.definitions[namespace])) {
					returnThis.push(`${namespace}.${namespacedKey}`);
				}
			} else {
				returnThis.push(key);
			}
		}
		return returnThis;
	}

	/**
	 * @returns {Array} valid dot prefixes to getDefinition() arguments (i.e. the "cellular" from "cellular".GetIccidRequest, etc)
	 */
	static getNamespaces() {
		return [
			'wifi',
			'logging',
			'mesh',
			'cloud',
			'cellular'
		];
	}

	static _getIDFromJSON(protobufMessageName) {
		let rootJSONObject;
		if (this._isNamespaced(protobufMessageName)) {
			const [namespace, nonNamespacedName] = this._getNamespaceAndMessageName(protobufMessageName);
			rootJSONObject = DeviceOSProtobuf._pbjsJSON.nested.particle.nested.ctrl
				.nested[namespace].nested[nonNamespacedName];
		} else {
			rootJSONObject = DeviceOSProtobuf._pbjsJSON.nested.particle.nested.ctrl
				.nested[protobufMessageName];
		}

		try {
			return rootJSONObject.options['(type_id)'];
		} catch (e) {
			throw new Error(`Could not extract request type id from pbjs json where protobufMessageName=${protobufMessageName}`);
		}
	}

	static _isNamespaced(protobufMessageName) {
		return protobufMessageName.includes('.');
	}

	static _getNamespaceAndMessageName(protobufMessageName) {
		return protobufMessageName.split('.');
	}

	// Get's a pbjs generated Function by name or namespace.name
	static _getProtobufMessage(protobufMessageName) {
		let rootObject;
		if (protobufMessageName.includes('.')) {
			const [namespace, nonNamespacedName] = this._getNamespaceAndMessageName(protobufMessageName);
			protobufMessageName = nonNamespacedName;
			rootObject = this.definitions[namespace];
		} else {
			rootObject = this.definitions;
		}
		if (!(protobufMessageName in rootObject)) {
			throw new Error(`There is no pbjs generated protobuf Function for protobufMessageName=${protobufMessageName}`);
		}
		return rootObject[protobufMessageName];
	}

	static _getProtobufReplyMessage(protobufMessageName) {
		return this._getProtobufMessage(protobufMessageName.replace('Request', 'Reply'));
	}
}

/**
 * Parsed JSON object generated via `npm run build:json`; this is how we get the type id associated with
 * a given ctrl request
 */
DeviceOSProtobuf._pbjsJSON = require('./pbjs-generated/definitions.json');

/**
 * All of the interesting auto-generated Javascript objects from `*.proto` files live in this definitions object
 * (which is keyed by protobuf message name)
 */
DeviceOSProtobuf.schema = pbjsGeneratedProtobufCode.particle;

// These definitions are specific to control requests and are exposed for backward compatibility
DeviceOSProtobuf.definitions = pbjsGeneratedProtobufCode.particle.ctrl;
DeviceOSProtobuf.cloudDefinitions = pbjsGeneratedProtobufCode.particle.cloud;

module.exports = DeviceOSProtobuf;
