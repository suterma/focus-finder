// ==UserScript==
// @name         Flink
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds unobtrusive fragment links to and for every header and span element (with an id attribute) on a web page.
// @author       marcel@codeministry.ch
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //Add the required styles for flink
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
	
	//Add flink css (this is a minified version of the flink.css file)
    addGlobalStyle('.flink-target{position:relative}.flink-anchor{display:none;position:absolute;top:0;z-index:100;background-color:#fff;border:2px solid #666;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;padding-left:1em;padding-right:1em}a.flink-anchor,a.flink-anchor:visited{color:#666}.flink-target:hover>.flink-anchor{display:inline-flex}');

    //Select the elements to flinkify
    var flinkElements = document.querySelectorAll('H1, H2, H3, H4, H5, H6, SPAN');

    //Inject anchor elements into the selected (target) flink elements, to provide a link to themselves
    //Use only elements, that actually have an id
    for (var i = 0; i < flinkElements.length; i++) {
        var flinkElement = flinkElements[i];
        if (flinkElement.hasAttribute('id'))
        {
            //Prepend the anchor element to the existing inner content.
            flinkElement.innerHTML = "<a href='#" + flinkElement.id + "' class='flink-anchor'>⚓</a>"                 +
                flinkElement.innerHTML ;
            flinkElement.className += " flink-target";
        }
    }
})();