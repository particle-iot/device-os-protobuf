const fs = require('fs');
const path = require('path');
const pbjsGeneratedProtobufCode = require('./pbjs-generated/index');
const _ = require('lodash');

class DeviceOSProtobuf {
    static getDefinition(protobufMessageName) {
        const id = this._getIDFromJSON(protobufMessageName);
        const message = this._getProtobufMessage(protobufMessageName);
    
        return {
            id,
            message
        };
    }

    static _getIDFromJSON(protobufMessageName) {
        try {
            return DeviceOSProtobuf._pbjsJSON.nested.particle.nested.ctrl.nested[protobufMessageName].options['(type_id)'];
        } catch (e) {
            throw new Error(`Could not extract request type id from name=${protobufMessageName}`);
        }
    }

    static _getProtobufMessage(protobufMessageName) {
    	if (!(protobufMessageName in this._pbjsObjects)) {
			throw new Error(`There is no protobuf request function called "${protobufMessageName}"`);
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