import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import '../public/fonts.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'

const scrollGoals = {
  '/': 'A7NVRGKL',
  '/forum': '62DPAVRO',
  '/resources': 'UWQVJHND',
  '/climate': 'AGN8URLH'
}

const App = ({ Component, pageProps }) => {
  const { events, pathname } = useRouter()
  const [loggedPageScroll, setLoggedPageScroll] = useState(false)

  useEffect(() => {
    Fathom.load('TQSNNSCU', {
      includedDomains: ['centresustains.com'],
      url: 'https://crow.centresustains.com/script.js'
    })

    const onRouteChangeComplete = () => {
      Fathom.trackPageview()
      setLoggedPageScroll(false)
    }

    events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  useEffect(() => {
    const goal = scrollGoals[pathname]

    const logPageEndReached = e => {
      if (
        goal &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loggedPageScroll
      ) {
        Fathom.trackGoal(goal, 0)
        setLoggedPageScroll(true)
      }
    }

    if (goal) {
      window.addEventListener('scroll', logPageEndReached)

      return () => {
        window.removeEventListener('scroll', logPageEndReached)
      }
    }
  }, [pathname])

  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
