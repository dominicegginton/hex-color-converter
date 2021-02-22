# hex-color-converter

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/dominicegginton/hex-color-converter/CI/main?label=CI)](https://github.com/dominicegginton/hex-color-converter/actions)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/dominicegginton/hex-color-converter)](https://codeclimate.com/github/dominicegginton/hex-color-converter)
[![npm](https://img.shields.io/npm/dt/hex-color-converter?label=Downloads)](https://www.npmjs.com/package/hex-color-converter)
[![js-standard-style](https://img.shields.io/badge/Code%20Style-standard-brightgreen.svg)](http://standardjs.com)

> Lightweight module for converting RGB(A) values to hexadecimal colors

## Install

``` shell
npm i hex-color-converter
```

## Usage

``` js
const converter = require('hex-color-converter')

const hex = converter('rgba(255, 255, 255, 0.5)')
console.log(hex) // => #FFFFFF80
```

## Documentation

### Convert RGB values to hexadecimal color values

To convert RGB values to a hexadecimal color value pass the RGB string to `converter` function. RGB strings should be formatted as `rgb(255, 255, 255)`

``` js
converter('rgb(255, 255, 255)')
```

### Convert RGBA values to hexadecimal color values

To convert RGBA values to a hexadecimal color value pass the RGBA string to `converter` function. RGBA strings should be formatted as `rgba(255, 255, 255, 0.5)`

``` js
converter('rgb(255, 255, 255, 0.5)')
```

## Contributing

Contributors are welcome, feel free to submit a new [pull request](https://github.com/dominicegginton/hex-color-converter/pulls)  to help improve **hex-color-converter**.