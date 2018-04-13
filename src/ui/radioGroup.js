// @flow
"use strict";
const LabeledInput = require("./labeledInput");
const Div = require("./div");
const Label = require("./label");

/**
 * A RadioGroup element.
 *
 * @param {string} label Input label.
 * @param {string} type Input type.
 * @example
 * var ll = new LatLon(42.10376, 1.84584);
 */
class RadioGroup {

	options: OptionType[];
	attributes: ?Object;

	constructor(label: string, options: OptionType[] = [], attributes: ?Object) {

		this.createOptions(options, attributes);
		this.label = new Label({}, false);
		this.label.setContent(label);
		this.div = new Div({class: "form-group"}, false);
		this.div.setContent(this.label.render());

	}

	/**
	 * Set the input attributes
	 *
	 * @param {number} lat
	 *
	 * @returns {RadioGroup} `this`
	 */
	createOptions(options: OptionType[], attributes: ?Object) {

		this.options = options.map((elem) => {

			const elemAttribs = Object.assign({}, attributes, {value: elem.value});
			if (elem.selected) {

				elemAttribs.checked = true;

			}

			if (elem.id) {

				elemAttribs.id = elem.id;

			}

			return new LabeledInput(elem.label, "radio", false, elemAttribs, {class: "radio-inline"});

		});

		return this;

	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {

		const optionsStr = this.options.map((elem) => {

			return elem.render();

		}).join("");

		this.div.addContent(optionsStr);
		return this.div.render();

	}

}

module.exports = RadioGroup;
