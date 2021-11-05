# Spring Filter Query Builder 
  
A simple Query Builder for [Spring Filter](https://github.com/turkraft/spring-filter). This Query Builder doesn't have any dependencies and can be used with any webpage.

### Usage:

Import index.js file in your javascript file:

```import * as SFQB from './src/index.js';```

Example:

```new SFQB.Or(new SFQB.And(new SFQB.Equal("test.test1", "testvalue1"), new SFQB.IsNotNull("test.test2"), ), new SFQB.NotEqual("test.test2", "testvalue2")).toString()```

Enjoy!
  
### Classes:
All classes have a toString methode. So you can convert any Object of these classes to string easily.

The library exposes all classes that you will need to create a query:

#### Operators
* **new SFQB.And(item, item ...)** - and's two or more expressions
* **new SFQB.Or(item, item ...)** - or's two or more expressions
* **new SFQB.Not(item)** - not's an expression
* **new SFQB.Exists(item)** - exists expression

#### Comparators
* **new SFQB.Like(selector, value)** - Like comparator
* **new SFQB.Equal(selector, value)** - Equal comparator
* **new SFQB.NotEqual(selector, value)** - Not equal comparator
* **new SFQB.Gt(selector, value)** - Greater than comparator
* **new SFQB.Ge(selector, value)** - Greater than or equal comparator
* **new SFQB.Lt(selector, value)** - Less than comparator
* **new SFQB.Le(selector, value)** - Less than or equal comparator
* **new SFQB.IsNull(selector)** - Is null comparator
* **new SFQB.IsNotNull(selector)** - Is not null comparator
* **new SFQB.IsEmpty(selector)** - Is empty comparator
* **new SFQB.IsNotEmpty(selector)** - Is not empty comparator
* **new SFQB.In(selector, value, value ...)** - In comparator

PS: selector parameter must be either String or Function type

#### Functions
* **new SFQB.Absolute(selector)** - Absolute function
* **new SFQB.Average(selector)** - Average function
* **new SFQB.Min(selector)** - Min function
* **new SFQB.Max(selector)** - Max function
* **new SFQB.Sum(selector)** - Sum function
* **new SFQB.CurrentDate()** - CurrentDate function
* **new SFQB.CurrentTime()** - CurrentTime function
* **new SFQB.CurrentTimestamp()** - CurrentTimestamp function
* **new SFQB.Length(selector)** - Length function
* **new SFQB.Upper(selector)** - Upper function
* **new SFQB.Lower(selector)** - Lower function
* **new SFQB.Concat(selector)** - Concat function
