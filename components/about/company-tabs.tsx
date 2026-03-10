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
              {/* Left side - Image with sophisticated styling */}
              <div className="relative h-96 w-full flex items-center justify-center">
                {/* Background accent box */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl" />
                
                {/* Image container with shadow and border */}
                <div className="relative h-80 w-80 rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:shadow-[0_20px_40px_rgba(191,25,32,0.15)] transition-all duration-300">
                  <Image
                    src="/images/company-building.jpg"
                    alt="中创软件总部"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-3">公司介绍</h3>
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
