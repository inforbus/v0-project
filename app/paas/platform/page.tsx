import { MiddlewareHeroSection } from "@/components/middleware/hero-section"
import { PaaSOverviewSection } from "@/components/paas/overview-section"
import { PaaSValueSection } from "@/components/paas/value-section"
import { PaaSCasesSection } from "@/components/paas/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPlatformPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareHeroSection />
      <PaaSOverviewSection />
      <PaaSValueSection />
      <PaaSCasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
