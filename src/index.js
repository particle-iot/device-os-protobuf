const pbjsGeneratedProtobufCode = require('./pbjs-generated/index');

class DeviceOSProtobuf {
	/**
	 * Create a valid Buffer of bytes that can be sent to Device, typically used with "Request" messages.
	 *
	 * @example <caption>Encoding a request to get serial number</caption>
	 * // returns a zero length Buffer because there is no properties for this message, just the option type_id
	 * const buffer = DeviceOSProtobuf.encode('GetSerialNumberRequest');
	 *
	 * @param {string} protobufMessageName - Protobuf message name. See getDefinitions() to valid options.
	 * @param {Object} protobufMessageData - An object containing key data/code to encode & decode protobufjs messages from Device OS
	 * @returns {Buffer} - A Buffer of bytes representing a valid protobuf message that Device OS can interpret
	 */
	static encode(protobufMessageName, protobufMessageData = null) {
		const protobufDefinition = this.getDefinition(protobufMessageName);
		const msg = protobufDefinition.message.create(protobufMessageData);
		const buffer = protobufDefinition.message.encode(msg).finish();
		return buffer;
	}

	/**
	 * Create a JavaScript object by decoding a Buffer representing a protobuf message from DeviceOS; typically used with "Reply" messages"
	 *
	 * @example <caption>Decode a GetSerialNumberReply</caption>
	 * // returns a Javascript object with .serial property
	 * const object = DeviceOSProtobuf.decode('GetSerialNumberReply', buffer);
	 * // shows the serial number as a string
	 * console.log(object.serial);
	 * @param {string} protobufMessageName - Protobuf message name. See getDefinitions() to valid options.
	 * @param {Buffer} buffer - Buffer from DeviceOS representing valid non-decoded Protobuf message
	 * @returns {Object} - A JavaScript object with properties for each data item declared in the *.proto file
	 */
	static decode(protobufMessageName, buffer) {
		const protobufDefinition = this.getDefinition(protobufMessageName);
		return protobufDefinition.message.decode(buffer);
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
	 * @returns {Array} valid strings that can be passed to getDefinition(). Includes all Request/Reply style messages as well as non request messages and enums.
	 */
	static getDefinitions() {
		const namespaces = this.getNamespaces();
		const returnThis = [];
		for (const key of Object.keys(this._pbjsObjects)) {
			if (namespaces.includes(key)) {
				const namespace = namespaces[namespaces.indexOf(key)];
				for (const namespacedKey of Object.keys(this._pbjsObjects[namespace])) {
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
			rootObject = this._pbjsObjects[namespace];
		} else {
			rootObject = this._pbjsObjects;
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
 * All of the interesting auto-generated Javascript objects from `control/*.proto` files live in this _pbjsObjects object
 * (which is keyed by protobuf message name)
 */
DeviceOSProtobuf._pbjsObjects = pbjsGeneratedProtobufCode.particle.ctrl;

module.exports = DeviceOSProtobuf;
