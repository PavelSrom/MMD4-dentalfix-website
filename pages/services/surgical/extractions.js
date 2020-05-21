import React from 'react'
import { useRouter } from 'next/router'
import { Page, Container, LineLength } from '../../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../../templates/text'
import { RoundedButton, Link, LinkWrapper } from '../../../templates/button'
import useStyles from '../../../styles/components/services/SpecificService'

const extractions = () => {
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
              You might feel nervous, worried, or even downright terrified at the idea of
              having a tooth removed. However, the team of high-qualified dentists at
              DentalFix clinic are here to help you!
            </BodyText>
            <br />
            <BodyText>
              First, we’ll decide if a tooth extraction is the best course of treatment
              for you. We’ll do everything we can to save your tooth using restorative
              procedures. The process is painless, but the pain can occur after sedation
              stops working. After a tooth is extracted, it can be safely replaced with
              dental implant.
            </BodyText>
            <br />
            <BodyText>
              Sometimes your teeth cannot be saved and that’s when it comes to their
              extraction. Extraction means removing your damaged tooth completely. Dental
              extraction is one of the standard procedures at DentalFix.
            </BodyText>
            <br />
            <BodyText bold>
              At DentalFix, we provide 2 types of dental extraction:
            </BodyText>
            <br />
            <BodyText>
              1. A classic extraction, which is a common type. Our dentists will numb your
              tooth before the intervention, so you won’t feel any pain. Our dentists use
              only quality tools with which they will extract your tooth.
            </BodyText>
            <br />
            <BodyText>
              2. A surgical extraction is more intricate process, where other surgical
              tools need to be used. It is the process where it’s needed to intervene into
              your gumline. This type of extraction is usually used if your tooth is
              broken or in case of wisdom teeth, which can we painful.
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

export default extractions
