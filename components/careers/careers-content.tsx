"use client"

import { useState } from "react"
import { MapPin, Users, GraduationCap, ChevronDown, ChevronUp, Mail } from "lucide-react"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

type Job = {
  id: string
  title: string
  location: string
  headcount: string
  education: string
  category: string
  duties: { heading: string; items: string[] }[]
  requirements: { heading: string; items: string[] }[]
}

const jobs: Job[] = [
  {
    id: "sysops",
    title: "系统集成/运维工程师",
    location: "全国各地",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "独立完成信息安全类项目的实施交付、维护与测试考核工作；包括现场系统勘察/搭建/部署/调试/测试上线/验收，实施方案和过程文档编写与维护，现场客户沟通等。对软硬件实施质量、上线任务和测试考核结果负责；",
          "发现产品或系统问题，具备清晰的排障思路，能够提交清晰的问题记录和产品优化建议；对现网系统运维稳定性负责；",
          "解决系统技术问题，调查与挖掘客户需求，提出有针对性的解决方案；",
          "配合销售和产品线拓展市场，维护客户关系。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科以上学历，信息安全、计算机、通信、电子类相关专业；",
          "具有3年以上工作经验；有运营商项目经验者和项目管理经验者优先；",
          "熟悉Linux操作系统的使用和维护，了解mysql/oracle等主流数据库；了解TCP/IP协议及路由交换体系架构；",
          "具有通信机房集成实施经验和运维经验；",
          "具有很好的技术文档编制能力；较强的表达能力及与客户沟通能力，责任心强，承压能力强。",
        ],
      },
    ],
  },
  {
    id: "qa",
    title: "测试工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "参与项目的需求和迭代开发计划的讨论和评审；",
          "依据开发规划制定软件集成测试计划及编写测试案例；",
          "执行测试用例及bug的定位、跟踪和管理；",
          "测试问题管理及测试报告发布；",
          "产品操作版本发布及产品操作手册组织编写。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职资格",
        items: [
          "3年以上测试经验，熟练掌握常用的软件测试方法、软件工程知识；",
          "掌握一到多种自动化测试工具，针对接口测试、Web程序测试、数据类项目测试；",
          "掌握一到多种性能测试工具，Jmeter熟练优先；",
          "熟练运用一到多种脚本语言进行测试脚本的编写；",
          "熟练操作DDL、DML数据库操作语言，能够操作MySQL、Oracle等数据库；",
          "熟练掌握版本控制工具，如Git、SVN；",
          "熟悉Linux操作系统，能够对产品进行发版、部署；",
          "有大型数据集成类项目测试经验优先。",
        ],
      },
    ],
  },
  {
    id: "c-dev",
    title: "C开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "功能或服务级软件的开发，对公共模块、组件的设计及实现；",
          "功能模块的开发和提测文档的编写；经验的总结归纳与分享；",
          "团队协作；",
          "新技术预研；",
          "上级领导安排的其他临时性工作。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科以上学历，通信类、计算机类、电子、自动化控制类专业；",
          "3年以上C工作经验；",
          "熟悉Linux系统下C或C++语言软件开发，熟练使用标准库、IO操作及常用库；",
          "熟练使用Linux系统，包括常用操作和配置，能够熟练编写shell脚本；",
          "熟悉网络编程，对TCP/IP协议有深入了解；熟悉HTTP/HTTPS等常用网络通信协议；",
          "具有网络安全知识，对网络访问的路由和过滤拦截有实际开发经验更佳。",
        ],
      },
    ],
  },
  {
    id: "frontend",
    title: "前端开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "与产品设计师、后台工程师、产品经理进行协作，参与产品的UI设计和需求讨论，开发和维护项目/自研产品；",
          "对现有代码进行持续改进；",
          "前端组件的开发和维护；",
          "思路清晰，具备良好的沟通能力和团队协作精神。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职资格",
        items: [
          "2年以上前端开发经验，本科以上学历，计算机或相关专业；",
          "扎实的前端基础，熟练掌握JavaScript、HTML5、CSS3核心技术；",
          "有Vue.js或React框架实践经验，并了解其中原理；",
          "对前端工程化有深刻理解，熟练掌握webpack、rollup等工具；",
          "熟悉前端性能优化，能够独立完成开发和优化迭代；",
          "有Git使用经验，理解Git workflow；",
          "熟悉微信小程序、公众号开发更佳。",
        ],
      },
    ],
  },
  {
    id: "java-dev",
    title: "Java/后端开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "按照项目计划，按时提交高质量代码，完成开发任务；",
          "帮助团队其他成员解决技术问题及相关技术分享；",
          "项目核心业务系统架构设计及优化；",
          "辅助项目经理完成项目现场的部分组织工作。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "大学本科以上学历，计算机或相关专业；5年以上Java实际项目开发经验；",
          "精通Java，对Spring、SpringBoot、MyBatis等了解原理和实现机制，具有SpringCloud开发经验优先；",
          "精通SQL，熟练使用MySQL、Oracle等数据库，具备一定的SQL优化能力；",
          "熟悉分布式系统的设计和应用，熟悉分布式、缓存、消息、负载均衡等机制和实现。",
        ],
      },
    ],
  },
  {
    id: "ui",
    title: "UI设计师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "设计类",
    duties: [
      {
        heading: "职位描述",
        items: [
          "进行软件产品UI设计工作；",
          "了解产品行业特点，协同售前及开发团队进行设计可行性和易用性评审，快速输出UI及交互原型；",
          "协助产品设计实现工作，配合开发团队不断优化产品实现效果，确保产品易用；",
          "完成日常PPT美化、产品操作界面美化等工作。",
        ],
      },
    ],
    requirements: [
      {
        heading: "工作要求",
        items: [
          "本科及以上，计算机或设计类相关专业；",
          "3年以上B端产品、大屏等设计经验，并有成功上线案例；",
          "熟悉后端产品用户研究方法及交互设计流程，具有良好的创新思维和逻辑思维能力；",
          "熟练使用Sketch、Axure、PS等原型及设计软件；",
          "有大数据及数据管理类软件UI设计经验者优先。",
        ],
      },
    ],
  },
  {
    id: "solution-engineer",
    title: "解决方案工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "产品与方案",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责公司产品/方案工作，包括客户调研、需求分析和应用解决方案的制定、产品方案讲解与交流、数据的整理、产品规划、产品演示等；",
          "配合销售人员完成销售过程中的技术支持和销售拓展工作；",
          "负责提供产品培训、讲解及用户答疑等工作；",
          "与客户进行沟通，了解关键的技术或业务需求，提出相应的解决方案；",
          "维护客户关系，解答客户咨询，制定方案计划，协同完成团队目标；",
          "收集客户建议并落地规划产品需求，编写产品物料，与研发一起完成项目交付。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科以上，计算机、统计学等专业或从事过数据中台、数据分析、数据治理、地理信息系统等相关专业的技术工作者优先；",
          "有政府行业、电力行业、安全行业等相关经验者优先。",
        ],
      },
    ],
  },
  {
    id: "pm",
    title: "产品经理",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "产品与方案",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "对产品的需求、业务设计负责；",
          "负责收集、汇总、分析客户需求，并形成客户认可的产品设计；",
          "引导并确定产品功能、界面设计、交互设计，确保产品的最终交付；",
          "协同研发团队，控制产品交付成果与设计契合度，达成产品目标；",
          "负责后期产品相应文档的编制；",
          "负责竞品分析、行业分析等工作，持续推进产品完善、优化。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职资格",
        items: [
          "本科及以上学历，5年以上软件/互联网产品经理经验，有政法相关项目产品设计优先；",
          "熟练掌握产品需求分析、设计的技巧，对交互设计过程有深入的了解；",
          "具备计算机软件相关知识，有B端PC、APP软件产品设计经验；",
          "熟练使用原型工具（如蓝湖/Axure）、思维导图、Word/Excel/PPT/Visio等；",
          "擅长数据分析与需求调研；文档编写能力强；",
          "较强的逻辑思维能力与沟通表达能力；工作积极有责任心。",
        ],
      },
    ],
  },
  {
    id: "project-manager",
    title: "项目经理",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "管理类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责软件交付类项目全生命周期中的需求调研、客户协调与项目管理工作；",
          "负责与研发、销售团队紧密沟通与配合，对接和推进产品开发工作进度；",
          "掌握软件交付类项目实施进度、质量情况，保证项目的正常进行；",
          "负责软件交付类项目的深化设计方案、实施方案、验收方案等文档的拟制工作；",
          "编制项目相关执行计划，包括进度、预算、资源和质量目标。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，电子信息、计算机、网络通信等相关专业；",
          "具有5年以上政企信息化或者IT项目的实施管理经验；10人以上团队管理经验；",
          "掌握从系统到应用的IT综合知识（linux系统、网络、数据库等）；",
          "具有较强的文档撰写能力，良好的沟通能力；",
          "熟练使用Axure、Word、Excel、PPT、Project等工具；",
          "有大型项目交付经验，有政企类数据治理项目经验的优先；",
          "熟悉CMMI或项目管理方法论，有相关认证资质者优先。",
        ],
      },
    ],
  },
  {
    id: "sales",
    title: "销售经理",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "销售类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责公司软件产品、数据产品、安全产品与解决方案的市场拓展、维护与宣传；",
          "完成公司下达的年度销售任务与市场拓展目标；",
          "根据行业用户业务场景，结合公司发展方向，打造行业大客户标杆案例；",
          "开发并管理合作伙伴，构建行业整体解决方案，拓展市场机会。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机相关专业优先；",
          "5年及以上软件、信息化产品销售经验，有独立运作项目经验优先；",
          "良好的心理承受能力、强烈的目标感、乐观积极向上；",
          "较好的团队合作能力、沟通能力和亲和力；",
          "吃苦耐劳，能适应频繁出差。",
        ],
      },
    ],
  },
  {
    id: "sales-middleware",
    title: "销售经理（中间件业务）",
    location: "全国",
    headcount: "招聘人数不限",
    education: "统招本科及以上",
    category: "销售类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责开发、维护金融、运营商、军队军工、能源、交通、烟草、央企等客户行业；",
          "深度挖掘客户需求，跟踪项目进度，执行公司销售策略，完成业绩考核指标；",
          "负责行业销售计划的制定与实施，行业范围内的项目协调与管理；",
          "负责行业合作渠道的建立与关系维护。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "5年以上相关软件销售工作经验，具有突出销售业绩者优先；",
          "熟悉相关客户行业信息化，能够独立开发新客户；",
          "具有良好的沟通协调能力及团队合作精神，学习能力和抗压能力强。",
        ],
      },
    ],
  },
]

