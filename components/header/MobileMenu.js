import React from 'react'
import { links } from '../Header'
import useStyles from '../../styles/components/header/MobileMenu'
import { Subheadline, BodyText } from '../../templates/text'
import { Link } from '../../templates/button'
import { Close } from '../../templates/icons'

const MobileMenu = ({ burgerOpen, setBurgerOpen, pathname }) => {
  const classes = useStyles()

  return (
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
          <>
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
          </>
        ) : (
          <Link
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
    </div>
  )
}

export default MobileMenu
