"use client"

import { memo } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Image from "next/image"

// 减少客户数量，优化性能
const customerRows = [
  [
    { name: "国家开发银行", logo: "/images/customers/guojia-kaifa-bank.png" },
    { name: "平安科技", logo: "/images/customers/pingan-tech.webp" },
    { name: "国家开发投资集团有限公司", logo: "/images/customers/guojia-touzi.png" },
    { name: "东风汽车集团有限公司", logo: "/images/customers/dongfeng-auto.png" },
    { name: "永诚保险", logo: "/images/customers/yongcheng-insurance.png" },
    { name: "山东能源集团", logo: "/images/customers/shandong-energy.png" },
    { name: "山东黄金集团", logo: "/images/customers/shandong-gold.jpg" },
    { name: "工商银行", logo: "/images/customers/icbc.png" },
  ],
  [
    { name: "浪潮", logo: "/images/customers/langchao.png" },
    { name: "湖南银行", logo: "/images/customers/hunan-bank.png" },
    { name: "国投财务有限公司", logo: "/images/customers/guotou-finance.png" },
    { name: "广州农商行", logo: "/images/customers/guangzhou-rural-bank.png" },
    { name: "广发银行", logo: "/images/customers/guangfa-bank.png" },
    { name: "兴业银行", logo: "/images/customers/xingye-bank.png" },
    { name: "齐鲁银行", logo: "/images/customers/qilu-bank.png" },
    { name: "国家电投", logo: "/images/customers/spic.png" },
  ],
]

// 使用 memo 避免不必要的重渲染
const LogoCard = memo(function LogoCard({ customer }: { customer: { name: string; logo: string } }) {
  return (
    <div
      className="customer-logo-card flex h-[80px] w-[200px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-background px-6 md:h-[100px] md:w-[240px] lg:h-[110px] lg:w-[260px] 3xl:h-[130px] 3xl:w-[300px]"
      title={customer.name}
    >
      {customer.logo ? (
        <Image
          src={customer.logo}
          alt={customer.name}
          width={200}
          height={80}
          loading="lazy"
          quality={60}
          className="h-auto max-h-full w-auto max-w-full object-contain"
        />
      ) : (
        <span className="select-none text-sm font-medium text-muted-foreground">
          {customer.name}
        </span>
      )}
    </div>
  )
})

export function CustomersSection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
      {/* 简化背景装饰 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#BF1920]/[0.015] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-10 text-center lg:mb-14 3xl:mb-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-[32px] 3xl:text-[40px]">
              我们的客户
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-primary 3xl:w-16" />
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
              <div className={`flex gap-5 md:gap-6 3xl:gap-8 ${rowIdx === 0 ? 'customer-marquee-track-optimized' : 'customer-marquee-track-reverse-optimized'}`}>
                {[...Array(2)].map((_, setIdx) =>
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
