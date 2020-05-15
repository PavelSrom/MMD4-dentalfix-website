import { useState, useEffect } from 'react'

// importing translation files
import en from '../public/static/localization/en.json'
import ro from '../public/static/localization/ro.json'

export const useLocalization = () => {
  const [pageLang, setPageLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('dentalfix-lang')
    setPageLang(lang ? lang : 'en')
  }, [])
  const t = path => (pageLang === 'en' ? en[path] : ro[path])

  const changeLang = whichOne => {
    localStorage.setItem('dentalfix-lang', whichOne)
    setPageLang(whichOne)
  }

  return { t, changeLang, lang: pageLang }
}
