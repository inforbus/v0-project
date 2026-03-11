import { MiddlewareHeroSection } from "@/components/middleware/hero-section"
import { WSOverviewSection } from "@/components/ws/overview-section"
import { WSValueSection } from "@/components/ws/value-section"
import { WSCasesSection } from "@/components/ws/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function AntiTamperPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareHeroSection />
      <WSOverviewSection />
      <WSValueSection />
      <WSCasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
