import React from 'react'
import { links } from '../Header'
import useStyles from '../../styles/components/header/MobileMenu'
import { Subheadline, BodyText } from '../../templates/text'
import { Link } from '../../templates/button'

const MobileMenu = ({ burgerOpen, setBurgerOpen, pathname }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.burgerMenu}
      style={{ transform: burgerOpen ? 'translateX(0)' : 'translateX(100%)' }}
    >
      <Subheadline bold color="primary">
        MENU
      </Subheadline>

      {links.map(({ url, label, dropdown }) =>
        dropdown ? (
          <>
            <BodyText color={pathname === url ? 'primary' : null}>{label}</BodyText>
            {dropdown.map(({ url, label }) => (
              <Link to={url} component={BodyText} onClick={() => setBurgerOpen(false)}>
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
          >
            {label}
          </Link>
        )
      )}
    </div>
  )
}

export default MobileMenu
