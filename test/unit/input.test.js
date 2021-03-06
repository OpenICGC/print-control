"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Input = require("../../src/ui/input");

test("Input", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new Input("text") instanceof Input, "creates an object");
		const el = new Input("text");
		t.equal(el.type, "text");
		t.ok(el.attributes.hasOwnProperty("id"));
		t.end();

	});

	t.end();

});
