import React from 'react'
import Head from 'next/head'
import { Page } from '../templates/layout'

import Banner from '../components/meet-us/Banner'
import Team from '../components/meet-us/Team'
import Mission from '../components/meet-us/Mission'
import Collaborations from '../components/meet-us/Collaborations'

const MeetUs = () => (
  <>
    <Head>
      <title>Meet us | DentalFix | Savinesti</title>
      <meta
        name="description"
        content="Our goal is to provide quality dentistry using modern equipment. DentalFix dentists are skilled to provide safe and harmless dental services."
      />
    </Head>
    <Page>
      <Banner />
      <Team />
      <Mission />
      <Collaborations />
    </Page>
  </>
)

export default MeetUs
