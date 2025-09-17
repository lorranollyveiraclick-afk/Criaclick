import VerticalSidebar from '@/components/VerticalSidebar';
import Header from '@/components/Header';
import FuturisticHero from '@/components/FuturisticHero';
import FuturisticServices from '@/components/FuturisticServices';
import FuturisticCTA from '@/components/FuturisticCTA';
import PricingSites from '@/components/PricingSites';
import PricingEcommerce from '@/components/PricingEcommerce';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <VerticalSidebar />
      <main className="pt-28 md:pt-32">
        <FuturisticHero />
        <FuturisticServices />
        <FuturisticCTA />
        <div className="md:ml-12 lg:ml-16">
          <PricingSites />
          <PricingEcommerce />
          <Footer />
        </div>
      </main>
    </div>
  );
}

