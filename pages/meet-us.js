import React from 'react'
import { Page } from '../templates/layout'

import Banner from '../components/meet-us/Banner'
import Team from '../components/meet-us/Team'
import Mission from '../components/meet-us/Mission'
import Collaborations from '../components/meet-us/Collaborations'

const MeetUs = () => (
  <Page>
    <Banner />
    <hr style={{ border: '4px solid #f2f2f2' }} />
    <Team />
    <Mission />
    <Collaborations />
  </Page>
)

export default MeetUs
