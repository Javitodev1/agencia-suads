import type { I18N } from './i18n'
import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en',
}

export const getI18N = ({currentLocale = 'es'}: {
  currentLocale: string | undefined
}): I18N => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  return spanish;
}
