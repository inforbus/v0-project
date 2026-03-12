import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { NewsHeroSection } from "@/components/news/news-hero-section"
import { CompanyNewsList } from "@/components/news/company-news-list"
import { getNavItems } from "@/components/shared/nav-data"

export const metadata = {
  title: "公司要闻 - 中创股份",
  description: "中创股份最新的公司要闻和企业动态",
}

export default function CompanyNewsPage() {
  const navItems = getNavItems("/news/company")
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header navItems={navItems} />
      <NewsHeroSection />
      <main className="flex-1">
        <CompanyNewsList />
      </main>
      <Footer />
    </div>
  )
}
