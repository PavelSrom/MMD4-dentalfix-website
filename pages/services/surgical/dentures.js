import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const dentures = () => {
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
              {currentLink.label}
            </Headline>
            <hr style={{ border: '1px solid #f2f2f2', marginBottom: 24 }} />
            <BodyText>
              Take back control of your smile! Eat the foods you love and restore your
              quality of life. It’s all possible with custom implant-supported dentures.
            </BodyText>
            <br />
            <BodyText>
              With an implant-supported prosthesis from DentalFix clinic, the
              high-qualified team of dentists can restore a single missing tooth or an
              entire arch of missing teeth. Implants are good for the health of your mouth
              and gums and offer a rock-solid foundation for your dentures.
            </BodyText>
            <br />
            <BodyText>
              Dentures represent another solution for missing teeth. These are fake teeth
              which are removable and they fit over your gums, being shaped in a form that
              is fitting your tongue.
            </BodyText>
            <br />
            <BodyText bold>Benefits of dental dentures: </BodyText>
            <br />
            <BodyText>- Improve your appearance </BodyText>
            <BodyText>- Support your face shape </BodyText>
            <BodyText>- Can improve your speech </BodyText>
            <BodyText>- Comfortable while eating and drinking </BodyText>
            <BodyText>- Easily removable </BodyText>
            <br />
            <BodyText>
              Dentures are tailored to your mouth and made in a laboratory after taking
              impression of your mouth. Dentures are also made from harmless material,
              which protects your gums while you are using them. Depending on your teeth
              situation, you can have either full denture or partial denture.
            </BodyText>
            <br />
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

export default dentures
