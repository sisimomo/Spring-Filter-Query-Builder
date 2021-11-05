import { Item } from './item.js';
import { Comparator } from './comparators.js';

class Function extends Item { //Abstract
	constructor(selector, functionKeyWord) {
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
		return this.functionKeyWord + " (" + this.selector + ")";
	}
}

class Absolute extends Function {
	constructor(selector) {
		super(selector, "ABSOLUTE");
	}
}

class Average extends Function {
	constructor(selector) {
		super(selector, "AVERAGE");
	}
}

class Min extends Function {
	constructor(selector) {
		super(selector, "MIN");
	}
}

class Max extends Function {
	constructor(selector) {
		super(selector, "MAX");
	}
}

class Sum extends Function {
	constructor(selector) {
		super(selector, "SUM");
	}
}

class CurrentDate extends Function {
	constructor() {
		super("", "CURRENTDATE");
	}
}

class CurrentTime extends Function {
	constructor() {
		super("", "CURRENTTIME");
	}
}

class CurrentTimestamp extends Function {
	constructor() {
		super("", "CURRENTTIMESSTAMP");
	}
}

class Size extends Function {
	constructor(selector) {
		super(selector, "SIZE");
	}
}

class Length extends Function {
	constructor(selector) {
		super(selector, "LENGTH");
	}
}

class Trim extends Function {
	constructor(selector) {
		super(selector, "TRIM");
	}
}

class Upper extends Function {
	constructor(selector) {
		super(selector, "UPPER");
	}
}

class Lower extends Function {
	constructor(selector) {
		super(selector, "LOWER");
	}
}

class Concat extends Function {
	constructor(selector) {
		super(selector, "CONCAT");
	}
}

export { Function, Absolute, Average, Min, Max, Sum, CurrentDate, CurrentTime, CurrentTimestamp, Size, Length, Trim, Upper, Lower, Concat };