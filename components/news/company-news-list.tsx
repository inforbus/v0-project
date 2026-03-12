'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: number
  title: string
  date: string
  month: string
  year: string
  description: string
  image: string
}

const allNews: NewsItem[] = [
  {
    id: 1,
    title: "万马奔腾启新程：中创股份交出高质量蛇年答卷",
    date: "02/13",
    month: "02",
    year: "2026",
    description: "回顾过去一年，中创股份坚定实，勤练本领，稳步前行，在高质量发展道路上迈出坚实步伐；但新的春天正在来临。今年，我们将持平台，更传播感悟，更传播进步：藏与坚实，能够共襄助仁亲马精性，方蓝图，到新的'新年，让我们携手向前。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4xr2bpQxRn95PjBtBr9oqCRpsIlaSA.png"
  },
  {
    id: 2,
    title: "中创股份喜开通过CMM1-DEV V3.0 ML5级整评",
    date: "02/06",
    month: "02",
    year: "2026",
    description: "近日，中创股份顺利完成了CMM1-DEV V3.0 ML5级整评。实现高能级的研发管理体系。实现后技术创新能力，获得国家认证的高能力可与肯定。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4xr2bpQxRn95PjBtBr9oqCRpsIlaSA.png"
  },
  {
    id: 3,
    title: "融融全身数字化转型，中创股份出席2026第十五届双点IT用户大会",
    date: "01/14",
    month: "01",
    year: "2026",
    description: "近日，\"2026第十五届双点IT用户大会\"在山西吕梁重局举办。大会由ITSS分会时，多行业检测机关结合主办、双点IT论坛亲办，致敬数据安全、标准化建议大检议、正宗监管初心、金融约局及科技企业、共商业重点与创新经营。为...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4xr2bpQxRn95PjBtBr9oqCRpsIlaSA.png"
  },
  {
    id: 4,
    title: "中创股份出席山东省网络安全与信息化技术交流活动",
    date: "01/13",
    month: "01",
    year: "2026",
    description: "近日，山东省信息化学会第五届理事会(扩大)会议暨\"网络安全与信息化技术交流活动\"在济南成功举行。中创股份作为应用基层设施与中间件领先企业参会。并发布了题为《人工智能赋能下的国产中间件安全之路》的演讲。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4xr2bpQxRn95PjBtBr9oqCRpsIlaSA.png"
  },
  {
    id: 5,
    title: "重磅！信创数整一级单位名单出炉，中创股份获取一级认证",
    date: "12/25",
    month: "12",
    year: "2025",
    description: "近日，中国信息学会在北京发布《信创数据技术服务能力评估报告》正式公布信创数整技术服务能力一级单位名单！这份由于评估机构、专家智库、官网公开的权威性楼梯、惠帮信创数整服务做的\"实力自证\"...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gRcQhlw5QxKHXEMrYmVXvNl4ihFv8L.png"
  },
  {
    id: 6,
    title: "数智领航，截导前行 中创股份出席2025数智产业发展大会",
    date: "12/19",
    month: "12",
    year: "2025",
    description: "近日，以\"数智齐章 共创未来\"为主题2025年全省数智产业发展大会在济南隆重召开，本次大会由山省数据局举办,汇聚了全省工信系统、120余位代表、共同探讨人工智能与经济融发展的新路径。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gRcQhlw5QxKHXEMrYmVXvNl4ihFv8L.png"
  },
  {
    id: 7,
    title: "中创股份深度参编五项中间件团体标准，筑牢信创领域标准化基石",
    date: "12/17",
    month: "12",
    year: "2025",
    description: "中国互联网协会日正式发布6项团体标准。中创股份作为两内领先的中间件软件中间件产品与服务提供商，亦是遗选为从资源共享研究的企业、深度参与中国中间自立研发尝试的企业、深度参与中间件领编制、近30年深种中间件领域数积累沉淀技术成展与主要实...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gRcQhlw5QxKHXEMrYmVXvNl4ihFv8L.png"
  },
  {
    id: 8,
    title: "云融新生 智领未来——中创股份荣获AI云评估及创新应用实践认可",
    date: "12/16",
    month: "12",
    year: "2025",
    description: "近日，由中国通信标准协会主办、中国信息通信研究院承办的2025年云评估及创新应用大会在北京成功召开，本次大会由山专合作企业云计算服务商主办，多产业一线科技创新企业350余位代表、共同探讨人工智能与经济融发展的新路径。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gRcQhlw5QxKHXEMrYmVXvNl4ihFv8L.png"
  }
]

const ITEMS_PER_PAGE = 4

export function CompanyNewsList() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNews = allNews.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 3xl:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        {/* News Items */}
        <div className="space-y-8 md:space-y-12">
          {currentNews.map((item) => (
            <article key={item.id} className="group flex gap-6 md:gap-8 border-b border-border pb-8 md:pb-12">
              {/* Image */}
              <div className="flex-shrink-0 w-32 md:w-48 lg:w-56">
                <div className="relative overflow-hidden rounded-lg bg-muted h-32 md:h-48 lg:h-56">
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
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed line-clamp-3 md:line-clamp-4">
                    {item.description}
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary font-medium text-sm md:text-base mt-4 hover:gap-2 transition-all duration-300"
                >
                  查看更多
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                    <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Date */}
              <div className="flex-shrink-0 text-right">
                <div className="text-primary font-bold text-xl md:text-2xl">
                  {item.month}
                </div>
                <div className="text-foreground/70 text-sm md:text-base">
                  {item.date.split('/')[1]}
                </div>
                <div className="text-foreground/50 text-xs md:text-sm mt-1">
                  {item.year}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 md:mt-16 flex justify-center items-center gap-2 md:gap-3">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-2 md:px-3 py-2 text-sm border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              首页
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 md:px-3 py-2 text-sm border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              上一页
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 md:px-4 py-2 text-sm rounded transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 md:px-3 py-2 text-sm border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              下一页
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2 md:px-3 py-2 text-sm border border-border rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              尾页
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
