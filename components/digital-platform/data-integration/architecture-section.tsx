"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function DataIntegrationArchitecture() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] lg:pt-[80px] 3xl:py-[120px] 3xl:pt-[121px]">
      {/* Dynamic background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[5%] top-[22%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.5s infinite" }} />
      <div className="pointer-events-none absolute left-[10%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 8s ease-in-out 0.8s infinite" }} />
      <div className="pointer-events-none absolute right-[12%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 6s ease-in-out 2s infinite" }} />
      <div className="pointer-events-none absolute right-[30%] top-[8%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.06] blur-[60px]" style={{ animation: "orb-drift 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute left-[20%] bottom-[5%] h-[160px] w-[160px] rounded-full bg-[#BF1920]/[0.05] blur-[50px]" style={{ animation: "orb-drift 15s ease-in-out 3s infinite" }} />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 3xl:max-w-[1340px]">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold leading-[100%] text-[#242222] md:mb-[50px] md:text-3xl 3xl:mb-[70px] 3xl:text-[40px]">
            产品架构
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <ScrollReveal delay={100}>
            <div className="w-full lg:w-[440px] lg:flex-shrink-0 lg:pt-[40px] 3xl:w-[592px] 3xl:pt-[61px]">
              <h3 className="mb-4 text-xl font-bold text-[#242222] md:text-2xl 3xl:text-3xl">
                分层架构设计
              </h3>
              <p className="text-sm leading-[200%] text-[#242222] md:text-base lg:text-[16px] lg:leading-[200%] 3xl:text-[22px]">
                数据集成平台采用分层架构设计，包括数据源接入层、数据处理层、数据存储层和数据应用层。支持从数据源实时采集，通过ETL处理流程进行数据清洗、转换、加载，最终存储至目标数据仓库或数据湖，为上层数据分析、AI模型训练等应用提供统一的数据支撑。
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden lg:block lg:w-[50px] lg:flex-shrink-0 3xl:w-[74px]" />

          <ScrollReveal delay={300}>
            <div className="w-full lg:w-[500px] lg:flex-shrink-0 3xl:w-[674px]">
              <div
                className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  width: "100%",
                  aspectRatio: "674.1 / 428",
                  background: "linear-gradient(180deg, #F5B2B4 0%, #F9F7F9 75%)",
                  boxShadow: "0px 4px 18px rgba(81, 21, 21, 0.1), inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-2xl border-2 border-white bg-white"
                  style={{
                    width: "92%",
                    height: "87.5%",
                    boxShadow: "inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                    backdropFilter: "blur(3.9px)",
                  }}
                >
                  {/* Placeholder architecture diagram */}
                  <div className="flex items-center justify-center w-full h-full">
                    <svg viewBox="0 0 489 339" className="w-[79%] h-auto" fill="none">
                      <text x="245" y="30" textAnchor="middle" className="text-sm font-bold" fill="#333">数据源接入层</text>
                      <rect x="80" y="50" width="100" height="60" rx="6" fill="#E8E8E8" stroke="#BF1920" strokeWidth="2"/>
                      <text x="130" y="85" textAnchor="middle" className="text-xs" fill="#666">MySQL</text>
                      
                      <rect x="210" y="50" width="100" height="60" rx="6" fill="#E8E8E8" stroke="#BF1920" strokeWidth="2"/>
                      <text x="260" y="85" textAnchor="middle" className="text-xs" fill="#666">Oracle</text>
                      
                      <rect x="340" y="50" width="100" height="60" rx="6" fill="#E8E8E8" stroke="#BF1920" strokeWidth="2"/>
                      <text x="390" y="85" textAnchor="middle" className="text-xs" fill="#666">API</text>
                      
                      <text x="245" y="155" textAnchor="middle" className="text-sm font-bold" fill="#333">数据处理层（ETL）</text>
                      <rect x="80" y="175" width="310" height="60" rx="6" fill="#FFE5E5" stroke="#BF1920" strokeWidth="2"/>
                      <text x="235" y="210" textAnchor="middle" className="text-xs" fill="#666">数据采集 → 清洗 → 转换 → 加载</text>
                      
                      <text x="245" y="285" textAnchor="middle" className="text-sm font-bold" fill="#333">数据存储层</text>
                      <rect x="80" y="305" width="310" height="25" rx="6" fill="#E8E8E8" stroke="#BF1920" strokeWidth="2"/>
                      <text x="235" y="322" textAnchor="middle" className="text-xs" fill="#666">数据仓库 / 数据湖 / 实时数据库</text>
                      
                      <path d="M130 110 L130 175" stroke="#BF1920" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <path d="M260 110 L260 175" stroke="#BF1920" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <path d="M390 110 L390 175" stroke="#BF1920" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <path d="M235 235 L235 305" stroke="#BF1920" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                          <polygon points="0 0, 10 5, 0 10" fill="#BF1920" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
