import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"
import { SolutionHeroSection } from "@/components/solutions/hero-section"
import { SolutionOverviewSection } from "@/components/solutions/overview-section"
import { SolutionValueSection } from "@/components/solutions/value-section"
import { SolutionCasesSection } from "@/components/solutions/cases-section"

export const metadata = {
  title: "信创中间件双活容灾解决方案 | 中创软件",
  description: "信创中间件双活容灾解决方案",
}

export default function DisasterRecoverySolutionPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <SolutionHeroSection type="disaster-recovery" />
      <SolutionOverviewSection type="disaster-recovery" />
      <SolutionValueSection type="disaster-recovery" />
      <SolutionCasesSection type="disaster-recovery" />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
