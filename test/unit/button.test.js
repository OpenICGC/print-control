"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Button = require("../../src/ui/button");

test("Button", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new Button("") instanceof Button, "creates an object");
		const el = new Button({value:"Generar mapa"});
		t.equal(el.type, "button");
		t.ok(el.attributes.hasOwnProperty("id"));
		t.ok(el.attributes.hasOwnProperty("value"));
		t.end();

	});

	t.end();

});
