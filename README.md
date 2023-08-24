<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">
  <h1 align="center">Spring Filter Query Builder</h1>

  <p align="center">
    A User-Friendly JavaScript/TypeScript Query Builder for <a href="https://github.com/turkraft/spring-filter">Spring Filter</a>.
    <br />
    <a href="#documentation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codesandbox.io/s/demo-yp3mgd">View Demo</a>
    ·
    <a href="https://github.com/sisimomo/Spring-Filter-Query-Builder/issues">Report Bug</a>
    ·
    <a href="https://github.com/sisimomo/Spring-Filter-Query-Builder/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#documentation">Documentation</a>
      <ul>
        <li><a href="#classes">Classes</a></li>
      </ul>
      <ul>
        <li><a href="#operators">Operators</a></li>
      </ul>
      <ul>
        <li><a href="#comparators">Comparators</a></li>
      </ul>
      <ul>
        <li><a href="#functions">Functions</a></li>
      </ul>
      <ul>
        <li><a href="#customization">Customization</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Elevate your development experience with our straightforward Query Builder designed for use alongside [Spring Filter](https://github.com/turkraft/spring-filter). This lightweight tool boasts simplicity by being dependency-free and compatible with TypeScript and JavaScript projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Visual Studio Code][vscode-shield]](https://code.visualstudio.com/)
- [![CodeSandbox][codesandbox-shield]](https://codesandbox.io/)
- [![TypeScript][typescript-shield]](https://www.typescriptlang.org/)
- [![NPM][npm-shield]](https://www.npmjs.com/)
- [![Jest][jest-shield]](https://jestjs.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Install the package using [NPM](https://www.npmjs.com/package/spring-filter-query-builder):

   ```bash
   npm install spring-filter-query-builder
   ```

2. Import the required functions from `spring-filter-query-builder` into your JavaScript/TypeScript file:

   ```js
   import { sfAnd, sfEqual, sfGt, sfIsNull, sfLike, sfNot, sfOr } from 'spring-filter-query-builder';
   ```

3. Here's an example of how to use the library:

   ```js
   const filter = sfAnd([sfEqual('status', 'active'), sfGt('createdAt', '1-1-2000')]);

   console.log(filter.toString());
   ```

   This will output the generated filter query.

   Explore Further with Examples

   For additional examples, feel free to visit our [CodeSandbox demo page](https://codesandbox.io/s/demo-yp3mgd).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Documentation -->

## Documentation

All classes have a toString method. So you can convert any Object of these classes to string easily.

The library exposes all methods that you will need to create a query:

### Operators

- **`sfAnd([ item, item, ... ])`** - and's one or more expressions
- **`sfOr([ item, item ... ])`** - or's one or more expressions
- **`sfNot(item)`** - not's an expression
- **`sfExists(item)`** - exists expression

### Comparators

- **`sfLike(selector, value)`** - Like comparator
- **`sfEqual(selector, value)`** - Equal comparator
- **`sfNotEqual(selector, value)`** - Not equal comparator
- **`sfGt(selector, value)`** - Greater than comparator
- **`sfGe(selector, value)`** - Greater than or equal comparator
- **`sfLt(selector, value)`** - Less than comparator
- **`sfLe(selector, value)`** - Less than or equal comparator
- **`sfIsNull(selector)`** - Is null comparator
- **`sfIsNotNull(selector)`** - Is not null comparator
- **`sfIsEmpty(selector)`** - Is empty comparator
- **`sfIsNotEmpty(selector)`** - Is not empty comparator
- **`sfIn(selector, [ value, value, ...])`** - In comparator
- **`sfNotIn(selector, [ value, value, ...])`** - Not in comparator

### Functions

- **`sfAbsolute(selector)`** - Absolute function
- **`sfAverage(selector)`** - Average function
- **`sfCeiling(selector)`** - Ceiling function
- **`sfConcat(value, value, ...)`** - Concat function
- **`sfCount(selector)`** - Count function
- **`sfCountDistinct(selector)`** - CountDistinct function
- **`sfCurrentDate()`** - CurrentDate function
- **`sfCurrentTime()`** - CurrentTime function
- **`sfCurrentTimestamp()`** - CurrentTimestamp function
- **`sfMin(selector)`** - Min function
- **`sfMax(selector)`** - Max function
- **`sfSum(selector, selector, ...)`** - Sum function
- **`sfSize(selector)`** - Size function
- **`sfLength(selector)`** - Length function
- **`sfTrim(selector)`** - Trim function
- **`sfUpper(selector)`** - Upper function
- **`sfLower(selector)`** - Lower function
- **`sfCustomFunction(functionName, value, value, ...)`** - Any other custom function

### Customization

Extend any of our predefined abstract classes – [Comparator](src/comparators.ts), [Function](src/functions.ts), and [Operator](src/operator.ts) – to effortlessly craft custom logic tailored to your needs.

For creating custom comparators, refer to [test/custom-comparator.test.ts](test/custom-comparator.test.ts).

For custom functions, explore [test/custom-function.test.ts](test/custom-function.test.ts).

For custom operators, explore [test/custom-operator.test.ts](test/custom-operator.test.ts).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/sisimomo/Spring-Filter-Query-Builder.svg?style=for-the-badge
[contributors-url]: https://github.com/sisimomo/Spring-Filter-Query-Builder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sisimomo/Spring-Filter-Query-Builder.svg?style=for-the-badge
[forks-url]: https://github.com/sisimomo/Spring-Filter-Query-Builder/network/members
[stars-shield]: https://img.shields.io/github/stars/sisimomo/Spring-Filter-Query-Builder.svg?style=for-the-badge
[stars-url]: https://github.com/sisimomo/Spring-Filter-Query-Builder/stargazers
[issues-shield]: https://img.shields.io/github/issues/sisimomo/Spring-Filter-Query-Builder.svg?style=for-the-badge
[issues-url]: https://github.com/sisimomo/Spring-Filter-Query-Builder/issues
[license-shield]: https://img.shields.io/github/license/sisimomo/Spring-Filter-Query-Builder.svg?style=for-the-badge
[license-url]: https://github.com/sisimomo/Spring-Filter-Query-Builder/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/simon-vallieres-358555187/
[typescript-shield]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[npm-shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[vscode-shield]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[codesandbox-shield]: https://img.shields.io/badge/Codesandbox-000000?style=for-the-badge&logo=CodeSandbox&logoColor=white
