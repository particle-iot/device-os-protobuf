const expect = require('chai').expect;
const sinon = require('sinon');
const DeviceOSProtobuf = require('./');

describe('deviceOSProtobuf', () => {
    let protobufMessageName, requestID;

    afterEach(() => {
        sinon.restore();
    });

    describe('protobufMessageName(protobufMessageName) without namespace and generalized usage', () => {
        beforeEach(() => {
            protobufMessageName = 'GetSerialNumberRequest'
            requestID = 21;
        });        
        it('provides getDefinition(protobufMessageName)', () => {
            const stubID = 47;
            sinon.stub(DeviceOSProtobuf, '_getIDFromJSON').returns(stubID);
            const stubMessage = function() {};
            stubMessage.create = sinon.stub();
            stubMessage.encode = sinon.stub();
            stubMessage.decode = sinon.stub();
            sinon.stub(DeviceOSProtobuf, '_getProtobufMessage').returns(stubMessage);
            const protobufDefinition = DeviceOSProtobuf.getDefinition(protobufMessageName);
            expect(protobufDefinition).to.have.haveOwnProperty('id');
            expect(protobufDefinition).to.have.haveOwnProperty('message');
            expect(DeviceOSProtobuf._getIDFromJSON).to.have.property('callCount', 1);
            expect(DeviceOSProtobuf._getProtobufMessage).to.have.property('callCount', 1);
        });

        it('implements _getIDFromJSON(protobufMessageName) correctly', () => {
            const result = DeviceOSProtobuf._getIDFromJSON(protobufMessageName);
            expect(result).to.eql(requestID);
        });

        it('implements _getProtobufMessage(protobufMessageName) correctly', () => {
            const result = DeviceOSProtobuf._getProtobufMessage(protobufMessageName);
            assertValidProtobufMessage(result);
        });
    })
	
    it('provides _pbjsJSON (parsed JSON rendered via `npm run build:json` command)', () => {
        expect(DeviceOSProtobuf._pbjsJSON).to.be.an('object');
    });

    it('provides _pbjsObjects (generated Javascript via `npm run build` command)', () => {
        expect(DeviceOSProtobuf._pbjsObjects).to.be.an('object');
        expect(DeviceOSProtobuf._pbjsObjects).to.have.property('GetSerialNumberRequest');
    });
});

/**
 * Test helper function that validates the pbjs generated JS code returns an
 * object with the structure we expect.
 */
function assertValidProtobufMessage(message) {
    expect(message).to.be.a('Function');
    expect(message.create).to.be.a('Function');
    expect(message.encode).to.be.a('Function');
    expect(message.decode).to.be.a('Function');
}