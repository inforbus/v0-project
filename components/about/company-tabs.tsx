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
  const [activeTab, setActiveTab] = useState('profile')

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
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.487a1 1 0 00.502.756l4.038 2.676a5 5 0 00-6.519 6.519l-2.676-4.038a1 1 0 00-.756-.502L3.684 9.28A1 1 0 003 8.28V5z" />
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
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">山东省���南市历下区千佛山东路41-1号</p>
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
                  为国家取消省界收费及武汉城市自由��车联网系统7年的稳定可靠运行提供中间件支撑。
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
                  深度参与某电力大型央企数字化转型，实现从单一中间件产品替代到基础中间件全栈式替代的跨���。
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
                  与中国某制造业百强探索智能制造型，实现从"少品种、大批量"转到"个性化、少批量"的转变��
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
