'use client'

import { useState } from 'react'
import Link from 'next/link'

const allNews = [
  {
    id: 1,
    title: '万马奔腾启新程：中创股份交出高质量蛇年答卷',
    date: '02/13',
    month: '02',
    year: '2026',
    description: '回顾过去一年，中创股份坚定实，勤练本领，稳步前行，在高质量发展道路上迈出坚实步伐；但新的春天正在来临。今年，我们将持平台，更传播感悟，更传播进步。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg'
  },
  {
    id: 2,
    title: '中创股份喜开通过CMM1-DEV V3.0 ML5级整评',
    date: '02/06',
    month: '02',
    year: '2026',
    description: '近日，中创股份顺利完成了CMM1-DEV V3.0 ML5级整评。实现高能级的研发管理体系。实现后技术创新能力，获得国家认证的高能力可与肯定。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-x8G1mh2OxXDdwEitQOHHoP2GavA2hP.jpg'
  },
  {
    id: 3,
    title: '融融全身数字化转型，中创股份出席2026第十五届双点IT用户大会',
    date: '01/14',
    month: '01',
    year: '2026',
    description: '近日，2026第十五届双点IT用户大会在山西吕梁重局举办。大会由ITSS分会时，多行业检测机关结合主办、双点IT论坛亲办，致敬数据安全、标准化建议大检议。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-18D7gfxEskJpMo4YWTGmkldXcoaOtl.jpg'
  },
  {
    id: 4,
    title: '中创股份出席山东省网络安全与信息化技术交流活动',
    date: '01/13',
    month: '01',
    year: '2026',
    description: '近日，山东省信息化学会第五届理事会扩大会议暨网络安全与信息化技术交流活动在济南成功举行。中创股份作为应用基层设施与中间件领先企业参会。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jfX1cEjcNfA0NuxPdLFbqJFg0wBgJ4.jpg'
  },
  {
    id: 5,
    title: '重磅！信创数整一级单位名单出炉，中创股份获取一级认证',
    date: '12/25',
    month: '12',
    year: '2025',
    description: '近日，中国信息学会在北京发布《信创数据技术服务能力评估报告》正式公布信创数整技术服务能力一级单位名单。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-69ExBIbxUUz6IZyIcRIa6b0hmmMWlS.jpg'
  },
  {
    id: 6,
    title: '数智领航，截导前行 中创股份出席2025数智产业发展大会',
    date: '12/19',
    month: '12',
    year: '2025',
    description: '近日，以数智齐章 共创未来为主题2025年全省数智产业发展大会在济南隆重召开，本次大会由山省数据局举办。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg'
  },
  {
    id: 7,
    title: '中创股份深度参编五项中间件团体标准，筑牢信创领域标准化基石',
    date: '12/17',
    month: '12',
    year: '2025',
    description: '中国互联网协会日正式发布6项团体标准。中创股份作为两内领先的中间件软件中间件产品与服务提供商。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg'
  },
  {
    id: 8,
    title: '云融新生 智领未来——中创股份荣获AI云评估及创新应用实践认可',
    date: '12/16',
    month: '12',
    year: '2025',
    description: '近日，由中国通信标准协会主办、中国信息通信研究院承办的2025年云评估及创新应用大会在北京成功召开。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg'
  },
  {
    id: 9,
    title: '喜报！中创股份荣获国家级专精特新企业称号',
    date: '10/21',
    month: '10',
    year: '2025',
    description: '近日，工业和信息化部发布了国家级专精特新企业名单，山东中创股份荣登企业名单。此次被认定为专精特新企业。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg'
  },
  {
    id: 10,
    title: '中创股份出席第二十七届中国国际软件博览会',
    date: '10/16',
    month: '10',
    year: '2025',
    description: '今日，第27届中国国际软件博览会成功举办。本次会议以开源创新主场为主题，聚焦软件和信息技术产业深耕。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg'
  }
]

const ITEMS_PER_PAGE = 4

export function CompanyNewsList() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentNews = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 3xl:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* News List */}
        <div className="space-y-12 md:space-y-16">
          {currentNews.map((item) => (
            <article key={item.id} className="group">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-96">
                  <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 flex-1">
                        {item.title}
                      </h3>
                      <div className="flex-shrink-0 text-right">
                        <div className="text-primary font-bold text-2xl">{item.month}</div>
                        <div className="text-foreground/70 text-sm">{item.date.split('/')[1]}</div>
                        <div className="text-foreground/50 text-xs mt-1">{item.year}</div>
                      </div>
                    </div>
                    <p className="text-base text-foreground/70 leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary font-medium text-base mt-6 hover:gap-2 transition-all duration-300 w-fit"
                  >
                    查看更多
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                      <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="border-b border-border mt-12 md:mt-16" />
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(1)}
            className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded transition-all duration-300 hover:bg-foreground/5 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            首页
          </button>
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded transition-all duration-300 hover:bg-foreground/5 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            上一页
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 text-sm font-medium rounded transition-all duration-300 ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'text-foreground border border-border hover:bg-foreground/5'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded transition-all duration-300 hover:bg-foreground/5 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            下一页
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded transition-all duration-300 hover:bg-foreground/5 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            尾页
          </button>
        </div>
      </div>
    </section>
  )
}
