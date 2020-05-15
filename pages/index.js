import React from 'react'
import { Page, Container } from '../templates/layout'
import { Typography } from '../templates/text'
import { useLocalization } from '../utils/hooks'

const Home = () => {
  const { t, lang, changeLang } = useLocalization()

  return (
    <Page>
      <p>Homepage</p>
      <Typography variant="h1">h1 text</Typography>
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
