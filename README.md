# flink
A browser extension that adds unobtrusive links to and for elements on a web page. This enables you to share a link directly to a specific part of a web page.

For Firefox only, so far.

## Installation
Just get it on the Firefox add-ons page: https://addons.mozilla.org/en-US/firefox/addon/flink/

## How it works
Flink injects some simpe javascript and css into every visited page. This script finds every HTML header (and span element) on the page. If the element has an id attribute, it adds a fragment link to this element. Using this link, another user's browser can directly scroll to that part of the page.

