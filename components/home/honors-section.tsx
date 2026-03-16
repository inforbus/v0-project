import React from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const row1 = [
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E6%8A%80%E6%9C%AF%E6%B4%BB%E5%8A%A8%E5%8D%95%E4%BD%8D.png-YOte9NjBhrswpqcBFJBIhLNG1qlcbe.jpeg", title: "信息技术应用创新工作委员会技术活动单位", num: "01" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AA%E6%9D%A5%E4%BA%A7%E4%B8%9A%E4%B9%8B%E6%98%9F.png-9V5P6hbWhoo0Wo3NMA3ZLVRQ3PORhg.jpeg", title: "2025年度未来产业之星上市公司", num: "02" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E5%8D%93%E8%B6%8A%E8%B4%A1%E7%8C%AE%E6%88%90%E5%91%98%E5%8D%95%E4%BD%8D.png-EeHvKMcsV0P4vaiVdD7flGCUUUC713.jpeg", title: "2025年度卓越贡献成员单位", num: "03" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-2025%E5%B9%B4%E5%BA%A6%E8%80%83%E6%A0%B8%E7%AD%89%E7%BA%A7%E4%BC%98%E7%A7%80.png-kMWlUOGfECF81211hn0z05mVaPp3B6.jpeg", title: "2024-2025年度考核等级优秀", num: "04" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B_01.png-ZOgrSdyWaNs7qV4i6B1GnYfc6n0CZy.jpeg", title: "信创数智技术服务能力一级-数据服务能力", num: "05" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%B0%E5%9E%8B%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E4%BC%98%E7%A7%80%E8%A7%A3%E5%86%B3%E6%96%B9.png-crXz5qpwvH40cgBNWiV0COnx1vN8Dk.jpeg", title: "新型智慧城市优秀解决方案", num: "06" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E7%9C%81%E6%95%B0%E6%8D%AE%E6%B2%BB%E7%90%86%E4%BC%98%E7%A7%80%E4%BA%A7%E5%93%81-dDIDElUIZeoIZmzprr9byWfcm3IsQt.jpg", title: "山东省数据治理优秀产品", num: "07" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AC%AC%E5%85%AD%E5%B1%8A%E6%B5%8E%E5%8D%97%E5%B8%82%E7%BD%91%E7%BB%9C%E5%92%8C%E6%95%B0%E6%8D%AE%E5%AE%89%E5%85%A8%E6%8A%80%E6%9C%AF%E6%94%AF%E6%92%91%E5%8D%95%E4%BD%8D.png-oCJJKqM4nLFkKvaAncSJDtYWaACGfI.jpeg", title: "第六届济南市网络安全技术支撑单位", num: "08" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E8%BD%AF%E4%BB%B6%E5%92%8C%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%90%8D%E7%89%8C%E4%BC%81%E4%B8%9A.png-85qwN4qnq7P14bL4Bfs3i1vXYRbw0A.jpeg", title: "2025年度名牌企业", num: "09" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E5%B9%B4%E5%88%9B%E6%96%B0%E8%BD%AF%E4%BB%B6%E4%BA%A7%E5%93%81-YfzgOKjRRA4c3y816B9qXnHZL2Ogpe.jpg", title: "2024年创新软件产品", num: "10" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E5%B9%B4%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%85%B8%E5%9E%8B%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-H72dzePW6mWmgguBzd7QUtetnVOpvG.jpg", title: "2024年创新典型解决方案", num: "11" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E6%95%B0%E5%AD%97%E7%94%9F%E6%80%81%E4%B8%AD%E9%97%B4%E4%BB%B6%E9%A2%86%E5%86%9B%E4%BC%81%E4%B8%9A-HiW4HNevrahTz497FPRlV8XAtWVhL5.jpg", title: "2024数字生态中间件领军企业", num: "12" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ITSS%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%88%86%E4%BC%9A%E4%BC%9A%E5%91%98%E5%8D%95%E4%BD%8D-0J9MXHjw2fmClKWVzV8aeA32MCm0x7.jpg", title: "ITSS信息技术服务分会会员单位", num: "13" },
]

