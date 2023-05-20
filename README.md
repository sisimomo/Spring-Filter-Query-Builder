# Spring Filter Query Builder

A simple Query Builder for [Spring Filter](https://github.com/turkraft/spring-filter). This Query Builder doesn't have any dependencies and can be used with typescript of javascript project.

### Usage:

1. Install using [NPM](https://www.npmjs.com/package/spring-filter-query-builder)

```bash
npm i spring-filter-query-builder
```

2. Import `spring-filter-query-builder` file in your javascript/typescript file:

```js
import { sfAnd, sfEqual, sfGt, sfIsNull, sfLike, sfNot, sfOr } from 'spring-filter-query-builder';
```

3. Enjoy! Example:

```js
console.log(sfAnd([sfEqual('status', 'active'), sfGt('createdAt', '1-1-2000')]).toString());
```

### Classes:

All classes have a toString method. So you can convert any Object of these classes to string easily.

The library exposes all methods that you will need to create a query:

#### Operators

- **sfAnd([ item, item, ... ])** - and's one or more expressions
- **sfOr([ item, item ... ])** - or's one or more expressions
- **sfNot(item)** - not's an expression
- **sfExists(item)** - exists expression

#### Comparators

- **sfLike(selector, value)** - Like comparator
- **sfEqual(selector, value)** - Equal comparator
- **sfNotEqual(selector, value)** - Not equal comparator
- **sfGt(selector, value)** - Greater than comparator
- **sfGe(selector, value)** - Greater than or equal comparator
- **sfLt(selector, value)** - Less than comparator
- **sfLe(selector, value)** - Less than or equal comparator
- **sfIsNull(selector)** - Is null comparator
- **sfIsNotNull(selector)** - Is not null comparator
- **sfIsEmpty(selector)** - Is empty comparator
- **sfIsNotEmpty(selector)** - Is not empty comparator
- **sfIn(selector, [ value, value, ...])** - In comparator
- **sfNotIn(selector, [ value, value, ...])** - Not in comparator

#### Functions

- **sfAbsolute(selector)** - Absolute function
- **sfAverage(selector)** - Average function
- **sfCeiling(selector)** - Ceiling function
- **sfConcat(value, value, ...)** - Concat function
- **sfCount(selector)** - Count function
- **sfCountDistinct(selector)** - CountDistinct function
- **sfCurrentDate()** - CurrentDate function
- **sfCurrentTime()** - CurrentTime function
- **sfCurrentTimestamp()** - CurrentTimestamp function
- **sfMin(selector)** - Min function
- **sfMax(selector)** - Max function
- **sfSum(selector, selector, ...)** - Sum function
- **sfSize(selector)** - Size function
- **sfLength(selector)** - Length function
- **sfTrim(selector)** - Trim function
- **sfUpper(selector)** - Upper function
- **sfLower(selector)** - Lower function
- **sfCustomFunction(functionName, value, value, ...)** - Any other custom function
