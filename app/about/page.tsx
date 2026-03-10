import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyIntroSection } from "@/components/about/company-intro-section"
import { ContactForm } from "@/components/shared/contact-form"
import { Footer } from "@/components/shared/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <AboutHeroSection />
      <CompanyIntroSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
