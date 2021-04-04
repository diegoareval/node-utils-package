[![npm version](https://badge.fury.io/js/node-utils-package.svg)](https://badge.fury.io/js/node-utils-package)
# Node utils functions
Node js library containing utils or helper functions to solve any need to sort array remove duplicates

## Install

You can use `yarn` or `npm`. 

### yarn

```bash
yarn add node-utils-package
```

### npm

```bash
npm install --save node-utils-package
```

## Usage
- Simply import node-utils-package

```js
    import {flattenElements} from 'node-utils-package';

    const array = [[[0]], [1], [[[1]]]]
    flattenElements(array)
```

- Calculate the factorial of a number

``` js
    const {numberFactorial, flattenElements} = require("node-utils-package")

    const array = [[[0]], [1], [[[1]]]]
    console.log(flattenElements(array))

    console.log(numberFactorial(5));

```

- Create a validation so that if a string is sent, it will return null


