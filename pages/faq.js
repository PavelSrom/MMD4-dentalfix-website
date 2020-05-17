import React from 'react'
import { Page, Container, LineLength } from '../templates/layout'
import { Headline, BodyText } from '../templates/text'
import useStyles from '../styles/pages/faq'

const faq = () => {
  const classes = useStyles()

  const questions = [
    {
      question:
        'I am a new patient and would like to get started. How can I make an appointment?',
      answer:
        'Click on the "appointments" button in the navigation bar or on the other buttons on the website which lead you to the application, and create an account. Once you log in, you have your profile and you can create appointments. By accessing the "New appointment" page, you can choose the treatment type, the date and time which suits you the most, and you can also leave a message for the doctor. Click on the "make appointment" button, then you can check on "Appointments" page to see your upcoming appointments.'
    },
    {
      question:
        'What do I have to do in case I want to make an appointment for my child or other family member?',
      answer:
        'In case you want to make an appointment for somebody else, go to "New appointment" page and on the top of the screen you have a toggle button. Once you click on it, you activate the function of making an appointment for another patient, and you will be required to add extra information about the patient.'
    },
    {
      question: 'What do I have to do in case of emergency?',
      answer: `In case of having an emergency, you can call the number 0040233280121 and describe your emergency. You'll be automatically prioritized in the clinic. If the emergency is outside of the opening hours, please go to the nearest hospital emergency.`
    },
    {
      question: 'How often do I need to have a dental check-up?',
      answer:
        'We advise the patients to have a dental check-up at least twice a year. Once you are a patient in our system, you will receive a notification about a dental check-up every 6 months. In case of pain or increasing cavities, you should consider visiting a dentist more than twice.'
    },
    {
      question: 'What do I have to do in case I want to cancel my appointment?',
      answer:
        'In case you want to cancel your appointment, you can either call the clinic or cancel the appointment yourself in the app. However, it is important to know that you can only cancel your appointment 24h before the starting time of the appointment.'
    },
    {
      question: 'What is the payment method?',
      answer:
        'All payments are made personally at the clinic, and after having the treatment completed. You cannot pay for your treatment online.'
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
