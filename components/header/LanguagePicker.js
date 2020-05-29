import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { BodyText } from '../../templates/text'
import { Language } from '../../templates/icons'
import { useLocalization } from '../../utils/hooks'
import useStyles from '../../styles/components/header/LanguagePicker'

export const languages = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Romanian',
    value: 'ro'
  }
]

const LanguagePicker = ({ open, setOpen }) => {
  const classes = useStyles()
  const router = useRouter()
  const { changeLang } = useLocalization()

  const handleLanguageChange = newLang => {
    changeLang(newLang)
    router.reload(router.pathname) // page refresh for the language change to be visible
  }

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

  return (
    <motion.div
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      className={classes.navItemWrapper}
      style={{ position: 'relative' }}
    >
      <Language className={classes.icon} />
      <motion.div
        initial="hide"
        animate={open ? 'show' : 'hide'}
        variants={dropdownAnimation}
        className={classes.dropdownDesktop}
      >
        {languages.map(({ label, value }) => (
          <div key={value} className={classes.itemWrapper}>
            <BodyText onClick={() => handleLanguageChange(value)}>{label}</BodyText>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default LanguagePicker
