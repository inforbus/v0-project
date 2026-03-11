"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

const features = [
  {
    title: "应用可视化编排",
    description: "提供图形化编排界面，通过拖拽组件和连线，快速构建云原生应用的部署结构，支持一键编排、部署即启用、部署即监控，显著提升应用上云的效率。",
    icon: "grid",
  },
  {
    title: "微服务治理",
    description: "提供向微云、跨数据中心及异构环境的全方位容器管理能力，支持多云场景下高效调度、资源的智能化分配与交维协作，全面提升业务的弹性与可扩展性。",
    icon: "network",
  },
  {
    title: "云端编排、边缘交付",
    description: "具备云边协同能力，统一将云端编排的应用精准下发至各边缘节点，实现大规模应用的自动化部署与升级，并对边缘应用的运行状态与日志进行全方位监控和管理。",
    icon: "cloud",
  },
  {
    title: "研发交付一体化",
    description: "深度践行DevOps理念，全面赋能企业研发与交付一体化，助力软件开发全生命周期的智能化与自动化管理。融合云原生技术，系统性优化研发流程，显著提升效率与产品质量，实现高效交付与项目全流程的精细化管理。",
    icon: "chart",
  },
]

function IconComponent({ type }: { type: string }) {
  switch (type) {
    case "grid":
      return (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          <rect x="20" y="20" width="30" height="30" fill="none" stroke="#BF1920" strokeWidth="2" rx="4" />
          <rect x="60" y="20" width="30" height="30" fill="none" stroke="#BF1920" strokeWidth="2" rx="4" />
          <rect x="20" y="60" width="30" height="30" fill="none" stroke="#BF1920" strokeWidth="2" rx="4" />
          <rect x="60" y="60" width="30" height="30" fill="none" stroke="#BF1920" strokeWidth="2" rx="4" />
          <line x1="50" y1="35" x2="60" y2="35" stroke="#BF1920" strokeWidth="1.5" />
          <line x1="35" y1="50" x2="35" y2="60" stroke="#BF1920" strokeWidth="1.5" />
          <line x1="65" y1="50" x2="65" y2="60" stroke="#BF1920" strokeWidth="1.5" />
        </svg>
      )
    case "network":
      return (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="30" r="12" fill="none" stroke="#BF1920" strokeWidth="2" />
          <circle cx="30" cy="70" r="12" fill="none" stroke="#BF1920" strokeWidth="2" />
          <circle cx="70" cy="70" r="12" fill="none" stroke="#BF1920" strokeWidth="2" />
          <line x1="45" y1="38" x2="35" y2="62" stroke="#BF1920" strokeWidth="1.5" />
          <line x1="55" y1="38" x2="65" y2="62" stroke="#BF1920" strokeWidth="1.5" />
          <line x1="30" y1="82" x2="70" y2="82" stroke="#BF1920" strokeWidth="1.5" />
        </svg>
      )
    case "cloud":
      return (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          <path d="M20 60 Q50 30 80 60" fill="none" stroke="#BF1920" strokeWidth="2" />
          <circle cx="30" cy="50" r="8" fill="#BF1920" />
          <circle cx="50" cy="35" r="8" fill="#BF1920" />
          <circle cx="70" cy="50" r="8" fill="#BF1920" />
          <rect x="15" y="70" width="70" height="20" fill="none" stroke="#BF1920" strokeWidth="2" rx="3" />
          <line x1="30" y1="80" x2="30" y2="85" stroke="#BF1920" strokeWidth="1" />
          <line x1="50" y1="80" x2="50" y2="85" stroke="#BF1920" strokeWidth="1" />
          <line x1="70" y1="80" x2="70" y2="85" stroke="#BF1920" strokeWidth="1" />
        </svg>
      )
    case "chart":
      return (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          <path d="M25 50 L35 40 L45 50 L55 40 L65 50 L75 40 L75 70" fill="none" stroke="#BF1920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25" cy="50" r="3" fill="#BF1920" />
          <circle cx="45" cy="50" r="3" fill="#BF1920" />
          <circle cx="65" cy="50" r="3" fill="#BF1920" />
          <rect x="20" y="70" width="60" height="15" fill="none" stroke="#BF1920" strokeWidth="2" rx="2" />
        </svg>
      )
    default:
      return null
  }
}

export function PaaSFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] 3xl:py-[120px]">
      <div className="pointer-events-none absolute inset-0 h-full w-full opacity-50">
        <div className="h-full w-full" style={{
          backgroundImage: "url('/images/section-bg-wave.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light"
        }} />
      </div>
      <div className="pointer-events-none absolute left-[3%] top-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[5%] top-[22%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.5s infinite" }} />
      <div className="pointer-events-none absolute left-[10%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 8s ease-in-out 0.8s infinite" }} />
      <div className="pointer-events-none absolute right-[12%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 6s ease-in-out 2s infinite" }} />
      <div className="pointer-events-none absolute right-[30%] top-[8%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.06] blur-[60px]" style={{ animation: "orb-drift 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute left-[20%] bottom-[5%] h-[160px] w-[160px] rounded-full bg-[#BF1920]/[0.05] blur-[50px]" style={{ animation: "orb-drift 15s ease-in-out 3s infinite" }} />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 3xl:max-w-[1340px]">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold leading-[100%] text-[#242222] md:mb-[50px] md:text-3xl 3xl:mb-[70px] 3xl:text-[40px]">产品特点</h2>
        </ScrollReveal>

        <div className="mx-auto max-w-[1340px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 3xl:gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 50}>
                <div className="group relative overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_12px_40px_rgba(191,25,32,0.3)]">
                  {/* Feature card container */}
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-white p-6 md:p-8 3xl:p-10">
                    {/* Background gradient */}
                    <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-40 transition-opacity duration-500 group-hover:opacity-60"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-5 flex items-center justify-center rounded-lg bg-[#BF1920]/10 p-3 w-fit transition-all duration-500 group-hover:bg-[#BF1920]/20 group-hover:scale-110">
                      <IconComponent type={feature.icon} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="relative z-10 text-lg font-semibold leading-[1.4] text-[#242222] transition-colors duration-500 group-hover:text-[#BF1920] 3xl:text-xl 3xl:leading-[1.5]">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="relative z-10 mt-4 text-sm leading-[1.7] text-[#242222]/80 transition-colors duration-500 group-hover:text-[#242222]/90 3xl:text-[16px] 3xl:leading-[1.8] 3xl:mt-6">
                      {feature.description}
                    </p>
                    
                    {/* Bottom border line */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#BF1920] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
