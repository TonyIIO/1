import capitalize from "../src/capitalize.js";

if (capitalize('') !== '') {
  throw new Error('incorrect');
}
if (capitalize('DoNe oFFF or No') !== 'Done offf or no') {
  throw new Error('incorrect!');
}
if (capitalize('12 Month') !== '12 month') {
  throw new Error('incorrect!');
}
console.log('correct')