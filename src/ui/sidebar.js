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

			if (undefined !== this.components) {

				this.components = `${this.components}${component}`;

			} else  {

				this.components = component;

			}

		} else {

			this.components = "";

		}
		if (undefined !== header) {

			this.header = header;

		} else {

			this.header = "";

		}

	}

	hide(document) {

		const self = this;
		self.visibility = false;
		if (undefined !== document) {

			document.querySelector("body").innerHTML = self.render();
			self.addEventToButton(document);

		}

	}

	show(document) {

		const self = this;
		self.visibility = true;
		if (undefined !== document) {

			document.querySelector("body").innerHTML = self.render();
			self.addEventToButton(document);

		}

	}

	setPosition(position: PositionType) {

		const self = this;
		self.position = position;

	}


	/**
	 * Add component to sidebar
	 *
	 * @param {?Object} component
	 */
	addComponent(component: ?Object) {

		if (undefined !== component) {

			if (undefined !== this.components) {

				this.components = `${this.components}${component}`;

			} else  {

				this.components = component;

			}

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

	addEventToButton(document) {

		const self = this;
		if (undefined !== document) {

			document.getElementById("sidebarCollapse").onclick = function () {

				self.changeVisibility(document);

			};

		}

	}

	changeVisibility(document) {

		const self = this;
		// open or close navbar
		if (!self.visibility) {

			self.show(document);

		} else {

			self.hide(document);

		}

	}
	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {

		const html = `<div class="wrapper  sidebar-${this.position}">` +
						`<nav id="sidebar" class="${this.visibility ? "active" : "unactive"}">` +
						"<!-- Sidebar Header -->" +
							"<div class=\"sidebar-header\">" +
								`<span class="title">${this.header}</span>` +
							"</div>" +
							"<div class=\"sidebar-body\">" +
								`${this.components}` +
							"</div>" +
						"</nav>" +
					"</div>" +
					`<div id="content" class="sidebar-${this.position}">` +
						"<button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\">" +
							`${this.visibility ? ">" : "<"}` +
						"</button>" +
					"<div>";
		return html;

	}

}

module.exports = Sidebar;
