import { sfAnd, sfEqual, sfGt, sfIsNull, sfLike, sfNot, sfOr } from '../src';

test('and', () => {
  expect(sfAnd([sfEqual('status', 'active'), sfGt('createdAt', '1-1-2000')]).toString()).toBe("(status : 'active' and createdAt > '1-1-2000')");
});

test('or', () => {
  expect(sfOr([sfLike('value', '*hello*'), sfLike('name', '*world*')]).toString()).toBe("(value ~ '*hello*' or name ~ '*world*')");
});

test('not', () => {
  expect(sfNot(sfOr([sfGt('id', 100), sfIsNull('category.order')])).toString()).toBe('not (id > 100 or category.order is null)');
});
