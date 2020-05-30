import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText, Span } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const bridges = () => {
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
    <>
      <Head>
        <title>Bridges | Services | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="A dental bridge is one of many options to replace teeth. We put exacting details into every restoration so you feel confident in your smile."
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
                Dental bridges represent one of the reliable solutions for missing tooth.
                A dental bridge is a false tooth, usually made from porcelain in order to
                look similar as your natural tooth.
              </BodyText>
              <br />
              <BodyText>
                Dental bridges normally consist of two or more crowns next to each other
                to fill the missing space, that means not only one missing tooth. This
                aesthetical solution is just a step to your confident smile.
              </BodyText>
              <br />
              <BodyText bold>Benefits of dental bridges:</BodyText>
              <br />
              <BodyText>- Returns confident smile</BodyText>
              <BodyText>- Keeps the right shape of your face</BodyText>
              <BodyText>- Prevents other teeth from further damage</BodyText>
              <BodyText>- Provides comfort while eating and drinking</BodyText>
              <br />
              <BodyText>
                Bridges are secured by crowns on neighboring teeth. They remain above the
                gum line, and the force they withstand gets distributed along the bridge
                and its supporting crowns. Bridges are especially effective if the
                surrounding teeth need crowns. In that case, the entire bridge and crown
                restoration brings strength and function back to those teeth.
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

export default bridges
