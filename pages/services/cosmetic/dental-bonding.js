import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const dentalBonding = () => {
  const classes = useStyles()
  const router = useRouter()
  const [, , thisCategory] = router.pathname.split('/')

  const links = [
    {
      category: 'cosmetic',
      label: 'Teeth whitening',
      url: '/services/cosmetic/teeth-whitening'
    },
    {
      category: 'cosmetic',
      label: 'Porcelain veeners',
      url: '/services/cosmetic/porcelain-veeners'
    },
    {
      category: 'cosmetic',
      label: 'Dental bonding',
      url: '/services/cosmetic/dental-bonding'
    },
    {
      category: 'cosmetic',
      label: 'Invisalign',
      url: '/services/cosmetic/invisalign'
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
              For minor imperfections in a smile, conservative treatments are best. Dental
              bonding is an affordable and minimally invasive approach to cosmetic
              dentistry. Bonding is most effective for closing small gaps between teeth or
              covering chips or cracks in teeth.
            </BodyText>
            <br />
            <BodyText bold>Advantages of dental bonding at DentalFix clinic:</BodyText>
            <br />
            <BodyText>
              <Span bold>- Cost:</Span> Bonding is one of the least expensive cosmetic
              procedures.
            </BodyText>
            <BodyText>
              <Span bold>- Time:</Span> Unlike crowns and veneers, which require more time
              to prepare and a second visit to place them, bonding can be completed in a
              single visit.
            </BodyText>
            <BodyText>
              <Span bold>- Invasiveness:</Span> Bonding requires minimal tooth removal.
              Frequently patients get multiple teeth bonded in one short appointment.
            </BodyText>
            <br />
            <BodyText>
              Bonding can be matched to your existing tooth color, for imperceptible
              blending. The expert cosmetic dentists at DentalFix clinic can help you
              evaluate your best choice for a cosmetic restoration. Every smile is
              different, so it helps to sit down with one of our dentists to learn which
              dental restoration will provide your best outcome.
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

export default dentalBonding
