const fs = require('fs');
const path = require('path');
const pbjsGeneratedProtobufCode = require('./pbjs-generated/index');

class DeviceOSProtobuf {
	/**
	 * @param {string} protobufMessageName - Protobuf definition from *.proto files (messages and enums) like "GetSerialNumberRequest". To access definitions in a namespace, prefix with "<namespace>."
	 * @returns {ProtobufDefinition} protobufDefinition An object containing key data/code to encode & decode protobufjs messages from Device OS
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
	 *
	 * @returns {Array} valid strings that can be passed to getDefinition()
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

	// Get's a protobuf by name (supports namespaces)
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
		return this._getProtobufMessage(protobufMessageName.replace('Request','Reply'));
	}
}

const pbjsJSONString = fs.readFileSync(`${path.resolve(__dirname)}/pbjs-generated/index.json`);
/**
 * Parsed JSON object generated via `npm run build:json`; this is how we get the type id associated with
 * a given ctrl request
 */
DeviceOSProtobuf._pbjsJSON = JSON.parse(pbjsJSONString);

/**
 * All of the interesting auto-generated Javascript objects from *.protofiles live in this _pbjsObjects object
 * (which is keyed by protobuf message name)
 */
DeviceOSProtobuf._pbjsObjects = pbjsGeneratedProtobufCode.particle.ctrl;



module.exports = DeviceOSProtobuf;
