// @flow
"use strict";

const random = require("../utils/random");

/**
 * A Input element.
 *
 * @param {string} label Input label.
 * @param {string} type Input type.
 * @example
 * var ll = new LatLon(42.10376, 1.84584);
 */
class Selector {

    label: string;
    options: OptionType[];
	attributes: ?Object;

	constructor(label: string, options: OptionType[], attributes: ?Object) {

		this.label = label;
		this.setOptions(options);
		this.setAttributes(attributes);

	}

	/**
	 * Set the select options
	 *
	 * @param {Object} options
	 * @returns {Selector} `this`
	 */
	setOptions(options: ?Object) {

		this.options = options.slice(0);
		return this;

	}

	/**
	 * Set the select attributes
	 *
	 * @param {Object} attributes
	 * @returns {Selector} `this`
	 */
	setAttributes(attributes: ?Object) {

		this.attributes = Object.assign({}, attributes);
		if (!this.attributes.id) {

			this.attributes.id = random.createId();

		}
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
		const optStr = this.options.map((element) => {

			return `<option value="${element.value}">${element.label}</option>`;

		}).join("");
		return `<div class="form-group"><label for="${this.attributes.id}">${this.label}</label><select class="form-control" ${attStr}>${optStr}</select></div>`;

	}

}

module.exports = Selector;
