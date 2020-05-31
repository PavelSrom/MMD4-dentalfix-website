import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const invisalign = () => {
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
        <title>Invisalign | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="Unlike bulky and painful metal braces, Invisalign uses a series of nearly invisible aligners to gently reposition misaligned teeth."
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
                Invisalign is a system of clear plastic trays used as orthodontic devices;
                essentially Invisalign acts as clear braces.{' '}
                <Span bold>
                  Invisalign trays fit precisely over your teeth and move your teeth
                  gradually
                </Span>{' '}
                to an ideal arch-form, bite alignment, and beautiful smile. Invisalign
                typically moves your teeth more quickly than traditional braces, and it
                does so invisibly. Other people will not know you are wearing braces
                because Invisalign trays are almost invisible.
              </BodyText>
              <br />
              <BodyText>
                Invisalign are clear, durable plastic retainers gently guiding your teeth
                to its appropriate alignment while those around you don’t notice you’re
                receiving orthodontic work. Using Invisalign will provide numerous
                benefits compared to metal brackets and wires including:
              </BodyText>
              <br />
              <BodyText>- You can remove the aligners when you want</BodyText>
              <BodyText>- Allows you to eat and drink whatever you enjoy</BodyText>
              <BodyText>
                - Brush and floss normally ensuring great periodontal health
              </BodyText>
              <BodyText>- Less office visits</BodyText>
              <BodyText>- Virtually invisible teeth-straitening</BodyText>
              <br />
              <BodyText>
                Your Invisalign treatment will consist of a comprehensive evaluation of
                your mouth. Then,{' '}
                <a style={{ textDecoration: 'none' }} href="/Meet-us">
                  <Span blue border>
                    the dentists
                  </Span>
                </a>{' '}
                will take impressions of your teeth by using 3D imaging technology to
                customize your aligners. You will receive your smooth aligners, which
                won’t irritate your teeth or gums.
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

export default invisalign
