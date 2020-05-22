import React from 'react'
import { Page } from '../templates/layout'

import Banner from '../components/home/Banner'
import Offers from '../components/home/Offers'
import ShortIntro from '../components/home/ShortIntro'
import Reviews from '../components/home/Reviews'
import CTA from '../components/home/CTA'

const Home = () => (
  <Page>
    <Banner />
    <Offers />
    <ShortIntro />
    <Reviews />
    <hr style={{ border: '4px solid #f2f2f2' }} />
    <CTA />
  </Page>
)

export default Home
