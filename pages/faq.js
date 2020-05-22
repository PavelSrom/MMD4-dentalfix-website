import React from 'react'
import { Page, Container, LineLength } from '../templates/layout'
import { Headline, BodyText } from '../templates/text'
import useStyles from '../styles/pages/faq'
import { useLocalization } from '../utils/hooks'

const faq = () => {
  const classes = useStyles()
  const { t } = useLocalization('FAQ')

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
    }
  ]

  // @Andreea I have to have the LineLength here because otherwise the text is exhausting to read

  return (
    <Page>
      <Container>
        <LineLength narrow>
          <Headline bold centered style={{ paddingBottom: 32 }}>
            DentalFix clinic FAQ
          </Headline>

          {questions.map(({ question, answer }) => (
            <div key={question} className={classes.questionBox}>
              <div className={classes.border} />
              <BodyText bold className={classes.question}>
                {question}
              </BodyText>
              <BodyText>{answer}</BodyText>
            </div>
          ))}
        </LineLength>
      </Container>
    </Page>
  )
}

export default faq
