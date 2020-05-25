import React from 'react'
import useStyles from '../styles/components/SectionWithImg'

const SectionWithImg = ({ background, imgSrc, imgPosition, children }) => {
  const classes = useStyles({ imgPosition })

  return (
    <section className={classes.section} style={{ background }}>
      <div className={classes.imgBox}>
        <img src={imgSrc} alt="" className={classes.img} />
      </div>

      <div className={classes.content}>{children}</div>
    </section>
  )
}

export default SectionWithImg
