const fs = require('fs');
const path = require('path');
const pbjsGeneratedProtobufCode = require('./pbjs-generated/index');

class DeviceOSProtobuf {

	/**
	 * @typedef {Object} ProtobufDefinition
	 * @property {Function} message - protobufjs generated Javascript function that includes encode and decode methods.
	 * @property {(number|null)} id - integer request ID of the message for "Request" protobuf definitions, null otherwise.
	 * @property {(Function | null)} replyMessage The corresponding reply message to a given "Request" message, null otherwise.
   */
	
	/**
	 * @param {string} protobufMessageName - Protobuf definition from *.proto files (messages and enums) like "GetSerialNumberRequest". To access definitions in a namespace, prefix with "<namespace>."
	 * @returns {ProtobufDefinition} protobufDefinition An object containing key data/code to encode & decode protobufjs messages from Device OS
	 */
	static getDefinition(protobufMessageName) {
		const message = this._getProtobufMessage(protobufMessageName);
		const id = this._getIDFromJSON(protobufMessageName);

		return {
			message,
			id
		};
	}

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
		try {
			return DeviceOSProtobuf._pbjsJSON.nested.particle.nested.ctrl.nested[protobufMessageName].options['(type_id)'];
		} catch (e) {
			throw new Error(`Could not extract request type id from pbjs json where protobufMessageName=${protobufMessageName}`);
		}
	}

	static _getProtobufMessage(protobufMessageName) {
		let rootObject;
		if (protobufMessageName.includes('.')) {
			const dotSeparatedArray = protobufMessageName.split('.');
			const namespace = dotSeparatedArray[0];
			protobufMessageName = dotSeparatedArray[1];
			rootObject = this._pbjsObjects[namespace];
		} else {
			rootObject = this._pbjsObjects;
		}
		if (!(protobufMessageName in rootObject)) {
			throw new Error(`There is no pbjs generated protobuf Function for protobufMessageName=${protobufMessageName}`);
		}
		return rootObject[protobufMessageName];
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
