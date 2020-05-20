import React, { Children } from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const porcelainVeeners = () => {
  const classes = useStyles()
  const router = useRouter()
  const [, , thisCategory] = router.pathname.split('/')

  const links = [
    {
      category: '',
      label: '',
      url: ''
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
            {Children}
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
              Our procelain veneers are created with the technical skills and artistry of
              the best dental technicians that DentalFix collaborates with, With unmatched
              precision and quality, the dental technicians incorporate a myriad of
              details into your smile design.
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
  )
}

export default porcelainVeeners
