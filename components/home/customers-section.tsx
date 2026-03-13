"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Image from "next/image"

const customerRows = [
  [
    { name: "国家开发银行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E9%93%B6%E8%A1%8C-QJdfdGZNIsnDisTWkbWsVwA0twOW0N.png" },
    { name: "平安科技", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%B3%E5%AE%89%E7%A7%91%E6%8A%80-xP9pkTi2BHHS4KVnGmteqwog1u0Lf8.webp" },
    { name: "国家开发投资集团有限公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-iWXxncUuKsQMZ5r5NtBexjmXCGu4xM.png" },
    { name: "东风汽车集团有限公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%9C%E9%A3%8E%E6%B1%BD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-YuEYHQEzCVX3UayJstXwuHPG6Lbn7l.png" },
    { name: "永诚保险", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B0%B8%E8%AF%9A%E4%BF%9D%E9%99%A9-3Klfelanu55QyaM7DcSXK4JZNQeP8R.png" },
    { name: "山东能源集团", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E8%83%BD%E6%BA%90%E9%9B%86%E5%9B%A2.jpg-fj8aRQ0JNf9smG4X1kKhhPbWePsQLA.png" },
    { name: "山东黄金集团", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E9%BB%84%E9%87%91%E9%9B%86%E5%9B%A2-F735TVhIShdkZ0Cm1299UwfIHRf7kH.jpg" },
    { name: "工商银行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C-DCJSc5WeEczMx25juDBvln6gKpzbiQ.png" },
    { name: "招商银行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C-QspcDnw5FdfYdPpWteNWEPJ1AsRulx.png" },
    { name: "招商局集团有限公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E5%B1%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Xs5BU1S5TdTp8QTucenxvetH9oubTs.png" },
  ],
  [
    { name: "浪潮", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%AA%E6%BD%AE-5p5acCjUSHCcOu6IM16b2dbYJDs8ix.png" },
    { name: "湖南银行（华融湘江银行更名）", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B9%96%E5%8D%97%E9%93%B6%E8%A1%8C%EF%BC%88%E5%8D%8E%E8%9E%8D%E6%B9%98%E6%B1%9F%E9%93%B6%E8%A1%8C%E6%9B%B4%E5%90%8D%EF%BC%89-aXpKMwJ8E7wGlGT2Kf4mVXXDJqFHb5.png" },
    { name: "国投财务有限公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E6%8A%95%E8%B4%A2%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Ewio7H5oodUBAVp2ae6JZeaqc4cDON.png" },
    { name: "广州农商行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%B7%9E%E5%86%9C%E5%95%86%E8%A1%8C-JCredxRnJvGmvs5fONWkhh0SY5za16.png" },
    { name: "广发银行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%8F%91%E9%93%B6%E8%A1%8C-waESbZ4nDJqbQyO61QcLm5lAzmwpsJ.png" },
    { name: "兴业银行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B4%E4%B8%9A%E9%93%B6%E8%A1%8C-7czOLZOZ1OhoWy7r3cjVQGKAewJJxs.png" },
    { name: "中国兵器工业集团有限公司", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%85%B5%E5%99%A8%E5%B7%A5%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-keXrfASMCnX1ANixeSVchG13T3EYel.jpg" },
    { name: "齐鲁银行", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BD%90%E9%B2%81%E9%93%B6%E8%A1%8C-xjfWBrVO1q3T7ql2sz4JMd3QoMYBfV.png" },
    { name: "国家电投", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E7%94%B5%E6%8A%95-ZVKZkpJmECVjdDeKihsHTodHBEbsJg.png" },
    { name: "客户位置20", logo: "" },
    { name: "客户位置21", logo: "" },
    { name: "客户位置22", logo: "" },
    { name: "客户位置23", logo: "" },
    { name: "客户位置24", logo: "" },
    { name: "客户位置25", logo: "" },
    { name: "客户位置26", logo: "" },
    { name: "客户位置27", logo: "" },
    { name: "客户位置28", logo: "" },
    { name: "客户位置29", logo: "" },
    { name: "客户位置30", logo: "" },
    { name: "客户位置31", logo: "" },
    { name: "客户位置32", logo: "" },
    { name: "客户位置33", logo: "" },
  ],
]

function LogoCard({ customer }: { customer: { name: string; logo: string } }) {
  return (
    <div
      className="group/logo flex h-[80px] w-[200px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-background px-6 transition-all duration-300 hover:border-border hover:shadow-md md:h-[100px] md:w-[240px] lg:h-[110px] lg:w-[260px] 3xl:h-[130px] 3xl:w-[300px]"
      title={customer.name}
    >
      {customer.logo ? (
        <Image
          src={customer.logo}
          alt={customer.name}
          width={200}
          height={80}
          className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
        />
      ) : (
        <span className="select-none text-sm font-medium text-muted-foreground">
          {customer.name}
        </span>
      )}
    </div>
  )
}

export function CustomersSection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#BF1920]/[0.015] blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[#BF1920]/[0.01] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-10 text-center lg:mb-14 3xl:mb-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-[32px] 3xl:text-[40px]">
              我们的客户
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-primary animate-line-sweep 3xl:w-16" />
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:mt-4 md:text-base 3xl:text-lg">
              深耕行业多年，赢得众多头部客户信赖
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-10 flex flex-col gap-5 md:gap-6 3xl:gap-8">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-background to-transparent md:w-28 lg:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-background to-transparent md:w-28 lg:w-40" />

        {customerRows.map((row, rowIdx) => (
          <ScrollReveal key={rowIdx} delay={100 + rowIdx * 80}>
            <div className="customer-marquee-wrapper relative overflow-hidden">
              <div className="flex gap-5 md:gap-6 3xl:gap-8 customer-marquee-track">
                {[...Array(3)].map((_, setIdx) =>
                  row.map((customer, i) => (
                    <LogoCard key={`r${rowIdx}-s${setIdx}-${i}`} customer={customer} />
                  ))
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
