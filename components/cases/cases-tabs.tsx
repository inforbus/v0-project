'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const casesTabs = [
  {
    id: 'ai-agent',
    label: 'AI 智能体管理平台',
    title: 'AI 智能体管理平台解决方案',
    desc: '企业级全场景 AI 智能体管理平台，通过整合大模型能力、RAG 知识库及安全防护机制，实现智能体的全生命周期管理，帮助企业从\'会说\'到\'会做\'，打通业务最后一公里。',
    icon: '/images/solution-ai-agent.png',
    cases: [
      {
        industry: '金融科技',
        client: '某大型商业银行',
        challenge: '智能客服需要处理复杂金融业务咨询',
        solution: '部署AI智能体，集成RAG知识库，实现智能问答',
        result: '客服效率提升80%，用户满意度达95%',
      },
      {
        industry: '保险行业',
        client: '某全国性保险公司',
        challenge: '需要智能化理赔审核流程',
        solution: '构建智能审核体系，实现自动化决策',
        result: '理赔时间缩短50%，降低运营成本30%',
      },
      {
        industry: '电商平台',
        client: '某知名电商企业',
        challenge: '商品推荐和用户服务需要个性化',
        solution: '部署多个专业智能体，打造智能服务矩阵',
        result: '转化率提升45%，用户复购率增加60%',
      },
    ],
  },
  {
    id: 'disaster-recovery',
    label: '信创中间件双活容灾',
    title: '信创中间件双活容灾解决方案',
    desc: '基于自主可控技术体系，提供覆盖消息中间件、应用服务器、负载均衡等全栈中间件产品，支持多活容灾与自动故障转移，为关键行业核心系统提供安全、稳定的基础设施支撑。',
    icon: '/images/solution-middleware.png',
    cases: [
      {
        industry: '金融系统',
        client: '某国有商业银行',
        challenge: '核心交易系统需要99.99%可用性',
        solution: '部署双活中间件架构，实现多数据中心容灾',
        result: '系统可用性达99.99%，故障转移时间<10ms',
      },
      {
        industry: '政府部门',
        client: '某省级电子政务中心',
        challenge: '政务云需要高可靠性和自主可控',
        solution: '采用信创中间件全栈方案，构建两地三中心',
        result: '系统稳定性提升，业务连续性有保障',
      },
      {
        industry: '运营商',
        client: '某电信运营商',
        challenge: '海量消息处理需要高性能',
        solution: '部署中创高性能消息中间件，实现容灾备份',
        result: '消息吞吐量达百万级/秒，系统更加可靠',
      },
    ],
  },
  {
    id: 'xinchuang-middleware',
    label: '信创全栈自主可控',
    title: '信创全栈自主可控中间件解决方案',
    desc: '全栈中间件产品矩阵涵盖应用运行、消息通信、流量调度、数据缓存四大核心领域，各组件既可独立部署也可协同工作，全面助力国产化替代与数字化转型。',
    icon: '/images/solution-xinchuang.png',
    cases: [
      {
        industry: '国防科技',
        client: '某国防科研单位',
        challenge: '关键系统需要完全自主可控',
        solution: '采用信创全栈中间件替代国外产品',
        result: '实现100%自主可控，通过军方认证',
      },
      {
        industry: '能源行业',
        client: '某大型能源企业',
        challenge: '工控系统现代化升级困难',
        solution: '部署全栈中间件支撑新系统架构',
        result: '系统性能提升200%，成本降低40%',
      },
      {
        industry: '制造业',
        client: '某大型制造企业',
        challenge: '需要打造工业互联网平台',
        solution: '以中创中间件为基础构建工业平台',
        result: '连接设备数超百万，产业转升级加速',
      },
    ],
  },
]

// 根据URL路径获取对应的tab ID
function getTabFromPath(pathname: string): string {
  if (pathname.includes('/financial')) return 'ai-agent'
  if (pathname.includes('/government')) return 'disaster-recovery'
  if (pathname.includes('/enterprise')) return 'xinchuang-middleware'
  return 'ai-agent'
}

export function CasesTabs() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(() => getTabFromPath(pathname))

  useEffect(() => {
    const tab = getTabFromPath(pathname)
    setActiveTab(tab)
  }, [pathname])

  const activeTabData = casesTabs.find(tab => tab.id === activeTab)

  return (
    <div className="w-full">
      {/* Tabs Navigation - Capsule Style */}
      <div className="w-full -mt-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center items-center py-8">
            <div className="flex items-center gap-2 opacity-60 hidden md:flex">
              <div className="w-8 h-px bg-foreground/30"></div>
            </div>
            
            {casesTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-6 font-sans font-semibold text-sm transition-all duration-300 whitespace-nowrap rounded-full border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#BF1920] border-[#BF1920] text-white'
                    : 'border-gray-400 text-gray-500 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
            
            <div className="flex items-center gap-2 opacity-60 hidden md:flex">
              <div className="w-8 h-px bg-foreground/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          {activeTabData && (
            <div className="animate-fadeIn">
              <div className="space-y-12">
                {/* Title section */}
                <div className="space-y-2">
                  <h2 className="font-sans text-4xl font-bold text-foreground">{activeTabData.title}</h2>
                  <p className="font-sans text-base text-foreground/70 leading-relaxed max-w-3xl">
                    {activeTabData.desc}
                  </p>
                </div>

                {/* Cases Grid */}
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                  {activeTabData.cases.map((caseItem, index) => (
                    <div 
                      key={index}
                      className="border border-border rounded-lg p-8 hover:border-[#BF1920] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Industry Tag */}
                      <div className="inline-block mb-4">
                        <span className="inline-block bg-[#BF1920]/10 text-[#BF1920] text-xs font-semibold px-3 py-1 rounded-full">
                          {caseItem.industry}
                        </span>
                      </div>

                      {/* Client Name */}
                      <h3 className="font-sans text-xl font-bold text-foreground mb-4">
                        {caseItem.client}
                      </h3>

                      {/* Case Details */}
                      <div className="space-y-4">
                        {/* Challenge */}
                        <div>
                          <p className="font-sans text-sm font-semibold text-foreground/60 mb-1">业务挑战</p>
                          <p className="font-sans text-sm text-foreground/80">
                            {caseItem.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <p className="font-sans text-sm font-semibold text-foreground/60 mb-1">解决方案</p>
                          <p className="font-sans text-sm text-foreground/80">
                            {caseItem.solution}
                          </p>
                        </div>

                        {/* Result */}
                        <div className="border-t border-border pt-4">
                          <p className="font-sans text-sm font-semibold text-[#BF1920] mb-1">实现成果</p>
                          <p className="font-sans text-sm font-medium text-foreground">
                            {caseItem.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
