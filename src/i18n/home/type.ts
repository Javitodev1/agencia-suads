export interface Home {
  TITLE_SEO: string
  DESCRIPTION_SEO: string
  NAVBAR: Navbar
  HEADER: Header
  WHY_US_SECTION: WhyUsSection
}

export interface Navbar {
  HOME: string
  SERVICES: string
  CONTACT: string
  ABOUT: string
}

export interface Header {
  TITLE: string
  TITLE_HL: string
  SUBTITLE_L1: string
  SUBTITLE_L2: string
  SUBTITLE_HL: string
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
