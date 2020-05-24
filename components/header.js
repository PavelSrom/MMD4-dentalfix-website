import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

  const dropdownAnimation = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.35
      },
      display: 'block'
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.35
      },
      transitionEnd: {
        display: 'none'
      }
    }
  }

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
          <img src={logo} alt="" />
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

      {/* desktop navigation links */}
      <nav className={classes.desktopNav}>
        {links.map(({ url, label, dropdown }) =>
          dropdown ? (
            <motion.div
              onHoverStart={() => setDropdownOpen(true)}
              onHoverEnd={() => setDropdownOpen(false)}
              key={url}
              className={classes.navItemWrapper}
              style={{ position: 'relative' }}
            >
              <BodyText
                color={router.pathname.startsWith(url) ? 'primary' : null}
                className={classes.navItemDropdown}
              >
                {label}
              </BodyText>
              <motion.div
                initial="exit"
                animate={dropdownOpen ? 'show' : 'hide'}
                variants={dropdownAnimation}
                className={classes.dropdownDesktop}
              >
                {dropdown.map(({ url, label }) => (
                  <Link
                    key={url}
                    to={url}
                    component={BodyText}
                    color={router.pathname === url ? 'primary' : null}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <div key={url} className={classes.navItemWrapper}>
              <Link
                to={url}
                component={BodyText}
                color={router.pathname.startsWith(url) ? 'primary' : null}
                className={classes.navItemLink}
                onClick={() => setDropdownOpen(false)}
              >
                {label}
              </Link>
            </div>
          )
        )}
        {buttonToAppointments}
      </nav>
    </header>
  )
}

export default Header
