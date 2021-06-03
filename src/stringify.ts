import { stringifyAttributes } from './lib/stringify-attributes'
import { MetadataTag, isSelfClosingTag } from './tags'

export const stringifyTag = (tag: MetadataTag) => {
  const attrs = stringifyAttributes(tag.attrs)

  if (isSelfClosingTag(tag)) {
    return `<${tag.tag}${attrs}>`
  }

  return `<${tag.tag}${attrs}>${tag.content || ''}</${tag.tag}>`
}
