import React from 'react'
import Head from 'next/head'
import { Page } from '../templates/layout'

import Banner from '../components/home/Banner'
import Offers from '../components/home/Offers'
import ShortIntro from '../components/home/ShortIntro'
import Reviews from '../components/home/Reviews'
import CTA from '../components/home/CTA'

const Home = () => (
  <>
    <Head>
      <title>Dental clinic | DentalFix | Savinesti</title>
      <meta
        name="description"
        content="DentalFix is a dental clinic in Savinesti, providing quality dental services to improve patients’ health by a team of professional dentists."
      />
    </Head>
    <Page>
      <Banner />
      <Offers />
      <ShortIntro />
      <Reviews />
      <CTA />
    </Page>
  </>
)

export default Home
