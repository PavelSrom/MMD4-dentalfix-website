import React from 'react'
import Head from 'next/head'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { ButtonLink } from '../../../templates/button'
import useStyles from '../../../styles/pages/services'
import invisalign from '../../../assets/braces.svg'
import teethWhitening from '../../../assets/teethwhitening.svg'
import endodontics from '../../../assets/endodontics.svg'
import filling from '../../../assets/filling.svg'

const cosmetic = () => {
  const classes = useStyles()

  const subcategories = [
    {
      headline: 'Teeth whitening',
      description: `Treat yourself with a brighter and younger-looking smile. When you work 
			with DentalFix’s dentists, you get a teeth whitening result that works for
			your type of discoloration.`,
      url: '/services/cosmetic/teeth-whitening',
      img: teethWhitening
    },
    {
      headline: 'Porcelain veeners',
      description: `A gorgeous smile can have a huge impact on your overall look and
			self-confidence. Created to establish the perfect form and function for
			the characteristics of your face, our porcelain veneers are outstanding.`,
      url: '/services/cosmetic/porcelain-veeners',
      img: endodontics
    },
    {
      headline: 'Dental bonding',
      description: `Dental bonding is an affordable and minimally invasive approach to 
			cosmetic dentistry. Bonding is most effective for closing small gaps 
			between teeth or covering chips or cracks in teeth.`,
      url: '/services/cosmetic/dental-bonding',
      img: filling
    },
    {
      headline: 'Invisalign',
      description: `Unlike bulky and painful metal braces, Invisalign uses a series of nearly 
			invisible aligners to gently reposition misaligned teeth. We use 3D imaging 
			technology to produce a high-def image of your mouth in just seconds.
			`,
      url: '/services/cosmetic/invisalign',
      img: invisalign
    }
  ]

  return (
    <>
      <Head>
        <title>Cosmetic Dentistry | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="Cosmetic dentistry provides dental services like teeth whitening, porcelain veneers, dental bonding and Invisalign with modern equipment."
        />
      </Head>
      <Page>
        <Container background="#fff">
          <LineLength>
            <Headline size="small" centered className={classes.headline}>
              Cosmetic dentistry
            </Headline>
            <Subheadline light centered>
              Feeling good when you smile is a true asset. At DentalFix we love helping
              our patients achieve the smiles they’ve always dreamed about. Sometimes just
              a few minor changes make all the difference. In other cases, you may want to
              address many teeth. Bring us your concerns, and our doctors can plot the
              course for your ideal smile.
            </Subheadline>

            <hr className={classes.divider} />

            {subcategories.map(({ headline, description, url, img }) => (
              <div key={url} className={classes.serviceBox}>
                <div className={classes.imgBox}>
                  {' '}
                  <img className={classes.icon} src={img} alt="" />{' '}
                </div>
                <div className={classes.descriptionBox}>
                  <Subheadline bold>{headline}</Subheadline>
                  <BodyText>{description}</BodyText>
                  <ButtonLink
                    to={url}
                    background="primary"
                    size="large"
                    className={classes.learnMore}
                  >
                    Learn more
                  </ButtonLink>
                </div>
              </div>
            ))}
          </LineLength>
        </Container>
      </Page>
    </>
  )
}

export default cosmetic
