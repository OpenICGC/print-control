(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.printControl = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports={
  "version": "0.0.1"
}
},{}],2:[function(require,module,exports){
//      
"use strict";

var version         = require("../package.json").version;
var Sidebar = require("./ui/sidebar");

module.exports = {
	version: version,
	Sidebar: Sidebar
};

/**
 * The version of the project in use as specified in `package.json`,
 * `CHANGELOG.md`, and the GitHub release.
 *
 * @var {string} version
 */

},{"../package.json":1,"./ui/sidebar":3}],3:[function(require,module,exports){
//      
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
var Sidebar = function Sidebar(visibility         , position              , header        , component         ) {
	this.visibility = visibility;
	this.position = position;
	if (undefined !== component) {
		if (undefined !== this.components) { this.components = "" + (this.components) + component; }
		else  { this.components = component; }
	} else { this.components = ""; }
	if (undefined !== header) { this.header = header; }
	else { this.header = ""; }
};

Sidebar.prototype.hide = function hide () {
	this.visibility = false;
};

Sidebar.prototype.show = function show () {
	this.visibility = true;
};

Sidebar.prototype.setPosition = function setPosition (position              ) {
	this.position = position;
};



/**
	 * Add component to sidebar
	 *
	 * @param {?Object} component
	 */
Sidebar.prototype.addComponent = function addComponent (component         ) {
	if (undefined !== component) {
		if (undefined !== this.components) { this.components = "" + (this.components) + component; }
		else  { this.components = component; }
	}
};

/**
	 * Add header to sidebar
	 *
	 * @param {String} header
	 */
Sidebar.prototype.addHeader = function addHeader (header        ) {
	this.header = header;
};

/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
Sidebar.prototype.render = function render () {
	var html = "<div class=\"wrapper  sidebar-" + (this.position) + "\">" +
					"<nav id=\"sidebar\" class=\"" + (this.visibility ? "active" : "") + "\">" +
					"<!-- Sidebar Header -->" +
						"<div class=\"sidebar-header\">" +
							"<h3>" + (this.header) + "</h3>" +
						"</div>" +
						"<div class=\"sidebar-body\">" +
							"" + (this.components) +
						"</div>" +
					"</nav>" +
				"</div>" +
				"<div id=\"content\" class=\"sidebar-" + (this.position) + "\">" +
					"<button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\">" +
						">" +
					"<button>" +
				"<div>";
	return html;
};

module.exports = Sidebar;

},{}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlLmpzb24iLCJFOi91c3VhcmlzL20ub3J0ZWdhL0luc3RhbWFwZXMvcHJpbnQtY29udHJvbC9zcmMvaW5kZXguanMiLCJFOi91c3VhcmlzL20ub3J0ZWdhL0luc3RhbWFwZXMvcHJpbnQtY29udHJvbC9zcmMvdWkvc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCJcbn0iLCIvLyAgICAgIFxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHZlcnNpb24gICAgICAgICA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIikudmVyc2lvbjtcclxuY29uc3QgU2lkZWJhciA9IHJlcXVpcmUoXCIuL3VpL3NpZGViYXJcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR2ZXJzaW9uLFxyXG5cdFNpZGViYXJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgcHJvamVjdCBpbiB1c2UgYXMgc3BlY2lmaWVkIGluIGBwYWNrYWdlLmpzb25gLFxyXG4gKiBgQ0hBTkdFTE9HLm1kYCwgYW5kIHRoZSBHaXRIdWIgcmVsZWFzZS5cclxuICpcclxuICogQHZhciB7c3RyaW5nfSB2ZXJzaW9uXHJcbiAqL1xyXG4iLCIvLyAgICAgIFxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHNpZGViYXIgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtib29sZWFufSB2aXNpYmlsaXR5IFNpZGViYXIgdmlzaWJpbGl0eS5cclxuICogQHBhcmFtIHtQb3NpdGlvblR5cGV9IHBvc2l0aW9uIFNpZGViYXIgcG9zaXRpb24uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXIgU2lkZWJhciBoZWFkZXIuXHJcbiAqIEBwYXJhbSB7P09iamVjdH0gY29tcG9uZW50cyBTaWRlYmFyIGNvbXBvbmVudHMuXHJcbiAqIEBleGFtcGxlXHJcbiAqIG5ldyBTaWRlYmFyKGZhbHNlLCBcImxlZnRcIiwgXCJIZWFkZXJcIixcIjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiaWRcXFwiIHZhbHVlPVxcXCJ2YWx1ZVxcXCI+XCIpO1xyXG4gKi9cclxuY2xhc3MgU2lkZWJhciB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBcclxuXHQgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgICAgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHZpc2liaWxpdHkgICAgICAgICAsIHBvc2l0aW9uICAgICAgICAgICAgICAsIGhlYWRlciAgICAgICAgLCBjb21wb25lbnQgICAgICAgICApIHtcclxuXHRcdHRoaXMudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHRpZiAodW5kZWZpbmVkICE9PSBjb21wb25lbnQpIHtcclxuXHRcdFx0aWYgKHVuZGVmaW5lZCAhPT0gdGhpcy5jb21wb25lbnRzKSB0aGlzLmNvbXBvbmVudHMgPSBgJHt0aGlzLmNvbXBvbmVudHN9JHtjb21wb25lbnR9YDtcclxuXHRcdFx0ZWxzZSAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50O1xyXG5cdFx0fSBlbHNlIHRoaXMuY29tcG9uZW50cyA9IFwiXCI7XHJcblx0XHRpZiAodW5kZWZpbmVkICE9PSBoZWFkZXIpIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xyXG5cdFx0ZWxzZSB0aGlzLmhlYWRlciA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0dGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRzaG93KCkge1xyXG5cdFx0dGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uICAgICAgICAgICAgICApIHtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGNvbXBvbmVudCB0byBzaWRlYmFyXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gez9PYmplY3R9IGNvbXBvbmVudFxyXG5cdCAqL1xyXG5cdGFkZENvbXBvbmVudChjb21wb25lbnQgICAgICAgICApIHtcclxuXHRcdGlmICh1bmRlZmluZWQgIT09IGNvbXBvbmVudCkge1xyXG5cdFx0XHRpZiAodW5kZWZpbmVkICE9PSB0aGlzLmNvbXBvbmVudHMpIHRoaXMuY29tcG9uZW50cyA9IGAke3RoaXMuY29tcG9uZW50c30ke2NvbXBvbmVudH1gO1xyXG5cdFx0XHRlbHNlICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgaGVhZGVyIHRvIHNpZGViYXJcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJcclxuXHQgKi9cclxuXHRhZGRIZWFkZXIoaGVhZGVyICAgICAgICApIHtcclxuXHRcdHRoaXMuaGVhZGVyID0gaGVhZGVyO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIEhUTUwgc3RyaW5nXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBgaHRtbGBcclxuXHQgKi9cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ3cmFwcGVyICBzaWRlYmFyLSR7dGhpcy5wb3NpdGlvbn1cIj5gICtcclxuXHRcdFx0XHRcdFx0YDxuYXYgaWQ9XCJzaWRlYmFyXCIgY2xhc3M9XCIke3RoaXMudmlzaWJpbGl0eSA/IFwiYWN0aXZlXCIgOiBcIlwifVwiPmAgK1xyXG5cdFx0XHRcdFx0XHRcIjwhLS0gU2lkZWJhciBIZWFkZXIgLS0+XCIgK1xyXG5cdFx0XHRcdFx0XHRcdFwiPGRpdiBjbGFzcz1cXFwic2lkZWJhci1oZWFkZXJcXFwiPlwiICtcclxuXHRcdFx0XHRcdFx0XHRcdGA8aDM+JHt0aGlzLmhlYWRlcn08L2gzPmAgK1xyXG5cdFx0XHRcdFx0XHRcdFwiPC9kaXY+XCIgK1xyXG5cdFx0XHRcdFx0XHRcdFwiPGRpdiBjbGFzcz1cXFwic2lkZWJhci1ib2R5XFxcIj5cIiArXHJcblx0XHRcdFx0XHRcdFx0XHRgJHt0aGlzLmNvbXBvbmVudHN9YCArXHJcblx0XHRcdFx0XHRcdFx0XCI8L2Rpdj5cIiArXHJcblx0XHRcdFx0XHRcdFwiPC9uYXY+XCIgK1xyXG5cdFx0XHRcdFx0XCI8L2Rpdj5cIiArXHJcblx0XHRcdFx0XHRgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cInNpZGViYXItJHt0aGlzLnBvc2l0aW9ufVwiPmAgK1xyXG5cdFx0XHRcdFx0XHRcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic2lkZWJhckNvbGxhcHNlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIG5hdmJhci1idG5cXFwiPlwiICtcclxuXHRcdFx0XHRcdFx0XHRcIj5cIiArXHJcblx0XHRcdFx0XHRcdFwiPGJ1dHRvbj5cIiArXHJcblx0XHRcdFx0XHRcIjxkaXY+XCI7XHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lkZWJhcjtcclxuIl19
