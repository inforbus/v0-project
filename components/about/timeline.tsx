'use client'

import { useState } from 'react'

const timelineData = [
  {
    year: 2002,
    events: ['2002年成立中创软件商用中间件有限公司'],
  },
  {
    year: 2003,
    events: ['J2EE应用服务器InforWeb获国家火炬计划项目'],
  },
  {
    year: 2004,
    events: ['与北京大学在构件化领域展开合作'],
  },
  {
    year: 2007,
    events: ['作为中国发起人中唯一的企业单位，参与发起成立八方(OW2)开源软件国际联盟'],
  },
  {
    year: 2012,
    events: ['中创Loong智慧平台入选年度创新软件产品'],
  },
  {
    year: 2013,
    events: ['中创中间件InforGuard产品通过2012年度3C工厂监督检查'],
  },
  {
    year: 2014,
    events: ['中创中间件通过CMMI ML5级评审'],
  },
  {
    year: 2015,
    events: ['助力金税三期工程，中创中间件将在全国部署'],
  },
  {
    year: 2016,
    events: ['中创中间件荣获"十二五"科技创新成就展'],
  },
  {
    year: 2017,
    events: ['中创中间件InforGuard UMP荣获"2017中国十大创新软件产品"'],
  },
  {
    year: 2018,
    events: ['中创中间件成功入国中直产业协议供采购项目'],
  },
  {
    year: 2019,
    events: ['中创中间件荣获2019年度电子信息行业卓越企业'],
  },
  {
    year: 2020,
    events: ['中创PaaS平台软件获得"2020十佳创新软件产品"称号'],
  },
  {
    year: 2021,
    events: ['中创中间件正式成为Jakarta EE工作组企业级成员'],
  },
  {
    year: 2022,
    events: ['中创中间件入围山东省软件行业协会和软件行业产教融合竞争力方向强"名单'],
  },
  {
    year: 2023,
    events: ['人民日报点赞全链路关键技术应用研究成果——中创中间件助力建成首个央企安全栈式自主可控超大型数字化系统'],
  },
  {
    year: 2024,
    events: ['中创股份荣获国家级专精特新"小巨人"企业称号，中创股份（688695.SH）在上交所科创板成功上市'],
  },
  {
    year: 2025,
    events: ['中创股份荣获国家级专精特新"小巨人"企业称号'],
  },
  {
    year: 2026,
    events: ['敬请期待！！'],
  },
]

export function TimelineComponent() {
  const [selectedYear, setSelectedYear] = useState(17) // Start with 2025 (index 17)
  const [scrollPosition, setScrollPosition] = useState(0)

  const currentData = timelineData[selectedYear]
  const allYears = timelineData.map(item => item.year)

  const handlePrev = () => {
    if (selectedYear > 0) {
      setSelectedYear(selectedYear - 1)
    }
  }

  const handleNext = () => {
    if (selectedYear < timelineData.length - 1) {
      setSelectedYear(selectedYear + 1)
    }
  }

  const handleYearClick = (index: number) => {
    setSelectedYear(index)
  }

  return (
    <div className="animate-fadeIn space-y-16">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-sans text-4xl font-bold text-foreground mb-4">发展历程</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-center gap-16 min-h-72 px-8">
        {/* Left Side - Large Year - Centered */}
        <div className="text-center flex-1">
          <div className="text-8xl font-bold text-black/80">{currentData.year}年</div>
        </div>

        {/* Right Side - Events List */}
        <div className="flex-1 space-y-4">
          {currentData.events.map((event, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">{event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Track */}
      <div className="mt-32 px-4">
        {/* Years Container with Navigation */}
        <div className="flex items-center gap-8 justify-center relative">
          <button
            onClick={handlePrev}
            disabled={selectedYear === 0}
            className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#BF1920] hover:bg-[#BF1920]/10 disabled:opacity-50 disabled:border-gray-300 transition-colors shadow-md"
            aria-label="Previous year"
          >
            <svg className="w-6 h-6 text-[#BF1920] disabled:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Timeline Container */}
          <div className="flex-1 max-w-5xl">
            <div className="relative py-16 px-6">
              {/* Timeline Line - Simple Gray */}
              <div className="absolute left-0 right-0 top-6 h-1 bg-gray-300"></div>

              {/* Years Container */}
              <div className="flex items-flex-start justify-between relative z-20">
                {allYears.map((year, index) => (
                  <button
                    key={year}
                    onClick={() => handleYearClick(index)}
                    className="flex flex-col items-center transition-all group -mt-3"
                  >
                    {/* Pin/Needle Stick */}
                    <div
                      className={`w-1 transition-all ${
                        index === selectedYear
                          ? 'h-8 bg-[#BF1920]'
                          : 'h-6 bg-gray-400 group-hover:bg-[#BF1920]'
                      }`}
                    ></div>
                    {/* Circle Point */}
                    <div
                      className={`rounded-full transition-all shadow-md -mt-0.5 ${
                        index === selectedYear
                          ? 'bg-[#BF1920] w-5 h-5 ring-4 ring-[#BF1920]/20'
                          : 'bg-white w-4 h-4 border-2 border-gray-400 group-hover:border-[#BF1920]'
                      }`}
                    ></div>
                    {/* Year Label */}
                    <span
                      className={`font-sans font-semibold whitespace-nowrap transition-all text-center mt-4 ${
                        index === selectedYear
                          ? 'text-[#BF1920] text-sm'
                          : 'text-gray-600 text-xs group-hover:text-[#BF1920]'
                      }`}
                    >
                      {year}年
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={selectedYear === timelineData.length - 1}
            className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#BF1920] hover:bg-[#BF1920]/10 disabled:opacity-50 disabled:border-gray-300 transition-colors shadow-md"
            aria-label="Next year"
          >
            <svg className="w-6 h-6 text-[#BF1920] disabled:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
