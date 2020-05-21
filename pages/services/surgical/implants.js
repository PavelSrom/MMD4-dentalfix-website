import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const implants = () => {
  const classes = useStyles()
  const router = useRouter()
  const [, , thisCategory] = router.pathname.split('/')

  const links = [
    {
      category: 'surgical',
      label: 'Implants',
      url: '/services/surgical/implants'
    },
    {
      category: 'surgical',
      label: 'Extractions',
      url: '/services/surgical/extractions'
    },
    {
      category: 'surgical',
      label: 'Dentures',
      url: '/services/surgical/dentures'
    },
    {
      category: 'surgical',
      label: 'Sedation',
      url: '/services/surgical/sedation'
    }
  ]

  const currentLink = links.find(({ url }) => router.pathname === url)
  console.log(currentLink)

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
              Dental implants create another solution for a broken tooth, which cannot be
              saved. The process of fitting dental implants lies in a personalized crown
              and dental implant, whose shape is comparable to a screw. Dental implant is
              placed into your jawbone on which crown is settled through so called
              connector, known as abutment.
            </BodyText>
            <br />
            <BodyText bold>The benefits of dental implants:</BodyText>
            <br /><BodyText>- Great form of replacement of teeth</BodyText>
            <BodyText>- Last for a long time </BodyText>
            <BodyText>- Support tooth structure </BodyText>
            <BodyText>- Stability and comfort</BodyText>
            <br />
            <BodyText>
              Don’t let missing or badly damaged teeth hurt your confidence or your
              health. We’ll help you understand why high-tech dental implants may be the
              best solution.
            </BodyText>
            <br />
            <BodyText>
              Is this the treatment you need? If yes, do not hesitate to contact us about
              your questions or directly create an appointment in our app.
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

export default implants
