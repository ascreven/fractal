'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Brown Bag');

/*
 * Tell Fractal where to look for components.
 */
const components = fractal.components;
components.set("ext", ".njk");
components.set('path', path.join(__dirname, 'components'));

components.set("default.preview", "@preview");

const nunjucks = require("@frctl/nunjucks");
components.engine(nunjucks);

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
* Theme
*/

const mandelbrot = require('@frctl/mandelbrot');
// create a new instance with custom config options
const customTheme = mandelbrot({
  panels: ['html', 'view', 'context', 'resources', 'info', 'notes']
});
fractal.web.theme(customTheme);