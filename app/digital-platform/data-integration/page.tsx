import { DataIntegrationHeroSection } from "@/components/digital-platform/data-integration/hero-section"
import { DataIntegrationOverview } from "@/components/digital-platform/data-integration/overview-section"
import { DataIntegrationFeatures } from "@/components/digital-platform/data-integration/features-section"
import { DataIntegrationArchitecture } from "@/components/digital-platform/data-integration/architecture-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function DataIntegrationPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <DataIntegrationHeroSection />
      <DataIntegrationOverview />
      <DataIntegrationArchitecture />
      <DataIntegrationFeatures />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
