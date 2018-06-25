// @flow
"use strict";

const Input = require("./input");

/**
 * Creates an HTML Button. Convenience class.
 *
 * @param {Object} inAttributes The button attributes
 * @example
 * var input = new Button();
 */
class Button extends Input {

	constructor(inAttributes: ?Object) {

		super("button", inAttributes);

	}

}

module.exports = Button;
