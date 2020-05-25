import { useState, useEffect } from 'react'

// importing translation files
import EN from '../locales/en.json'
import RO from '../locales/ro.json'

export const useLocalization = page => {
  const [pageLang, setPageLang] = useState('en')

  useEffect(() => {
    // get language settings from local storage
    const lang = localStorage.getItem('dentalfix-lang')
    // set the website language accordingly
    // if there's nothing in local storage, set it to English
    setPageLang(lang ? lang : 'en')
  }, [])

  let t
  // if 'page' argument is provided, retrieve translation
  // just for that page, otherwise retreive the whole file
  if (pageLang === 'en' && page) t = EN[page]
  if (pageLang === 'ro' && page) t = RO[page]
  if (pageLang === 'en' && !page) t = EN
  if (pageLang === 'ro' && !page) t = RO

  const changeLang = whichOne => {
    // save chosen language to local storage
    localStorage.setItem('dentalfix-lang', whichOne)
    // set the website language accordingly
    setPageLang(whichOne)
  }

  return { t, changeLang, lang: pageLang }
}
