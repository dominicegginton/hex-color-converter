/* eslint-env jest */

'use strict'

/* IMPORT TEST */
const convert = require('../lib/index')

/* TESTS */
describe('rgb(a) color validation', () => {
  test('should throw invalid rgb(a) value error when type is not string', () => {
    const error = new Error('Invalid rgb(a) color value')
    expect(() => convert({})).toThrow(error)
  })

  test('should throw invalid rgb(a) value error when color is invalid', () => {
    const error = new Error('Invalid rgb(a) color value')
    expect(() => convert('inavlid')).toThrow(error)
    expect(() => convert('invalid()')).toThrow(error)
    expect(() => convert('rgb()')).toThrow(error)
    expect(() => convert('rgba()')).toThrow(error)
    expect(() => convert('rgb(0)')).toThrow(error)
    expect(() => convert('rgb(0,0)')).toThrow(error)
    expect(() => convert('rgb(0,0,0,0)')).toThrow(error)
    expect(() => convert('rgb(a,0,0)')).toThrow(error)
    expect(() => convert('rgb(0,a,0)')).toThrow(error)
    expect(() => convert('rgb(0,0,a)')).toThrow(error)
    expect(() => convert('rgb(0, 0, a)')).toThrow(error)
    expect(() => convert('rgba(0)')).toThrow(error)
    expect(() => convert('rgba(0,0)')).toThrow(error)
    expect(() => convert('rgba(0,0,0)')).toThrow(error)
    expect(() => convert('rgba(a,0,0,0)')).toThrow(error)
    expect(() => convert('rgba(0,a,0,0)')).toThrow(error)
    expect(() => convert('rgb(0,0,a,0)')).toThrow(error)
    expect(() => convert('rgb(0,0,0,a)')).toThrow(error)
    expect(() => convert('rgb(0, 0, 0, a)')).toThrow(error)
    expect(() => convert('#F')).toThrow(error)
    expect(() => convert('#FF')).toThrow(error)
    expect(() => convert('#FFFF')).toThrow(error)
    expect(() => convert('#FFFFF')).toThrow(error)
    expect(() => convert('#FFFFFFF')).toThrow(error)
    expect(() => convert('#FFFFFFFFF')).toThrow(error)
  })
})

describe('rgb(a) conversion should be applied correctly', () => {
  test('rgb color values should be converted to hexadecimal color values', () => {
    expect(convert('rgb(0, 0, 0)')).toEqual('#000000')
    expect(convert('rgb(0,0,0)')).toEqual('#000000')
    expect(convert('rgb(255, 255, 255)')).toEqual('#FFFFFF')
    expect(convert('rgb(255, 0, 0)')).toEqual('#FF0000')
    expect(convert('rgb(0, 255, 0)')).toEqual('#00FF00')
    expect(convert('rgb(0, 0, 255)')).toEqual('#0000FF')
  })

  test('rgba color values should be converted to hexadecimal color values', () => {
    expect(convert('rgba(0, 0, 0, 0)')).toEqual('#00000000')
    expect(convert('rgba(0,0,0,0)')).toEqual('#00000000')
    expect(convert('rgba(255, 255, 255, 0.5)')).toEqual('#FFFFFF80')
    expect(convert('rgba(255, 0, 0, 1)')).toEqual('#FF0000FF')
    expect(convert('rgba(0, 255, 0, 0)')).toEqual('#00FF0000')
    expect(convert('rgba(0, 0, 255, 0.1)')).toEqual('#0000FF1A')
    expect(convert('rgba(255, 255, 255, 0.01)')).toEqual('#FFFFFF03')
  })

  test('hexadecimal color values should be accepted and returned unmodified', () => {
    expect(convert('#FFF')).toEqual('#FFF')
    expect(convert('#FFFFFF')).toEqual('#FFFFFF')
    expect(convert('#FFFFFFFF')).toEqual('#FFFFFFFF')
  })
})
