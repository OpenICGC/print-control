// @flow
"use strict";

const Input = require("./input");
const Label = require("./label");
const FormGroup = require("./formGroup");

/**
 * A LabeledInput represents an input with a label.
 *
 * @param {string} labelText Input label.
 * @param {InputType} type Input type.
 * @param {?Object} inputAttributes The attributes that the input element will have
 * @example
 */
class LabeledInput {

	formGroup: FormGroup;
	label: Label;
	input: Input;
	insideGroup: boolean;

	constructor(labelText: string, type: InputType, insideGroup: boolean = true, inputAttributes: ?Object, labelAttributes: ?Object) {

		const attr = Object.assign({}, inputAttributes, {class: "form-control"});
		this.insideGroup = insideGroup;
		this.input = new Input(type, attr, false);

		const labelAttr = Object.assign({}, labelAttributes);
		if (this.input.attributes.id) {

			labelAttr.for = this.input.attributes.id;

		}

		this.label = new Label(labelAttr, false);
		this.label.setContent(labelText);

		if (this.insideGroup) {

			this.formGroup = new FormGroup({}, false);
			this.formGroup.addContent(this.label.render());
			this.formGroup.addContent(this.input.render());

		}

	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {

		if (this.insideGroup) {

			return this.formGroup.render();

		} else {

			return `${this.label.render()}${this.input.render()}`;

		}

	}

}

module.exports = LabeledInput;
