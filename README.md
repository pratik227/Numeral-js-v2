# Numeral.js V2

A javascript library for formatting and manipulating numbers.

[![npm](https://img.shields.io/npm/v/numeral-v2.svg?label=numeral-v2)](https://www.npmjs.com/package/numeral-v2)
[![npm](https://img.shields.io/npm/dt/numeral-v2.svg)](https://www.npmjs.com/package/numeral-v2)

# Acknowledgement

This Repository is forked from Numeral.js.

# Contributing

#### Important: Please create your branch from and submit pull requests to the `develop` branch.  All pull requests must include the appropriate tests.

1. Fork the library

2. Run `npm install` to install dependencies

3. Create a new branch from `develop`

4. Add your tests to the files in `/tests`

5. To test your tests, run `grunt`

6. When all your tests are passing, run `grunt dist` to compile and minify all files

7. Submit a pull request to the `develop` branch.


### Formats

Formats now exist in their own files and act more or less as plugins. Check out the [bytes format](https://github.com/pratik227/Numeral-js-v2/blob/master/src/formats/bytes.js) for an example of how to create one.


### Locales

When naming locale files use the [ISO 639-1 language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) supplemented by [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes when necessary.

### Locale translations will not be merged without unit tests.

See [the english unit tests](https://github.com/pratik227/Numeral-js/blob/master/tests/locales/en-gb.js) for an example.


Added abbreviations for thousands and millions using 'a' in the format


# New parameters Added to the register functions

# 1. Now you can pass the abbreviations numbers that will be user in numeral

## Example

```js

numeral.register('locale', 'in', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        trillion: 1000000000,
        billion: 10000000,
        million: 100000
})
```

# 2. You can also Pass the regex that will be used to split the numbers.

## Example for Indian Country

```js

numeral.register('locale', 'in', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        trillion: 1000000000,
        billion: 10000000,
        million: 100000,
        regex: /(\d)(?=(\d\d)+\d$)/g,
})

```

    Input - numeral(1290704).format("0,00") 
    Output - 12,90,704

# 3. You can also pass the abbreviations_detail that will be used in stringToNumber

## Example 

```js

numeral.register('locale', 'in', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        trillion: 1000000000,
        billion: 10000000,
        million: 100000,
        regex: /(\d)(?=(\d\d)+\d$)/g,
        abbreviations: {
            thousand: 'k',
            million: 'l',
            billion: 'cr',
            trillion: 'a'
        },
        abbreviations_detail: {
            thousand: 2,
            million: 5,
            billion: 7,
            trillion: 9
        }
})

```

