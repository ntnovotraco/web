import { useState } from 'react'
import BannerV2 from './BannerV2'
import NavbarV2 from './NavbarV2'
import HeroV2 from './HeroV2'
import VideoSection from './VideoSection'
import AboutSectionV2 from './AboutSectionV2'
import FoundersSectionV2 from './FoundersSectionV2'
import AccessSectionV2 from './AccessSectionV2'
import ArtistsCarouselV2 from './ArtistsCarouselV2'
import PricingSectionV2 from './PricingSectionV2'
import FaqSectionV2 from './FaqSectionV2'
import FinalCtaSectionV2 from './FinalCtaSectionV2'
import FooterV2 from './FooterV2'
import WhatsAppButton from '../pdv/WhatsAppButton'

export default function NtcV2App() {
  const [bannerHeight, setBannerHeight] = useState(44)

  return (
    <>
      <BannerV2 onHeightChange={setBannerHeight} />
      <NavbarV2 topOffset={bannerHeight} />
      <HeroV2 bannerHeight={bannerHeight} />
      <VideoSection />
      <AboutSectionV2 />
      <FoundersSectionV2 />
      <AccessSectionV2 />
      <ArtistsCarouselV2 />
      <PricingSectionV2 />
      <FaqSectionV2 />
      <FinalCtaSectionV2 />
      <FooterV2 />
      <WhatsAppButton />

      <style>{`
        /* No mobile, nav só mostra o logo — padding 20px 40px (match Figma) */
        @media (max-width: 767px) {
          .ntcollection-nav {
            padding: 20px 32px !important;
          }
          .ntcollection-nav-links { display: none !important; }
        }

        @media (max-width: 374px) {
          .ntcollection-nav {
            padding: 20px !important;
          }
        }
      `}</style>
    </>
  )
}
