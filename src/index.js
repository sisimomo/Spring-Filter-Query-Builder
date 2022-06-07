import { Like, Equal, NotEqual, Gt, Ge, Lt, Le, IsNull, IsNotNull, IsEmpty, IsNotEmpty, In } from './comparators.js';
import { And, Or, Not, Exists } from './operators.js';
import { Absolute, Average, Min, Max, Sum, CurrentDate, CurrentTime, CurrentTimestamp, Size, Length, Trim, Upper, Lower, Concat } from './functions.js';

export class SpringFilterQueryBuilder {
	static and(...items) {
		return new And(...items);
	}

	static or(...items) {
		return new Or(...items);
	}

	static not(item) {
		return new Not(item);
	}

	static exists(item) {
		return new Exists(...item);
	}

	static like(selector, value) {
		return new Like(selector, value);
	}

	static equal(selector, value) {
		return new Equal(selector, value);
	}

	static notEqual(selector, value) {
		return new NotEqual(selector, value);
	}

	static gt(selector, value) {
		return new Gt(selector, value);
	}

	static ge(selector, value) {
		return new Ge(selector, value);
	}

	static lt(selector, value) {
		return new Lt(selector, value);
	}

	static le(selector, value) {
		return new Le(selector, value);
	}

	static isNull(selector, value) {
		return new IsNull(selector, value);
	}

	static isNotNull(selector, value) {
		return new IsNotNull(selector, value);
	}

	static isEmpty(selector, value) {
		return new IsEmpty(selector, value);
	}

	static isNotEmpty(selector, value) {
		return new IsNotEmpty(selector, value);
	}

	static in(selector, ...value) {
		return new In(selector, ...value);
	}

	static absolute(selector) {
		return new Absolute(selector);
	}

	static average(selector) {
		return new Average(selector);
	}

	static min(selector) {
		return new Min(selector);
	}

	static max(selector) {
		return new Max(selector);
	}

	static sum(selector) {
		return new Sum(selector);
	}

	static currentDate(selector) {
		return new CurrentDate(selector);
	}

	static currentTime(selector) {
		return new CurrentTime(selector);
	}

	static currentTimestamp(selector) {
		return new CurrentTimestamp(selector);
	}

	static size(selector) {
		return new Size(selector);
	}

	static length(selector) {
		return new Length(selector);
	}

	static trim(selector) {
		return new Trim(selector);
	}

	static upper(selector) {
		return new Upper(selector);
	}

	static lower(selector) {
		return new Lower(selector);
	}

	static concat(selector) {
		return new Concat(selector);
	}
}