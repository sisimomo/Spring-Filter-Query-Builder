import { Item } from './item.js';
import { Comparator } from './comparators.js';

class Operator extends Item { //Abstract
	constructor(operatorKeyWord, ...items) {
		super();
		if (new.target === Operator) {
			throw new TypeError("Cannot construct " + new.target.name + " instances directly");
		}
		this.operatorKeyWord = operatorKeyWord;
		this.items = items;
	}

	toString() {
		return  "(" + this.items.map(item => item.toString()).join(` ${this.operatorKeyWord} `) + ")";
	}
}

class And extends Operator {
	constructor(...items) {
		super("AND", ...items);
	}
}

class Or extends Operator {
	constructor(...items) {
		super("OR", ...items);
	}
}

class Not extends Operator {
	constructor(item) {
		if (!(item instanceof Operator || item instanceof Comparator)) {
			throw `${new.target.name} parameter 'item' must be a Operator or a Comparator!`;
		}
		super("NOT", item);
	}
}

class Exists extends Operator {
	constructor(item) {
		if (!(item instanceof Operator || item instanceof Comparator)) {
			throw `${new.target.name} parameter 'item' must be a Operator or a Comparator!`;
		}
		super("EXISTS", item);
	}
}

export { Operator, And, Or, Not, Exists };