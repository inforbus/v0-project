import { MiddlewareHeroSection } from "@/components/middleware/hero-section"
import { MiddlewareOverview } from "@/components/middleware/overview-section"
import { MiddlewareProductIntro } from "@/components/middleware/product-intro"
import { MiddlewareCases } from "@/components/middleware/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPlatformPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareHeroSection />
      <MiddlewareOverview />
      <MiddlewareProductIntro />
      <MiddlewareCases />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
