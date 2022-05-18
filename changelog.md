# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2022-03-23
### Added
- New product module
- New component ProductListComponent component.
- New component ProductComponent.
- New service ProductService.
- New cart module
- New component CartListComponent component.
- New component CartItemComponent.
- New service CartService.

## [0.1.2] - 2022-03-24
### Added
- New directive HighlightDirective
- Dynamic app title

## [0.1.3] - 2022-04-10
### Added
- New ConfigOptionsService
- New ConstantsService
- New GeneratorService
- New LocalStorageService
- New BorderDirective used in app.component.html

## [0.1.4] - 2022-04-11
### Added
- Sorting for product list
- New OrderByPipe used in product-list component
### Changed
- Used currency pipe to format product price
- Used uppercase pipe to format product name
- getProuduct method returns Observable

## [0.1.5] - 2022-04-28
### Added
- Admin module
- Order module
- Routing for Product, Admin, Cart and Order modules
- Resolver for product
- Guard for admin module
- Guard for order when cart is empty

### Changed
- Cart service now uses LocalStorageService

## [0.1.6] - 2022-05-18
### Added
- Added json server
- Added TimingInterceptor
- Added app settings

### Changed
- Changed Products service to use json server and Observable