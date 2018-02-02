// flink, adds unobtrusive fragment links.
// Copyright (C) 2012 by marcel suter, marcel@codeministry.ch
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// ==UserScript==
// @name         Flink
// @namespace    http://tampermonkey.net/
// @version      1.2
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

    //Add flink css (this is a minified version of the stylish-test.flink.css file)
    addGlobalStyle(".flink-target{position:relative;overflow:visible}:link:hover.flink-anchor{border:none;text-decoration:none}.flink-anchor{border:none;background-color:#adff2f;position:absolute;width:2em;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z' /%3E%3C/svg%3E\");background-size:.7em;background-repeat:no-repeat;background-position:center;transform:rotate(0)}.flink-target>.flink-anchor{display:inline-flex;opacity:0;transition:opacity .3s ease}.flink-target:hover>.flink-anchor{display:inline-flex;opacity:1}@keyframes highlight{0%{background:#adff2f}100%{background:0 0}}.flink-target.flink-targetted{animation:highlight 5s}");

    //Select the elements to flinkify
    var flinkElements = document.querySelectorAll('H1, H2, H3, H4, H5, H6, SPAN');

    //Inject anchor elements into the selected (target) flink elements, to provide a link to themselves
    //Use only elements, that actually have an id
    for (var i = 0; i < flinkElements.length; i++) {
        var flinkElement = flinkElements[i];
        if (flinkElement.hasAttribute('id'))
        {
            //Prepend the anchor element to the existing inner content.
            flinkElement.innerHTML = flinkElement.innerHTML + "<a href='#" + flinkElement.id + "' class='flink-anchor' title='Click or share this link to autoscroll to this position.'>&nbsp;</a>";
            flinkElement.className += " flink-target";
        }
    }

    //Highlight the currently targetted fragment
    function highlightTargettedElement() {
        if(window.location.hash) {
            // Fragment exists
            var targettedElement = document.getElementById(window.location.hash.substring(1));
            if (targettedElement)
            {
                targettedElement.className += " flink-targetted";
            }
        }
    }

    //Initial hightlight if required, then handle changes
    highlightTargettedElement();
    window.onhashchange = highlightTargettedElement;
})();