import assert from 'power-assert';
import getFunction from '../src/indexOf.js';

const indexOf = getFunction();

// BEGIN (write your solution here)
assert(indexOf([1, 2, 1, 2], 2) === 1)
assert(indexOf([], 2) === -1)
assert(indexOf([1, 2, 1, 2], 2, 2) === 3)
assert(indexOf([2, 'one', 'cat', false], 2) === 0)