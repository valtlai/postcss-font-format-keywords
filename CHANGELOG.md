# Changelog

This project uses [semantic versioning](https://semver.org/).

## [4.0.2] (2023-11-03)

- Deprecated this module.
  Please import `npm:@csstools/postcss-font-format-keywords@VERSION` instead.

## [4.0.1] (2022-11-03)

- Fixed readme

## [4.0.0] (2022-11-03)

- BREAKING: Removed the `singleQuote` option
- BREAKING: Dropped the support for Node.js 12 and 17
  (so Node.js 14, 16, and 18 or greater are now supported)
- Added a new option `preserve: true`
  to keep the original CSS declaration alongside the transformed one
- Changed the license from MIT to ISC

## [3.0.2] (2021-05-31)

- Updated readme

## [3.0.1] (2021-05-26)

- Fixed readme

## [3.0.0] (2021-05-26)

- BREAKING: Dropped the support for Node.js 10 and 15
  (so Node.js 12, 14, and 16 or greater are now supported)
- Added an ESM version for Node.js
- Added support for Deno&nbsp;🦕

## [2.0.2] (2020-10-23)

- Fixed the `postcss` peer dependency version to be `^8.0.0`

## [2.0.1] (2020-09-22)

- Removed the development fields from `package.json` before publishing

## [2.0.0] (2020-09-17)

- BREAKING: Moved to PostCSS&nbsp;8
- BREAKING: Removed the support for non-lowercase identifiers
- BREAKING: Made `postcss` a peer dependency
- BREAKING: Added support for Node.js 10 and dropped from v13
- Added the new `collection` format keyword
- Added tests
- Updated the dependencies

## [1.0.3] (2020-05-25)

- Updated the changelog format
- Updated the ESLint config
- Removed the `package-lock`

## [1.0.2] (2019-12-10)

- Refactored code
- Meta: renamed the changelog file
- Meta: clarified the previous changelog item

## [1.0.1] (2019-12-09)

- Meta: added the license badge
- Meta: added more package keywords

## [1.0.0] (2019-12-09)

- Initial release

[4.0.2]: https://github.com/valtlai/postcss-font-format-keywords/compare/4.0.1...4.0.2
[4.0.1]: https://github.com/valtlai/postcss-font-format-keywords/compare/4.0.0...4.0.1
[4.0.0]: https://github.com/valtlai/postcss-font-format-keywords/compare/3.0.2...4.0.0
[3.0.2]: https://github.com/valtlai/postcss-font-format-keywords/compare/3.0.1...3.0.2
[3.0.1]: https://github.com/valtlai/postcss-font-format-keywords/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/valtlai/postcss-font-format-keywords/compare/v2.0.2...3.0.0
[2.0.2]: https://github.com/valtlai/postcss-font-format-keywords/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/valtlai/postcss-font-format-keywords/compare/2.0.0...v2.0.1
[2.0.0]: https://github.com/valtlai/postcss-font-format-keywords/compare/1.0.3...2.0.0
[1.0.3]: https://github.com/valtlai/postcss-font-format-keywords/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/valtlai/postcss-font-format-keywords/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/valtlai/postcss-font-format-keywords/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/valtlai/postcss-font-format-keywords/tree/1.0.0
