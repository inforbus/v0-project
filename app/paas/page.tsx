import { PaaSHeroSection } from "@/components/digital-platform/paas/hero-section"
import { PaaSOverviewSection } from "@/components/digital-platform/paas/overview-section"
import { PaaSFeaturesSection } from "@/components/digital-platform/paas/features-section"
import { PaaSCasesSection } from "@/components/digital-platform/paas/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <PaaSHeroSection />
      <PaaSOverviewSection />
      <PaaSFeaturesSection />
      <PaaSCasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
