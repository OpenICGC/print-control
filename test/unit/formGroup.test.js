"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const FormGroup = require("../../src/ui/formGroup");

test("FormGroup", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new FormGroup() instanceof FormGroup, "creates an object");
		const el = new FormGroup();
		t.ok(el.div.attributes.hasOwnProperty("id"));
		t.equals(el.div.attributes.class, "form-group");
		t.end();

	});

	t.end();

});
