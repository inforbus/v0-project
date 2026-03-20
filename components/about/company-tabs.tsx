'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { HonorsCarousel } from './honors-carousel'
import { TimelineComponent } from './timeline'

const tabs = [
  { id: 'profile', label: '公司介绍' },
  { id: 'honors', label: '公司荣誉' },
  { id: 'timeline', label: '发展历程' },
  { id: 'investors', label: '投资者关系' },
]

// 根据URL路径获取对应的tab ID
function getTabFromPath(pathname: string): string {
  if (pathname.includes('/introduction')) return 'profile'
  if (pathname.includes('/honors')) return 'honors'
  if (pathname.includes('/history')) return 'timeline'
  if (pathname.includes('/investor')) return 'investors'
  return 'profile'
}

export function CompanyTabs() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(() => getTabFromPath(pathname))

  useEffect(() => {
    const tab = getTabFromPath(pathname)
    setActiveTab(tab)
  }, [pathname])

  return (
    <div className="w-full">
      {/* Tabs Navigation - Capsule Style */}
      <div className="w-full -mt-20 relative z-10">
        <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-wrap gap-4 justify-center items-center py-8">
            <div className="flex items-center gap-2 opacity-60 hidden md:flex">
              <div className="w-8 h-px bg-foreground/30"></div>
            </div>

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-6 font-sans font-semibold text-sm transition-all duration-300 whitespace-nowrap rounded-full border-2 ${activeTab === tab.id
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
        <div className="mx-auto px-4 py-16 lg:px-8 lg:py-20" style={{ maxWidth: "1400px" }}>
          {activeTab === 'profile' && (
            <div className="animate-fadeIn">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                {/* Left side */}
                <div className="space-y-6">
                  {/* Title section */}
                  <div>
                    <h2 className="font-sans text-3xl lg:text-4xl font-bold text-foreground mb-2 whitespace-nowrap">山东中创软件商用中间件股份有限公司</h2>
                  </div>

                  {/* Image */}
                  <div className="relative h-80 w-full rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/images/company-building.jpg"
                      alt="中创软件总部"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-6">
                  <div>
                    <p className="font-sans text-base text-foreground/80 leading-relaxed">
                      山东中创软件商用中间件股份有限公司（以下简称"中创中间件"）成立于2002年，是国内领先的基础软件产品与服务提供商，是国家"核高基"科技重大专项支持单位，是国家级专精特新“小巨人”企业，拥有CMMI DEV 5级资质和ISO9001质量体系认证书，为国际Jakarta EE工作组企业级会员单位。
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-base text-foreground/80 leading-relaxed">
                      公司产品获得工信部颁布的"国防科学技术进步一等奖"、山东省人民政府颁布的"山东省科学技术进步二等奖"、中国软件行业协会颁布的中国"自主可靠企业核心软件品牌"、"年度创新软件产品"、"十佳创新软件产品"等多个奖项。
                    </p>
                  </div>

                  <div className="border-l-4 border-[#BF1920] bg-[#BF1920]/5 p-6">
                    <p className="font-sans text-sm text-foreground leading-relaxed">
                      中创中间件作为信息领域基础软件的主力军，中创中间件在中间件行业深耕二十年，致力于推动中间件的技术创新与产品化、产业化，树立了信得信的品牌声誉。多款产品列入政府采购目录，连续多年被信息技术应用创新工作委员会评为"信息技术应用创新工作委员会卓越贡献成员单位"。系列产品遵循国际及国内中间件主流技术标准，拥有核心技术知识产权，中间件研发水平在国内处于领先水平，并全面适配当前大数据、物联网、云计算、人工智能等前沿技术，核心产品具备规模化替代国外主流中间件厂商产品的能力。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'honors' && (
            <div className="animate-fadeIn">
              <div className="space-y-12">
                {/* Title */}
                <div className="text-center">
                  <h2 className="font-sans text-4xl font-bold text-foreground">公司荣誉</h2>
                </div>
                <HonorsCarousel />
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="animate-fadeIn">
              <div className="space-y-12">
                {/* Title */}
                <div className="text-center">
                  <h2 className="font-sans text-4xl font-bold text-foreground">发展历程</h2>
                </div>
                <TimelineComponent />
              </div>
            </div>
          )}

          {activeTab === 'investors' && (
            <div className="animate-fadeIn">
              <div className="text-center space-y-4">
                <h2 className="font-sans text-4xl font-bold text-foreground">投资者关系</h2>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Application Domains Section - Full Width - Removed */}
    </div>
  )
}
