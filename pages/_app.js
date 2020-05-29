import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AnimatePresence } from 'framer-motion'
import theme from '../utils/theme'
import logo from '../public/logo_64x64.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps, router } = this.props

    return (
      <>
        <Head>
          <link rel="icon" href={logo} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Footer />
        </ThemeProvider>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          html,
          body {
            background: #fff;
            overflow-x: hidden !important;
          }
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.5;
          }

          .slick-prev:before,
          .slick-next:before {
            color: ${theme.palette.primary.main} !important;
          }
        `}</style>
      </>
    )
  }
}
