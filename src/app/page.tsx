import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import CategoryMarquee from '@/components/CategoryMarquee'
import FeatureBlock   from '@/components/FeatureBlock'
import HowItWorks     from '@/components/HowItWorks'
import ShareCards     from '@/components/ShareCards'
import ForOrganizers  from '@/components/ForOrganizers'
import Gallery        from '@/components/Gallery'
import Pricing        from '@/components/Pricing'
import FAQ            from '@/components/FAQ'
import FinalCTA       from '@/components/FinalCTA'
import Footer         from '@/components/Footer'
import LightningIntro from '@/components/LightningIntro'
import { CONTENT }   from '@/lib/content'

export default function Home() {
  return (
    <>
      <LightningIntro />
      <Nav />
      <main>
        <Hero />
        <CategoryMarquee />
        {CONTENT.features.map((feature, index) => (
          <FeatureBlock key={feature.id} feature={feature} index={index} />
        ))}
        <HowItWorks />
        <ShareCards />
        <ForOrganizers />
        <Gallery />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
