import React from 'react'
import { Page } from '../../../templates/layout'
import { BodyText, Span } from '../../../templates/text'

const bridges = () => {
  return (
    <Page>
      <BodyText>
        Hello{' '}
        <Span blue bolder>
          world
        </Span>
      </BodyText>
    </Page>
  )
}

export default bridges
