# flink
![License](https://img.shields.io/github/license/suterma/flink.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/suterma/flink/total.svg)
![Release](https://img.shields.io/github/release/suterma/flink.svg)
![Language](https://img.shields.io/github/languages/top/suterma/flink.svg)

Share direct links to parts of a web page. Flink is a browser extension that adds unobtrusive direct (fragment) links to and for elements on a web page.

![flink usage example](https://github.com/suterma/flink/raw/master/firefox-extension/dev/FlinkApplication.png)

For Firefox only, so far.

## Installation
Just get it on the Firefox add-ons page: https://addons.mozilla.org/en-US/firefox/addon/flink/

### Alternative use
Using a user scripting tool like Greasemonkey and Tampermonkey (and optionally a user style tool like stylish or stilus) you can run and tweak flink to your own needs. Use the provides scripts and styles from the dev direcotry.

## How it works
Flink injects some simple javascript and css into every visited page. This script finds every HTML header (and span element) on the page. If the element has an id attribute, it adds a fragment link to this element. Using this link, another user's browser can directly scroll to that part of the page.

## Credits
Flink is based on efforts by others, to mention a few:
 - The open iconic set, used under the MIT License See https://opensource.org/licenses/MIT.
 - The SVG converter at: https://websemantics.uk/tools/svg-to-background-image-conversion/ 
 - The CSS minifier at: https://cssminifier.com/minify
 

