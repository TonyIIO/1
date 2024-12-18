import capitalize from "../src/capitalize.js";

import assert from 'power-assert';

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize('heLLO'), 'Hello');

console.log('correct')