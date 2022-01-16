const expect = require('chai').expect;
const DeviceOSProtobuf = require('./');

describe('deviceOSProtobuf', () => {
    let protobufName, requestID, requestPBJSName;
    describe('getDefinition("SERIAL_NUMBER")', () => {
        beforeEach(() => {
            protobufName = 'SERIAL_NUMBER'
            requestID = 21;
            requestPBJSName = 'GetSerialNumberRequest';
            replyPBJSName = 'GetSerialNumberReply';
        });
        it('provides getDefinition(name)', () => {
            const protobufDefinition = DeviceOSProtobuf.getDefinition(protobufName);
            expect(protobufDefinition).to.have.haveOwnProperty('id');
            expect(protobufDefinition.id).to.eql(requestID);
            expect(protobufDefinition).to.have.haveOwnProperty('request');
            expect(protobufDefinition.request).to.be.a('Function');
            expect(protobufDefinition).to.have.haveOwnProperty('reply');
            expect(protobufDefinition.reply).to.be.a('Function');
        });

        it('has a corresponding pbjs generated Javascript request object', () => {
            const GetSerialNumberRequest = DeviceOSProtobuf.pbjsObjects[requestPBJSName];
            expect(GetSerialNumberRequest.create).to.be.a('Function');
            expect(GetSerialNumberRequest.encode).to.be.a('Function');
            expect(GetSerialNumberRequest.decode).to.be.a('Function');
        });

        it('has a corresponding pbjs generated Javascript reply object', () => {
            const GetSerialNumberReply = DeviceOSProtobuf.pbjsObjects[replyPBJSName];
            expect(GetSerialNumberReply.create).to.be.a('Function');
            expect(GetSerialNumberReply.encode).to.be.a('Function');
            expect(GetSerialNumberReply.decode).to.be.a('Function');
        });

        it('provides _nameToRequestObject(name)', () => {
            const pbjsRequestObject = DeviceOSProtobuf._nameToRequestObject(protobufName);
            expect(pbjsRequestObject).to.be.a('Function');
            expect(pbjsRequestObject.create).to.be.a('Function');
            expect(pbjsRequestObject.encode).to.be.a('Function');
            expect(pbjsRequestObject.decode).to.be.a('Function');
        });

        it('provides _nameToReplyObject(name)', () => {
            const pbjsReplyObject = DeviceOSProtobuf._nameToReplyObject(protobufName);
            expect(pbjsReplyObject).to.be.a('Function');
            expect(pbjsReplyObject.create).to.be.a('Function');
            expect(pbjsReplyObject.encode).to.be.a('Function');
            expect(pbjsReplyObject.decode).to.be.a('Function');
        });
    })
	
    it('provides pbjsJSON (parsed JSON rendered via `npm run build:json` command)', () => {
        expect(DeviceOSProtobuf.pbjsJSON).to.be.an('object');
    });

    it('provides pbjsObjects (generated Javascript via `npm run build` command)', () => {
        expect(DeviceOSProtobuf.pbjsObjects).to.be.an('object');
        expect(DeviceOSProtobuf.pbjsObjects).to.have.property('GetSerialNumberRequest');
    });
});