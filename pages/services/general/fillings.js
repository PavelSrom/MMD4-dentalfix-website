import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const fillings = () => {
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
            <hr style={{ border: '1px solid #dadada', marginBottom: 24 }} />

            <BodyText>
              In case you have cavities,{' '}
              <a style={{ textDecoration: 'none' }} href="/Meet-us">
                <Span blue border>
                  {' '}
                  our dentists at DentalFix Clinic{' '}
                </Span>
              </a>
              will gently remove the decayed part of your tooth and fill it with a type of
              filling you choose. Nowadays you can choose from several fillings: from
              porcelain, plastic, gold or silver amalgam.
            </BodyText>
            <br />
            <BodyText>
              All fillings are safe and proved by Health Association. After you this type
              of treatment, fillings require special dental care and hygiene, meaning you
              should visit us regularly for cleanings.
            </BodyText>
            <br />
            <BodyText bold>Benefits:</BodyText>
            <br />
            <BodyText>- Lasts for a long time</BodyText>
            <BodyText>- Its strength while chewing</BodyText>
            <BodyText>- Can match your tooth colour</BodyText>
            <BodyText>- Can prevent from other infections</BodyText>
            <br />
            <BodyText>
              Do you need dental filling? Schedule an appointment with us and together we
              will look at the possibilities we can provide to you.
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

export default fillings
