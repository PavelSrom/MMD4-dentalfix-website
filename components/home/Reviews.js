import React, { useState } from 'react'
import useStyles from '../../styles/components/Reviews.js'
import { BodyText, Subheadline } from '../../templates/text'
import { Container } from '../../templates/layout'

const Reviews = () => {
  const classes = useStyles()
  const [emphasizedReview] = useState(1) // the middle one

  const reviews = [
    {
      text: `I am personally very happy with the services that I get here and I totally
			recommend the clinic.`,
      author: '-Dragos Andrei'
    },
    {
      text: `I am extremely satisfied with the quality of the services that I can get at
			DentalFix. Thanks to them I became more confident and I’m smiling more!`,
      author: '-Nicoleta Astancai'
    },
    {
      text: `Very well prepared dentists which managed to solve my dental problems in the
			most professional way.`,
      author: '-Maria Blaga'
    }
  ]

  return (
    <Container background="#fff">
      <Subheadline light centered>
        What our patients say{' '}
      </Subheadline>
      <div className={classes.all}>
        {reviews.map(({ text, author }, index) => (
          <div
            key={author}
            className={classes.review}
            style={{ opacity: index === emphasizedReview ? 1 : 0.3 }}
          >
            <BodyText>{text}</BodyText>
            <br />
            <br />
            <BodyText>{author}</BodyText>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Reviews
