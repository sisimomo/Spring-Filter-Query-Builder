import { Item } from './item.js';
import { Comparator } from './comparators.js';

class Function extends Item { //Abstract
	constructor(functionKeyWord, selector) {
		if (new.target === Comparator) {
			throw new TypeError("Cannot construct " + new.target.name + " instances directly");
		}
		if (!(typeof selector === 'string' || selector instanceof String)) {
			throw new.target.name + " parameter 'selector' must be a String!";
		}
		super();
		this.selector = selector;
		this.functionKeyWord = functionKeyWord;
	}

	toString() {
		if (this.selector != undefined) {
			return this.functionKeyWord + "(" + this.selector + ")";
		} else {
			return this.functionKeyWord + "()";

		}
	}
}

class Absolute extends Function {
	constructor(selector) {
		super("ABSOLUTE", selector);
	}
}

class Average extends Function {
	constructor(selector) {
		super("AVERAGE", selector);
	}
}

class Min extends Function {
	constructor(selector) {
		super("MIN", selector);
	}
}

class Max extends Function {
	constructor(selector) {
		super("MAX", selector);
	}
}

class Sum extends Function {
	constructor(selector) {
		super("SUM", selector);
	}
}

class CurrentDate extends Function {
	constructor() {
		super("CURRENTDATE");
	}
}

class CurrentTime extends Function {
	constructor() {
		super("CURRENTTIME");
	}
}

class CurrentTimestamp extends Function {
	constructor() {
		super("CURRENTTIMESSTAMP");
	}
}

class Size extends Function {
	constructor(selector) {
		super("SIZE", selector);
	}
}

class Length extends Function {
	constructor(selector) {
		super("LENGTH", selector);
	}
}

class Trim extends Function {
	constructor(selector) {
		super("TRIM", selector);
	}
}

class Upper extends Function {
	constructor(selector) {
		super("UPPER", selector);
	}
}

class Lower extends Function {
	constructor(selector) {
		super("LOWER", selector);
	}
}

class Concat extends Function {
	constructor(...selectors) {
		super("CONCAT", "('" + selectors.join(", ") + "')");
	}
}

export { Function, Absolute, Average, Min, Max, Sum, CurrentDate, CurrentTime, CurrentTimestamp, Size, Length, Trim, Upper, Lower, Concat };