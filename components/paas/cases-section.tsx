"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

const paasCases = [
  {
    tag: "央企",
    title: "某大型央企"云原生支撑平台项目"",
    desc: "为应对企业技术栈复杂、管理难度大及传统开发模式不灵活的挑战，本项目基于容器技术构建以应用为核心的云原生运维体系，实现应用无缝上云与自动化运维。通过提供主流微服务治理框架和标准化开发规范，统一技术架构，规范大型系统开发，推动技术架构演进与管理效率提升。",
    bgColor: "from-slate-100 to-slate-200",
  },
  {
    tag: "政务",
    title: "某市数据中心"数据服务一体化管控平台项目"",
    desc: "为加速云原生技术推广，构建政务信息系统的云原生应用生态，本项目基于政务云基础硬件设施，构建政务领域的数据服务一体化管控平台，实现数据、服务与应用资产的统一管理，推动开发标准、管理平台与安全运维的"三统一"，大幅提升政务云平台的服务能力、应用管理效率及数据共享水平。",
    bgColor: "from-gray-800 to-gray-900",
    dark: true,
  },
  {
    tag: "交通",
    title: "某省高速公路"全网云边端协同的高速公路智慧收费系统项目"",
    desc: "某省高速公路集团面临收费站数量众多、部署复杂、运行多样及监管难题。本项目采用"云、边、端"一体化架构，构建云收费管理系统。通过中心端统一部署、升级与监控，提升运维效率；边缘端高可用集群与车道设备协同，确保业务连续性。分布式架构及多节点部署，有效规避单点故障，显著提升系统稳定性。",
    bgColor: "from-amber-50 to-orange-100",
  },
  {
    tag: "金融",
    title: "某银行"信贷风控关键业务系统项目"",
    desc: "随着金融业务快速发展，传统单体系统体量庞大，管理复杂，难以快速迭代。本项目基于轻量级容器化技术，采用微服务架构，实现模块解耦与敏捷迭代，缩短上线周期。通过同城双活架构提升高可靠性与容错性，结合HPA弹性伸缩和容器自愈能力，实现系统横向扩展性与稳定性，保障业务连续性。",
    bgColor: "from-blue-900 to-indigo-950",
    dark: true,
  },
]

export function PaaSCasesSection() {
  return (
    <section className="relative bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] 3xl:py-[120px]">
      {/* Dynamic background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.2s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 2.5s infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 10s ease-in-out 0.3s infinite" }} />
      <div className="pointer-events-none absolute left-[8%] top-[8%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 13s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.05] blur-[55px]" style={{ animation: "orb-drift 16s ease-in-out 2s infinite" }} />

      <div className="relative z-10 mx-auto max-w-[1340px] px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#242222] md:mb-12 md:text-3xl 3xl:mb-16 3xl:text-[40px]">
            典型案例
          </h2>
        </ScrollReveal>

        {/* 2x2 Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 3xl:gap-8">
          {paasCases.map((caseItem, index) => (
            <ScrollReveal key={caseItem.title} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_12px_40px_rgba(191,25,32,0.2)]">
                {/* Case card container */}
                <div className={`relative min-h-[320px] w-full overflow-hidden rounded-xl p-6 md:p-8 3xl:min-h-[380px] 3xl:p-10 ${caseItem.dark ? 'bg-gradient-to-br ' + caseItem.bgColor : 'bg-gradient-to-br ' + caseItem.bgColor}`}>
                  
                  {/* Top red line */}
                  <div className="absolute left-0 top-0 h-[4px] w-full bg-[#BF1920]" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-lg font-bold leading-[1.5] md:text-xl 3xl:text-[22px] 3xl:leading-[34px] ${caseItem.dark ? 'text-white' : 'text-[#BF1920]'}`}>
                      {caseItem.title}
                    </h3>
                    
                    <p className={`mt-4 text-sm leading-[1.8] md:text-[15px] 3xl:mt-6 3xl:text-[16px] 3xl:leading-[28px] ${caseItem.dark ? 'text-white/90' : 'text-[#242222]/80'}`}>
                      {caseItem.desc}
                    </p>
                  </div>
                  
                  {/* Bottom border line on hover */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#BF1920] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
