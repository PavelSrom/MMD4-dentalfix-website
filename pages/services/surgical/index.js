import React from 'react'
import Head from 'next/head'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { ButtonLink } from '../../../templates/button'
import useStyles from '../../../styles/pages/services'
import dentures from '../../../assets/dentures.svg'
import extraction from '../../../assets/extraction.svg'
import implant from '../../../assets/implant.svg'
import sedation from '../../../assets/sedation.svg'

const surgical = () => {
  const classes = useStyles()

  const subcategories = [
    {
      headline: 'Implants',
      description: `DentalFix offers dental implants that can amaze you with their natural 
			appearance and strong foundation. You deserve to feel comfortable 
			and confident in your smile!`,
      url: '/services/surgical/implants',
      img: implant
    },
    {
      headline: 'Extractions',
      description: `Tooth extraction performed by DentalFix dentists is a relatively quick 
			outpatient procedure with either local, general, intravenous anesthesia, 
			or a combination.`,
      url: '/services/surgical/extractions',
      img: extraction
    },
    {
      headline: 'Dentures',
      description: `Take back control of your smile! Eat the foods you love and restore your
			quality of life. At DentalFix it is all possible with custom implant-supported 
			dentures.`,
      url: '/services/surgical/dentures',
      img: dentures
    },
    {
      headline: 'Sedation',
      description: `You should never experience unnecessary anxiety or worry when it
			comes to getting the dental care you need. That’s why dental sedation 
			and dental anesthesia may be the right choice for you.`,
      url: '/services/surgical/sedation',
      img: sedation
    }
  ]

  return (
    <>
      <Head>
        <title>Surgical Dentistry | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="Surgical dentistry provides dental services like dental implants, dental extractions, dentures and sedation with modern equipment."
        />
      </Head>
      <Page>
        <Container background="#fff">
          <LineLength>
            <Headline size="small" centered className={classes.headline}>
              Surgical dentistry
            </Headline>
            <Subheadline light centered>
              Great dental health is the result of early detection and preventive
              treatments. But it’s never too late to develop a relationship with your
              dental team and get the care you need!
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

export default surgical
