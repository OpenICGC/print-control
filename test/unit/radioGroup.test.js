"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const RadioGroup = require("../../src/ui/radioGroup");

test("RadioGroup", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new RadioGroup("", "") instanceof RadioGroup, "creates an object");
		const tInput = new RadioGroup("label", [{label:"opt1", value: "1"}]);
		t.equal(tInput.label, "label");
		t.end();

	});

	t.test("#setOptions", (t) => {

		const tInput = new RadioGroup("label", [{label:"opt1", value: "1"}], {name: "input1", placeholder: "select option"});
		t.same(tInput.options, [{label:"opt1", value: "1"}]);
		t.same(tInput.attributes, {name: "input1", placeholder: "select option"});
		t.end();

	});

	t.test("#render", (t) => {

		let tHtml = new RadioGroup("label", [{label:"opt1", value: "1", selected: true}], {name: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label>label</label><br><label class=\"radio-inline\"><input type=\"radio\" name=\"input1\" placeholder=\"select option\" value=\"1\" checked>opt1</label></div>");
		tHtml = new RadioGroup("label", [{label:"opt1", value: "1", selected: false}], {name: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label>label</label><br><label class=\"radio-inline\"><input type=\"radio\" name=\"input1\" placeholder=\"select option\" value=\"1\" >opt1</label></div>");
		tHtml = new RadioGroup("label", [{label:"opt1", value: "1", selected: true}, {label:"opt2", value: "2", selected: false}], {name: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label>label</label><br><label class=\"radio-inline\"><input type=\"radio\" name=\"input1\" placeholder=\"select option\" value=\"1\" checked>opt1</label><label class=\"radio-inline\"><input type=\"radio\" name=\"input1\" placeholder=\"select option\" value=\"2\" >opt2</label></div>");
		t.end();

	});

	t.end();

});
