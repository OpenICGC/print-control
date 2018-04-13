// @flow
"use strict";

const DomElement = require("./domElement");

/**
 * Creates an HTML Div. Convenience class.
 *
 * @param {Object} inAttributes The div attributes
 * @example
 * var input = new Input();
 */
class Div extends DomElement {

	constructor(inAttributes: ?Object, shouldCreateId: boolean = true) {

		super("div", inAttributes, shouldCreateId);

	}

}

module.exports = Div;
