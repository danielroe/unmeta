// https://github.com/nuxt/vue-meta/blob/next/src/config/tags.ts

type TitleTag = {
  tag: 'title'
  content?: string
  attrs?: Record<string, any>
}

type BaseTag = {
  tag: 'base'
  content?: string
  attrs?: Partial<Pick<HTMLBaseElement, 'href' | 'target'>>
}

type MetaTag = {
  tag: 'meta'
  attrs?: Partial<
    Pick<HTMLMetaElement, 'content' | 'name'> & {
      charset: any
      'http-equiv': HTMLMetaElement['httpEquiv']
    }
  >
}

type LinkTag = {
  tag: 'link'
  attrs?: Partial<
    Pick<
      HTMLLinkElement,
      | 'href'
      | 'crossOrigin'
      | 'rel'
      | 'media'
      | 'integrity'
      | 'hreflang'
      | 'type'
      | 'referrerPolicy'
      | 'imageSrcset'
      | 'imageSizes'
      | 'as'
    > & { color: any; sizes: string }
  >
}

type StyleTag = {
  tag: 'style'
  content?: string
  attrs?: Partial<Pick<HTMLStyleElement, 'media'>>
}

type ScriptTag = {
  tag: 'script'
  content?: string
  attrs?: Partial<
    Pick<
      HTMLScriptElement,
      | 'src'
      | 'type'
      | 'noModule'
      | 'async'
      | 'defer'
      | 'crossOrigin'
      | 'integrity'
      | 'referrerPolicy'
    >
  >
}

type NoscriptTag = {
  tag: 'noscript'
  content?: string
  attrs?: undefined
}

const SELF_CLOSING_TAGS = ['meta', 'link', 'base'] as const
type SelfClosingTagName = typeof SELF_CLOSING_TAGS[number]

export function isSelfClosingTag(
  tag: MetadataTag
): tag is MetaTag | LinkTag | BaseTag {
  return SELF_CLOSING_TAGS.includes(tag.tag as SelfClosingTagName)
}

export type MetadataTag =
  | TitleTag
  | BaseTag
  | MetaTag
  | LinkTag
  | StyleTag
  | ScriptTag
  | NoscriptTag
