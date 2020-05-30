import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const teethWhitening = () => {
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
    <>
      <Head>
        <title>Teeth whitening | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="Treat yourself with a brighter and younger-looking smile."
        />
      </Head>
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
                Are you self-conscious about your smile? If you think that your stained
                teeth are beyond help, we can help. You’ll be surprised at what’s possible
                with the high-tech teeth whitening treatments at{' '}
                <a style={{ textDecoration: 'none' }} href="/">
                  <Span blue border>
                    DentalFix Clinic.
                  </Span>
                </a>
              </BodyText>
              <br />
              <BodyText bold>DentalFix Clinic offers teeth whitening that:</BodyText>
              <br />
              <BodyText>- Lifts stains</BodyText>
              <BodyText>- Works perfectly for your confidence and visual age</BodyText>
              <BodyText>- Offers you the appropriate level of whitening</BodyText>
              <BodyText>
                - Is safe – we will offer you methods with little or no sensitivity
              </BodyText>
              <br />
              <BodyText>
                Save time and frustration by skipping the store-bought solutions that only
                offer a generalized approach and a lower concentration of the whitening
                agent. At DentalFix Clinic in about an hour we can lift stains and reveal
                a polished new look!
              </BodyText>
              <br />
              <BodyText>
                Smile more often and with total confidence!{' '}
                <a style={{ textDecoration: 'none' }} href="/Contact">
                  <Span blue border>
                    Contact us
                  </Span>
                </a>{' '}
                about teeth whitening today.
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
    </>
  )
}

export default teethWhitening
