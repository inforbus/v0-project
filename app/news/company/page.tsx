import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

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
    image: "/images/news-main.png",
    description: "近日，由中科软科技股份有限公司主办的\"2025软件技术大会\"在北京国家会议中心隆重举行。本次大会以\"AI重塑软件，赋能产业未来\"为主题，邀请了来自业界的专家学者和企业代表参加。",
    content: "大会现场，与会嘉宾深入探讨了AI技术在软件开发中的应用前景。中创股份以其在中间件和数字化平台领域的领先技术，为与会者展示了如何通过AI赋能企业数字化转型。中创股份的创新解决方案得到了与会者的高度关注和好评。\n\n本次大会是业界了解最新技术趋势的重要平台，中创股份将继续投入研发，为客户提供更加先进的产品和服务。",
  },
]

export default function CompanyNewsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-12 md:py-16 lg:py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Link href="/news" className="text-primary hover:underline">
                新闻资讯
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">公司要闻</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl 3xl:text-6xl">
              公司要闻
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg 3xl:text-xl">
              了解中创股份的最新发展动态和企业新闻
            </p>
          </ScrollReveal>
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
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
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
  )
}
