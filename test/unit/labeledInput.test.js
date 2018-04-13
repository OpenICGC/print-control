"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const LabeledInput = require("../../src/ui/labeledInput");

test("LabeledInput", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new LabeledInput("", "") instanceof LabeledInput, "creates an object");
		const tLabeledInput = new LabeledInput("This is a label", "text");
		t.equal(tLabeledInput.input.type, "text");
		t.equal(tLabeledInput.input.attributes.class, "form-control");
		t.equal(tLabeledInput.label.content, "This is a label");
		t.equal(tLabeledInput.label.attributes.for, tLabeledInput.input.attributes.id);
		t.end();

	});

	t.test("#render inside form group", (t) => {

		const tHtml = new LabeledInput("label", "text", true, {id: "input1", placeholder: "insert text"});
		t.equal(tHtml.render(), "<div class=\"form-group\"><label for=\"input1\">label</label><input id=\"input1\" placeholder=\"insert text\" class=\"form-control\" type=\"text\"></input></div>");
		t.end();

	});

	t.test("#render without form group", (t) => {

		const tHtml = new LabeledInput("label", "text", false, {id: "input1", placeholder: "insert text"});
		t.equal(tHtml.render(), "<label for=\"input1\">label</label><input id=\"input1\" placeholder=\"insert text\" class=\"form-control\" type=\"text\"></input>");
		t.end();

	});

	t.end();

});
