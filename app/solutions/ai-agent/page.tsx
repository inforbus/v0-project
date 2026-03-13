import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"
import { SolutionHeroSection } from "@/components/solutions/hero-section"
import { SolutionOverviewSection } from "@/components/solutions/overview-section"
import { SolutionValueSection } from "@/components/solutions/value-section"
import { SolutionCasesSection } from "@/components/solutions/cases-section"

export const metadata = {
  title: "AI 智能体管理平台解决方案 | 中创软件",
  description: "AI 智能体管理平台解决方案",
}

export default function AIAgentSolutionPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <SolutionHeroSection type="ai-agent" />
      <SolutionOverviewSection type="ai-agent" />
      <SolutionValueSection type="ai-agent" />
      <SolutionCasesSection type="ai-agent" />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
