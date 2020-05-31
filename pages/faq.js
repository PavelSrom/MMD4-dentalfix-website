import React, { useState } from 'react'
import Head from 'next/head'
import { Page, Container, LineLength } from '../templates/layout'
import { Headline } from '../templates/text'
import useStyles from '../styles/pages/faq'
import { useLocalization } from '../utils/hooks'
import Accordion from '../components/faq/Accordion'

const faq = () => {
  const classes = useStyles()
  const { t } = useLocalization('FAQ')
  const [expanded, setExpanded] = useState(false)

  const questions = [
    {
      question: t['0'].question,
      answer: t['0'].answer
    },
    {
      question: t['1'].question,
      answer: t['1'].answer
    },
    {
      question: t['2'].question,
      answer: t['2'].answer
    },
    {
      question: t['3'].question,
      answer: t['3'].answer
    },
    {
      question: t['4'].question,
      answer: t['4'].answer
    },
    {
      question: t['5'].question,
      answer: t['5'].answer
    },
    {
      question: t['6'].question,
      answer: t['6'].answer
    }
  ]

  // @Andreea I have to have the LineLength here because otherwise the text is exhausting to read

  return (
    <>
      <Head>
        <title>FAQ | DentalFix | Savinesti</title>
        <meta
          name="description"
          content="The answers for your questions lie here. Find what to do in case of emergency, how to make appointment or how often you need a dental check-up."
        />
      </Head>
      <Page>
        <Container>
          <LineLength narrow>
            <Headline bold centered style={{ paddingBottom: 32 }}>
              DentalFix clinic FAQ
            </Headline>

            {questions.map(({ question, answer }, index) => (
              <div key={question}>
                <div className={classes.border} />
                <Accordion
                  question={question}
                  answer={answer}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  index={index}
                />
              </div>
            ))}
          </LineLength>
        </Container>
      </Page>
    </>
  )
}

export default faq
