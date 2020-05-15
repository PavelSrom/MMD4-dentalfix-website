import React from 'react'
import { Page, Container } from '../templates/layout'
import { Typography } from '../templates/text'

const Home = () => {
  return (
    <Page>
      <p>Homepage</p>
      <Typography variant="h1">h1 text</Typography>
      <Container background="deepskyblue">
        <p>Content of container</p>
      </Container>
    </Page>
  )
}

export default Home
