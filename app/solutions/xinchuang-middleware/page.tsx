import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"
import { SolutionHeroSection } from "@/components/solutions/hero-section"
import { SolutionOverviewSection } from "@/components/solutions/overview-section"
import { SolutionValueSection } from "@/components/solutions/value-section"
import { SolutionCasesSection } from "@/components/solutions/cases-section"

export const metadata = {
  title: "信创全栈中间件解决方案 | 中创软件",
  description: "信创全栈中间件解决方案",
}

export default function XinchuangMiddlewareSolutionPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <SolutionHeroSection type="xinchuang-middleware" />
      <SolutionOverviewSection type="xinchuang-middleware" />
      <SolutionValueSection type="xinchuang-middleware" />
      <SolutionCasesSection type="xinchuang-middleware" />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
