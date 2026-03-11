import { PaaSHeroSection } from "@/components/digital-platform/paas/hero-section"
import { PaaSOverviewSection } from "@/components/digital-platform/paas/overview-section"
import { PaaSFeaturesSection } from "@/components/digital-platform/paas/features-section"
import { PaaSCasesSection } from "@/components/digital-platform/paas/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export const metadata = {
  title: "中创PaaS平台 | 企业级容器云平台",
  description: "中创PaaS平台是一款基于容器技术的企业级容器云平台软件，提供应用编排、微服务治理、DevOps一站式云原生解决方案。",
}

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
