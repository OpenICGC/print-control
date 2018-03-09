"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Selector = require("../../src/ui/selector");

test("Selector", (t) => {
	t.test("#constructor", (t) => {
		t.ok(new Selector("", "") instanceof Selector, "creates an object");
		const tInput = new Selector("label", [{label:"opt1", value: "1"}]);
		t.equal(tInput.label, "label");
		t.end();
	});

	t.test("#setOptions", (t) => {
		const tInput = new Selector("label", [{label:"opt1", value: "1"}]);
		t.same(tInput.options, [{label:"opt1", value: "1"}]);
		t.end();
	});

	t.test("#setAtributes", (t) => {
		let tInput = new Selector("label", [{label:"opt1", value: "1"}], {id: "input1", placeholder: "select option"});
		t.same(tInput.attributes, {id: "input1", placeholder: "select option"});
		tInput = new Selector("label", [{label:"opt1", value: "1"}], {placeholder: "select option"});
		t.ok(tInput.attributes.hasOwnProperty("id"));
		t.end();
	});

	t.test("#render", (t) => {
		const tHtml = new Selector("label", [{label:"opt1", value: "1"}], {id: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label for=\"input1\">label</label><select class=\"form-control\" id=\"input1\" placeholder=\"select option\"><option value=\"1\">opt1</option></select></div>");
		t.end();
	});

	t.end();
});
