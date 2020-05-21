import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const endodontics = () => {
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
            {currentLink && currentLink.label}
            </Headline>
            <hr style={{ border: '1px solid #f2f2f2', marginBottom: 24 }} />

            <BodyText>
              Endodontics, or so-called Root Canal Therapy, is a special field in
              dentistry which focuses on dental pup and tissues surrounding the roots of a
              tooth. Infected tooth can cause a lot of unpleasant pain. The whole process
              of treatment is complex and requires special tools to work with. At
              DentalFix, our dentists have extended knowledge in endodontics and they will
              do anything to save your natural teeth.
            </BodyText>
            <br />
            <BodyText bold>Endodontics bring relief by:</BodyText>
            <br />
            <BodyText>
              - Effectively numbing your tooth and gums for the procedure
            </BodyText>
            <BodyText>- Cleansing an infected tooth</BodyText>
            <BodyText>- Sealing the tooth from further decay or infection</BodyText>
            <BodyText>- Keeping your long-term oral wellness in mind</BodyText>
            <br />
            <BodyText>
              With today’s digital equipment, modern anesthesia and the expertise of the
              doctors at DentalFix clinic, a root canal provides relief, with patient
              comfort in mind.
            </BodyText>
            <br />
            <BodyText>
              If you have acute or recurring pain in a tooth, contact Dental Care Seattle
              for an endodontics visit immediately. The faster you act, the sooner we can
              have you feeling better.
            </BodyText>

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

export default endodontics
