export default interface I18N {
  LAYOUT: Layout
  HEADER: Header
  HERO: Hero
  WHY_US: WhyUs
}

export interface Layout {
  TITLE_SEO: string
  DESCRIPTION_SEO: string
}

export interface Header {
  HOME: string
  SERVICES: string
  CONTACT: string
  ABOUT: string
}

export interface Hero {
  TITLE: string
  TITLE_HL: string
  SUBTITLE_L1: string
  SUBTITLE_L2: string
  SUBTITLE_L2_HL: string
  CALL_TO_ACTION: string
}

export interface WhyUs {
  TITLE: string
  TITLE_HL: string
  SUBTITLE: string
  SUBTITLE_HL: string
  HIGHLIGHT_ARTICLES: HighlightArticles[]
}

export interface HighlightArticles {
  start: string
  title: string
  titleHl: string
  body: string
}
