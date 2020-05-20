import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { PageTransition } from 'next-page-transitions'
import theme from '../utils/theme'
import logo from '../public/logo_64x64.png'

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
          <PageTransition timeout={350} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <Footer />
        </ThemeProvider>

        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          html,
          body {
            background: #fff;
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

          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 350ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 350ms;
          }
        `}</style>
      </>
    )
  }
}
