# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add getAddress query

### Changed

- Update SearchSlaButton to save the selected address using the postal code

## [0.1.3] - 2021-09-24

### Added

- Pickup point distance block
- Pickup point address block
- Card context

### Changed

- Change the props logic for the blocks inside the card

### Removed

- Boiler component

## [0.1.2] - 2021-09-21

### Added

- Pickup point list block
- Pickup point option card block
- Pickup point name block
- Tests for all the blocks added

## [0.1.1] - 2021-09-17

### Added

- SearchSlaButton block
- getPickupSla query to get the pickup points info

### Changed

- Fix the zipcode input on change logic
- Update PickupSelector container style

### Removed

- SkuSelector block(We'll let the client use the default block).

## [0.1.0] - 2021-09-16

### Added

- PickupSelector container block
- SkuSelector block
- ZipCodeInput block
- Shipping context

### Changed

- Update dependencies
- Update typings
- Update messages
