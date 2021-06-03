import { stringifyTag } from '../src/stringify'
import type { MetadataTag } from '../src/tags'

const tags: Record<string, [input: MetadataTag, output: string]> = {
  'script tag': [
    {
      tag: 'script',
      content: "console.log('test')",
    },
    `<script>console.log('test')</script>`,
  ],
  'meta tag': [
    {
      tag: 'meta',
      attrs: {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=utf-8',
      },
    },
    `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`,
  ],
  'link tag': [
    {
      tag: 'link',
      attrs: {
        'data-n-head': '<test>',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    },
    `<link data-n-head="&lt;test&gt;" rel="icon" type="image/x-icon" href="/favicon.ico">`,
  ],
  'title tag': [
    {
      tag: 'title',
      content: 'The title',
    },
    `<title>The title</title>`,
  ],
  'empty tag': [
    {
      tag: 'title',
    },
    `<title></title>`,
  ],
}

describe('stringifyTag', () => {
  Object.entries(tags).forEach(([testName, [input, output]]) =>
    it(testName, () => expect(stringifyTag(input)).toBe(output))
  )
})
