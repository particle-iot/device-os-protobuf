[![CircleCI](https://circleci.com/gh/particle-iot/device-os-protobuf/tree/main.svg?style=svg)](https://circleci.com/gh/particle-iot/device-os-protobuf/tree/main)

# Particle Device OS Protobuf Definitions

Particle devices expose Control Requests over USB and BLE for functionality like device information and Wi-Fi setup. This repo contains the definition for all these control requests in Protobuf format. 

Note that most common Javascript use cases Device OS Protobuf usage over USB would be better accommodated by [particle-usb](https://github.com/particle-iot/particle-usb) rather than this project because it provides a higher level API that is easier to use and covers protobuf transmission over USB (not just encoding/decoding);

Device OS declares all control request IDs in [system-control.h](https://github.com/particle-iot/device-os/blob/develop/system/inc/system_control.h). Additionally, Device OS depends on `control/*.proto` files in this repo via a `git submodule`.

iOS and Android applications also depend on `control/*.proto` files directly via a `git submodule`.

See the [protobuf definitions reference](/docs/protobuf.md) for more details about specific requests.

## Usage
### Node.js

Install package with `npm install @particle/device-os-protobuf`

See [docs/reference.md](/docs/reference.md) for public api documentation

See `src/*.test.js` files for basic usage examples.

See `particle-usb` for production usage examples.

### Development

Ensure you have installed dependencies via `npm install`.

Edit the protocol buffer definitions in [`proto`](proto).

Generate the [protobufjs JavaScript & JSON](https://www.npmjs.com/package/protobufjs) files and markdown documentation with `npm run build`. Make sure to do this before asking for PR reviews/merging.

Ensure `npm run test:ci` is passing

Building the [protobuf definitions reference](/docs/protobuf.md) is done with `npm run build:docs:protobuf`. This command uses Docker to remove the dependency on [`protoc-gen-doc`](https://github.com/pseudomuto/protoc-gen-doc) tool.

## Release

Packages are only released from the `main` branch after peer review via the following process.

1. make sure you have the latest:
	* `$ git checkout main`
	* `$ git pull`
1. make sure tests pass
	* `$ npm test:ci`
1. Tag a new version:
    * `npm version` 
    * `$ git add` + `commit`
1. Cut the release:
    * `$ git push origin main --follow-tags`
    * CircleCI will publish the package to npm.

