import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyTabs } from "@/components/about/company-tabs"
import { ContactSection } from "@/components/about/contact-section"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "公司介绍 - 中创软件",
  description: "了解中创软件的发展历程、公司荣誉和产品应用",
}

export default function CompanyIntroductionPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <AboutHeroSection />
      <CompanyTabs />
      
      {/* Contact Section - 第二模块 */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <ContactSection />
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
