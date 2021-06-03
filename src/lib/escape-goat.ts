// https://github.com/sindresorhus/escape-goat/blob/main/index.js

export const htmlEscape = (string: string) =>
  string
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
