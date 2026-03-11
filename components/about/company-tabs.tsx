'use client'

import { useState } from 'react'
import Image from 'next/image'

const tabs = [
  { id: 'profile', label: '公司介绍' },
  { id: 'honors', label: '公司荣誉' },
  { id: 'timeline', label: '发展历程' },
  { id: 'contact', label: '联系我们' },
]

export function CompanyTabs() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="w-full bg-background">
      {/* Tabs Navigation */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-6 font-sans font-medium text-lg transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-[#BF1920]'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BF1920] animate-fadeIn" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {activeTab === 'profile' && (
          <div className="animate-fadeIn">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Left side */}
              <div className="space-y-6">
                {/* Title section */}
                <div>
                  <h2 className="font-sans text-4xl font-bold text-foreground mb-2">中创软件商用中间件股份有限公司</h2>
                  <p className="font-sans text-sm text-foreground/60">公司介绍</p>
                </div>

                {/* Image */}
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/company-building.jpg"
                    alt="中创软件总部"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-base text-foreground/80 leading-relaxed">
                    中创软件商用中间件股份有限公司（以下简称"中创中间件"）成立于2002年，是国内领先的基础软件产品与服务提供商，是国家"核高基"科技重大专项支持单位，拥有CMMI DEV 5级资质和ISO9001质量体系认证书，为国际Jakarta EE工作组企业级会员单位。
                  </p>
                </div>

                <div>
                  <p className="font-sans text-base text-foreground/80 leading-relaxed">
                    公司产品获得工信部颁布的"国防科学技术进步一等奖"、山东省人民政府颁布的"山东省科学技术进步二等奖"、中国软件行业协会颁布的中国"自主可靠企业核心软件品牌"、"年度创新软件产品"、"十佳创新软件产品"等多个奖项。
                  </p>
                </div>

                <div className="border-l-4 border-[#BF1920] bg-[#BF1920]/5 p-6">
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    中创中间件作为信息领域基础软件的主力军，中创中间件在中间件行业深耕二十年，致力于推动中间件的技术创新与产品化、产业化，树立了信得信的品牌声誉。多款产品列入政府采购目录，被信息技术应用创新工作委员会评为"信息技术应用创新工作委员会卓越贡献成员单位"。系列产品遵循国际及国内中间件主流技术标准，拥有核心技术知识产权，中间件研发水平在国内处于领先水平，并全面适配当前大数据、物联网、云计算等前沿技术，核心产品具备规模化替代国外主流中间件厂商产品的能力。
                  </p>
                </div>
              </div>
            </div>

            {/* Application Domains Section */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="font-sans text-3xl font-bold text-foreground mb-10">应用领域</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Financial Domain */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">💰</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">金融领域</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    与产品操作系统、数据库运维等结合多年，为ZGS银行、ZS银行等大型商业银行及国家政策性银行成功应用，实现基础中间件全栈式规模替代。
                  </p>
                </div>

                {/* Taxation Domain */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">🏛️</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">税务领域</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    中创工作流中间件在IBM和Oracle公司同类产品竞争中胜出，作为国家金税工程基础软件平台的重要组成部分，支撑全国税务四大平台所有业务系统流程业务部署运行。
                  </p>
                </div>

                {/* Transportation Domain */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">🚗</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">交通领域</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    为国家取消省界收费及武汉城市自由流车联网系统7年的稳定可靠运行提供中间件支撑，助力交通数字化转型升级。
                  </p>
                </div>

                {/* Energy Domain */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">⚡</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">能源领域</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    深度参与某电力大型央企数字化转型，实现从单一中间件产品替代到基础中间件全栈式替代的跨越，应用场景从综合办公系统延伸至电力调度等生产核心领域。
                  </p>
                </div>

                {/* Smart Manufacturing Domain */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">⚙️</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">智能制造领域</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    与中国某制造业百强探索智能制造型，实现从"少品种、大批量"转到"个性化、少批量"的转变，是工业互联网的典型应用案例。
                  </p>
                </div>

                {/* Self-reliant Innovation Domain */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">💡</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">自主创新领域</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    已涵盖30余省及几十个部委级客户，应用规模处于领先地位，成功打造央企国产化替代标杆。
                  </p>
                </div>

                {/* Security Products - Full Width */}
                <div className="space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300 md:col-span-2 lg:col-span-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BF1920]/10 rounded-lg flex items-center justify-center text-2xl">🔒</div>
                    <h4 className="font-sans text-lg font-bold text-[#BF1920]">安全产品</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    公司安全产品服务包括全国人大、全国政协30个部委级网站，覆盖全国31个省、市、自治区，保障国家信息安全。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'honors' && (
          <div className="animate-fadeIn">
            <p className="font-sans text-lg text-foreground/70">公司荣誉内容待添加</p>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="animate-fadeIn">
            <p className="font-sans text-lg text-foreground/70">发展历程内容待添加</p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <p className="font-sans text-lg text-foreground/70">联系我们内容待添加</p>
          </div>
        )}
      </div>
    </div>
  )
}
