'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HonorsCarousel } from './honors-carousel'

const tabs = [
  { id: 'profile', label: '公司介绍' },
  { id: 'honors', label: '公司荣誉' },
  { id: 'timeline', label: '发展历程' },
  { id: 'contact', label: '联系我们' },
]

export function CompanyTabs() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 bg-background">
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
      <div className="bg-background">
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
            </div>
          )}

          {activeTab === 'honors' && (
            <HonorsCarousel />
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

      {/* Application Domains Section - Full Width - Only show in profile tab */}
      {activeTab === 'profile' && (
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h3 className="font-sans text-3xl font-bold text-foreground mb-12 text-center">应用领域</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Financial Domain */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">金融领域</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  与产品操作系统、数据库运维等结合多年，为ZGS银行、ZS银行等大型商业银行及国家政策性银行成功应用。
                </p>
              </div>

              {/* Taxation Domain */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">税务领域</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  中创工作流中间件在IBM和Oracle公司同类产品竞争中胜出，作为国家金税工程基础软件平台的重要组成部分。
                </p>
              </div>

              {/* Transportation Domain */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">交通领域</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  为国家取消省界收费及武汉城市自由流车联网系统7年的稳定可靠运行提供中间件支撑。
                </p>
              </div>

              {/* Energy Domain */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">能源领域</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  深度参与某电力大型央企数字化转型，实现从单一中间件产品替代到基础中间件全栈式替代的跨越。
                </p>
              </div>

              {/* Smart Manufacturing Domain */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">智能制造领域</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  与中国某制造业百强探索智能制造型，实现从"少品种、大批量"转到"个性化、少批量"的转变。
                </p>
              </div>

              {/* Self-reliant Innovation */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.469V19a1 1 0 11-2 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">自主创新领域</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  已涵盖30余省及几十个部委级客户，成功打造央企国产化替代标杆。
                </p>
              </div>

              {/* Security Products */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-sans text-lg font-bold text-foreground">安全产品</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  公司安全产品服务包括全国人大、全国政协30个部委级网站，覆盖全国31个省市自治区。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
