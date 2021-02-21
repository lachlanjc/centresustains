import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import { debounce } from 'lodash'

import '../public/fonts.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'

const scrollGoals = {
  '/': 'WTEMNVOP',
  '/forum': '5LBSXX3J',
  '/resources': 'RES0RWA7',
  '/climate': 'JEPKJPOI'
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

    const logPageEndReached = () => {
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
      const logPageEvent = debounce(logPageEndReached, 50)
      window.addEventListener('scroll', logPageEvent)
      return () => {
        window.removeEventListener('scroll', logPageEvent)
      }
    }
  }, [pathname, loggedPageScroll])

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
