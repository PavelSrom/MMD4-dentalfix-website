import React from 'react'
import useStyles from '../../styles/components/Reviews.js'
import { BodyText, Subheadline } from '../../templates/text'
import { Container } from '../../templates/layout'
import Slider from 'react-slick'

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

const Reviews = () => {
  const classes = useStyles()

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500
  }

  return (
    <Container background="#fff">
      <Subheadline light centered className={classes.subheadline}>
        What our patients say
      </Subheadline>

      {/* arrows */}
      <div className={classes.reviewBox}>
        <Slider {...sliderSettings}>
          {reviews.map(({ text, author }) => (
            <div key={author} className={classes.review}>
              <BodyText>{text}</BodyText>
              <br />
              <br />
              <BodyText>{author}</BodyText>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  )
}

export default Reviews
