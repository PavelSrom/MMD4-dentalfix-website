import React from 'react'
import Head from 'next/head'
import { Page } from '../templates/layout'

import Banner from '../components/new-patient/Banner'
import FirstVisit from '../components/new-patient/FirstVisit'
import Documents from '../components/new-patient/Documents'
import BecomePatient from '../components/new-patient/BecomePatient'
import NotSure from '../components/new-patient/NotSure'
import CTA from '../components/new-patient/CTA'

const NewPatient = () => (
  <>
    <Head>
      <title>New Patient | DentalFix | Savinesti</title>
      <meta
        name="description"
        content="New patients are welcome at DentalFix. Experience great dental care of your teeth with a professional team of dentists and modern equipment."
      />
    </Head>
    <Page>
      <Banner />
      <FirstVisit />
      <Documents />
      <BecomePatient imgPosition="left" />
      <NotSure />
      <CTA />
    </Page>
  </>
)

export default NewPatient
