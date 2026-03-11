'use client'

import { useState } from 'react'

const timelineData = [
  {
    year: 2002,
    title: '2002年成立中创软件商用中间件有限公司',
  },
  {
    year: 2003,
    title: 'J2EE应用服务器InforWeb获国家火炬计划项目',
  },
  {
    year: 2004,
    title: '与北京大学在构件化领域展开合作',
  },
  {
    year: 2007,
    title: '作为中国发起人中唯一的企业单位，参与发起成立八方(OW2)开源软件国际联盟',
  },
  {
    year: 2012,
    title: '中创Loong智慧平台入选年度创新软件产品',
  },
  {
    year: 2013,
    title: '中创中间件InforGuard产品通过2012年度3C工厂监督检查',
  },
  {
    year: 2014,
    title: '中创中间件通过CMMI ML5级评审',
  },
  {
    year: 2015,
    title: '助力金税三期工程，中创中间件将在全国部署',
  },
  {
    year: 2016,
    title: '中创中间件荣获"十二五"科技创新成就展',
  },
  {
    year: 2017,
    title: '中创中间件InforGuard UMP荣获"2017中国十大创新软件产品"',
  },
  {
    year: 2018,
    title: '中创中间件成功入国中直产业协议供采购项目',
  },
  {
    year: 2019,
    title: '中创中间件荣获2019年度电子信息行业卓越企业',
  },
  {
    year: 2020,
    title: '中创PaaS平台软件获得"2020十佳创新软件产品"称号',
  },
  {
    year: 2021,
    title: '中创中间件正式成为Jakarta EE工作组企业级成员',
  },
  {
    year: 2022,
    title: '中创中间件入围山东省软件行业协会和软件行业产教融合竞争力方向强"名单',
  },
  {
    year: 2023,
    title: '人民日报点赞全链路关键技术应用研究成果——中创中间件助力建成首个央企安全栈式自主可控超大型数字化系统',
  },
  {
    year: 2024,
    title: '中创股份荣获国家级专精特新"小巨人"企业称号，中创股份（688695.SH）在上交所科创板成功上市',
  },
  {
    year: 2025,
    title: '中创股份荣获国家级专精特新"小巨人"企业称号',
  },
  {
    year: 2026,
    title: '敬请期待！！',
  },
]

// Group timeline data into batches of 4
const groupedTimeline = []
for (let i = 0; i < timelineData.length; i += 4) {
  groupedTimeline.push(timelineData.slice(i, i + 4))
}

export function TimelineComponent() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  const currentGroup = groupedTimeline[currentGroupIndex]
  const maxIndex = groupedTimeline.length - 1

  const handlePrev = () => {
    setCurrentGroupIndex((prev) => (prev - 1 + groupedTimeline.length) % groupedTimeline.length)
  }

  const handleNext = () => {
    setCurrentGroupIndex((prev) => (prev + 1) % groupedTimeline.length)
  }

  return (
    <div className="animate-fadeIn space-y-12">
      {/* Title */}
      <h2 className="font-sans text-3xl font-bold text-center text-foreground mb-16">发展历程</h2>

      {/* Timeline Container */}
      <div className="relative px-12">
        {/* Timeline Line */}
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-[#BF1920] via-gray-300 to-gray-300"></div>

        {/* Timeline Items */}
        <div className="flex items-start justify-between">
          {currentGroup.map((item, index) => (
            <div key={`${currentGroupIndex}-${index}`} className="flex-1 text-center">
              {/* Year */}
              <div className="text-2xl font-bold text-foreground mb-8 relative">
                {item.year}年
              </div>

              {/* Timeline Point */}
              <div className="flex justify-center mb-8">
                <div className="w-6 h-6 rounded-full bg-[#BF1920] shadow-lg border-4 border-white relative z-10"></div>
              </div>

              {/* Description */}
              <div className="text-sm text-foreground/70 leading-relaxed h-24 flex items-center justify-center px-2">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#BF1920] hover:bg-[#BF1920]/10 transition-colors"
          aria-label="Previous timeline"
        >
          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Pagination Indicator */}
        <div className="text-center">
          <span className="text-foreground/60 text-sm">
            {currentGroupIndex + 1} / {groupedTimeline.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#BF1920] hover:bg-[#BF1920]/10 transition-colors"
          aria-label="Next timeline"
        >
          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
