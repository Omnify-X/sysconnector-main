import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { FlowDiagram } from '@/components/sections/FlowDiagram';
import { PainPoints } from '@/components/sections/PainPoints';
import { WhyLayer } from '@/components/sections/WhyLayer';
import { Solution } from '@/components/sections/Solution';
import { Features } from '@/components/sections/Features';
import { CustomerProfile } from '@/components/sections/CustomerProfile';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { Testimonials } from '@/components/sections/Testimonials';
import { FutureIntegrations } from '@/components/sections/FutureIntegrations';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FlowDiagram />
        <PainPoints />
        <Solution />
        <WhyLayer />
        <Features />
        <CustomerProfile />
        <TargetAudience />
        <Testimonials />
        <FutureIntegrations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
