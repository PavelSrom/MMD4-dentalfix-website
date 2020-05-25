import React from 'react'
import { Page } from '../templates/layout'

import Banner from '../components/new-patient/Banner'
import FirstVisit from '../components/new-patient/FirstVisit'
import Documents from '../components/new-patient/Documents'
import BecomePatient from '../components/new-patient/BecomePatient'
import NotSure from '../components/new-patient/NotSure'
import CTA from '../components/new-patient/CTA'

const NewPatient = () => (
  <Page>
    <Banner />
    <hr style={{ border: '4px solid #f2f2f2' }} />
    <FirstVisit />
    <Documents />
    <BecomePatient imgPosition="left" />
    <NotSure />
    <CTA />
  </Page>
)

export default NewPatient
