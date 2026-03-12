import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { getNavItems } from "@/components/shared/nav-data"
import { CompanyNewsList } from "@/components/news/company-news-list"

export const metadata = {
  title: "公司要闻 - 中创股份",
  description: "中创股份最新的公司要闻和企业动态",
}

export default function CompanyNewsPage() {
  const navItems = getNavItems("/news/company")
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header navItems={navItems} />
      <main className="flex-1">
        <CompanyNewsList />
      </main>
      <Footer />
    </div>
  )
}
