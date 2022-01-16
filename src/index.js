const fs = require('fs');
const path = require('path');
const pbjsGeneratedProtobufCode = require('./pbjs-generated/index');
const _ = require('lodash');

class DeviceOSProtobuf {
    static getDefinition(name) {
        const id = this._getIDFromJSON(name);
        const request = this._nameToRequestObject(name);
        const reply = this._nameToReplyObject(name);
    
        return {
            id,
            request,
            reply
        };
    }

    static _getIDFromJSON(name) {
        try {
            return DeviceOSProtobuf.pbjsJSON.nested.particle.nested.ctrl.nested.GetSerialNumberRequest.options['(type_id)'];
        } catch (e) {
            throw new Error(`Could not extract request type id from name=${name}`);
        }
    }

    // SERIAL_NUMBER -> SerialNumber
    static _nameToPBJSBaseName(canonicalName) {
        return _.upperFirst(_.camelCase(canonicalName));
    }

    // SERIAL_NUMBER => GetSerialNumberRequest
	static _nameToRequestObject(canonicalName) {
		const fName = 'Get' + this._nameToPBJSBaseName(canonicalName) + 'Request';
		if (!(fName in this.pbjsObjects)) {
			throw new Error(`There is no protobuf request function called "${fName}"`);
		}
		return this.pbjsObjects[fName];
	}
	
    // SERIAL_NUMBER => GetSerialNumberReply
    static _nameToReplyObject(canonicalName) {
		const fName = 'Get' + this._nameToPBJSBaseName(canonicalName) + 'Reply';
		if (!(fName in this.pbjsObjects)) {
			throw new Error(`There is no protobuf reply function called "${fName}"`);
		}
		return this.pbjsObjects[fName];
	}
}

const pbjsJSONString = fs.readFileSync(`${path.resolve(__dirname)}/pbjs-generated/index.json`);
/**
 * Parsed JSON object generated via `npm run build:json`; this is how we get the type id associated with
 * a given ctrl request
 */
DeviceOSProtobuf.pbjsJSON = JSON.parse(pbjsJSONString);

/**
 * All of the interesting auto-generated Javascript objects from *.protofiles live in this pbjsObjects object
 * (which is keyed by protobuf message name)
 */
DeviceOSProtobuf.pbjsObjects = pbjsGeneratedProtobufCode.particle.ctrl;



module.exports = DeviceOSProtobuf;