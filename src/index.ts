import { Equal, Ge, Gt, In, IsEmpty, IsNotEmpty, IsNotNull, IsNull, Le, Like, Lt, NotEqual, NotIn } from './comparators';
import {
  Absolute,
  Average,
  Ceiling,
  Concat,
  Count,
  CountDistinct,
  CurrentDate,
  CurrentTime,
  CurrentTimestamp,
  CustomFunction,
  Length,
  Lower,
  Max,
  Min,
  Size,
  Sum,
  Trim,
  Upper,
} from './functions';
import { Item } from './item';
import { And, Exists, Not, Or } from './operators';

/********* Operators *********/

export function sfAnd(items: Item[]): And {
  return new And(items);
}

export function sfOr(items: Item[]): Or {
  return new Or(items);
}

export function sfNot(item: Item): Not {
  return new Not(item);
}

/********* Comparators *********/

export function sfExists(item: Item): Exists {
  return new Exists(item);
}

export function sfLike(selector: string, value: string, caseInsensitive?: boolean): Like {
  return new Like(selector, value, caseInsensitive);
}

export function sfEqual(selector: string, value: string | number): Equal {
  return new Equal(selector, value);
}

export function sfNotEqual(selector: string, value: string | number): NotEqual {
  return new NotEqual(selector, value);
}

export function sfGt(selector: string, value: string | number): Gt {
  return new Gt(selector, value);
}

export function sfGe(selector: string, value: string | number): Ge {
  return new Ge(selector, value);
}

export function sfLt(selector: string, value: string | number): Lt {
  return new Lt(selector, value);
}

export function sfLe(selector: string, value: string | number): Le {
  return new Le(selector, value);
}

export function sfIsNull(selector: string): IsNull {
  return new IsNull(selector);
}

export function sfIsNotNull(selector: string): IsNotNull {
  return new IsNotNull(selector);
}

export function sfIsEmpty(selector: string): IsEmpty {
  return new IsEmpty(selector);
}

export function sfIsNotEmpty(selector: string): IsNotEmpty {
  return new IsNotEmpty(selector);
}

export function sfIn(selector: string, value: (string | number)[]): In {
  return new In(selector, value);
}

export function sfNotIn(selector: string, value: (string | number)[]): In {
  return new NotIn(selector, value);
}

/********* Functions *********/

export function sfCustomFunction(functionName: string, ...values: (string | number)[]): CustomFunction {
  return new CustomFunction(functionName, ...values);
}

export function sfAbs(selector: string): Absolute {
  return new Absolute(selector);
}

export function sfAvg(selector: string): Average {
  return new Average(selector);
}

export function sfCeiling(selector: string): Ceiling {
  return new Ceiling(selector);
}

export function sfConcat(...selectors: string[]): Concat {
  return new Concat(...selectors);
}

export function sfCount(selector: string): Count {
  return new Count(selector);
}

export function sfCountDistinct(selector: string): CountDistinct {
  return new CountDistinct(selector);
}

export function sfCurrentDate(): CurrentDate {
  return new CurrentDate();
}

export function sfCurrentTime(): CurrentTime {
  return new CurrentTime();
}

export function sfCurrentTimestamp(): CurrentTimestamp {
  return new CurrentTimestamp();
}

export function sfMin(selector: string): Min {
  return new Min(selector);
}

export function sfMax(selector: string): Max {
  return new Max(selector);
}

export function sfSum(...selector: string[]): Sum {
  return new Sum(...selector);
}

export function sfSize(selector: string): Size {
  return new Size(selector);
}

export function sfLength(selector: string): Length {
  return new Length(selector);
}

export function sfTrim(selector: string): Trim {
  return new Trim(selector);
}

export function sfUpper(selector: string): Upper {
  return new Upper(selector);
}

export function sfLower(selector: string): Lower {
  return new Lower(selector);
}
