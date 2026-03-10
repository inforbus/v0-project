import type { Metadata } from "next"
import { ContactForm } from "@/components/shared/contact-form"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "公司介绍 - 中创软件",
  description: "了解中创软件的发展历程、公司荣誉和产品应用",
}

export default function CompanyIntroductionPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <ContactForm />
      <Footer />
    </div>
  )
}
