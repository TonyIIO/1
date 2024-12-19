
import without from '../src/without.js';

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3], 2)).toEqual([1, 3]);
  expect(without([], 1)).toEqual([]);
  expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
});

console.log('All tests passed!');

// что бы тесты пошлив PShell:
// $env:NODE_OPTIONS="--experimental-vm-modules"
//  npx jest
