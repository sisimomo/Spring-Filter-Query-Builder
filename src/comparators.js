import { Item } from './item.js';

class Comparator extends Item { //Abstract
	constructor(selector, comparatorKeyWord, value = undefined) {
		super();
		if (new.target === Comparator) {
			throw new TypeError(`Cannot construct ${new.target.name} instances directly`);
		}
		if (!(selector instanceof Function || (typeof selector === 'string' || selector instanceof String))) {
			throw `${new.target.name} parameter 'selector' must be a Function or a String!`;
		}
		if (value) {
			if (!(typeof value === 'string' || value instanceof String || typeof value === 'number' || value instanceof Number)) {
				throw `${new.target.name} parameter 'value' must be a String or a Number!`;
			}
		}
		this.selector = selector;
		this.comparatorKeyWord = comparatorKeyWord;
		this.value = value;
	}

	toString() {
		if (this.value != undefined) {
			if (typeof this.value === 'number' || this.value instanceof Number) {
				return `${this.selector} ${this.comparatorKeyWord} ${this.value}`;
			} else {
				return `${this.selector} ${this.comparatorKeyWord} '${this.value}'`;
			}
		} else {
			return `${this.selector} ${this.comparatorKeyWord}`;
		}
	}
}

class Like extends Comparator {
	constructor(selector, value) {
		super(selector, "~", value);
	}
}

class Equal extends Comparator {
	constructor(selector, value) {
		super(selector, ":", value);
	}
}

class NotEqual extends Comparator {
	constructor(selector, value) {
		super(selector, "!", value);
	}
}

class Gt extends Comparator {
	constructor(selector, value) {
		super(selector, ">", value);
	}
}

class Ge extends Comparator {
	constructor(selector, value) {
		super(selector, ">:", value);
	}
}

class Lt extends Comparator {
	constructor(selector, value) {
		super(selector, "<", value);
	}
}
class Le extends Comparator {
	constructor(selector, value) {
		super(selector, "<:", value);
	}
}

class IsNull extends Comparator {
	constructor(selector) {
		super(selector, "IS NULL");
	}
}

class IsNotNull extends Comparator {
	constructor(selector) {
		super(selector, "IS NOT NULL");
	}
}

class IsEmpty extends Comparator {
	constructor(selector) {
		super(selector, "IS EMPTY");
	}
}

class IsNotEmpty extends Comparator {
	constructor(selector) {
		super(selector, "IS NOT EMPTY");
	}
}

class In extends Comparator {
	constructor(selector, ...values) {
		super(selector, "IN", "('" + values.join("', '") + "')");
	}

	toString() {
		return `${this.selector} ${this.comparatorKeyWord} ${this.value}`;
	}

}

export { Comparator, Like, Equal, NotEqual, Gt, Ge, Lt, Le, IsNull, IsNotNull, IsEmpty, IsNotEmpty, In };