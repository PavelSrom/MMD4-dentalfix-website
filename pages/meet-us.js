import React from 'react'
import { Page } from '../templates/layout'

import Banner from '../components/meet-us/Banner'
import Team from '../components/meet-us/Team'
import Mission from '../components/meet-us/Mission'
import Collaborations from '../components/meet-us/Collaborations'

const MeetUs = () => (
  <Page>
    <Banner />
    <Team />
    <Mission />
    <Collaborations />
  </Page>
)

export default MeetUs
