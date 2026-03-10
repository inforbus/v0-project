import { ScrollReveal } from "@/components/shared/scroll-reveal"

const features = [
  {
    title: "多源异构数据接入",
    description: "支持数据库、消息队列、文件、API等百种数据源，支持实时流式和批量采集两种模式",
    icon: "🔌"
  },
  {
    title: "ETL数据处理",
    description: "提供可视化数据流设计器，支持行级、列级数据过滤和转换，支持自定义函数和脚本",
    icon: "⚙️"
  },
  {
    title: "实时数据流处理",
    description: "支持秒级数据同步延迟，完全支持数据质量监控和异常告警",
    icon: "⚡"
  },
  {
    title: "数据质量管理",
    description: "内置数据质量检查规则，支持自定义质量指标，提供数据血缘追踪功能",
    icon: "✓"
  },
  {
    title: "高性能数据同步",
    description: "支持分布式并行处理，日均处理数据量达到PB级别，支持增量和全量两种同步策略",
    icon: "⚡"
  },
  {
    title: "云原生部署",
    description: "支持容器化部署和Kubernetes编排，支持一键式集群扩展，灵活应对数据量增长",
    icon: "☁️"
  }
]

export function DataIntegrationFeatures() {
  return (
    <section className="relative bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] 3xl:py-[120px]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.2s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 2.5s infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 10s ease-in-out 0.3s infinite" }} />
      <div className="pointer-events-none absolute left-[8%] top-[8%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 13s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.05] blur-[55px]" style={{ animation: "orb-drift 16s ease-in-out 2s infinite" }} />

      <div className="relative z-10 mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#242222] md:mb-12 md:text-3xl 3xl:mb-16 3xl:text-[40px]">
            产品特性
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-[1340px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 50}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-[#F9F7F9] p-6 shadow-[0px_2px_12px_rgba(84,30,30,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_8px_24px_rgba(191,25,32,0.15)] 3xl:p-8">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br from-[#BF1920]/10 to-transparent blur-2xl transition-transform duration-500 group-hover:scale-150" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 text-4xl">
                      {feature.icon}
                    </div>
                    
                    <h3 className="mb-3 text-lg font-bold text-[#242222] 3xl:text-xl">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-[#242222]/70 3xl:text-base">
                      {feature.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-[#BF1920] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="text-sm font-medium">了解更多</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Benefits section */}
        <ScrollReveal>
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#BF1920]/5 to-[#BF1920]/[0.02] p-8 md:p-12 3xl:p-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-[#242222] md:text-3xl 3xl:text-[40px]">
              核心优势
            </h3>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-[#BF1920] 3xl:text-5xl">
                  100+
                </div>
                <p className="text-sm text-[#242222]/70 3xl:text-base">
                  支持数据源类型
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-[#BF1920] 3xl:text-5xl">
                  秒级
                </div>
                <p className="text-sm text-[#242222]/70 3xl:text-base">
                  实时数据同步
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-[#BF1920] 3xl:text-5xl">
                  PB
                </div>
                <p className="text-sm text-[#242222]/70 3xl:text-base">
                  单日处理数据量
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-[#BF1920] 3xl:text-5xl">
                  99.9%
                </div>
                <p className="text-sm text-[#242222]/70 3xl:text-base">
                  系统可用性
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
