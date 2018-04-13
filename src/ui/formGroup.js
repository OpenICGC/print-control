// @flow
"use strict";

const Div = require("./div");

/**
 * Creates an HTML Form group. Convenience class.
 *
 * @param {InputType} type The input type
 * @param {Object} inAttributes The input attributes
 * @example
 * var formGroup = new FormGroup();
 */
class FormGroup {

	div: Div;

	constructor(inAttributes: ?Object, shouldCreateId: boolean = true) {

		const attribs = Object.assign({}, inAttributes, {class: "form-group"});
		this.div = new Div(attribs, shouldCreateId);

	}

	/**
	 * Sets the content of the DOMElement
	 *
	 * @param {string} html
	 * @returns {DOMElement} `this`
	 */
	setContent(html: string) {

		this.div.setContent(html);
		return this;

	}

	/**
	 * Adds the html to the contents of the DOMElement
	 *
	 * @param {string} html
	 * @returns {DOMElement} `this`
	 */
	addContent(html: string) {

		this.div.addContent(html);
		return this;

	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {

		return this.div.render();

	}

}

module.exports = FormGroup;
