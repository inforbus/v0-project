import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyIntroSection } from "@/components/about/company-intro-section"
import { ContactForm } from "@/components/shared/contact-form"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export const metadata: Metadata = {
  title: "公司介绍 - 中创软件",
  description: "了解中创软件的发展历程、公司荣誉和产品应用",
}

export default function CompanyIntroductionPage() {
  const navItems = getNavItems("/about/introduction")

  return (
    <div className="min-h-screen w-full bg-background">
      <AboutHeroSection />
      <CompanyIntroSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
