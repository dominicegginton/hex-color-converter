'use strict'

const opacity = require('hex-color-opacity')

const convert = (color) => {
  if (typeof color !== 'string') throw new Error('Invalid rgb(a) color value')
  const rgb = /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(color)
  const rgba = /rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(1|(0(?:\.\d{1,2})?))\)/.exec(color)
  if (rgb !== null) {
    let hexadecimal = '#'
    if (rgb[1].length > 1) hexadecimal += Number(rgb[1]).toString(16)
    else hexadecimal += '0' + Number(rgb[1]).toString(16)
    if (rgb[2].length > 1) hexadecimal += Number(rgb[2]).toString(16)
    else hexadecimal += '0' + Number(rgb[2]).toString(16)
    if (rgb[3].length > 1) hexadecimal += Number(rgb[3]).toString(16)
    else hexadecimal += '0' + Number(rgb[3]).toString(16)
    return hexadecimal.toUpperCase()
  } else if (rgba !== null) {
    let hexadecimal = '#'
    if (rgba[1].length > 1) hexadecimal += Number(rgba[1]).toString(16)
    else hexadecimal += '0' + Number(rgba[1]).toString(16)
    if (rgba[2].length > 1) hexadecimal += Number(rgba[2]).toString(16)
    else hexadecimal += '0' + Number(rgba[2]).toString(16)
    if (rgba[3].length > 1) hexadecimal += Number(rgba[3]).toString(16)
    else hexadecimal += '0' + Number(rgba[3]).toString(16)
    hexadecimal = opacity(hexadecimal, Number(rgba[4]))
    return hexadecimal.toUpperCase()
  } else throw new Error('Invalid rgb(a) color value')
}

module.exports = convert
