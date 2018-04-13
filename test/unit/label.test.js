"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Label = require("../../src/ui/label");

test("Label", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new Label() instanceof Label, "creates an object");
		const el = new Label({for: "aux"});
		t.equal(el.attributes.for, "aux");
		t.ok(el.attributes.hasOwnProperty("id"));
		t.end();

	});

	t.end();

});
