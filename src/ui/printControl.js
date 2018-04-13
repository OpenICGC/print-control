// @flow
"use strict";
const LabeledInput = require("./labeledInput");
const Selector = require("./selector");
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
			new RadioGroup("Layout", [{label: "Portrait", value: "portrait", selected: true}, {label: "Landscape", value: "landscape", selected: false}], {name: "input1"}),
			new Selector("Mides", [{label:"A4", value: "a4"}, {label:"A3", value: "a3"}], {id: "input2", placeholder: "seleccioneu la mida"}),
			new LabeledInput("Amplada", "text", true, {id: "input3", placeholder: "valor en mm"}),
			new LabeledInput("Alçada", "text", true, {id: "input4", placeholder: "valor en mm"}),
			new Selector("DPI", [{label:"300", value: "300"}, {label:"150", value: "150"}], {id: "input5", placeholder: "seleccioneu la resolució"}),
		];

	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	getHtml() {

		const attStr = this.controls.map((element) => {

			return element.render();

		}).join("");

		return attStr;

	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {

		const attStr = this.getHtml();
		this.container.innerHTML = attStr;

	}

}

module.exports = PrintControl;
