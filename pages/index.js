import React from 'react'
import { Page, Container } from '../templates/layout'
import { Typography } from '../templates/text'
import { useLocalization } from '../utils/hooks'
import Banner from '../components/home/Banner'
import Offers from '../components/home/Offers'

const Home = () => {
  const { t, lang, changeLang } = useLocalization()

  return (
    <Page>
      <Banner/>
      <Offers/>
      <Container background="deepskyblue">
        <p>{t('hello')}</p>
        <button onClick={() => changeLang(lang === 'en' ? 'ro' : 'en')}>
          change lang
        </button>
      </Container>
    </Page>
  )
}

export default Home
