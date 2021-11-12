# Spring Filter Query Builder 
  
A simple Query Builder for [Spring Filter](https://github.com/turkraft/spring-filter). This Query Builder doesn't have any dependencies and can be used with any webpage.

### Usage:

Import index.js file in your javascript file:

```import { SpringFilterQueryBuilder as SFQB } from  './src/index.js';```

Example:

```SFQB.or(SFQB.and(SFQB.equal("test.test1", "testvalue1"), SFQB.isNotNull("test.test2")), SFQB.notEqual("test.test2", "testvalue2")).toString()```

Enjoy!
  
### Classes:
All classes have a toString methode. So you can convert any Object of these classes to string easily.

The library exposes all classes that you will need to create a query:

#### Operators
* **SFQB.and(item, item ...)** - and's two or more expressions
* **SFQB.or(item, item ...)** - or's two or more expressions
* **SFQB.not(item)** - not's an expression
* **SFQB.exists(item)** - exists expression

#### Comparators
* **SFQB.like(selector, value)** - Like comparator
* **SFQB.equal(selector, value)** - Equal comparator
* **SFQB.notEqual(selector, value)** - Not equal comparator
* **SFQB.gt(selector, value)** - Greater than comparator
* **SFQB.ge(selector, value)** - Greater than or equal comparator
* **SFQB.lt(selector, value)** - Less than comparator
* **SFQB.le(selector, value)** - Less than or equal comparator
* **SFQB.isNull(selector)** - Is null comparator
* **SFQB.isNotNull(selector)** - Is not null comparator
* **SFQB.isEmpty(selector)** - Is empty comparator
* **SFQB.isNotEmpty(selector)** - Is not empty comparator
* **SFQB.in(selector, value, value ...)** - In comparator

PS: selector parameter must be either String or Function type

#### Functions
* **SFQB.absolute(selector)** - Absolute function
* **SFQB.average(selector)** - Average function
* **SFQB.min(selector)** - Min function
* **SFQB.max(selector)** - Max function
* **SFQB.sum(selector)** - Sum function
* **SFQB.currentDate()** - CurrentDate function
* **SFQB.currentTime()** - CurrentTime function
* **SFQB.currentTimestamp()** - CurrentTimestamp function
* **SFQB.length(selector)** - Length function
* **SFQB.upper(selector)** - Upper function
* **SFQB.lower(selector)** - Lower function
* **SFQB.concat(selector)** - Concat function
