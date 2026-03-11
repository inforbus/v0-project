"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"

const valueItems = [
  {
    title: "多重防护、网站安全加固",
    circleLine1: "多重防护、",
    circleLine2: "网站安全加固",
    prevLine1: "深度适配、",
    prevLine2: "国产支持",
    nextLine1: "7*24网站发布",
    nextLine2: "权验与审计",
    description: "构建应用攻击实时防护、篡改实时阻断、木马病毒识别告警、网站内容发布实时审计的多重防护体系。",
    icon: "/images/ws-icon-1.png",
  },
  {
    title: "7*24网站发布权验与审计",
    circleLine1: "7*24网站发布",
    circleLine2: "权验与审计",
    prevLine1: "多重防护、",
    prevLine2: "网站安全加固",
    nextLine1: "双机热备、",
    nextLine2: "运行可靠",
    description: "实时校验和审计网站文件是否含有隐式篡改、恶意链接、木马病毒、确保网站文件正确无误。",
    icon: "/images/ws-icon-2.png",
  },
  {
    title: "双机热备、运行可靠",
    circleLine1: "双机热备、",
    circleLine2: "运行可靠",
    prevLine1: "7*24网站发布",
    prevLine2: "权验与审计",
    nextLine1: "助力网络安全",
    nextLine2: "等级保护测评",
    description: "提供特有的"双引擎"篡改恢复技术，让防篡改7*24小时全时覆盖，全时防御。",
    icon: "/images/ws-icon-3.png",
  },
  {
    title: "助力网络安全等级保护测评",
    circleLine1: "助力网络安全",
    circleLine2: "等级保护测评",
    prevLine1: "双机热备、",
    prevLine2: "运行可靠",
    nextLine1: "深度适配、",
    nextLine2: "国产支持",
    description: "实现信息系统的防攻击、防篡改，帮助用户信息系统等级保护建设检测评工作的顺利通过。",
    icon: "/images/ws-icon-4.png",
  },
  {
    title: "深度适配、国产支持",
    circleLine1: "深度适配、",
    circleLine2: "国产支持",
    prevLine1: "助力网络安全",
    prevLine2: "等级保护测评",
    nextLine1: "多重防护、",
    nextLine2: "网站安全加固",
    description: "经4000+用户、上万个复杂环境验证，支持国家信创环境和主流操作系统、数据库、Web及应用服务器。",
    icon: "/images/ws-icon-5.png",
  },
]

export function WSValueSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + valueItems.length) % valueItems.length)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % valueItems.length)
  }, [])

  const startAutoPlay = useCallback(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % valueItems.length)
    }, 6000)
  }, [])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [startAutoPlay, stopAutoPlay])

  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-4 py-12 md:py-[50px] 3xl:py-[70px]" ref={containerRef} onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
      <div className="mb-8 text-center md:mb-[50px]">
        <h2 className="text-2xl font-bold leading-[100%] text-[#242222] md:text-3xl 3xl:text-[40px]">产品特点</h2>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Central Circle Display */}
        <div className="flex w-full flex-col items-center justify-center">
          {/* Center Circle */}
          <div className="relative mb-8 flex h-[240px] w-[240px] items-center justify-center md:mb-12 md:h-[320px] md:w-[320px] 3xl:mb-16 3xl:h-[400px] 3xl:w-[400px]">
            {/* Outer Ring */}
            <svg className="absolute h-full w-full" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="190" fill="none" stroke="#E8E8E8" strokeWidth="2" />
              <circle cx="200" cy="200" r="160" fill="none" stroke="#E8E8E8" strokeWidth="1" />
            </svg>

            {/* Previous Item Text - Left */}
            <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center text-center">
              <button onClick={handlePrevious} className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg md:h-12 md:w-12" style={{ boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.1)" }}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="group-hover:scale-110 transition-transform">
                  <path d="M1 5L5.5 1.5M1 5L5.5 8.5M1 5H15" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="mt-2 text-xs leading-tight text-[#999] md:mt-3 md:text-sm 3xl:text-base">
                <div>{valueItems[(currentIndex - 1 + valueItems.length) % valueItems.length].prevLine1}</div>
                <div>{valueItems[(currentIndex - 1 + valueItems.length) % valueItems.length].prevLine2}</div>
              </div>
            </div>

            {/* Center Circle Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center md:h-[80px] md:w-[80px] 3xl:h-[100px] 3xl:w-[100px]">
                <Image src={valueItems[currentIndex].icon} alt={valueItems[currentIndex].title} width={100} height={100} className="h-full w-full object-contain" />
              </div>
              <h3 className="text-center text-sm font-bold text-[#242222] md:text-base 3xl:text-lg" style={{ maxWidth: "120px" }}>
                {valueItems[currentIndex].title}
              </h3>
            </div>

            {/* Next Item Text - Right */}
            <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center text-center">
              <button onClick={handleNext} className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg md:h-12 md:w-12" style={{ boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.1)" }}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="group-hover:scale-110 transition-transform">
                  <path d="M15 5L10.5 1.5M15 5L10.5 8.5M15 5H1" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="mt-2 text-xs leading-tight text-[#999] md:mt-3 md:text-sm 3xl:text-base">
                <div>{valueItems[(currentIndex + 1) % valueItems.length].nextLine1}</div>
                <div>{valueItems[(currentIndex + 1) % valueItems.length].nextLine2}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px] text-center">
            <p className="text-sm leading-[160%] text-[#666] md:text-base 3xl:text-lg">{valueItems[currentIndex].description}</p>
          </div>

          {/* Dots Navigation */}
          <div className="mt-8 flex items-center justify-center gap-2 md:mt-12">
            {valueItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="h-2 w-2 rounded-full transition-all duration-300 md:h-2.5 md:w-2.5"
                style={{ backgroundColor: idx === currentIndex ? "#BF1920" : "#E8E8E8" }}
                aria-label={`切换到第 ${idx + 1} 个特点`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
