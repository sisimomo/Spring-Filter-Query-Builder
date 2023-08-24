import { Item, Operator, sfEqual, sfGt } from '../src';

class CustomOperator extends Operator {
  public constructor(items: Item[]) {
    super('custom', items);
  }
}

export function sfCustomOperator(items: Item[]): CustomOperator {
  return new CustomOperator(items);
}

test('custom operator', () => {
  expect(sfCustomOperator([sfEqual('status', 'active'), sfGt('createdAt', '1-1-2000')]).toString()).toBe("(status : 'active' custom createdAt > '1-1-2000')");
});
