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

            {/* Application Domains Section - Irregular Grid */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="font-sans text-3xl font-bold text-foreground mb-10">应用领域</h3>
              <div className="grid gap-6 auto-rows-max" style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              }}>
                {/* Financial Domain - Large */}
                <div className="lg:row-span-2 p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#BF1920]/5 to-transparent">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="text-4xl">💰</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">金融领域</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed flex-grow">
                      与产品操作系统、数据库运维等结合多年，为ZGS银行、ZS银行等大型商业银行及国家政策性银行成功应用，实现基础中间件全栈式规模替代。
                    </p>
                  </div>
                </div>

                {/* Taxation Domain */}
                <div className="p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="text-4xl">🏛️</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">税务领域</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      中创工作流中间件在IBM和Oracle公司同类产品竞争中胜出。
                    </p>
                  </div>
                </div>

                {/* Transportation Domain */}
                <div className="p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="text-4xl">🚗</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">交通领域</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      为国家取消省界收费及武汉城市自由流车联网系统7年的稳定可靠运行提供中间件支撑。
                    </p>
                  </div>
                </div>

                {/* Energy Domain */}
                <div className="p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="text-4xl">⚡</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">能源领域</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      深度参与某电力大型央企数字化转型，实现从单一中间件产品替代到基础中间件全栈式替代的跨越。
                    </p>
                  </div>
                </div>

                {/* Smart Manufacturing Domain - Large */}
                <div className="lg:row-span-2 p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#BF1920]/5 to-transparent">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="text-4xl">⚙️</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">智能制造领域</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed flex-grow">
                      与中国某制造业百强探索智能制造型，实现从"少品种、大批量"转到"个性化、少批量"的转变，是工业互联网的典型应用案例。
                    </p>
                  </div>
                </div>

                {/* Self-reliant Innovation */}
                <div className="p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="text-4xl">💡</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">自主创新领域</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      已涵盖30余省及几十个部委级客户，成功打造央企国产化替代标杆。
                    </p>
                  </div>
                </div>

                {/* Security Products - Full Width */}
                <div className="lg:col-span-2 p-8 rounded-xl border border-border hover:border-[#BF1920]/30 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#BF1920]/5 via-transparent to-[#BF1920]/5">
                  <div className="space-y-4">
                    <div className="text-4xl">🔒</div>
                    <h4 className="font-sans text-xl font-bold text-[#BF1920]">安全产品</h4>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      公司安全产品服务包括全国人大、全国政协30个部委级网站，覆盖全国31个省、市、自治区，保障国家信息安全。
                    </p>
                  </div>
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
