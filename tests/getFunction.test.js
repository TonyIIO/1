import getFunction from "../src/getFunction.js";

const get = getFunction();

if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('incorrect');
}
if (get({ key: 'value' }, 'key', 'valueDefault') !== 'value') {
  throw new Error('incorrect!');
}
if (get({}, 'key', 'valueDefault') !== 'valueDefault') {
  throw new Error('incorrect!');
}
console.log('correct')