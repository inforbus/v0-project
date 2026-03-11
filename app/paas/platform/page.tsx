import { MiddlewareHeroSection } from "@/components/middleware/hero-section"
import { PaaSOverviewSection } from "@/components/paas/overview-section"
import { ProductIntro } from "@/components/middleware/product-intro"
import { CasesSection } from "@/components/middleware/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPlatformPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareHeroSection />
      <PaaSOverviewSection />
      <ProductIntro />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
