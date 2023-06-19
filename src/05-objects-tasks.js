/* eslint-disable max-len */
/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => this.width * this.height;
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
const getJSON = (obj) => JSON.stringify(obj);


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
const fromJSON = (proto, json) => Object.setPrototypeOf(JSON.parse(json), proto);


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

// class CssSelector {
//   constructor() {
//     this.cssSelector = '';
//     this.isElemCreate = false;
//   }

//   stringify() {
//     const printSelector = this.cssSelector;
//     this.cssSelector = '';
//     return printSelector;
//   }

//   element(value) {
//     if (this.isElemCreate) { throw Error('Element, id and pseudo-element should not occur more then one time inside the selector'); }
//     this.cssSelector += value;
//     this.isElemCreate = true;
//     return this;
//   }

//   id(value) {
//     if (this.cssSelector.includes('#')) { throw Error('Element, id and pseudo-element should not occur more then one time inside the selector'); }
//     if (this.isElemCreate || this.cssSelector === '') this.cssSelector += `#${value}`;
//     else throw Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
//     return this;
//   }

//   class(value) {
//     if (this.cssSelector.includes('#') || this.cssSelector === '') this.cssSelector += `.${value}`;
//     else throw Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
//     return this;
//   }

//   attr(value) {
//     if (this.cssSelector.includes('.') || this.cssSelector === '') this.cssSelector += `[${value}]`;
//     else throw Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
//     return this;
//   }

//   pseudoClass(value) {
//     if ((this.cssSelector.includes('[') && this.cssSelector.includes(']')) || this.cssSelector === '') this.cssSelector += `:${value}`;
//     else throw Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
//     return this;
//   }

//   pseudoElement(value) {
//     if (this.cssSelector.includes('::')) { throw Error('Element, id and pseudo-element should not occur more then one time inside the selector'); }
//     if (this.cssSelector.includes(':') || this.cssSelector === '') this.cssSelector += `::${value}`;
//     else throw Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
//     return this;
//   }

//   combine(selector1, combinator, selector2) {
//     this.cssSelector += `${selector1.cssSelector} ${combinator} ${selector2.cssSelector}`;
//     return this;
//   }
// }

const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
    // return new CssSelector().element(value);
  },

  id(/* value */) {
    throw new Error('Not implemented');
    // return new CssSelector().id(value);
  },

  class(/* value */) {
    throw new Error('Not implemented');
    // return new CssSelector().class(value);
  },

  attr(/* value */) {
    throw new Error('Not implemented');
    // return new CssSelector().attr(value);
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
    // return new CssSelector().pseudoClass(value);
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
    // return new CssSelector().pseudoElement(value);
  },

  combine(/* selector1 , combinator, selector2 */) {
    throw new Error('Not implemented');
    // return new CssSelector().combine(selector1, combinator, selector2);
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
