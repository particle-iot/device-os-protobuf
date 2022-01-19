[![CircleCI](https://circleci.com/gh/particle-iot/device-os-protobuf/tree/main.svg?style=svg)](https://circleci.com/gh/particle-iot/device-os-protobuf/tree/main)

# Particle Device OS Protobuf Definitions

Particle devices expose Control Requests over USB and BLE for functionality like device information and Wi-Fi setup. This repo contains the definition for all these control requests in Protobuf format. 

Note that most common Javascript use cases Device OS Protobuf usage over USB would be better accommodated by [particle-usb](https://github.com/particle-iot/particle-usb) rather than this project because it provides a higher level API that is easier to use and covers protobuf transmission over USB (not just encoding/decoding);

Device OS declares all control request IDs in [system-control.h](https://github.com/particle-iot/device-os/blob/develop/system/inc/system_control.h). Additionally, Device OS depends on `control/*.proto` files in this repo via a `git submodule`.

iOS and Android applications also depend on `control/*.proto` files directly via a `git submodule`.

## Usage
### Node.js

Install package with `npm install @particle/device-os-protobuf`

See [docs/reference.md](/docs/reference.md).

See how `particle-usb` relies on this module for more specific production usage examples.

### Development

Ensure you have installed dependencies via `npm install`.

Edit the protocol buffer definitions in [`proto`](proto).

Generate the JavaScript files with `npm run build` and `npm run build:json`

Ensure `npm run test:ci` is passing

Update the documentation before PR reviews with `npm run build:docs`

## Release

Tag a new version with `npm version` push `git push --follow-tags`. CircleCI will publish the package to npm.
