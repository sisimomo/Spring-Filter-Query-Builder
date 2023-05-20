import {
  sfAbs,
  sfAvg,
  sfCeiling,
  sfConcat,
  sfCount,
  sfCurrentDate,
  sfCurrentTime,
  sfCurrentTimestamp,
  sfCustomFunction,
  sfLength,
  sfLower,
  sfMax,
  sfMin,
  sfSize,
  sfSum,
  sfTrim,
  sfUpper,
} from '../src';

test('customFunction', () => {
  expect(sfCustomFunction('customFunction', 'a', 'b', 1, 2).toString()).toBe('customFunction(a, b, 1, 2)');
});

test('absolute', () => {
  expect(sfAbs('x').toString()).toBe('absolute(x)');
});

test('average', () => {
  expect(sfAvg('ratings').toString()).toBe('average(ratings)');
});

test('ceiling', () => {
  expect(sfCeiling('ratings').toString()).toBe('ceiling(ratings)');
});

test('concat', () => {
  expect(sfConcat('firstName', "' '", 'lastName').toString()).toBe("concat(firstName, ' ', lastName)");
});

test('count', () => {
  expect(sfCount('x').toString()).toBe('count(x)');
});

test('currentDate', () => {
  expect(sfCurrentDate().toString()).toBe('currentDate()');
});

test('currentTime', () => {
  expect(sfCurrentTime().toString()).toBe('currentTime()');
});

test('currentTimestamp', () => {
  expect(sfCurrentTimestamp().toString()).toBe('currentTimestamp()');
});

test('min', () => {
  expect(sfMin('ratings').toString()).toBe('min(ratings)');
});

test('max', () => {
  expect(sfMax('ratings').toString()).toBe('max(ratings)');
});

test('sum', () => {
  expect(sfSum('scores').toString()).toBe('sum(scores)');
});

test('sum multiple values', () => {
  expect(sfSum('a', 'b').toString()).toBe('sum(a, b)');
});

test('size', () => {
  expect(sfSize('accidents').toString()).toBe('size(accidents)');
});

test('length', () => {
  expect(sfLength('name').toString()).toBe('length(name)');
});

test('trim', () => {
  expect(sfTrim('name').toString()).toBe('trim(name)');
});

test('upper', () => {
  expect(sfUpper('name').toString()).toBe('upper(name)');
});

test('lower', () => {
  expect(sfLower('name').toString()).toBe('lower(name)');
});
