"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

const customerRows = [
  [
    { name: "华为", abbr: "HUAWEI", color: "#CF0A2C" },
    { name: "中国移动", abbr: "中国移动", color: "#006DB7" },
    { name: "中国电信", abbr: "中国电信", color: "#009DDC" },
    { name: "中国联通", abbr: "中国联通", color: "#E60012" },
    { name: "腾讯", abbr: "Tencent", color: "#1E8FE1" },
    { name: "阿里巴巴", abbr: "Alibaba", color: "#FF6A00" },
    { name: "百度", abbr: "Baidu", color: "#2932E1" },
    { name: "京东", abbr: "JD.com", color: "#E2231A" },
    { name: "字节跳动", abbr: "ByteDance", color: "#161823" },
    { name: "网易", abbr: "NetEase", color: "#C41230" },
  ],
  [
    { name: "中国工商银行", abbr: "工商银行", color: "#B71C2C" },
    { name: "中国银行", abbr: "中国银行", color: "#C01C2C" },
    { name: "中国建设银行", abbr: "建设银行", color: "#005BAC" },
    { name: "中国农业银行", abbr: "农业银行", color: "#008540" },
    { name: "交通银行", abbr: "交通银行", color: "#003DA5" },
    { name: "招商银行", abbr: "招商银行", color: "#C41022" },
    { name: "中信银行", abbr: "中信银行", color: "#E60012" },
    { name: "浦发银行", abbr: "浦发银行", color: "#00479D" },
    { name: "兴业银行", abbr: "兴业银行", color: "#003B71" },
    { name: "民生银行", abbr: "民生银行", color: "#008060" },
  ],
]

function LogoCard({ customer }: { customer: { name: string; abbr: string; color: string } }) {
  return (
    <div
      className="group/logo flex h-[80px] w-[200px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-background px-6 transition-all duration-300 hover:border-border hover:shadow-md md:h-[100px] md:w-[240px] lg:h-[110px] lg:w-[260px] 3xl:h-[130px] 3xl:w-[300px]"
      title={customer.name}
    >
      <span
        className="select-none text-base font-bold transition-transform duration-300 group-hover/logo:scale-105 md:text-lg"
        style={{ color: customer.color }}
      >
        {customer.abbr}
      </span>
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
