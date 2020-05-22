import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BodyText } from '../../templates/text'
import useStyles from '../../styles/components/faq/Accordion'

const Accordion = ({ question, answer, expanded, setExpanded, index }) => {
  const classes = useStyles({ expanded, index })
  const isOpen = expanded === index

  return (
    <div className={classes.container}>
      <motion.div
        // initial={false}
        animate={{ backgroundColor: isOpen ? '#f2f2f2' : '#fff' }}
        className={classes.panel}
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        <BodyText bold>{question}</BodyText>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={classes.content}
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              closed: { height: 0, opacity: 0 }
            }}
            transition={{ duration: 0.35, ease: 'easeInOut', delay: 0.15 }}
          >
            <BodyText>{answer}</BodyText>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
