import { sfEqual, sfGe, sfGt, sfIn, sfIsEmpty, sfIsNotEmpty, sfIsNotNull, sfIsNull, sfLe, sfLike, sfLt, sfNotEqual, sfNotIn } from '../src';

test('like case sensitive', () => {
  expect(sfLike('catalog.name', '*electronic*').toString()).toBe("catalog.name ~ '*electronic*'");
});

test('like case insensitive', () => {
  expect(sfLike('catalog.name', '*ElEcTroNic*', true).toString()).toBe("catalog.name ~~ '*ElEcTroNic*'");
});

test('equal string', () => {
  expect(sfEqual('id', '7f960e9d-103c-4f79-bac3-1e9021e3347a').toString()).toBe("id : '7f960e9d-103c-4f79-bac3-1e9021e3347a'");
});

test('equal number', () => {
  expect(sfEqual('id', 5).toString()).toBe('id : 5');
});

test('notEqual string', () => {
  expect(sfNotEqual('username', 'torshid').toString()).toBe("username ! 'torshid'");
});

test('notEqual number', () => {
  expect(sfNotEqual('id', 5).toString()).toBe('id ! 5');
});

test('gt string', () => {
  expect(sfGt('createdAt ', '1-1-2000').toString()).toBe("createdAt  > '1-1-2000'");
});

test('gt number', () => {
  expect(sfGt('distance', 100).toString()).toBe('distance > 100');
});

test('ge string', () => {
  expect(sfGe('createdAt ', '1-1-2000').toString()).toBe("createdAt  >: '1-1-2000'");
});

test('ge number', () => {
  expect(sfGe('distance', 100).toString()).toBe('distance >: 100');
});

test('lt string', () => {
  expect(sfLt('createdAt ', '1-1-2000').toString()).toBe("createdAt  < '1-1-2000'");
});

test('lt number', () => {
  expect(sfLt('distance', 100).toString()).toBe('distance < 100');
});

test('le string', () => {
  expect(sfLe('createdAt ', '1-1-2000').toString()).toBe("createdAt  <: '1-1-2000'");
});

test('le number', () => {
  expect(sfLe('distance', 100).toString()).toBe('distance <: 100');
});

test('is null', () => {
  expect(sfIsNull('status').toString()).toBe('status is null');
});

test('is not null', () => {
  expect(sfIsNotNull('status').toString()).toBe('status is not null');
});

test('is empty', () => {
  expect(sfIsEmpty('children').toString()).toBe('children is empty');
});

test('is not empty', () => {
  expect(sfIsNotEmpty('children').toString()).toBe('children is not empty');
});

test('in empty', () => {
  expect(sfIn('status', []).toString()).toBe('status in []');
});

test('in string[]', () => {
  expect(sfIn('status', ['failed', 'closed']).toString()).toBe("status in ['failed', 'closed']");
});

test('in number[]', () => {
  expect(sfIn('status', [1, 2]).toString()).toBe('status in [1, 2]');
});

test('not in empty', () => {
  expect(sfNotIn('status', []).toString()).toBe('status not in []');
});

test('not in string[]', () => {
  expect(sfNotIn('status', ['failed', 'closed']).toString()).toBe("status not in ['failed', 'closed']");
});

test('not in number[]', () => {
  expect(sfNotIn('status', [1, 2]).toString()).toBe('status not in [1, 2]');
});

test('.toString() can handle 0 as number', () => {
  expect(sfEqual('id', 0).toString()).toBe('id : 0');
});
