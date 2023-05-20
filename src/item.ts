export interface Item {
  toString(): string;
}

export function valuesToValue(values: (string | number)[]): string {
  if (values.length !== 0) {
    return values.map((value) => (typeof value === 'number' ? value : `'${value}'`)).join(', ');
  }
  return '';
}
