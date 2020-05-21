import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const sedation = () => {
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
              If you have dental anxiety or a complex dental procedure coming up, dental
              sedation and dental anesthesia at DentalFix clinic may be right for you. Our
              team believes that his patients should never have to experience unnecessary
              anxiety or worry when it comes to getting the dental care they need.
            </BodyText>
            <br />
            <BodyText bold>
              At DentalFix clinic, we offer sedation dentistry options for all procedures,
              including:
            </BodyText>
            <br />
            <BodyText>- Root canals</BodyText>
            <BodyText>- Tooth extractions </BodyText>
            <BodyText>- Dental implants </BodyText>
            <BodyText>- Cavity fillings</BodyText>
            <BodyText>- Gum disease treatments</BodyText>
            <br />
            <BodyText>
              Sedation is used for relaxation and numbing a tooth area during dental
              procedures. Patients are usually under special type of anaesthesia. At
              DentalFix we provide several levels of sedation, for example minimal
              sedation where you are awake but still relaxed.
            </BodyText>
            <br />
            <BodyText>
              Next, we have partial sedation where you feel relaxed, but you don’t
              remember much of the procedure. The last one is complete anaesthesia when
              you are fully unconscious.
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

export default sedation
