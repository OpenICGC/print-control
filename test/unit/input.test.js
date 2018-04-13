"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Input = require("../../src/ui/input");

test("Input", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new Input("", "") instanceof Input, "creates an object");
		const tInput = new Input("label", "type");
		t.equal(tInput.label, "label");
		t.equal(tInput.type, "type");
		t.end();

	});

	t.test("#setAtributes", (t) => {

		let tInput = new Input("label", "text", {id: "input1", placeholder: "insert text"});
		t.same(tInput.attributes, {id: "input1", placeholder: "insert text"});
		tInput = new Input("label", "text", {placeholder: "insert text"});
		t.ok(tInput.attributes.hasOwnProperty("id"));
		t.end();

	});

	t.test("#render", (t) => {

		const tHtml = new Input("label", "text", {id: "input1", placeholder: "insert text"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label for=\"input1\">label</label><input type=\"text\" class=\"form-control\" id=\"input1\" placeholder=\"insert text\"></div>");
		t.end();

	});

	t.end();

});
