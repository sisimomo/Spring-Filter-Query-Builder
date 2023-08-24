import { Function } from './functions';
import { Item, valuesToValue } from './item';

export abstract class Comparator implements Item {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(protected selector: Function | string, protected comparatorKeyWord: string, protected value?: string | number) {}

  toString(): string {
    if (this.value) {
      if (typeof this.value === 'number') {
        return `${this.selector} ${this.comparatorKeyWord} ${this.value}`;
      } else {
        return `${this.selector} ${this.comparatorKeyWord} '${this.value}'`;
      }
    }
    return `${this.selector} ${this.comparatorKeyWord}`;
  }
}

export class Like extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string, caseInsensitive = false) {
    super(selector, caseInsensitive ? '~~' : '~', value);
  }
}

export class Equal extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string | number) {
    super(selector, ':', value);
  }
}

export class NotEqual extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string | number) {
    super(selector, '!', value);
  }
}

export class Gt extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string | number) {
    super(selector, '>', value);
  }
}

export class Ge extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string | number) {
    super(selector, '>:', value);
  }
}

export class Lt extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string | number) {
    super(selector, '<', value);
  }
}
export class Le extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, value: string | number) {
    super(selector, '<:', value);
  }
}

export class IsNull extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string) {
    super(selector, 'is null');
  }
}

export class IsNotNull extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string) {
    super(selector, 'is not null');
  }
}

export class IsEmpty extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string) {
    super(selector, 'is empty');
  }
}

export class IsNotEmpty extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string) {
    super(selector, 'is not empty');
  }
}

export class In extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, values: (string | number)[]) {
    super(selector, 'in', `[${valuesToValue(values)}]`);
  }

  public toString(): string {
    return `${this.selector} ${this.comparatorKeyWord} ${this.value}`;
  }
}

export class NotIn extends Comparator {
  // false positive
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(selector: Function | string, values: (string | number)[]) {
    super(selector, 'not in', `[${valuesToValue(values)}]`);
  }

  public toString(): string {
    return `${this.selector} ${this.comparatorKeyWord} ${this.value}`;
  }
}
