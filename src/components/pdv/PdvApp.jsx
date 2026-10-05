import { useState, useEffect } from 'react'
import AnnouncementBar from './AnnouncementBar'
import WhatsAppButton from './WhatsAppButton'
import StickyBar from './StickyBar'
import Home from './pages/Home'
import L7nnon from './pages/L7nnon'
import Papatinho from './pages/Papatinho'
import Obrigado from './pages/Obrigado'

const ROUTES = {
  home: '/ntc',
  l7nnon: '/ntc-l7',
  papatinho: '/ntc-ppt',
  obrigado: '/ntc-cr',
}

const PAGES = {
  home: Home,
  l7nnon: L7nnon,
  papatinho: Papatinho,
  obrigado: Obrigado,
}

export default function PdvApp({ page = 'home' }) {
  const [bannerHeight, setBannerHeight] = useState(36)
  const [barVisible, setBarVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setBarVisible(window.scrollY > window.innerHeight * 0.75)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (newPage) => {
    const url = ROUTES[newPage]
    if (!url) return
    const search = window.location.search
    window.location.href = search ? `${url}${url.includes('?') ? '&' : '?'}${search.slice(1)}` : url
  }

  const PageComponent = PAGES[page] ?? Home

  return (
    <>
      <AnnouncementBar onHeightChange={setBannerHeight} />
      <WhatsAppButton bottomOffset={barVisible ? 96 : 24} />
      <StickyBar page={page} navigate={navigate} />
      <PageComponent navigate={navigate} bannerHeight={bannerHeight} />
    </>
  )
}
