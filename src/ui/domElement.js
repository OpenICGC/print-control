// @flow
"use strict";

const random = require("../utils/random");

/**
 * A DOMElement element that represents an HTML DOM element.
 *
 * @param {string} tag The element tag
 * @example
 * var div = new DOMElement("div");
 */
class DOMElement {

	tag: string;
	attributes: ?Object;
	content: string;

	constructor(tag: string, attributes: ?Object, shouldCreateId: boolean = true) {

		this.tag = tag;
		this.content = "";
		this.setAttributes(attributes, shouldCreateId);

	}

	/**
	 * Set the input attributes
	 *
	 * @param {Object} attributes
	 * @returns {DOMElement} `this`
	 */
	setAttributes(attributes: ?Object, shouldCreateId: boolean = true) {

		this.attributes = Object.assign({}, attributes);
		if (!this.attributes.id && shouldCreateId) {

			this.attributes.id = random.createId();

		}
		return this;

	}

	/**
	 * Sets the content of the DOMElement
	 *
	 * @param {string} html
	 * @returns {DOMElement} `this`
	 */
	setContent(html: string) {

		this.content = html;
		return this;

	}

	/**
	 * Adds the html to the contents of the DOMElement
	 *
	 * @param {string} html
	 * @returns {DOMElement} `this`
	 */
	addContent(html: string) {

		this.content = `${this.content}${html}`;
		return this;

	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {

		const attStr = Object.keys(this.attributes).map((key) => {

			return `${key}="${this.attributes[key]}"`;

		}).join(" ");

		return `<${this.tag} ${attStr}>${this.content}</${this.tag}>`;

	}

}

module.exports = DOMElement;
