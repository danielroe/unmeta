// https://github.com/sindresorhus/stringify-attributes/blob/main/index.js

import { htmlEscape } from './escape-goat'

export type Attribute =
  | string
  | number
  | boolean
  | readonly string[]
  | null
  | undefined
export type HTMLAttributes = Record<string, Attribute>

export const stringifyAttributes = (attributes?: HTMLAttributes) => {
  if (!attributes) return ''

  const handledAttributes = []

  // eslint-disable-next-line
  for (let [key, value] of Object.entries(attributes)) {
    if (value === false || value === null || value === undefined) continue

    if (Array.isArray(value)) value = value.join(' ')

    let attribute = htmlEscape(key)

    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`
    }

    handledAttributes.push(attribute)
  }

  return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : ''
}
