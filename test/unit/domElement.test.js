"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const DomElement = require("../../src/ui/domElement");

test("DomElement", (t) => {

	t.test("#constructor", (t) => {

		t.ok(new DomElement("", "") instanceof DomElement, "creates an object");
		const el = new DomElement("label", {});
		t.equal(el.tag, "label");
		t.ok(el.attributes.hasOwnProperty("id"));
		const el2 = new DomElement("label", {}, false);
		t.equal(el2.tag, "label");
		t.ok(!el2.attributes.hasOwnProperty("id"));
		t.end();

	});

	t.test("#setAtributes", (t) => {

		let el = new DomElement("input", {id: "input1", placeholder: "insert text"});
		t.same(el.attributes, {id: "input1", placeholder: "insert text"});
		el = new DomElement("input", {placeholder: "insert text"});
		t.ok(el.attributes.hasOwnProperty("id"));
		t.end();

	});

	t.test("#setContent", (t) => {

		const el = new DomElement("input", {id: "input1"});
		el.setContent("Aux");
		t.same(el.content, "Aux");
		t.end();

	});

	t.test("#addContent", (t) => {

		const el = new DomElement("input", {id: "input1"});
		el.setContent("Aux");
		el.addContent(" aux 2");
		t.same(el.content, "Aux aux 2");
		t.end();

	});

	t.test("#render", (t) => {

		const tHtml = new DomElement("label", {id: "input1", placeholder: "insert text"});
		tHtml.setContent("Content");
		t.equal(tHtml.render(), "<label id=\"input1\" placeholder=\"insert text\">Content</label>");
		t.end();

	});

	t.end();

});
