import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Ablauf } from './components/Ablauf'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { HashScroll } from './components/HashScroll'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { JsonLd } from './components/JsonLd'
import { Leistungen } from './components/Leistungen'
import { Preise } from './components/Preise'
import { Seo } from './components/Seo'
import { Stimmen } from './components/Stimmen'
import { Termin } from './components/Termin'
import { TrustBar } from './components/TrustBar'
import { Ueber } from './components/Ueber'
import { homeDescription, homeTitle } from './config/site'
import { Datenschutz } from './pages/Datenschutz'
import { Impressum } from './pages/Impressum'

function Home() {
  return (
    <>
      <Seo title={homeTitle()} description={homeDescription()} path="/" />
      <JsonLd />
      <HashScroll />
      <main>
        <Hero />
        <TrustBar />
        <Leistungen />
        <Ueber />
        <Ablauf />
        <Stimmen />
        <Preise />
        <Faq />
        <Termin />
      </main>
    </>
  )
}

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-linen text-ink">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
