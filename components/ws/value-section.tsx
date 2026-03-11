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
    description: '提供特有的"双引擎"篡改恢复技术，让防篡改7*24小时全时覆盖，全时防御。',
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
    description: "实现信息系统的防攻击、防篡改，帮助用户信息系统等级保护建设检测评估工作的顺利通过。",
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
    description: "经4000+用户、上万个生产环境验证，支持国家信创环境和主流操作系统、数据库、Web及应用服务器。",
    icon: "/images/ws-icon-5.png",
  },
]

const AUTO_PLAY_DURATION = 5000

export function WSValueSection() {
  const [valueIndex, setValueIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [fadePhase, setFadePhase] = useState<"visible" | "fadeOut" | "fadeIn">("visible")
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null)
  const startTimeRef = useRef<number>(0)
  const isPausedRef = useRef(false)

  const goToIndex = useCallback((index: number) => {
    if (fadePhase !== "visible" || index === valueIndex) return
    setFadePhase("fadeOut")
    setProgress(0)
    setTimeout(() => {
      setValueIndex(index)
      setDisplayIndex(index)
      setFadePhase("fadeIn")
      setTimeout(() => {
        setFadePhase("visible")
      }, 250)
    }, 250)
  }, [fadePhase, valueIndex])

  const goToNext = useCallback(() => {
    setFadePhase("fadeOut")
    setProgress(0)
    setTimeout(() => {
      setValueIndex((prev) => (prev + 1) % valueItems.length)
      setDisplayIndex((prev) => (prev + 1) % valueItems.length)
      setFadePhase("fadeIn")
      setTimeout(() => {
        setFadePhase("visible")
      }, 250)
    }, 250)
  }, [])

  // Auto-play with progress bar
  useEffect(() => {
    if (isPausedRef.current) return

    startTimeRef.current = Date.now()

    const interval = setInterval(() => {
      goToNext()
      startTimeRef.current = Date.now()
      setProgress(0)
    }, AUTO_PLAY_DURATION)

    const updateProgress = () => {
      if (!isPausedRef.current) {
        const elapsed = Date.now() - startTimeRef.current
        setProgress((elapsed / AUTO_PLAY_DURATION) * 100)
      }
      progressRef.current = requestAnimationFrame(updateProgress)
    }
    progressRef.current = requestAnimationFrame(updateProgress)

    return () => {
      clearInterval(interval)
      if (progressRef.current) cancelAnimationFrame(progressRef.current)
    }
  }, [goToNext])

  const handleMouseEnter = () => {
    isPausedRef.current = true
  }

  const handleMouseLeave = () => {
    isPausedRef.current = false
    setProgress(0)
    startTimeRef.current = Date.now()
  }

  const currentItem = valueItems[displayIndex]

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-white to-[#F9F7F9] px-4 py-16 md:py-24 lg:px-0 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-3xl font-bold text-[#242222] md:text-4xl lg:text-[40px]">产品特点</h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <div className="flex-1">
            {/* Prev Item */}
            <div className="relative flex h-56 items-center justify-center">
              {valueItems[(displayIndex - 1 + valueItems.length) % valueItems.length] && (
                <div className="text-center opacity-40">
                  <div className="text-sm text-[#999]">
                    {valueItems[(displayIndex - 1 + valueItems.length) % valueItems.length].prevLine1}
                  </div>
                  <div className="text-sm text-[#999]">
                    {valueItems[(displayIndex - 1 + valueItems.length) % valueItems.length].prevLine2}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center: Current Item with enhanced interaction */}
          <div
            className="flex w-full max-w-md flex-col items-center justify-center px-8 transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top indicator */}
            <div className="mb-6 h-1 w-16 bg-[#BF1920]" />

            {/* Icon */}
            {currentItem.icon && (
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
                <Image src={currentItem.icon} alt={currentItem.title} width={96} height={96} className="h-full w-full object-contain" />
              </div>
            )}

            {/* Title */}
            <h3 className="mb-4 text-center text-xl font-semibold text-[#242222] leading-relaxed">{currentItem.title}</h3>

            {/* Description */}
            <p className="mb-8 text-center text-sm leading-relaxed text-[#666]">{currentItem.description}</p>

            {/* Progress bar */}
            <div className="mb-6 h-1 w-full bg-[#f0f0f0]">
              <div className="h-full bg-[#BF1920] transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2">
              {valueItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === displayIndex ? "w-6 bg-[#BF1920]" : "w-2 bg-[#ddd] hover:bg-[#999]"}`}
                  aria-label={`Go to item ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            {/* Next Item */}
            <div className="relative flex h-56 items-center justify-center">
              {valueItems[(displayIndex + 1) % valueItems.length] && (
                <div className="text-center opacity-40">
                  <div className="text-sm text-[#999]">
                    {valueItems[(displayIndex + 1) % valueItems.length].nextLine1}
                  </div>
                  <div className="text-sm text-[#999]">
                    {valueItems[(displayIndex + 1) % valueItems.length].nextLine2}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {/* Icon */}
            {currentItem.icon && (
              <div className="flex justify-center">
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image src={currentItem.icon} alt={currentItem.title} width={80} height={80} className="h-full w-full object-contain" />
                </div>
              </div>
            )}

            {/* Title */}
            <h3 className="text-center text-lg font-semibold text-[#242222]">{currentItem.title}</h3>

            {/* Description */}
            <p className="text-center text-sm leading-relaxed text-[#666]">{currentItem.description}</p>

            {/* Progress bar */}
            <div className="h-1 w-full bg-[#f0f0f0]">
              <div className="h-full bg-[#BF1920] transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2">
              {valueItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === displayIndex ? "w-6 bg-[#BF1920]" : "w-2 bg-[#ddd] hover:bg-[#999]"}`}
                  aria-label={`Go to item ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
