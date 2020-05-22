import React, { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import logo from '../assets/logo_64x64.png'
import { ButtonLink, Link, LinkWrapper } from '../templates/button'
import { Menu } from '../templates/icons'
import { BodyText } from '../templates/text'
import useStyles from '../styles/components/Header'
import MobileMenu from './header/MobileMenu'

export const links = [
  {
    url: '/meet-us',
    label: 'Meet us'
  },
  {
    url: '/services',
    label: 'Services',
    dropdown: [
      {
        url: '/services/general',
        label: 'General dentistry'
      },
      {
        url: '/services/surgical',
        label: 'Surgical dentistry'
      },
      {
        url: '/services/cosmetic',
        label: 'Cosmetic dentistry'
      }
    ]
  },
  {
    url: '/new-patient',
    label: 'New patient'
  },
  {
    url: '/contact',
    label: 'Contact'
  }
]

const Header = () => {
  const classes = useStyles()
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [burgerOpen, setBurgerOpen] = useState(false)

  const buttonToAppointments = (
    <ButtonLink
      to="https://dentalfix.herokuapp.com"
      target="_blank"
      background="secondary"
      style={{ marginLeft: 24 }}
    >
      Appointments
    </ButtonLink>
  )

  return (
    <header className={classes.header}>
      <NextLink href="/">
        <LinkWrapper className={classes.logo}>
          <img src={logo} alt="" className={classes.logo} />
        </LinkWrapper>
      </NextLink>

      {/* mobile navigation */}
      <nav className={classes.mobileNav}>
        <Menu
          color="primary"
          className={classes.menuIcon}
          onClick={() => setBurgerOpen(!burgerOpen)}
        />
        <MobileMenu
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          pathname={router.pathname}
        />
      </nav>

      {/* navigation links */}
      <nav className={classes.desktopNav}>
        {links.map(({ url, label, dropdown }) =>
          dropdown ? (
            <div key={url} style={{ position: 'relative' }}>
              <BodyText
                color={router.pathname.startsWith(url) ? 'primary' : null}
                className={classes.navItemDropdown}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {label}
              </BodyText>

              {dropdownOpen && (
                <div className={classes.dropdownDesktop}>
                  {dropdown.map(({ url, label }) => (
                    <Link
                      to={url}
                      component={BodyText}
                      color={router.pathname === url ? 'primary' : null}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={url}
              key={url}
              component={BodyText}
              color={router.pathname.startsWith(url) ? 'primary' : null}
              className={classes.navItemLink}
              onClick={() => setDropdownOpen(false)}
            >
              {label}
            </Link>
          )
        )}
        {buttonToAppointments}
      </nav>
    </header>
  )
}

export default Header
