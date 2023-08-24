import { Comparator, Function } from '../src';

class CustomComparator extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string) {
    super(selector, '-*-', value);
  }
}

export function sfCustomComparator(selector: string, value: string): CustomComparator {
  return new CustomComparator(selector, value);
}

test('custom comparator', () => {
  expect(sfCustomComparator('id', '7f960e9d-103c-4f79-bac3-1e9021e3347a').toString()).toBe("id -*- '7f960e9d-103c-4f79-bac3-1e9021e3347a'");
});
