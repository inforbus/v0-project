import { MiddlewareHeroSection } from "@/components/middleware/hero-section"
import { PaaSOverviewSection } from "@/components/paas/overview-section"
import { ValueSection } from "@/components/middleware/value-section"
import { CasesSection } from "@/components/middleware/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPlatformPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareHeroSection />
      <PaaSOverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
