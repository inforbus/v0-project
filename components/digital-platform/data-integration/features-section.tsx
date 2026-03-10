import { ScrollReveal } from "@/components/shared/scroll-reveal"

const features = [
  {
    title: "多源数据、集中整合管理",
    description: "支持多种数据源的配置管理，实现数据指向性的聚合管理，快速搭建数据中台。提供主题库、主题集和主题整合管理，充分满足不同业务对数据级别的访问分权管理。",
  },
  {
    title: "轻量可视、模型轻松定制",
    description: "无需编码，通过拖拽操作轻松搭建模型管理，组件关系一览无遗。有效提升开发效率和维护成本。",
  },
  {
    title: "组件丰富、场景全面覆盖",
    description: "预置多类型输入输出组件，上百转换组件，支持跨行数据输出、上下转换、组件及场景转换等。实时处理、整体处理、流水处理于一体，兼顾离线处理。",
  },
  {
    title: "灵活调度、实时监控告警",
    description: "内置全生命周期数据处理过程中的任务调度过程，在DAG（有向无环图）方式进行任务。支持工作流定时调度、优先级、多维度集群支持，实时的任务告警。",
  },
  {
    title: "动态扩展、自动容错、数据高效可靠",
    description: "高可靠、分布式、可扩展架构，支持行业业界和布式计算，具备高容错量、精确性、时时设特性、同时具弹性扩展能力，能够根据業務背景，动态扩展计算点。",
  },
  {
    title: "国产支持、深度生态适配",
    description: "兼容多类国产及国际主流服务器、cpu、操作系统、数据库等软件生态。",
  }
]

export function DataIntegrationFeatures() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] 3xl:py-[120px]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.2s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 2.5s infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 10s ease-in-out 0.3s infinite" }} />
      <div className="pointer-events-none absolute left-[8%] top-[8%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 13s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.05] blur-[55px]" style={{ animation: "orb-drift 16s ease-in-out 2s infinite" }} />

      <div className="relative z-10 mx-auto max-w-[1340px] px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-2xl font-bold leading-[100%] text-[#242222] md:mb-[60px] md:text-3xl 3xl:mb-[80px] 3xl:text-[40px]">
            产品特性
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-4 md:gap-6 lg:gap-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 40}>
              <div className="group relative overflow-hidden rounded-xl bg-white p-6 md:p-8 shadow-[0px_2px_12px_rgba(84,30,30,0.08)] transition-all duration-500 hover:shadow-[0px_8px_24px_rgba(191,25,32,0.12)] 3xl:p-8">
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#BF1920]/3 transition-all duration-500 group-hover:bg-[#BF1920]/8" />
                
                <div className="relative z-10 flex gap-4 md:gap-6">
                  {/* Icon placeholder */}
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#BF1920]/10 md:h-14 md:w-14">
                      <div className="h-2 w-2 rounded-full bg-[#BF1920]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-base font-bold leading-tight text-[#242222] md:mb-3 md:text-lg 3xl:text-xl">
                      {feature.title}
                    </h3>
                    
                    <p className="text-xs leading-relaxed text-[#242222]/70 md:text-sm 3xl:text-base 3xl:leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
