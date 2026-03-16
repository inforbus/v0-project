import type { Metadata } from "next"
import { CasesHeroSection } from "@/components/cases/hero-section"
import { CasesTabs } from "@/components/cases/cases-tabs"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "案例中心 - 中创软件",
  description: "了解中创软件在金融、政府、企业等行业的成功案例",
}

export default function CasesPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <CasesHeroSection />
      <CasesTabs />
      <Footer />
    </div>
  )
}