const categories = ["全部", "技术类", "设计类", "产品与方案", "管理类", "销售类"]

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`overflow-hidden rounded-xl border transition-all duration-300 ${open ? "border-primary/30 shadow-md shadow-primary/5" : "border-border hover:border-primary/20 hover:shadow-sm"}`}>
      <button
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-3">
            <span className={`h-2 w-2 flex-shrink-0 rounded-full ${open ? "bg-primary" : "bg-border"} transition-colors duration-300`} />
            <h3 className="text-base font-semibold text-foreground lg:text-lg">{job.title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-5 sm:pl-0">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin size={12} className="flex-shrink-0" />
              {job.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users size={12} className="flex-shrink-0" />
              {job.headcount}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <GraduationCap size={12} className="flex-shrink-0" />
              {job.education}
            </span>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3 pt-0.5">
          <span className="hidden rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary sm:inline-block">
            {job.category}
          </span>
          <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "border-primary/30 bg-primary/5 text-primary" : "border-border bg-background text-muted-foreground"}`}>
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </div>
      </button>

      <div className={`transition-all duration-300 ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <div className="border-t border-border/50 px-6 pb-6 pt-5">
          <div className="grid gap-6 lg:grid-cols-2">
            {job.duties.map((section, i) => (
              <div key={i}>
                <h4 className="mb-3 text-sm font-semibold text-foreground">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {job.requirements.map((section, i) => (
              <div key={i}>
                <h4 className="mb-3 text-sm font-semibold text-foreground">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-5">
            <a
              href="mailto:hr@inforbus.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail size={14} />
              投递简历：hr@inforbus.com
            </a>
            <a
              href="mailto:hr@inforbus.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/20 hover:scale-[1.02]"
            >
              立即投递
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CareersContent() {
  const [activeCategory, setActiveCategory] = useState("全部")
  const navItems = getNavItems("/about/careers")

  const filtered = activeCategory === "全部" ? jobs : jobs.filter((j) => j.category === activeCategory)

  return (
    <main>
      {/* Hero with Header */}
      <section className="relative overflow-hidden bg-[#1a1a1a]">
        {/* Header overlay */}
        <Header navItems={navItems} variant="overlay" />
        
        {/* Hero content */}
        <div className="relative py-16 md:py-20 lg:py-24 3xl:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary 3xl:text-sm">
                Talent Recruitment
              </span>
              <h1 className="mt-6 text-3xl font-bold text-background md:text-4xl lg:text-5xl 3xl:text-6xl">
                加入我们
              </h1>
              <p className="mt-8 text-base leading-relaxed text-background/70 md:text-lg 3xl:text-xl">
                我们期待与志同道合的伙伴一起，共同推动中国软件基础设施的自主创新，让技术更好地服务于数字中国建设。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {[
              { icon: "🏢", title: "信创行业领军", desc: "国内中间件领域头部企业，深耕20余年" },
              { icon: "🚀", title: "技术驱动成长", desc: "持续技术创新，鼓励每位员工挑战自我" },
              { icon: "🤝", title: "协作共赢文化", desc: "开放包容的团队氛围，共享成长与荣誉" },
              { icon: "🎯", title: "广阔发展空间", desc: "完善晋升通道，助力职业发展无上限" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-5 3xl:p-6">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground 3xl:text-base">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground 3xl:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between 3xl:mb-10">
          <div>
            <h2 className="text-xl font-bold text-foreground lg:text-2xl 3xl:text-3xl">在招职位</h2>
            <p className="mt-1 text-sm text-muted-foreground 3xl:text-base">
              共 <span className="font-semibold text-primary">{filtered.length}</span> 个岗位
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 3xl:px-5 3xl:py-2 3xl:text-sm ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 3xl:gap-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Contact banner */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-primary/15 bg-background p-8 text-center shadow-sm lg:flex-row lg:justify-between lg:text-left 3xl:p-10">
            <div>
              <h3 className="text-lg font-bold text-foreground lg:text-xl 3xl:text-2xl">没有找到合适的岗位？</h3>
              <p className="mt-1.5 text-sm text-muted-foreground 3xl:text-base">
                欢迎发送简历至我们的招聘邮箱，我们会在有合适岗位时第一时间联系您。
              </p>
            </div>
            <a
              href="mailto:hr@inforbus.com"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-primary/20 3xl:px-8 3xl:py-3.5 3xl:text-base"
            >
              <Mail size={16} />
              发送简历
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
}
