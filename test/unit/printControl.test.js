"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const PrintControl = require("../../src/ui/printControl");
const PrintControlResult = require("../results/printControl");

test("PrintControl", (t) => {
	t.test("#constructor", (t) => {
		t.ok(new PrintControl("", "") instanceof PrintControl, "creates an object");
		const { document } = new JSDOM("<!DOCTYPE html><div id=\"control\"><canvas id=\"canvasid\"></canvas></div>").window;
		const tInput = new PrintControl(document.querySelector("#control"), document.querySelector("#canvasid"));
		t.equal(tInput.container, document.querySelector("#control"));
		t.equal(tInput.canvas, document.querySelector("#canvasid"));
		t.end();
	});

	t.test("#render", (t) => {
		const { document } = new JSDOM("<!DOCTYPE html><div id=\"control\"><canvas id=\"canvasid\"></canvas></div>").window;
		const tHtml = new PrintControl(document.querySelector("#control"), document.querySelector("#canvasid"));
		tHtml.render();
		t.equal(document.querySelector("#control").innerHTML, PrintControlResult);
		t.end();
	});

	t.end();
});
