"use strict";

require("flow-remove-types/register");
const test = require("tap").test;
const Sidebar = require("../../src/ui/sidebar");

test("Sidebar", (t) => {
	t.test("#constructor", (t) => {
		t.ok(new Sidebar("", "") instanceof Sidebar, "creates an object");
		const tSidebar = new Sidebar(true, "left");
		t.equal(tSidebar.visibility, true);
		t.equal(tSidebar.position, "left");
		t.end();
	});

	t.test("#hide", (t) => {
		const tSidebar = new Sidebar(true, "left");
		tSidebar.hide();
		t.equal(tSidebar.visibility, false);
		t.end();
	});

	t.test("#show", (t) => {
		const tSidebar = new Sidebar(false, "left");
		tSidebar.show();
		t.equal(tSidebar.visibility, true);
		t.end();
	});

	t.test("#addComponents", (t) => {
		const tSidebar = new Sidebar(false, "left");
		tSidebar.addComponent("<input type=\"text\" id=\"id\" value=\"value\">");
		t.equal(tSidebar.components, "<input type=\"text\" id=\"id\" value=\"value\">");
		t.end();
	});

	t.test("#addHeader", (t) => {
		const tSidebar = new Sidebar(false, "left");
		tSidebar.addHeader("Soc el titol");
		t.equal(tSidebar.header, "Soc el titol");
		t.end();
	});


	t.test("#render", (t) => {
		const tSidebar = new Sidebar(false, "left", "Barra lateral");
		tSidebar.show();
		t.equal(tSidebar.render(), "<div class=\"wrapper  sidebar-left\"><nav id=\"sidebar\" class=\"active\"><!-- Sidebar Header --><div class=\"sidebar-header\"><h3>Barra lateral</h3></div><div class=\"sidebar-body\"></div></nav></div><div id=\"content\" class=\"sidebar-left\"><button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\">><button><div>");
		t.end();
	});

	t.end();
});
