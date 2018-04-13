// @flow
"use strict";

const Input = require("./input");

/**
 * Creates an HTML Radio. Convenience class.
 *
 * @param {Object} inAttributes The radio attributes
 * @example
 * var input = new Radio();
 */
class Radio extends Input {

	constructor(inAttributes: ?Object) {

		super("radio", inAttributes);

	}

}

module.exports = Radio;
