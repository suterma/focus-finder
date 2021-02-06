// ==UserScript==
// @name          Focus Finder
// @namespace     http://userstyles.org
// @description	  Globally highlights the currently focused or hovered input field, button or action item. This helps visually navigating and observing the structure of a website.
// @author        codestaila
// @homepage      https://userstyles.org/styles/150542
// @run-at        document-start
// @version       0.20210205220834
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"/* This css globally creates \"glow\" around the currently focused and/or hovered form element for better usability",
	"    *  when dealing with form input",
	"    *",
	"    *  Changelog",
	"    *  - 0.1.0 (initial release): Simple orange shiny shade",
	"    *  - 0.1.1: Color changed to green, a little more complex behaviour, code cleanup",
	"    *  - 0.1.2: Buttons highlighted with stronger border, not colored background when active/focused",
	"    *  - 0.1.3: More stronger colorization, to have a stronger visual cue. Cleanup.",
	"    *  - 0.1.4: Added the button element.",
	"    */",
	"    /***********************************",
	"    * Modifications for highlighting the focused and hovered text area",
	"    * - Adds some \"shadow glow\" to visualize the outline of a hovered input",
	"    * - Adds some \"outline glow\" to clearly show the currently focused input",
	"    ************************************/",
	"/* Select general focused inputs, but also more specific ones, to have a stronger css selector */",
	"",
	"select:focus,",
	"a:focus,",
	"button:focus,",
	"input:focus,",
	"textarea:focus,",
	"input[type=\"button\"]:focus,",
	"input[type=\"submit\"]:focus,",
	"input[type=\"text\"]:focus,",
	"input[type=\"password\"]:focus,",
	"input[type=\"datetime\"]:focus,",
	"input[type=\"datetime-local\"]:focus,",
	"input[type=\"date\"]:focus,",
	"input[type=\"month\"]:focus,",
	"input[type=\"time\"]:focus,",
	"input[type=\"week\"]:focus,",
	"input[type=\"number\"]:focus,",
	"input[type=\"email\"]:focus,",
	"input[type=\"url\"]:focus,",
	"input[type=\"search\"]:focus,",
	"input[type=\"tel\"]:focus,",
	"input[type=\"color\"]:focus {",
	"    outline: rgba(0, 222, 26, 0.7) solid 4px !important;",
	"    outline-offset: 1px !important;",
	"}",
	"/* Select general hovered inputs, but also more specific ones, to have a stronger css selector */",
	"",
	"select:hover,",
	"a:hover,",
	"button:hover,",
	"input:hover,",
	"textarea:hover,",
	"input[type=\"text\"]:hover,",
	"input[type=\"password\"]:hover,",
	"input[type=\"datetime\"]:hover,",
	"input[type=\"datetime-local\"]:hover,",
	"input[type=\"date\"]:hover,",
	"input[type=\"month\"]:hover,",
	"input[type=\"time\"]:hover,",
	"input[type=\"week\"]:hover,",
	"input[type=\"number\"]:hover,",
	"input[type=\"email\"]:hover,",
	"input[type=\"url\"]:hover,",
	"input[type=\"search\"]:hover,",
	"input[type=\"tel\"]:hover,",
	"input[type=\"color\"]:hover {  ",
	"    -webkit-box-shadow: 0px 0px 12px 6px rgba(0, 222, 26, 0.5), inset 0 0 10000px rgba(0, 222, 26, 0.1) !important;",
	"    -moz-box-shadow: 0px 0px 12px 6px rgba(0, 222, 26, 0.5), inset 0 0 10000px rgba(0, 222, 26, 0.1) !important;",
	"    box-shadow: 0px 0px 12px 6px rgba(0, 222, 26, 0.5), inset 0 0 10000px rgba(0, 222, 26, 0.1) !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
