// @flow
"use strict";

const version: string = require("../package.json").version;
const Sidebar = require("./ui/sidebar");
const Input = require("./ui/input");
const RadioGroup = require("./ui/radioGroup");
const PrintControl = require("./ui/printControl");
const Button = require("./ui/button");

module.exports = {
	version,
	Sidebar,
	Input,
	RadioGroup,
	PrintControl,
	Button
};

/**
 * The version of the project in use as specified in `package.json`,
 * `CHANGELOG.md`, and the GitHub release.
 *
 * @var {string} version
 */
