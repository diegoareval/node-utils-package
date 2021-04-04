# Node utils functions
Node js library containing utils or helper functions to solve any need to sort array remove duplicates

## Install

`npm i node-utils-package`

## Usage

- Calculate the factorial of a number

``` javascript
    const {numberFactorial, flattenElements} = require("node-utils-package")

    const array = [[[0]], [1], [[[1]]]]
    console.log(flattenElements(array))

    console.log(numberFactorial(5));

```


- Create a validation so that if a string is sent, it will return null