// @flow
"use strict";
/*
const Input = require("./input");
const Selector = require("./selector");
*/
const RadioGroup = require("./radioGroup");


/**
 * A Input element.
 *
 * @param {string} label Input label.
 * @param {string} type Input type.
 * @example
 * var ll = new LatLon(42.10376, 1.84584);
 */
class PrintControl {
	container: Object;
	canvas: Object;
	controls: Object[];

	constructor(container: Object, canvas: Object) {
		this.container = container;
		this.canvas = canvas;
		this.controls = [
			new RadioGroup("Output Format", [{label: "PNG", value: "png", selected: true}, {label: "PDF", value: "pdf", selected: false}], {name: "input1"})
		];
	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {
		const attStr = this.controls.map((element) => {
			return element.render();
		}).join("");
		this.container.innerHTML = attStr;
	}
}

module.exports = PrintControl;
