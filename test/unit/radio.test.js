"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Radio = require("../../src/ui/radio");

test("Radio", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new Radio() instanceof Radio, "creates an object");
		const el = new Radio();
		t.equal(el.type, "radio");
		t.ok(el.attributes.hasOwnProperty("id"));
		t.end();

	});

	t.end();

});
