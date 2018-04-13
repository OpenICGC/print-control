"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Div = require("../../src/ui/div");

test("Div", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new Div() instanceof Div, "creates an object");
		const el = new Div({class: "fakeClass"});
		t.ok(el.attributes.hasOwnProperty("id"));
		t.equal(el.attributes.class, "fakeClass");
		t.end();

	});

	t.end();

});
