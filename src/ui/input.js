// @flow
"use strict";

const DomElement = require("./domElement");

/**
 * Creates an HTML Input. Convenience class.
 *
 * @param {InputType} type The input type
 * @param {Object} inAttributes The input attributes
 * @example
 * var input = new Input();
 */
class Input extends DomElement {

	type: InputType;

	constructor(inType: InputType, inAttributes: ?Object, shouldCreateId: boolean = true) {

		const attr = Object.assign({}, inAttributes, {type: inType});
		super("input", attr, shouldCreateId);

		this.type = inType;

	}

}

module.exports = Input;
