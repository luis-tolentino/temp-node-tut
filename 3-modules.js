// CommonJS, Every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const { singlePerson, items } = require('./6-alternative-flavor');
require('./7-mind-grenade');
const { john, luis } = names;

sayHi(john);
sayHi(luis);
sayHi("Susan");

console.log(singlePerson, items);