"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const RadioGroup = require("../../src/ui/radioGroup");

test("RadioGroup", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new RadioGroup("") instanceof RadioGroup, "creates an object");
		const tInput = new RadioGroup("label", [{label:"opt1", value: "1"}]);
		t.equal(tInput.label.content, "label");
		t.end();

	});

	t.test("#render", (t) => {

		let tHtml = new RadioGroup("label", [{label:"opt1", value: "1", selected: true, id: "inputId"}], {name: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label >label</label><label class=\"radio-inline\" for=\"inputId\">opt1</label><input name=\"input1\" placeholder=\"select option\" value=\"1\" checked=\"true\" id=\"inputId\" class=\"form-control\" type=\"radio\"></input></div>");
		tHtml = new RadioGroup("label", [{label:"opt1", value: "1", selected: false, id: "inputId1"}], {name: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label >label</label><label class=\"radio-inline\" for=\"inputId1\">opt1</label><input name=\"input1\" placeholder=\"select option\" value=\"1\" id=\"inputId1\" class=\"form-control\" type=\"radio\"></input></div>");
		tHtml = new RadioGroup("label", [{label:"opt1", value: "1", selected: true, id: "inputId"}, {label:"opt2", value: "2", selected: false, id: "inputId2"}], {name: "input1", placeholder: "select option"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label >label</label><label class=\"radio-inline\" for=\"inputId\">opt1</label><input name=\"input1\" placeholder=\"select option\" value=\"1\" checked=\"true\" id=\"inputId\" class=\"form-control\" type=\"radio\"></input><label class=\"radio-inline\" for=\"inputId2\">opt2</label><input name=\"input1\" placeholder=\"select option\" value=\"2\" id=\"inputId2\" class=\"form-control\" type=\"radio\"></input></div>");
		t.end();

	});

	t.end();

});
