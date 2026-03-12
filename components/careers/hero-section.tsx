import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

const navItems = getNavItems("/about/careers")

export function CareersHeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#1a1a1a]">
      <Header navItems={navItems} variant="overlay" />
      
      {/* Hero content */}
      <div className="relative py-16 md:py-20 lg:py-24 3xl:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-10 right-10 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary 3xl:text-sm">
              Talent Recruitment
            </span>
            <h1 className="mt-4 text-3xl font-bold text-background md:text-4xl lg:text-5xl 3xl:text-6xl">
              加入我们
            </h1>
            <p className="mt-4 text-base leading-relaxed text-background/70 md:text-lg 3xl:text-xl">
              我们期待与志同道合的伙伴一起，共同推动中国软件基础设施的自主创新，让技术更好地服务于数字中国建设。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
