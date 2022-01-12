# Particle Device OS Protobuf Definitions

Particle devices expose Control Requests over USB and BLE for functionality like device information and Wi-Fi setup. This repo contains the definition for all these control requests in Protobuf format.

<!--
## Documentation

Goal would be to have auto-generated documentation in docs.particle.io

```
npm run build
npm run docs
```
Then parse dist/index-docs.json in the Particle docs build to generate a page describing the control requests


Auto-generated documentation can be found at https://docs.particle.io/reference/device-os/control-requests/

-->

## Node.js

### Usage

Install package with `npm install @particle/device-os-protobuf`


```
const proto = require('@particle/device-os-protobuf');
const controlProto = proto.particle.ctrl;

// Encode message
const request = controlProto.GetSerialNumberRequest;
const m = request.create({ /* GetSerialNumberRequest fields */ });
const buf = request.encode(m).finish();

// Decode response
const response = controlProto.GetSerialNumberReply;
const responseObj = response.decode(data);
```

### Development

Ensure you have installed dependencies via `npm install`.

Edit the protocol buffer definitions in [`proto`](proto).

Generate the JavaScript files with `npm run build`

## Release

Tag a new version with `npm version` and push `git push --follow-tags`. CircleCI will publish the package to npm.

