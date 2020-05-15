import { useState, useEffect } from 'react'

// importing translation files
import en from '../locales/en'
import ro from '../locales/ro'
// import en from '../public/static/localization/en.json'
// import ro from '../public/static/localization/ro.json'

export const useLocalization = () => {
  const [pageLang, setPageLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('dentalfix-lang')
    setPageLang(lang ? lang : 'en')
  }, [])
  const t = path => {
    const [one, two, three, four, five, six, seven] = path.split('.')
    console.log(two)
    console.log(path)
    if (one) return pageLang === 'en' ? en[one] : ro[one]
    if (two) return pageLang === 'en' ? en[one][two] : ro[one][two]
    // if (one) return pageLang === 'en' ? en[one] : ro[one]
    // if (one) return pageLang === 'en' ? en[one] : ro[one]

    // return pageLang === 'en' ? en[path] : ro[path]
  }

  const changeLang = whichOne => {
    localStorage.setItem('dentalfix-lang', whichOne)
    setPageLang(whichOne)
  }

  return { t, changeLang, lang: pageLang }
}
