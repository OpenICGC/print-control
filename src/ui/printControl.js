// @flow
"use strict";
const LabeledInput = require("./labeledInput");
const Selector = require("./selector");
const RadioGroup = require("./radioGroup");
const Button = require("./button");
//const PrintMap = require("../utils/printMap");

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
		this.controls = this.createControls();

	}

	createControls() {

		return [
			new RadioGroup("Layout", [
				{label: "Portrait", value: "portrait", selected: true},
				{label: "Landscape", value: "landscape", selected: false}
			], {name: "inputLayout"}),
			new Selector("Mides", [
				{label:"Personalitzada", value: "custom"},
				{label:"A2", value: "a2"},
				{label:"A3", value: "a3"},
				{label:"A4", value: "a4"},
				{label:"Galaxy S7", value: "s7"},
				{label:"Galaxy S8", value: "s8"},
				{label:"Galaxy S8+", value: "s8+"},
				{label:"Galaxy Note 8", value: "n8"},
				{label:"iPhone X", value: "iX"},
				{label:"HTC One M8", value: "htcOM8"},
				{label:"Galaxy S4", value: "s4"},
				{label:"Galaxy S5", value: "s5"},
				{label:"Xiaomi Readmi Note 450", value: "xrn450"},
				{label:"iPhone 8+", value: "i8+"},
				{label:"Lenovo K4 note", value: "lk4n"},
				{label:"Galaxy Note 3", value: "gn3"},
				{label:"iPhone 6s", value: "i6s"},
				{label:"iPhone 7", value: "i7"},
				{label:"iPhone 8", value: "i8"},
				{label:"Xiaomi Readmi 3s Prime", value: "xr3p"},
				{label:"iPhone 5s", value: "i5s"},
				{label:"iPhone 4s", value: "i4s"}
			], {id: "inputMida", placeholder: "Seleccioneu la mida"}),
			new LabeledInput("Amplada", "text", true,
				{id: "inputAmplada", placeholder: "valor en mm"}),
			new LabeledInput("Alçada", "text", true,
				{id: "inputAlcada", placeholder: "valor en mm"}),
			new Selector("DPI", [
				{label:"150", value: "150"},
				{label:"254", value: "254"},
				{label:"300", value: "300"},
				{label:"600", value: "600"}
			], {id: "inputDPI", placeholder: "Seleccioneu la resolució"}),
			new Selector("Escala", [
				{label:"Personalitzada", value: "custom"},
				{label:"5000", value: "5000"},
				{label:"10000", value: "10000"},
				{label:"25000", value: "25000"},
				{label:"50000", value: "50000"},
				{label:"100000", value: "100000"},
				{label:"250000", value: "250000"},
				{label:"500000", value: "500000"},
				{label:"1000000", value: "1000000"},
				{label:"2000000", value: "2000000"},
			], {id: "inputEscala", placeholder: "Seleccioneu l'escala"}),
			new Button({id:"inputGenerarMapa", value:"Generar mapa"})
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
	render(document) {

		const attStr = this.getHtml();
		this.container.innerHTML = attStr;

		this.sizeSelector = document.querySelector("#inputMida");
		this.widthInput = document.querySelector("#inputAmplada");
		this.heightInput = document.querySelector("#inputAlcada");
		this.dpiInput = document.querySelector("#inputDPI");
		this.buttonInput = document.querySelector("#inputGenerarMapa");
		this.addEvents();

	}

	addEvents() {

		this.sizeSelector.addEventListener("change", () => this.sizeChanged());


	}

	sizeChanged() {

		const size = this.sizeSelector.options[this.sizeSelector.selectedIndex];

		if (size === "custom") {

			this.widthInput.style.display = "block";
			this.heightInput.style.display = "block";

		} else {

			this.widthInput.style.display = "none";
			this.heightInput.style.display = "none";

		}

	}

	addEventToButton(document,functionclick){
		document.querySelector("#inputGenerarMapa").addEventListener("click", functionclick);
	}

}

module.exports = PrintControl;
