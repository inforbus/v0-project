"use client"

import { useMemo } from "react"
import Link from "next/link"
import { getNavItems } from "@/components/shared/nav-data"
import { Header } from "@/components/shared/header"

const solutionContent = {
  "xinchuang-middleware": {
    title: "信创全栈中间件解决方案",
    description: "完整的信创中间件解决方案",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png",
  },
  "ai-agent": {
    title: "AI 智能体管理平台解决方案",
    description: "AI 智能体管理平台解决方案",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png",
  },
  "disaster-recovery": {
    title: "信创中间件双活容灾解决方案",
    description: "信创中间件双活容灾解决方案",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png",
  },
}

export function SolutionHeroSection({ type = "xinchuang-middleware" }: { type?: string }) {
  const navItems = useMemo(() => getNavItems("/solutions"), [])
  const content = solutionContent[type as keyof typeof solutionContent] || solutionContent["xinchuang-middleware"]

  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Banner image */}
      <img
        src={content.image}
        alt={content.title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} variant="overlay" isDarkBg={false} />

      {/* Main title and subtitle text content */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
        {/* Title */}
        <h1
          className="font-sans font-bold text-[#332C2B]"
          style={{ fontSize: 'clamp(14px, 2vw, 28px)', lineHeight: '1.3' }}
        >
          {content.title}
        </h1>

        {/* Red accent line */}
        <div
          className="bg-[#BF1920]"
          style={{ width: 'clamp(40px, 4vw, 60px)', height: '3px', marginTop: 'clamp(8px, 1.2vw, 18px)' }}
        />

        {/* Subtitle */}
        <p
          className="font-sans font-normal text-[#332C2B]"
          style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(6px, 0.8vw, 12px)' }}
        >
          {content.description}
        </p>
      </div>
    </div>
  )
}
