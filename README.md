## Installation

Clone this repo manually or use `brunch new dir -s`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
	* `brunch build` - compiles all files into /public folder
	* `brunch watch --server` - opens live reload server on port 3333
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
* Extras:
	* `.pug` -> `.html` - See documentation for how to use the
	  [Pug](https://pugjs.org/api/getting-started.html)
	  templating language.
		* Use **mixins** to create reusable components
		* Super-simple syntax (h1, .class, etc.)
	* `.scss` - Set variables in css 


## ES-next

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['latest', 'stage-0']`
