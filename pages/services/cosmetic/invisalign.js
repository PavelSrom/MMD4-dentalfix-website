import React from 'react'
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
<<<<<<< HEAD
            <Headline size="small" bold className={classes.headline}>
              {currentLink.label}
=======
            <Headline size="small" className={classes.headline}>
              {currentLink && currentLink.label}
>>>>>>> 09d635d0de6a813d3ceecdef6fb321f37f2b1d1d
            </Headline>
            <hr style={{ border: '1px solid #f2f2f2', marginBottom: 24 }} />

            <BodyText>
              Invisalign is a system of clear plastic trays used as orthodontic devices;
              essentially Invisalign acts as clear braces.{' '}
              <Span bold>
                Invisalign trays fit precisely over your teeth and move your teeth
                gradually
              </Span>{' '}
              to an ideal arch-form, bite alignment, and beautiful smile. Invisalign
              typically moves your teeth more quickly than traditional braces, and it does
              so invisibly. Other people will not know you are wearing braces because
              Invisalign trays are almost invisible.
            </BodyText>
            <br />
            <BodyText>
              Invisalign are clear, durable plastic retainers gently guiding your teeth to
              its appropriate alignment while those around you don’t notice you’re
              receiving orthodontic work. Using Invisalign will provide numerous benefits
              compared to metal brackets and wires including:
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
              Your Invisalign treatment will consist of a comprehensive evaluation of your
              mouth. Then, the doctors will take impressions of your teeth by using 3D
              imaging technology to customize your aligners. You will receive your smooth
              aligners, which won’t irritate your teeth or gums.
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

export default invisalign
