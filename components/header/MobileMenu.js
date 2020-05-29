import React from 'react'
import { useRouter } from 'next/router'
import { links } from '../Header'
import useStyles from '../../styles/components/header/MobileMenu'
import { Subheadline, BodyText } from '../../templates/text'
import { Link } from '../../templates/button'
import { Close } from '../../templates/icons'
import { motion } from 'framer-motion'
import { useLocalization } from '../../utils/hooks'
import { languages } from './LanguagePicker'

const MobileMenu = ({ burgerOpen, setBurgerOpen, pathname }) => {
  const classes = useStyles()
  const router = useRouter()
  const { changeLang } = useLocalization()

  const handleLanguageChange = newLang => {
    changeLang(newLang)
    router.reload(router.pathname) // page refresh for the language change to be visible
  }

  // transition a dark overlay on burger toggle
  const overlayAnimation = {
    show: {
      opacity: 0.5,
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

  return (
    <>
      <motion.div
        initial="exit"
        animate={burgerOpen ? 'show' : 'hide'}
        variants={overlayAnimation}
        className={classes.overlay}
      />
      <div
        className={classes.burgerMenu}
        style={{ transform: burgerOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className={classes.header}>
          <Subheadline bold color="primary">
            MENU
          </Subheadline>
          <Close
            className={classes.mobileIcon}
            color="primary"
            onClick={() => setBurgerOpen(false)}
          />
        </div>

        {links.map(({ url, label, dropdown }) =>
          dropdown ? (
            <div key={url}>
              <BodyText
                color={pathname.startsWith(url) ? 'primary' : null}
                className={classes.mainLink}
              >
                {label}
              </BodyText>
              {dropdown.map(({ url, label }) => (
                <Link
                  key={url}
                  to={url}
                  component={BodyText}
                  onClick={() => setBurgerOpen(false)}
                  className={classes.subLink}
                >
                  {label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={url}
              to={url}
              component={BodyText}
              color={pathname === url ? 'primary' : null}
              onClick={() => setBurgerOpen(false)}
              className={classes.mainLink}
            >
              {label}
            </Link>
          )
        )}

        <div className={classes.languages}>
          <BodyText bold color="primary">
            Languages
          </BodyText>
          {languages.map(({ label, value }) => (
            <BodyText key={value} onClick={() => handleLanguageChange(value)}>
              {label}
            </BodyText>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu
