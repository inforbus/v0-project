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
    description: '近日，以数智齐章 共创未来为主题2025年全省数智产业发展大会在济南隆重召开，本次大会由山省数据局举办,汇聚了全省工信系统、120余位代表。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg'
  },
  {
    id: 7,
    title: '中创股份深度参编五项中间件团体标准，筑牢信创领域标准化基石',
    date: '12/17',
    month: '12',
    year: '2025',
    description: '中国互联网协会日正式发布6项团体标准。中创股份作为两内领先的中间件软件中间件产品与服务提供商，亦是遗选为从资源共享研究的企业。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg'
  },
  {
    id: 8,
    title: '云融新生 智领未来——中创股份荣获AI云评估及创新应用实践认可',
    date: '12/16',
    month: '12',
    year: '2025',
    description: '近日，由中国通信标准协会主办、中国信息通信研究院承办的2025年云评估及创新应用大会在北京成功召开，本次大会由山专合作企业云计算服务商主办。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg'
  },
  {
    id: 9,
    title: '喜报！中创股份荣获国家级专精特新企业称号',
    date: '10/21',
    month: '10',
    year: '2025',
    description: '近日，工业和信息化部发布了国家级专精特新企业名单，山东中创股份荣登企业名单。此次被认定为专精特新企业，是对公司创新发展成绩的充分肯定。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg'
  },
  {
    id: 10,
    title: '中创股份出席2025年第二十七届中国国际软件博览会',
    date: '10/16',
    month: '10',
    year: '2025',
    description: '今日，第27届中国国际软件博览会成功举办。本次会议以开源创新主场为主题，聚焦软件和信息技术产业深耕、促进数字化转型升级。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg'
  },
  {
    id: 11,
    title: '济南市商埠软件与场企业资讯员见面会召开',
    date: '09/28',
    month: '09',
    year: '2025',
    description: '9月26日，济南市人民政府新闻办公室举办了产业链上的好盛景济南市企业家见面会。作为中国软件名城，济南的软件产业生态建设成效显著。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png'
  },
  {
    id: 12,
    title: '中创股份荣选出席第三届中国上市公司产业发展论坛',
    date: '09/25',
    month: '09',
    year: '2025',
    description: '近日，第三届中国上市公司产业发展论坛在上海召开。活动以未来产业与国有战略为主题，由上海市发改委主办。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png'
  },
  {
    id: 13,
    title: '正式布局电信运营领域！中创股份新获中国移动应用服务器中间件采购项目',
    date: '11/03',
    month: '11',
    year: '2025',
    description: '近日，国内领先的基础软件中创股份与中国的应用服务器中间件产品选择为中创软件，获得了中国移动应用服务器中间件采购项目。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png'
  },
  {
    id: 14,
    title: '中创应用服务器：以AI重塑企业数字化竞争力',
    date: '10/24',
    month: '10',
    year: '2025',
    description: '当前，人工智能技术正以前所有的速度重塑各行业。从生产制造到金融服务，从医疗健康到企业管理，AI的广泛渗透与应用。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png'
  },
  {
    id: 15,
    title: '实力彰显！中创股份荣登2025数字生态500强榜单',
    date: '10/24',
    month: '10',
    year: '2025',
    description: '近日，由BP商业评刊主办的2025数字生态大会圆满落幕。同期推出，由产业链专业评测平台发布的年度榜单。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png'
  },
  {
    id: 16,
    title: '中软协·2024中国软件创新发展大会成功召开',
    date: '10/23',
    month: '10',
    year: '2025',
    description: '今日，由中国软件行业协会主办的2025软件创新发展大会在苏州隆重召开。本次大会以AI国策软件，赋能产业未来为主题。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png'
  },
  {
    id: 17,
    title: 'AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会',
    date: '12/08',
    month: '12',
    year: '2025',
    description: '近日，中软行业联盟与有限公司主办的2025软件技术大会在北京国家会议中心隆重举行。本次大会以AI重塑软件，赋能产业未来为主题。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png'
  },
  {
    id: 18,
    title: '数智医疗，信创未来——中创股份荣选出席医疗信息解决方案研讨会',
    date: '11/19',
    month: '11',
    year: '2025',
    description: '近日，山东信息化学会淮坊市卫生健康委员会联合主办的数智医疗，信创未来医疗信息解决方案研讨会成功举办。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png'
  },
  {
    id: 19,
    title: '第二届教育信息技术应用创新大赛决赛在浙江大学举行',
    date: '11/13',
    month: '11',
    year: '2025',
    description: '由中国教育技术协会主办的第二届教育信息技术应用创新大赛决赛在浙江大学举行。经过全国初赛的激烈角逐，36支队伍脱颖而出。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png'
  },
  {
    id: 20,
    title: '数智医疗、信创未来——中创股份荣邀出席日照医疗信息创新解决方案研讨会',
    date: '11/11',
    month: '11',
    year: '2025',
    description: '近日，数智医疗、信创未来医疗信息创新解决方案研讨会日照站成功举办。本次会议由山东信息化学会与日照市卫生健康委员会共同参与。',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png'
  }
]

const itemsPerPage = 5

export function CompanyNewsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(allNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* News List */}
        <div className="space-y-0">
          {currentNews.map((item, index) => (
            <article key={item.id} className="flex gap-6 md:gap-8 border-b border-border py-6 md:py-8">
              {/* Date Column */}
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {item.month}-{item.date.split('/')[1]}
                </div>
                <div className="text-xs md:text-sm text-foreground/50 mt-1 px-2 py-1 bg-foreground/5 rounded inline-block">
                  {item.year}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 line-clamp-2 mb-3">
                  {item.description}
                </p>
                <Link href="#" className="inline-flex items-center text-primary text-sm md:text-base font-medium hover:gap-1 transition-all">
                  详细
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Image Column */}
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium rounded border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/5"
          >
            首页
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium rounded border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/5"
          >
            上一页
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 text-sm font-medium rounded border ${
                currentPage === page
                  ? 'bg-primary border-primary text-white'
                  : 'border-border hover:bg-foreground/5'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium rounded border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/5"
          >
            下一页
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium rounded border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/5"
          >
            尾页
          </button>
        </div>
      </div>
    </section>
  )
}
