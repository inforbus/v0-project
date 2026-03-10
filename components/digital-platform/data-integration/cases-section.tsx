"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

const cases = [
  {
    title: "多省海事局信息系统数据集成",
    description: "铜分散在各业务系统的共享事项源进行聚合，通过该数据接口方式，协同表结构、主题库和主题整合管理，充分利用开放活动的数据级别分权管理；数据接续：将各海事信息资源转换为标准格式，以协议表结构结构上的转换和数据、定义上的转换两个方向的内容；数据聚合：将各海事信息在数据层面之间的转换与运行一个一体中存储管理。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B8%E5%9E%8B%E6%A1%88%E4%BE%8B-52su8aDHYxwS49kZ4Hlbov4QfeurIM.jpg"
  },
  {
    title: "某医药数据仓库建设项目",
    description: "某医药数据仓库项目致力于为医院的信息系统中下层广点不同期间设，与数据系统在下层广点不间服务中，经过长期的业务积累和验证，数据特收点到且，统统一管理和分层出来的数据系统中的，中创元穹数据集成平台，将分散在各个数据源中的数据进行统一的存储管理，提高数据的一一存储和管理，提高数据的一一性和可访问性。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B8%E5%9E%8B%E6%A1%88%E4%BE%8B-52su8aDHYxwS49kZ4Hlbov4QfeurIM.jpg"
  },
  {
    title: "某省市场监督管理局",
    description: "某省市场监督管理局正在进行市场化产业升级，目前已建设的概念系统不下层广点的数据处理，业务线服务分，该市网市场服务关键等需要进行基于市场分析、数据分析的业务决策。中创元穹数据集成平台通过支撑市场分析数据的统一化，确保整个中心中的数据用于业务决策和系统应用，其次是面向市场监督管理的个性化应用。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B8%E5%9E%8B%E6%A1%88%E4%BE%8B-52su8aDHYxwS49kZ4Hlbov4QfeurIM.jpg"
  }
]

export function DataIntegrationCases() {
  return (
    <section className="relative bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] 3xl:py-[120px]">
      {/* Dynamic background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.2s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 2.5s infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 10s ease-in-out 0.3s infinite" }} />
      <div className="pointer-events-none absolute left-[8%] top-[8%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 13s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.05] blur-[55px]" style={{ animation: "orb-drift 16s ease-in-out 2s infinite" }} />

      <div className="relative z-10 mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#242222] md:mb-12 md:text-3xl 3xl:mb-16 3xl:text-[40px]">
            典型案例
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-[1340px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:gap-8">
            {cases.map((caseItem, index) => (
              <ScrollReveal key={caseItem.title} delay={index * 50}>
                <div className="group relative overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_12px_40px_rgba(191,25,32,0.3)]">
                  {/* Case card container */}
                  <div className="relative h-[380px] w-full overflow-hidden rounded-xl bg-white 3xl:h-[500px]">
                    {/* Background image */}
                    <div className="pointer-events-none absolute inset-0 h-full w-full opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90 transition-all duration-500 group-hover:bg-[rgba(191,25,32,0.82)] group-hover:backdrop-blur-[10px]" />
                    
                    {/* Decorative element */}
                    <div className="absolute bottom-6 right-6 opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                        <path d="M40 30V50M30 40H50" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col justify-between p-5 3xl:p-7">
                      <div>
                        <span className="mb-3 inline-block rounded-full bg-[#BF1920]/10 px-3 py-1 text-xs font-semibold text-[#BF1920] transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white">
                          {`案例 ${index + 1}`}
                        </span>
                        <h3 className="mt-2 text-lg font-medium leading-[1.5] text-[#242222] transition-colors duration-500 group-hover:text-white 3xl:text-[22px] 3xl:leading-[34px]">
                          {caseItem.title}
                        </h3>
                      </div>
                      
                      <div>
                        <p className="text-sm leading-[1.7] text-[#242222]/80 transition-colors duration-500 group-hover:text-white/95 3xl:text-[16px] 3xl:leading-[28px] line-clamp-3">
                          {caseItem.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#BF1920] transition-colors duration-500 group-hover:text-white/90">
                          <span>查看详情</span>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom border line */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />
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
