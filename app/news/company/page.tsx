import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Link from "next/link"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { getNavItems } from "@/components/shared/nav-data"

export const metadata = {
  title: "公司要闻 - 中创股份",
  description: "中创股份最新的公司要闻和企业动态",
}

const newsItems = [
  {
    id: 1,
    title: "AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会",
    date: "2025-03-10",
    category: "公司新闻",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png",
    description: "近日，由中科软科技股份有限公司主办的\"2025软件技术大会\"在北京国家会议中心隆重举行。本次大会以\"AI重塑软件，赋能产业未来\"为主题，邀请了来自业界的专家学者和企业代表参加。",
    content: "大会现场，与会嘉宾深入探讨了AI技术在软件开发中的应用前景。中创股份以其在中间件和数字化平台领域的领先技术，为与会者展示了如何通过AI赋能企业数字化转型。中创股份的创新解决方案得到了与会者的高度关注和好评。\n\n本次大会是业界了解最新技术趋势的重要平台，中创股份将继续投入研发，为客户提供更加先进的产品和服务。",
  },
]

export default function CompanyNewsPage() {
  const navItems = getNavItems("/news/company")
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header navItems={navItems} />
      <main className="flex-1">
      {/* Hero Section with Banner */}
      <section className="relative overflow-hidden">
        {/* Banner Image */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png"
            alt="中创应用服务器软件 InforSuite AS"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="mb-6">
                <div className="w-24 h-1.5 bg-red-600" style={{ backgroundColor: "#BF1920" }}></div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6" style={{ color: "#332C2B", fontFamily: "'Source Han Sans CN', sans-serif" }}>
                中创应用服务器软件 InforSuite AS
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-3" style={{ color: "#332C2B", opacity: 0.8, fontFamily: "'Source Han Sans CN', sans-serif" }}>
                全面通过JaveEE、JakartaEE系列规范认证
              </p>
              <p className="text-lg md:text-xl text-gray-700" style={{ color: "#332C2B", opacity: 0.8, fontFamily: "'Source Han Sans CN', sans-serif" }}>
                国民经济重点行业规模化应用
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 md:py-16 lg:py-20 3xl:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
          <div className="space-y-8 md:space-y-12">
            {newsItems.map((item) => (
              <ScrollReveal key={item.id}>
                <article className="overflow-hidden rounded-lg border border-border">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "16 / 9" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 3xl:p-10">
                    <div className="flex items-center gap-4 text-sm md:text-base 3xl:text-lg">
                      <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-primary font-medium">
                        {item.category}
                      </span>
                      <time className="text-muted-foreground">{item.date}</time>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-foreground md:mt-6 md:text-3xl 3xl:text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-base text-muted-foreground leading-relaxed md:mt-6 md:text-lg 3xl:text-xl 3xl:leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 border-t border-border pt-6 md:mt-8 md:pt-8">
                      <p className="whitespace-pre-line text-base text-foreground leading-relaxed md:text-lg 3xl:text-xl 3xl:leading-relaxed">
                        {item.content}
                      </p>
                    </div>

                    <Link
                      href="/news"
                      className="mt-8 inline-flex items-center text-base font-medium text-primary transition-all duration-300 hover:gap-2 md:text-lg 3xl:text-xl"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                        <path d="M13 8H3M6 11L3 8L6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      返回新闻列表
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
