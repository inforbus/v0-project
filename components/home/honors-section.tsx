import React from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const row1 = [
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CMMI%20DEV%205%E7%BA%A7%E8%AE%A4%E8%AF%81-96yjxWPJgFvcm63MuTIuAvhhPINBKV.jpg", title: "CMMI DEV 5级认证", num: "01" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%AB%98%E6%96%B0%E6%8A%80%E6%9C%AF%E4%BC%81%E4%B8%9A%E8%AE%A4%E8%AF%81-7xYKpLTzHeFI1OGMJVBMnM590DbUqc.jpg", title: "高新技术企业认证", num: "02" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO9001%E8%B4%A8%E9%87%8F%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81-4KG8T5EULxGDoRiGbZtYsCMDLXPfml.jpg", title: "ISO9001质量体系认证", num: "03" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO20000%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81-3zZyHRWiZRz8vgtoDJIjoE6hzqS7g6.jpg", title: "ISO20000信息技术服务管理体系认证", num: "04" },
  { img: "/images/honor-placeholder-05.jpg", title: "企业荣誉证书（待添加）", num: "05" },
]

const row2 = [
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB-T8fpuOjHx0A6Pdtl7xbzAZn2pCrcd7.jpg", title: "信息安全管理体系", num: "06" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81%E8%AF%81%E4%B9%A6-rIJHiArKUbTN6rE8O927ZicUp3zKuU.jpg", title: "职业健康安全管理体系认证证书", num: "07" },
  { img: "/images/honor-placeholder-08.jpg", title: "企业荣誉证书（待添加）", num: "08" },
  { img: "/images/honor-placeholder-09.jpg", title: "企业荣誉证书（待添加）", num: "09" },
]

function HonorCard({ honor, prefix, hideNum = false }: { honor: (typeof row1)[0]; prefix: string; hideNum?: boolean }) {
  return (
    <div className="group/honor relative flex w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-background shadow-sm transition-all duration-500 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.06] md:w-[320px] 3xl:w-[380px]">
      {!hideNum && <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-background/90 text-[10px] font-bold text-primary/60 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover/honor:border-primary/40 group-hover/honor:bg-primary group-hover/honor:text-primary-foreground group-hover/honor:shadow-md 3xl:h-9 3xl:w-9 3xl:text-xs">{honor.num}</div>}
      <div className="relative h-[160px] w-full overflow-hidden md:h-[175px] 3xl:h-[210px]">
        <Image src={honor.img || "/placeholder.svg"} alt={honor.title} fill className="object-cover transition-transform duration-700 group-hover/honor:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>
      <div className="flex items-center gap-3 px-4 py-3.5 3xl:px-5 3xl:py-4">
        <div className="h-4 w-[3px] flex-shrink-0 rounded-full bg-primary transition-all duration-300 group-hover/honor:h-5 group-hover/honor:shadow-[0_0_8px_rgba(191,25,32,0.4)]" />
        <h4 className="text-sm font-medium text-foreground/80 transition-colors duration-300 group-hover/honor:text-foreground 3xl:text-base">{honor.title}</h4>
      </div>
    </div>
  )
}

export function HonorsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-16 md:py-20 lg:py-[90px] 3xl:py-[110px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BF1920]/[0.03] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.4]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="honor-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.6" fill="#BF1920" opacity="0.08" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#honor-dots)" />
          </svg>
        </div>
        <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-[#BF1920]/15" style={{ animation: "particle-float 6s ease-in-out infinite" }} />
        <div className="absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 1s infinite" }} />
        <div className="absolute left-[15%] bottom-[25%] h-1 w-1 rounded-full bg-[#242222]/10" style={{ animation: "particle-float 7s ease-in-out 2s infinite" }} />
        <div className="absolute right-[20%] bottom-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 0.5s infinite" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-12 text-center lg:mb-16 3xl:mb-20">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl 3xl:text-[40px]">公司荣誉</h2>
            <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-primary animate-line-sweep 3xl:w-16" />
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:mt-5 md:text-base 3xl:text-lg">深耕行业30载，以技术创新铸就卓越品质</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-10 flex flex-col gap-6 3xl:gap-8">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#F7F8FA] to-transparent md:w-32 lg:w-44" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#F7F8FA] to-transparent md:w-32 lg:w-44" />

        <ScrollReveal delay={100}>
          <div className="honor-marquee-wrapper relative">
            <div className="honor-marquee-track flex gap-5 3xl:gap-6">
              {[...Array(2)].map((_, setIdx) => row1.map((honor, i) => <HonorCard key={`r1-${setIdx}-${i}`} honor={honor} prefix="row1" hideNum={true} />))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="honor-marquee-wrapper relative">
            <div className="honor-marquee-track-reverse flex gap-5 3xl:gap-6">
              {[...Array(2)].map((_, setIdx) => row2.map((honor, i) => <HonorCard key={`r2-${setIdx}-${i}`} honor={honor} prefix="row2" hideNum={true} />))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
