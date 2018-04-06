// @flow
"use strict";

const version: string = require("../package.json").version;
const Sidebar = require("./ui/sidebar");

module.exports = {
	version,
	Sidebar
};

/**
 * The version of the project in use as specified in `package.json`,
 * `CHANGELOG.md`, and the GitHub release.
 *
 * @var {string} version
 */
