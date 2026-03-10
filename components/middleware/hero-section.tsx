"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Header } from "@/components/shared/header"
import { getNavItems, getProductCategories } from "@/components/shared/nav-data"

const navItems = getNavItems("/products")
const productCategories = getProductCategories()

const bannerSlides = [
  {
    type: "image" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20112-5HbxeOF3Ph0r9IqIfxlmamTD0K1jaF.png",
    alt: "中创API网关软件",
    title: "中创API网关软件",
    subtitle: "一站式流量管控与AI赋能，让智能更简单",
  },
  {
    type: "image" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20161-vC5Hm4iLWhs8yOI8AJeyVdICP0biMP.png",
    alt: "智能应用",
    title: "智能应用",
    subtitle: "赋能企业数字化转型，提升竞争力",
  },
  {
    type: "video" as const,
    src: "/videos/banner-home.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20164-VDuiP935o3MFNQlarpPWjDzSZtW7J5.png",
    alt: "全球AI布局",
  },
  {
    type: "video" as const,
    src: "/videos/banner-2.mov",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111-UexuKUpyh0nXJUjwqlUoFl54VOFoWU.png",
    alt: "安全云服务",
  },
]

const SLIDE_INTERVAL = 10000

export function MiddlewareHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (bannerSlides.length <= 1) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      <div className="absolute inset-0 bg-white" />
      
      {/* Banner slides */}
      {bannerSlides.map((slide, index) => (
        <div
          key={index}
          className="pointer-events-none absolute left-0 top-0 h-full w-full transition-all duration-[1500ms] ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? "scale(1)" : "scale(1.02)",
          }}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <>
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-center"
                style={{ display: currentSlide === index ? "block" : "none" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  const fallbackEl = e.currentTarget.nextElementSibling as HTMLElement | null
                  if (fallbackEl) fallbackEl.style.display = "block"
                }}
              />
              {slide.fallback && (
                <img
                  src={slide.fallback}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  style={{ display: "none" }}
                />
              )}
            </>
          )}
        </div>
      ))}

      <Header navItems={navItems} productCategories={productCategories} />

      {/* Slide text overlay - for slides with text content */}
      {bannerSlides.map((slide, index) =>
        slide.title ? (
          <div
            key={`text-${index}`}
            className="absolute inset-0 z-10 flex items-center transition-all duration-[1500ms] ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? "translateY(0)" : "translateY(20px)",
              pointerEvents: currentSlide === index ? "auto" : "none",
            }}
          >
            <div className="mx-auto w-full max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
              <div className="max-w-3xl 3xl:max-w-[945px]">
                <h2
                  className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] 3xl:text-[120px]"
                  style={{
                    fontFamily: "'Alibaba PuHuiTi', var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif",
                    fontWeight: 700,
                    lineHeight: "100%",
                    color: "#000000",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[26px] 3xl:text-[32px]"
                  style={{
                    fontFamily: "'Alibaba PuHuiTi', var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    color: "#000000",
                    opacity: 0.8,
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ) : null
      )}

      {/* Free trial and video buttons */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col gap-3 lg:bottom-14 lg:flex-row lg:items-center 3xl:bottom-20 3xl:gap-4">
        <Link
          href="/trial"
          className="group inline-flex items-center justify-center rounded bg-[#BF1920] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#a8151b] hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base 3xl:px-8 3xl:py-3 3xl:text-lg"
        >
          免费试用
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 1L7 7.5L1 14" stroke="white" strokeWidth="2" />
          </svg>
        </Link>
        <Link
          href="/video"
          className="group inline-flex items-center justify-center rounded border-2 border-white bg-transparent px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#BF1920] hover:shadow-xl hover:shadow-white/30 active:scale-95 md:text-base 3xl:px-8 3xl:py-3 3xl:text-lg"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2 transition-colors duration-300">
            <path d="M3 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V12C15 12.5304 14.7893 13.0391 14.4142 13.4142C14.0391 13.7893 13.5304 14 13 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M10.5 8L6 5.5V10.5L10.5 8Z" fill="currentColor" />
          </svg>
          查看视频
        </Link>
      </div>

      {/* Slide indicators */}
      {bannerSlides.length > 1 && (
        <div className="absolute bottom-10 right-8 z-20 flex gap-2 lg:bottom-14 3xl:bottom-20">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-[#BF1920]" : "w-2 bg-foreground/30 hover:bg-foreground/50"}`}
              aria-label={`切换到第 ${index + 1} 张幻灯片`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
