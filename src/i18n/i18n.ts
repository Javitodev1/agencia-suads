export interface I18N {
  TITLE_SEO: string
  DESCRIPTION_SEO: string
  HEADER: Header
  HOME: Home
}

export interface Header {
  HOME: string
  SERVICES: string
  CONTACT: string
  ABOUT: string
}

export interface Home {
  HERO: Hero
  WHY_US_SECTION: WhyUsSection
}

export interface Hero {
  TITLE: string
  TITLE_HL: string
  SUBTITLE_L1: string
  SUBTITLE_L2: string
  SUBTITLE_L2_HL: string
  CALL_TO_ACTION: string
}

export interface WhyUsSection {
  TITLE: string
  TITLE_HL: string
  SUBTITLE: string
  SUBTITLE_HL: string
  A1_TITLE: string
  A1_TITLE_HL: string
  A1_BODY: string
  A2_TITLE: string
  A2_TITLE_HL: string
  A2_BODY: string
  A3_TITLE: string
  A3_TITLE_HL: string
  A3_BODY: string
}
