import Link from "next/link"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

const navItems = getNavItems("/products")

export function MiddlewareHeroSection() {

  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Banner image */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png"
        alt="中创应用服务器软件 InforSuite AS"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} />

      {/* Main title and subtitle text content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-12 3xl:px-16">
        {/* Red accent line */}
        <div className="h-1 w-24 bg-[#BF1920] md:h-1.5 lg:w-28 3xl:w-32" />
        
        {/* Title */}
        <h1 className="font-sans mt-4 max-w-2xl text-2xl font-bold text-[#332C2B] md:text-3xl lg:text-4xl 3xl:mt-6 3xl:text-5xl" style={{ lineHeight: '1.2' }}>
          中创应用服务器软件 InforSuite AS
        </h1>

        {/* Subtitle 1 */}
        <p className="font-sans mt-4 max-w-lg text-sm font-normal text-[#332C2B] md:text-base lg:text-lg 3xl:mt-5 3xl:text-xl" style={{ lineHeight: '1.4', opacity: 0.85 }}>
          全面通过JaveEE、JakartaEE系列规范认证
        </p>

        {/* Subtitle 2 */}
        <p className="font-sans mt-2 max-w-lg text-sm font-normal text-[#332C2B] md:text-base lg:text-lg 3xl:mt-3 3xl:text-xl" style={{ lineHeight: '1.4', opacity: 0.85 }}>
          国民经济重点行业规模化应用
        </p>
      </div>

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
    </div>
  )
}
