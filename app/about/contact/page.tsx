import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyTabs } from "@/components/about/company-tabs"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "联系我们 - 中创软件",
  description: "中创软件的联系方式和办公地址",
}

export default function CompanyContactPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <AboutHeroSection />
      <CompanyTabs />
      <Footer />
    </div>
  )
}
