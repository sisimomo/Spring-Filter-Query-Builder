import { Item } from './item';

export abstract class Function implements Item {
  constructor(protected functionKeyWord: string, protected selector?: string) {}

  toString(): string {
    if (this.selector) {
      return `${this.functionKeyWord}(${this.selector})`;
    } else {
      return `${this.functionKeyWord}()`;
    }
  }
}

export class CustomFunction extends Function {
  constructor(functionName: string, ...values: (string | number)[]) {
    super(functionName, values.join(', '));
  }
}

export class Absolute extends Function {
  constructor(selector: string) {
    super('absolute', selector);
  }
}

export class Average extends Function {
  constructor(selector: string) {
    super('average', selector);
  }
}

export class Ceiling extends Function {
  constructor(selector: string) {
    super('ceiling', selector);
  }
}

export class Concat extends Function {
  constructor(...values: string[]) {
    super('concat', values.join(', '));
  }
}

export class Count extends Function {
  constructor(selector: string) {
    super('count', selector);
  }
}

export class CountDistinct extends Function {
  constructor(selector: string) {
    super('countDistinct', selector);
  }
}

export class CurrentDate extends Function {
  constructor() {
    super('currentDate');
  }
}

export class CurrentTime extends Function {
  constructor() {
    super('currentTime');
  }
}

export class CurrentTimestamp extends Function {
  constructor() {
    super('currentTimestamp');
  }
}

export class Min extends Function {
  constructor(selector: string) {
    super('min', selector);
  }
}

export class Max extends Function {
  constructor(selector: string) {
    super('max', selector);
  }
}

export class Sum extends Function {
  constructor(...selector: string[]) {
    super('sum', selector.join(', '));
  }
}

export class Size extends Function {
  constructor(selector: string) {
    super('size', selector);
  }
}

export class Length extends Function {
  constructor(selector: string) {
    super('length', selector);
  }
}

export class Trim extends Function {
  constructor(selector: string) {
    super('trim', selector);
  }
}

export class Upper extends Function {
  constructor(selector: string) {
    super('upper', selector);
  }
}

export class Lower extends Function {
  constructor(selector: string) {
    super('lower', selector);
  }
}
