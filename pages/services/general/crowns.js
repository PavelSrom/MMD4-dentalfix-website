import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const crowns = () => {
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
            <Headline size="small" className={classes.headline}>
              {currentLink.label}
            </Headline>
            <hr style={{ border: '1px solid #f2f2f2', marginBottom: 24 }} />

            <BodyText>
              Smiling with broken tooth can lead to a decrease in our self-confidence.
              With confident smile we appear happier and it’s hardly achievable if part of
              our tooth is missing or damaged. The solution for this case can be crowns.
              Dental crowns are tooth-shaped caps that are settled over damaged tooth.
            </BodyText>
            <br />
            <BodyText bold>Dental crowns:</BodyText>
            <br />
            <BodyText>- Support a weak tooth</BodyText>
            <BodyText>
              - Restore broken teeth, their shape, image and functionality
            </BodyText>
            <BodyText>- Protect dental implants</BodyText>
            <BodyText>- Last for a long time</BodyText>
            <br />
            <BodyText>
              At DentalFix, we are equipped with only quality tools which will make sure
              that the dental process is painless and effective. If you think that you
              need a dental crown, or any other treatment, give us a call or make an
              appointment. For the doctors at DentalFix clinic, crowns need to have
              strength and longevity, which is why we devote the utmost attention to
              detail on all of our dental work. Your crown will be secure, natural in
              appearance and structurally intact.
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

export default crowns
