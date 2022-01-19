const fs = require('fs');
const path = require('path');
const pbjsGeneratedProtobufCode = require('./pbjs-generated/index');

class DeviceOSProtobuf {

	/**
	 *
	 * @param {String} protobufMessageName Name of the Protobuf, enum, etc from *.proto file
	 * @returns {Function} protobufjs jbjs generated Function with encode, create, decode methods
	 */
	static getDefinition(protobufMessageName) {
		const id = this._getIDFromJSON(protobufMessageName);
		const message = this._getProtobufMessage(protobufMessageName);

		return {
			id,
			message
		};
	}

	/**
	 *
	 * @returns {Array} all valid arguments to getDefinition()
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
		if (!(protobufMessageName in this._pbjsObjects)) {
			throw new Error(`There is no pbjs generated protobuf Function for protobufMessageName=${protobufMessageName}`);
		}
		return this._pbjsObjects[protobufMessageName];
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
