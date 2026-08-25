import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "../components/velmo/AnnouncementBar";
import { Navbar } from "../components/velmo/Navbar";
import { HeroSection } from "../components/velmo/HeroSection";
import { StatsBar } from "../components/velmo/StatsBar";
import { MechanismSection } from "../components/velmo/MechanismSection";
import { ProductShowcase } from "../components/velmo/ProductShowcase";
import { TransformationCalculator } from "../components/velmo/TransformationCalculator";
import { ComparisonTable } from "../components/velmo/ComparisonTable";
import { SocialProofSection } from "../components/velmo/SocialProofSection";
import { VipConsultationSection } from "../components/velmo/VipConsultationSection";
import { GuaranteeSection } from "../components/velmo/GuaranteeSection";
import { FaqSection } from "../components/velmo/FaqSection";
import { FloatingWhatsApp } from "../components/velmo/FloatingWhatsApp";
import { RecentBuyersPopup } from "../components/velmo/RecentBuyersPopup";
import { Footer } from "../components/velmo/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#07080a] text-zinc-100 selection:bg-rose-500 selection:text-white">
      {/* 1. Top Urgency Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Official Sticky Navbar */}
      <Navbar />

      {/* 3. Main Hero Section (High Impact & Desejo Imediato) */}
      <HeroSection />

      {/* 4. Authority & Credibility Bar */}
      <StatsBar />

      {/* 5. Bio-Mechanisms (Laranja Moro, Cromo, Triptofano, Fibras) */}
      <MechanismSection />

      {/* 6. Products Showcase (Tabs: Protocolo Duo, Cápsulas, Drink Solúvel com Sabores) */}
      <ProductShowcase />

      {/* 7. Interactive Weight Loss Goal Calculator */}
      <TransformationCalculator />

      {/* 8. Aggressive Comparison Table (Velmo Black vs Métodos Tradicionais) */}
      <ComparisonTable />

      {/* 9. Social Proof & Real WhatsApp Testimonials */}
      <SocialProofSection />

      {/* 10. VIP Personalized WhatsApp Consultation Flow */}
      <VipConsultationSection />

      {/* 11. Security & Quality Guarantee */}
      <GuaranteeSection />

      {/* 12. Complete FAQ */}
      <FaqSection />

      {/* 13. Official Footer with Legal Disclaimer */}
      <Footer />

      {/* 14. Floating Sticky WhatsApp Lead Trigger */}
      <FloatingWhatsApp />

      {/* 15. Recent Buyers Social Proof Popup (Bottom Left) */}
      <RecentBuyersPopup />
    </div>
  );
}
