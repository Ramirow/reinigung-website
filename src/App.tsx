import { useEffect, useState } from 'react'
import { Ablauf } from './components/Ablauf'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Leistungen } from './components/Leistungen'
import { Preise } from './components/Preise'
import { Stimmen } from './components/Stimmen'
import { Termin } from './components/Termin'
import { TrustBar } from './components/TrustBar'
import { Ueber } from './components/Ueber'
import { Datenschutz } from './pages/Datenschutz'
import { Impressum } from './pages/Impressum'

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Leistungen />
      <Ueber />
      <Ablauf />
      <Stimmen />
      <Preise />
      <Termin />
    </main>
  )
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isImpressum = hash === '#impressum'
  const isDatenschutz = hash === '#datenschutz'
  const isLegal = isImpressum || isDatenschutz

  useEffect(() => {
    if (isLegal) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    if (!id || id === 'top') {
      if (id === 'top') window.scrollTo(0, 0)
      return
    }

    document.getElementById(id)?.scrollIntoView()
  }, [hash, isLegal])

  return (
    <div className="min-h-svh bg-linen text-ink">
      <Header />
      {isImpressum ? (
        <Impressum />
      ) : isDatenschutz ? (
        <Datenschutz />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  )
}

export default App
