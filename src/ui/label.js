// @flow
"use strict";

const DomElement = require("./domElement");

/**
 * Creates an HTML Label. Convenience class.
 *
 * @param {Object} inAttributes The label attributes
 * @example
 * var input = new Input();
 */
class Label extends DomElement {

	type: InputType;

	constructor(inAttributes: ?Object, shouldCreateId: boolean = true) {

		super("label", inAttributes, shouldCreateId);

	}

}

module.exports = Label;
