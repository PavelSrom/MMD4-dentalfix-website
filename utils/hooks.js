import { useState, useEffect } from 'react'

// importing translation files
import EN from '../locales/en.json'
import RO from '../locales/ro.json'

export const useLocalization = page => {
  const [pageLang, setPageLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('dentalfix-lang')
    setPageLang(lang ? lang : 'en')
  }, [])

  let t
  if (pageLang === 'en' && page) t = EN[page]
  if (pageLang === 'ro' && page) t = RO[page]
  if (pageLang === 'en' && !page) t = EN
  if (pageLang === 'ro' && !page) t = RO

  const changeLang = whichOne => {
    localStorage.setItem('dentalfix-lang', whichOne)
    setPageLang(whichOne)
  }

  return { t, changeLang, lang: pageLang }
}
