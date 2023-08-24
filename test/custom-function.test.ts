import { Function } from '../src';

class CustomFunction extends Function {
  constructor(...values: string[]) {
    super('customFunctionName', values.join(', '));
  }
}

export function sfCustomFunction(...selectors: string[]): CustomFunction {
  return new CustomFunction(...selectors);
}

test('custom function', () => {
  expect(sfCustomFunction('firstName', "' '", 'lastName').toString()).toBe("customFunctionName(firstName, ' ', lastName)");
});
