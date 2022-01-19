[![CircleCI](https://circleci.com/gh/particle-iot/device-os-protobuf/tree/main.svg?style=svg)](https://circleci.com/gh/particle-iot/device-os-protobuf/tree/main)

# Particle Device OS Protobuf Definitions

Particle devices expose Control Requests over USB and BLE for functionality like device information and Wi-Fi setup. This repo contains the definition for all these control requests in Protobuf format.

## Usage
### Node.js

Install package with `npm install @particle/device-os-protobuf`

See [docs/reference.md](/docs/reference.md).

### Development

Ensure you have installed dependencies via `npm install`.

Edit the protocol buffer definitions in [`proto`](proto).

Generate the JavaScript files with `npm run build`

## Release

Tag a new version with `npm version` and push `git push --follow-tags`. CircleCI will publish the package to npm.

## Technical Background

Device OS declares all control request IDs in [system-control.h](https://github.com/particle-iot/device-os/blob/develop/system/inc/system_control.h). Additionally, Device OS depends on `control/*.proto` files in this repo via a `git submodule`.

iOS and Android applications also depend on `control/*.proto` files directly via a `git submodule`.

This `npm` based approach to working with control requests was introduces as a less complex, preferred way to use Control Requests.