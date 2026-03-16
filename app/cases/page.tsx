import type { Metadata } from "next"
import { CasesHeroSection } from "@/components/cases/cases-hero"
import { CasesTabs } from "@/components/cases/cases-tabs"
import { ContactSection } from "@/components/about/contact-section"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "成功案例 - 中创软件",
  description: "中创软件成功案例展示，覆盖金融、政务、央企等多个关键领域，100+家大型企业用户选择中创中间件",
}

export default function CasesPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <CasesHeroSection />
      <CasesTabs />
      
      {/* Contact Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <ContactSection />
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
