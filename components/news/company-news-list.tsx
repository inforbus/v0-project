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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg"
  },
  {
    id: 2,
    title: "中创股份喜开通过CMM1-DEV V3.0 ML5级整评",
    date: "02/06",
    month: "02",
    year: "2026",
    description: "近日，中创股份顺利完成了CMM1-DEV V3.0 ML5级整评。实现高能级的研发管理体系。实现后技术创新能力，获得国家认证的高能力可与肯定。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-x8G1mh2OxXDdwEitQOHHoP2GavA2hP.jpg"
  },
  {
    id: 3,
    title: "融融全身数字化转型，中创股份出席2026第十五届双点IT用户大会",
    date: "01/14",
    month: "01",
    year: "2026",
    description: "近日，\"2026第十五届双点IT用户大会\"在山西吕梁重局举办。大会由ITSS分会时，多行业检测机关结合主办、双点IT论坛亲办，致敬数据安全、标准化建议大检议、正宗监管初心、金融约局及科技企业、共商业重点与创新经营。为...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-18D7gfxEskJpMo4YWTGmkldXcoaOtl.jpg"
  },
  {
    id: 4,
    title: "中创股份出席山东省网络安全与信息化技术交流活动",
    date: "01/13",
    month: "01",
    year: "2026",
    description: "近日，山东省信息化学会第五届理事会(扩大)会议暨\"网络安全与信息化技术交流活动\"在济南成功举行。中创股份作为应用基层设施与中间件领先企业参会。并发布了题为《人工智能赋能下的国产中间件安全之路》的演讲。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jfX1cEjcNfA0NuxPdLFbqJFg0wBgJ4.jpg"
  },
  {
    id: 5,
    title: "重磅！信创数整一级单位名单出炉，中创股份获取一级认证",
    date: "12/25",
    month: "12",
    year: "2025",
    description: "近日，中国信息学会在北京发布《信创数据技术服务能力评估报告》正式公布信创数整技术服务能力一级单位名单！这份由于评估机构、专家智库、官网公开的权威性楼梯、惠帮信创数整服务做的\"实力自证\"...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-69ExBIbxUUz6IZyIcRIa6b0hmmMWlS.jpg"
  },
  {
    id: 6,
    title: "数智领航，截导前行 中创股份出席2025数智产业发展大会",
    date: "12/19",
    month: "12",
    year: "2025",
    description: "近日，以\"数智齐章 共创未来\"为主题2025年全省数智产业发展大会在济南隆重召开，本次大会由山省数据局举办,汇聚了全省工信系统、120余位代表、共同探讨人工智能与经济融发展的新路径。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg"
  },
  {
    id: 7,
    title: "中创股份深度参编五项中间件团体标准，筑牢信创领域标准化基石",
    date: "12/17",
    month: "12",
    year: "2025",
    description: "中国互联网协会日正式发布6项团体标准。中创股份作为两内领先的中间件软件中间件产品与服务提供商，亦是遗选为从资源共享研究的企业、深度参与中国中间自立研发尝试的企业、深度参与中间件领编制、近30年深种中间件领域数积累沉淀技术成展与主要实...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg"
  },
  {
    id: 8,
    title: "云融新生 智领未来——中创股份荣获AI云评估及创新应用实践认可",
    date: "12/16",
    month: "12",
    year: "2025",
    description: "近日，由中国通信标准协会主办、中国信息通信研究院承办的2025年云评估及创新应用大会在北京成功召开，本次大会由山专合作企业云计算服务商主办，多产业一线科技创新企业350余位代表、共同探讨人工智能与经济融发展的新路径。",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg"
  },
  {
    id: 9,
    title: '喜报！中创股份荣获国家级专精特新"小巨人"企业称号',
    date: "10/21",
    month: "10",
    year: "2025",
    description: '近日，工业和信息化部发布了国家级专精特新"小巨人"企业名单，山东中创股份荣登"小巨人"企业名单。此次被认定为专精特新"小巨人"企业，是对公司创新发展成绩的充分肯定。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg"
  },
  {
    id: 10,
    title: '中创股份出席"2025年第二十七届中国国际软件博览会"荣获"2025年度软件和信息技术服务名牌企业"',
    date: "10/16",
    month: "10",
    year: "2025",
    description: '今日，第27届中国国际软件博览会（以下简称"软博会"）成功举办。本次会议以"开源创新主场"为主题，聚焦软件和信息技术产业深耕、促进数字化转型升级、会议期间，中创股份凭台展示优势产品和丰富的案例。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg"
  },
  {
    id: 11,
    title: "济南市商埠软件与场企业资讯员见面会召开 中创股份赋能产业链安全与数智转型",
    date: "09/28",
    month: "09",
    year: "2025",
    description: '9月26日，济南市人民政府新闻办公室举办了"产业链上的好盛景"济南市企业家见面会——高端软件专场。作为中国软件名城，济南的软件产业生态建设成效显著；本次活动旨在集聚阳光济南高端软件企业团队发展力。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png"
  },
  {
    id: 12,
    title: '中创股份荣选出席"第三届中国上市公司产业发展论坛"荣获"2025年度未来产业之星·上市公司（未来信息）"奖项',
    date: "09/25",
    month: "09",
    year: "2025",
    description: '近日，第三届中国上市公司产业发展论坛在上海召开。活动以"未来产业与国有战略"为主题，由上海市发改委主办，深圳证券交易所发起主办。中国科技发展基金会、上海交会……',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png"
  },
  {
    id: 13,
    title: "正式布局电信运营领域！中创股份新获中国移动应用服务器中间件采购项目",
    date: "11/03",
    month: "11",
    year: "2025",
    description: "近日，国内领先的基础软件中创股份与中国的应用服务器中间件产品选择为中创软件，为国内运营商一山东中创软件有限公司（以下简称：中创股份）荣获了中国移动应用服务器中间件采购项目。此次合作不仅表明对中创…",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png"
  },
  {
    id: 14,
    title: "中创应用服务器：以AI重塑企业数字化竞争力",
    date: "10/24",
    month: "10",
    year: "2025",
    description: "当前，人工智能技术正以前所有的速度重塑各行业。从生产制造到金融服务，从医疗健康到企业管理，AI的广泛渗透与应用，正经营者转身间转到中间件架构的影响，作为企业IT架构的核心中间件的地位不……",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png"
  },
  {
    id: 15,
    title: '实力彰显！中创股份荣登"2025数字生态500强"榜单',
    date: "10/24",
    month: "10",
    year: "2025",
    description: '近日，由BP商业评刊主办的"2025数字生态大会"圆满落幕。同期推出，由产业链专业评测平台发布的年度榜单"实力彰显！中创股份荣选"2025数字生态500强"榜单"中创股份"被��送��增约新增的产业创新…"',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png"
  },
  {
    id: 16,
    title: '中软协·2024中国软件创新发展大会"成功召开｜中创分布式数据缓存中间件获得软件奖"2025年创新软件产品"',
    date: "10/23",
    month: "10",
    year: "2025",
    description: '今日，由中国软件行业协会主办的2025软件创新发展大会在苏州隆重召开。本次大会以"AI国策软件，赋能产业未来"为主题、聚焦基础软件、人工智能、数据智能等前沿技术架构、开发运行业应用带来的深远影响。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png"
  },
  {
    id: 17,
    title: "AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会",
    date: "12/08",
    month: "12",
    year: "2025",
    description: '近日，中软行业联盟与有限公司主办的"2025软件技术大会"在北京国家会议中心隆重举行。本次大会以"AI重塑软件，赋能产业未来"为主题，邀请了来自业界的专家学者和企业代表参加。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png"
  },
  {
    id: 18,
    title: "数智医疗，信创未来——中创股份荣选出席医疗信息解决方案研讨会（淮坊）并分享实践成果",
    date: "11/19",
    month: "11",
    year: "2025",
    description: '近日，山东信息化学会淮坊市卫生健康委员会联合主办的"数智医疗，信创未来――信创服务助力医疗高质量发展"医疗信息解决方案研讨会（淮坊）在淮坊召开。与会医疗卫生机构的500家医疗系统会议。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png"
  },
  {
    id: 19,
    title: '第二届教育信息技术应用创新大赛决赛将于11月15日在浙江大学举行，经过全国初赛的激烈角逐，脱颖而出的36支队伍将直播"信息技术应用创新应让"展开终极比拼',
    date: "11/13",
    month: "11",
    year: "2025",
    description: '由中国教育技术协会与中国教育技术协会主办的"第二届教育信息技术应用创新大赛"决赛将于11月15日在浙江大学举行。经过全国初赛的激烈角逐，脱颖而出的36支队伍将直播"信息技术应用创新应让"展开终极比拼、作为委属重一中间件提单位。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png"
  },
  {
    id: 20,
    title: "数智医疗、信创未来——中创股份荣邀出席医疗信息创新解决方案研讨会（日照站）并分享实践成果",
    date: "11/11",
    month: "11",
    year: "2025",
    description: '近日，"数智医疗、信创未来――信创服务助力医疗高质量发展"医疗信息创新解决方案研讨会（日照站）成功举办。本次会议由山东信息化学会与日照市卫生健康委员会、潍坊、烟台等多家医疗卫生机构与医疗管理部门共同参与。',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png"
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
            <article key={item.id} className="group border-b border-border pb-8 md:pb-12">
              {/* Date Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 flex-1">
                  {item.title}
                </h3>
                <div className="flex-shrink-0 ml-4 text-right">
                  <div className="text-primary font-bold text-lg md:text-xl">
                    {item.month}月
                  </div>
                  <div className="text-foreground/70 text-sm">
                    {item.date.split('/')[1]}日
                  </div>
                  <div className="text-foreground/50 text-xs mt-1">
                    {item.year}
                  </div>
                </div>
              </div>

              {/* Image and Content */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Image */}
                <div className="w-full md:w-96 flex-shrink-0">
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
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed line-clamp-4 md:line-clamp-5">
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary font-medium text-sm md:text-base mt-4 hover:gap-2 transition-all duration-300 w-fit"
                  >
                    查看更多
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                      <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
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
