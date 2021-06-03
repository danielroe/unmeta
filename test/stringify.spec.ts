import { stringifyAttributes } from '../src/lib/stringify-attributes'

// https://github.com/sindresorhus/stringify-attributes/blob/main/test.js
describe('stringifyAttributes', () => {
  it('stringifies attributes', () => {
    expect(
      stringifyAttributes({
        unicorn: '🦄',
        rainbow: true,
        number: 1,
        multiple: ['a', 'b'],
        alt: '',
      })
    ).toBe(' unicorn="🦄" rainbow number="1" multiple="a b" alt=""')
  })

  it('nothing', () => {
    expect(stringifyAttributes({})).toBe('')
  })

  it('handles falsy attributes', () => {
    expect(
      stringifyAttributes({
        test: undefined,
        test1: null,
        test2: false,
      })
    ).toBe('')
  })

  it('escapes attributes', () => {
    expect(
      stringifyAttributes({
        class: '<script></script>',
      })
    ).toBe(' class="&lt;script&gt;&lt;/script&gt;"')
  })
})
// if (value === false || value === null || value === undefined) continue

// if (Array.isArray(value)) value = value.join(' ')

// let attribute = htmlEscape(key)

// if (value !== true) {
//     attribute += `="${htmlEscape(String(value))}"`
// }
