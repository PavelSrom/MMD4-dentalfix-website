import React from 'react'
import Head from 'next/head'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { ButtonLink } from '../../../templates/button'
import useStyles from '../../../styles/pages/services'
import bridges from '../../../assets/bridges.svg'
import crown from '../../../assets/crown.svg'
import diagnosis from '../../../assets/diagnosis.svg'
import endodontics from '../../../assets/endodontics.svg'
import filling from '../../../assets/filling.svg'

const general = () => {
  const classes = useStyles()

  const subcategories = [
    {
      headline: 'Crowns',
      description: `Crowns strengthen teeth back to optimum integrity. At DentalFix, crowns 
			are created with incredible detail. Every tooth is different, so every crown 
			needs to blend in with your surrounding teeth and perform well.`,
      url: '/services/general/crowns',
      img: crown
    },
    {
      headline: 'Diagnosis',
      description: `Do you feel pain, but you are not sure where the problem lies? 
			DentalFix’s dentists ensure the professional attitude and complete 
			diagnosis in order to enhance your self-confidence when you smile!`,
      url: '/services/general/diagnosis',
      img: diagnosis
    },
    {
      headline: 'Endodontics',
      description: `Endodontics refer to treatment within a tooth—root canals. DentalFix 
			performs endodontics when a tooth becomes abscessed, infected and/or is 
			severely painful.`,
      url: '/services/general/endodontics',
      img: endodontics
    },
    {
      headline: 'Bridges',
      description: `A dental bridge is one of many options to replace teeth. We put exacting
			details into every restoration so you feel confident in your smile. Your bridge
			will also bring back the integrity of your bite, so you can eat with comfort.`,
      url: '/services/general/bridges',
      img: bridges
    },
    {
      headline: 'Fillings',
      description: `When a tooth is cracked, or an old amalgam filling is leaking or failing, 
			an inlay or onlay is an ideal way to restore the tooth. At DentalFix clinic,
			we prefer to keep your teeth intact and restore only the unhealthy parts.`,
      url: '/services/general/fillings',
      img: filling
    }
  ]

  return (
    <>
      <Head>
        <title>General Dentistry | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="General dentistry provides dental services like dental crowns, diagnosis, endodontics and bridges with modern equipment."
        />
      </Head>
      <Page>
        <Container background="#fff">
          <LineLength>
            <Headline size="small" centered className={classes.headline}>
              General dentistry
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

export default general
