import { Item } from './item';

abstract class Operator implements Item {
  protected constructor(protected operatorKeyWord: string, protected items: Item[]) {}

  public toString() {
    return '(' + this.items.map((item) => item.toString()).join(` ${this.operatorKeyWord} `) + ')';
  }
}

export class And extends Operator {
  public constructor(items: Item[]) {
    super('and', items);
  }
}

export class Or extends Operator {
  public constructor(items: Item[]) {
    super('or', items);
  }
}

export class Not extends Operator {
  constructor(item: Item) {
    super('not', [item]);
  }

  public toString(): string {
    if (this.items[0] instanceof Operator) {
      return `${this.operatorKeyWord}${this.items[0].toString()}`;
    }
    return `${this.operatorKeyWord}(${this.items[0].toString()})`;
  }
}

export class Exists extends Operator {
  constructor(item: Item) {
    super('exists', [item]);
  }
}
