import type { Metadata } from "next"
import { Footer } from "@/components/shared/footer"
import { CareersContent } from "@/components/careers/careers-content"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export const metadata: Metadata = {
  title: "加入我们 - 人才招聘",
  description: "中创股份人才招聘，欢迎加入我们，共建数字中国",
}

const navItems = getNavItems("/about/careers")

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="relative overflow-hidden bg-[#1a1a1a]">
        <Header navItems={navItems} variant="overlay" />
        <CareersContent />
      </div>
      <Footer />
    </div>
  )
}
