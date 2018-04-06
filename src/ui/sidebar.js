// @flow
"use strict";

/**
 * A sidebar element.
 *
 * @param {boolean} visibility Sidebar visibility.
 * @param {PositionType} position Sidebar position.
 * @param {String} header Sidebar header.
 * @param {?Object} components Sidebar components.
 * @example
 * new Sidebar(false, "left", "Header","<input type=\"text\" id=\"id\" value=\"value\">");
 */
class Sidebar {
	visibility: boolean;
	position: PositionType;
	components: ?Object;
	header: String;

	constructor(visibility: boolean, position: PositionType, header: String, component: ?Object) {
		this.visibility = visibility;
		this.position = position;
		if (undefined !== component) {
			if (undefined !== this.components) this.components = `${this.components}${component}`;
			else  this.components = component;
		} else this.components = "";
		if (undefined !== header) this.header = header;
		else this.header = "";
	}

	hide() {
		this.visibility = false;
	}

	show() {
		this.visibility = true;
	}

	setPosition(position: PositionType) {
		this.position = position;
	}



	/**
	 * Add component to sidebar
	 *
	 * @param {?Object} component
	 */
	addComponent(component: ?Object) {
		if (undefined !== component) {
			if (undefined !== this.components) this.components = `${this.components}${component}`;
			else  this.components = component;
		}
	}

	/**
	 * Add header to sidebar
	 *
	 * @param {String} header
	 */
	addHeader(header: String) {
		this.header = header;
	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {
		const html = `<div class="wrapper  sidebar-${this.position}">` +
						`<nav id="sidebar" class="${this.visibility ? "active" : ""}">` +
						"<!-- Sidebar Header -->" +
							"<div class=\"sidebar-header\">" +
								`<h3>${this.header}</h3>` +
							"</div>" +
							"<div class=\"sidebar-body\">" +
								`${this.components}` +
							"</div>" +
						"</nav>" +
					"</div>" +
					`<div id="content" class="sidebar-${this.position}">` +
						"<button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\">" +
							">" +
						"<button>" +
					"<div>";
		return html;
	}
}

module.exports = Sidebar;
