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
  { id: 'contact', label: '联系我们' },
  { id: 'investors', label: '投资者关系' },
]

// 根据URL路径获取对应的tab ID
function getTabFromPath(pathname: string): string {
  if (pathname.includes('/introduction')) return 'profile'
  if (pathname.includes('/honors')) return 'honors'
  if (pathname.includes('/history')) return 'timeline'
  if (pathname.includes('/contact')) return 'contact'
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
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center items-center py-8">
            <div className="flex items-center gap-2 opacity-60 hidden md:flex">
              <div className="w-8 h-px bg-foreground/30"></div>
            </div>
            
            {tabs.map((tab) => (
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

          {activeTab === 'contact' && (
            <div className="animate-fadeIn">
              <div className="space-y-12">
                {/* Title */}
                <div className="text-center">
                  <h2 className="font-sans text-4xl font-bold text-foreground">联系我们</h2>
                </div>

                {/* Phone Section */}
                <div className="bg-gradient-to-r from-[#BF1920]/10 to-[#BF1920]/5 rounded-lg p-8 border border-[#BF1920]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#BF1920] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-foreground/60 mb-1">400全国服务热线</p>
                      <p className="font-sans text-2xl font-bold text-foreground">400-618-6180</p>
                    </div>
                  </div>
                </div>

                {/* Offices Grid */}
                <div>
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-8">服务中心</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Jinan Headquarters */}
                    <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans font-bold text-foreground mb-2">济南总部</h4>
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">山东省济南市历下区千佛山东路41-1号</p>
                        </div>
                      </div>
                    </div>

                    {/* Beijing */}
                    <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans font-bold text-foreground mb-2">北京分公司</h4>
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">北京市海淀区中关村南大街6号中电信息大厦1201</p>
                        </div>
                      </div>
                    </div>

                    {/* Kunshan */}
                    <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans font-bold text-foreground mb-2">昆山分公司</h4>
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">昆山市巴城镇学院路388号</p>
                        </div>
                      </div>
                    </div>

                    {/* Guangzhou */}
                    <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans font-bold text-foreground mb-2">广州分公司</h4>
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">广州市天河区黄埔大道中336号御发商务中心6楼A061</p>
                        </div>
                      </div>
                    </div>

                    {/* Hunan */}
                    <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans font-bold text-foreground mb-2">湖南分公司</h4>
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">长沙市开福区湘江中路52号凯乐国际9栋1507室</p>
                        </div>
                      </div>
                    </div>

                    {/* Shanghai */}
                    <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans font-bold text-foreground mb-2">上海市支持服务中心</h4>
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">上海市徐汇区华山路2018号汇银广场北楼2002</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'investors' && (
            <div className="animate-fadeIn">
              <div className="space-y-16">
                {/* Title */}
                <div className="text-center space-y-4">
                  <h2 className="font-sans text-4xl font-bold text-foreground">投资者关系</h2>
                </div>

                {/* Contact Information Cards */}
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                  {/* Phone */}
                  <div className="border border-border rounded-lg p-8 hover:border-[#BF1920] hover:shadow-md transition-all duration-300 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-[#BF1920]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#BF1920]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-foreground/60 mb-2">联系电话</p>
                    <p className="font-sans text-2xl font-bold text-foreground">0531-81753702</p>
                  </div>

                  {/* Fax */}
                  <div className="border border-border rounded-lg p-8 hover:border-[#BF1920] hover:shadow-md transition-all duration-300 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-[#BF1920]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-foreground/60 mb-2">公司传真</p>
                    <p className="font-sans text-2xl font-bold text-foreground">0531-81753668</p>
                  </div>

                  {/* Email */}
                  <div className="border border-border rounded-lg p-8 hover:border-[#BF1920] hover:shadow-md transition-all duration-300 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-[#BF1920]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-sans text-sm text-foreground/60 mb-2">投资者关系邮箱</p>
                    <p className="font-sans text-lg font-bold text-foreground break-all">infors_ir@cvicse.com</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="text-center bg-slate-50 rounded-lg p-8 border border-border">
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    如有任何关于投资者关系的问题，欢���通过上述方式与我们联系，我们将竭诚为您服务。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Application Domains Section - Full Width - Removed */}
    </div>
  )
}
