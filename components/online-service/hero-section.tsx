import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

const navItems = getNavItems("/support/online")

export function OnlineServiceHeroSection() {
  return (
    <div className="relative w-full">
      <Header navItems={navItems} />

      {/* Hero content with left-right layout */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Red accent line */}
            <div className="h-1 w-16 bg-[#BF1920]" />

            {/* Title */}
            <h1 className="font-sans text-3xl font-bold text-[#332C2B] md:text-4xl lg:text-5xl" style={{ lineHeight: '1.2' }}>
              24小时在线客服支持
            </h1>

            {/* Subtitle 1 */}
            <p className="font-sans text-base font-normal text-[#332C2B] md:text-lg" style={{ lineHeight: '1.6', opacity: 0.8 }}>
              专业的技术团队随时准备为您解答，快速响应您的每一个问题
            </p>

            {/* Subtitle 2 */}
            <p className="font-sans text-base font-normal text-[#332C2B] md:text-lg" style={{ lineHeight: '1.6', opacity: 0.8 }}>
              通过电话、邮件、在线客服等多渠道为您提供一站式问题解决方案
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/support/online#contact"
                className="group inline-flex items-center justify-center rounded bg-[#BF1920] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#a8151b] hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base lg:px-8 lg:py-3"
              >
                立即咨询
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 1L7 7.5L1 14" stroke="white" strokeWidth="2" />
                </svg>
              </Link>
              <Link
                href="tel:400-618-6180"
                className="group inline-flex items-center justify-center rounded border-2 border-[#BF1920] bg-transparent px-6 py-2.5 text-sm font-medium text-[#BF1920] shadow-lg transition-all duration-300 hover:bg-[#BF1920] hover:text-white hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base lg:px-8 lg:py-3"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2 transition-colors duration-300">
                  <path d="M14.5 10.5V13.5C14.5 13.8978 14.342 14.2794 14.0607 14.5607C13.7794 14.842 13.3978 15 13 15C11.3587 14.9998 9.77664 14.3626 8.63886 13.2248C7.50108 12.087 6.86384 10.5049 6.86384 8.8636C6.86384 7.22233 7.50108 5.64026 8.63886 4.50247C9.77664 3.36469 11.3587 2.72745 13 2.72727C13.3978 2.72727 13.7794 2.88531 14.0607 3.16665C14.342 3.44799 14.5 3.82957 14.5 4.22727V7.22727" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.36 6.09091C10.7256 5.73545 11.0251 5.30909 11.2395 4.84545M11.9636 8.54545C12.3929 7.90909 12.6824 7.15909 12.7927 6.36364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                400-618-6180
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-64 w-full md:h-80 lg:h-96">
            <Image
              src="/images/online-service-hero.jpg"
              alt="在线客服支持"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
