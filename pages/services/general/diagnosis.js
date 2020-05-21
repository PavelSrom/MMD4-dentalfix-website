import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const diagnosis = () => {
  const classes = useStyles()
  const router = useRouter()
  const [, , thisCategory] = router.pathname.split('/')

  const links = [
    {
      category: 'general',
      label: 'Crowns',
      url: '/services/general/crowns'
    },
    {
      category: 'general',
      label: 'Diagnosis',
      url: '/services/general/diagnosis'
    },
    {
      category: 'general',
      label: 'Endodontics',
      url: '/services/general/endodontics'
    },
    {
      category: 'general',
      label: 'Bridges',
      url: '/services/general/bridges'
    },
    {
      category: 'general',
      label: 'Fillings',
      url: '/services/general/fillings'
    }
  ]

  const currentLink = links.find(({ url }) => router.pathname === url)

  return (
    <Page>
      <Container background="#fff" className={classes.container}>
        {/* sidebar with links */}
        <div className={classes.sidebar}>
          {links.map(({ label, url }) => (
            <Link
              key={url}
              component={Subheadline}
              light
              to={url}
              className={classes.sidebarLink}
              color={router.pathname === url ? 'primary' : null}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* page content */}
        <div className={classes.content}>
          <LineLength narrow>
            <Headline size="small" bold className={classes.headline}>
              {currentLink.label}
            </Headline>
            <hr style={{ border: '1px solid #f2f2f2', marginBottom: 24 }} />

            <BodyText>
              Tooth pain can be unpleasant and sometimes difficult to bear. Sometimes the
              cause of pain is known, but sometimes the dental check is necessary.
            </BodyText>
            <br />
            <BodyText>
              Our skilled dentists will provide you with quality diagnosis and explanation
              of the what is causing the pain. After the complete examination, they will
              advise the further process of treatment and it’s fully up to you what you
              choose.
            </BodyText>
            <br />
            <BodyText>
              At DentalFix, we provide only quality dental diagnosis with professional
              attitude. According to the level of tooth damage, you will be next advised
              with another check-ups. Take into consideration that you should visit us at
              least once a year for regular check-up. We recommend coming twice a year for
              check-up and cleaning.
            </BodyText>
            <br />
            <BodyText>
              Besides diagnosis we provide the possibility of dental cleanings.
            </BodyText>
            <br />
            <BodyText>
              Regular dental cleanings are important for keeping your teeth healthy.
              Please, do not underestimate dental cleaning. Usually brushing and flossing
              are not enough for removing all the bacteria that can occur even on your
              teeth. Cleanings remove plague and tartar which can lead to oral infection.
            </BodyText>
            <br />

            <LinkWrapper href="https://dentalfix.herokuapp.com" target="_blank">
              <RoundedButton className={classes.buttonLink} background="secondary">
                Request an appointment
              </RoundedButton>
            </LinkWrapper>
          </LineLength>
        </div>
      </Container>
    </Page>
  )
}

export default diagnosis
