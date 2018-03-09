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
class RadioGroup {
	label: string;
	options: OptionType[];
	attributes: ?Object;

	constructor(label: string, options: OptionType[], attributes: ?Object) {
		this.label = label;
		this.setOptions(options, attributes);
	}

	/**
	 * Set the input attributes
	 *
	 * @param {number} lat
	 *
	 * @returns {RadioGroup} `this`
	 */
	setOptions(options: OptionType[], attributes: ?Object) {
		this.attributes = Object.assign({}, attributes);
		this.options = options.slice(0);
		if (!this.attributes.name) {
			this.attributes.name = random.createId();
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

		const optStr = this.options.map((elem) => {
			return `<label class="radio-inline"><input type="radio" ${attStr} value="${elem.value}" ${elem.selected ? "checked" : ""}>${elem.label}</label>`;
		}).join("");

		return `<div class="form-group"><label>${this.label}</label><br>${optStr}</div>`;
	}
}

module.exports = RadioGroup;
