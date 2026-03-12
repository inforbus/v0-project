import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export function NewsHeroSection() {
  const navItems = getNavItems("/news/company")

  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Background image */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png"
        alt="新闻资讯"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} variant="overlay" />

      {/* Main title and subtitle text content */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
        {/* Red accent line */}
        <div
          className="bg-[#BF1920]"
          style={{ width: 'clamp(40px, 4vw, 60px)', height: '3px', marginTop: 'clamp(8px, 1.2vw, 18px)' }}
        />

        {/* Title */}
        <h1
          className="font-sans font-bold text-[#BF1920]"
          style={{ fontSize: 'clamp(24px, 3.5vw, 48px)', lineHeight: '1.3', letterSpacing: '0.1em' }}
        >
          新闻资讯
        </h1>

        {/* Subtitle 1 */}
        <p
          className="font-sans font-normal text-[#666666]"
          style={{ fontSize: 'clamp(12px, 1.2vw, 16px)', lineHeight: '1.5', marginTop: 'clamp(8px, 1vw, 14px)' }}
        >
          最热新闻资讯，最新行业动态
        </p>
      </div>
    </div>
  )
}
