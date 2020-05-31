import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const porcelainVeeners = () => {
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
        <title>Porcelain veeners | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="A gorgeous smile can have a huge impact on your overall look and self-confidence."
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
                A gorgeous smile can have a huge impact on your overall look. If you want
                to achieve an amazing smile, you are encouraged to try the porcelain
                veneers from{' '}
                <a style={{ textDecoration: 'none' }} href="/">
                  <Span blue border>
                    DentalFix Clinic.
                  </Span>
                </a>{' '}
                Created to establish the perfect form and function for the characteristics
                of your face, our porcelain veneers are remarkable.
              </BodyText>
              <br />
              <BodyText bold>Porcelain veneers can correct:</BodyText>
              <br />
              <BodyText>- Discoloration</BodyText>
              <BodyText>- Gaps between teeth</BodyText>
              <BodyText>- Short teeth</BodyText>
              <BodyText>- Uneven tooth alignment</BodyText>
              <br />
              <BodyText>
                Our procelain veneers are created with the technical skills and artistry
                of the best{' '}
                <a style={{ textDecoration: 'none' }} href="/Meet-us">
                  <Span blue border>
                    dental technicians
                  </Span>
                </a>{' '}
                that DentalFix collaborates with. With unmatched precision and quality,
                the dental technicians incorporate a myriad of details into your smile
                design.
              </BodyText>
              <br />
              <BodyText>
                By working closely with our patients, we’re able to create the best
                life-changing smile makeovers with well-crafted porcelain veneers. Smiles
                with our porcelain veneers are custom, beautiful, and appear completely
                natural.
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

export default porcelainVeeners