const row2 = [
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%87%91%E9%BC%8E%E7%AD%91%E5%9F%BA%E5%A5%96.png-eu4Mfhr14fUD0LYcyFHvzt8ZPfpKr2.jpeg", title: "金鼎筑基奖", num: "14" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4%E5%BA%A6%E8%BD%AF%E4%BB%B6%E5%92%8C%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E7%AB%9E%E4%BA%89%E5%8A%9B%E7%99%BE%E5%BC%BA%E4%BC%81%E4%B8%9A.png-LxJB64BMHGsvFh178ef902PtGf7eOk.jpeg", title: "2025年度竞争力百强企业", num: "15" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E4%BF%A1%E5%88%9B%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%96%BD%E8%83%BD%E5%8A%9B_01.png-fw5hiO3eAY4xlBx0IzKAkA4Gwv0Ihm.jpeg", title: "信创工程实施能力一级证书", num: "16" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%E5%B9%B4AI%20Cloud%E5%88%9B%E6%96%B0%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5AI%20Cloud%E4%B8%AD%E9%97%B4%E4%BB%B6.png-9V5P6hbWhoo0Wo3NMA3ZLVRQ3PORhg.jpeg", title: "2025年AI Cloud创新应用实践", num: "17" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E7%BD%91%E7%BB%9C%E4%BA%A7%E5%93%81%E5%AE%89%E5%85%A8%E8%83%BD%E5%8A%9B%E6%8F%90%E5%8D%87%E8%AE%A1%E5%88%92%E4%BC%98%E7%A7%80%E5%8F%82%E4%B8%8E%E5%8D%95%E4%BD%8D.png-mqjdrgv5v1PNNB1obtYLTkQ1U4Uacw.jpeg", title: "2024网络产品安全能力提升计划", num: "18" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E4%BF%A1%E5%88%9B%E5%B7%A5%E7%A8%8B%E5%AE%9E%E6%96%BD%E8%83%BD%E5%8A%9B_01.png-fw5hiO3eAY4xlBx0IzKAkA4Gwv0Ihm.jpeg", title: "信创数智工程实施能力", num: "19" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E5%B9%B4%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%85%B8%E5%9E%8B%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-H72dzePW6mWmgguBzd7QUtetnVOpvG.jpg", title: "中创高速公路智慧管控解决方案", num: "20" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E7%9C%81%E6%95%B0%E6%8D%AE%E6%B2%BB%E7%90%86%E4%BC%98%E7%A7%80%E4%BA%A7%E5%93%81-dDIDElUIZeoIZmzprr9byWfcm3IsQt.jpg", title: "山东省数据治理优秀产品证书", num: "21" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E5%88%9B%E6%95%B0%E6%99%BA%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B%E4%B8%80%E7%BA%A7-%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1%E8%83%BD%E5%8A%9B_01.png-ZOgrSdyWaNs7qV4i6B1GnYfc6n0CZy.jpeg", title: "信创数据服务能力一级", num: "22" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%88%9B%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%AD%E9%97%B4%E4%BB%B6_01.png-TfMwx0z5j485cQfQ8MHPW57tjHie4g.jpeg", title: "中创智能体中间件", num: "23" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%B0%E5%9E%8B%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E4%BC%98%E7%A7%80%E8%A7%A3%E5%86%B3%E6%96%B9.png-crXz5qpwvH40cgBNWiV0COnx1vN8Dk.jpeg", title: "新型智慧城市优秀解决方案", num: "24" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ITSS%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%88%86%E4%BC%9A%E4%BC%9A%E5%91%98%E5%8D%95%E4%BD%8D-0J9MXHjw2fmClKWVzV8aeA32MCm0x7.jpg", title: "ITSS服务分会会员单位", num: "25" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%E6%95%B0%E5%AD%97%E7%94%9F%E6%80%81%E4%B8%AD%E9%97%B4%E4%BB%B6%E9%A2%86%E5%86%9B%E4%BC%81%E4%B8%9A-HiW4HNevrahTz497FPRlV8XAtWVhL5.jpg", title: "数字生态中间件领军企业", num: "26" },
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
