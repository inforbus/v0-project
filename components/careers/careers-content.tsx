"use client"

import { useState } from "react"
import { MapPin, Users, GraduationCap, ChevronDown, ChevronUp, Mail } from "lucide-react"
import { Header } from "@/components/shared/header"

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
    id: "senior-qa",
    title: "一、高级测试工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "全流程质量保障：负责公司核心业务线（或复杂模块）的全流程质量保障工作，包括参与需求评审、技术方案评审，独立设计测试方案、编写测试用例、执行测试并跟进缺陷生命周期。",
          "自动化测试体系建设：主导所负责系统的接口自动化或UI自动化测试框架的建设与维护，提升回归测试效率。",
          "AI赋能测试提效：探索并应用AI技术（如大语言模型）辅助测试活动，包括但不限于：利用AI生成测试数据和测试用例、基于AI进行UI遍历测试或智能Monkey测试、利用AI辅助缺陷分类和根因分析。",
          "性能与稳定性测试：针对核心接口或业务场景进行性能测试（压力/负载/稳定性），分析系统瓶颈并协助开发人员进行性能调优。",
          "过程改进与风险把控：识别研发流程中的质量风险，推动流程优化和CI/CD（持续集成/持续部署）流水线的完善，提升交付质量。",
          "团队赋能：指导初中级测试工程师，推广AI在测试领域的应用实践。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机/人工智能相关专业，5年以上测试经验。",
          "熟悉软件测试理论、流程及方法，具备独立负责中大型项目测试的经验。",
          "技术栈要求：代码能力（至少熟练掌握一门编程语言：Java/Python/Go，能独立编写测试工具或维护自动化脚本）、数据库（精通SQL，熟练使用至少一种数据库：MySQL/Redis/PostgreSQL）、工具使用（熟练使用Linux命令，熟悉Jenkins、Git、Docker等持续集成/容器化工具）。",
          "AI应用能力：熟悉Prompt Engineering（提示词工程），能够通过大模型（如ChatGPT、Claude、文心一言等）高效生成测试用例、测试数据或测试代码；了解AI辅助测试工具（如TestSprite、Mabl、Applitools等）的使用。",
          "具备优秀的逻辑思维能力和问题定位能力，能从测试角度提出对产品的改进建议。",
          "强烈的责任心，具有owner意识，能够承受一定的工作压力。",
          "对新技术敏感，乐于探索AI在质量保障领域的应用场景。",
          "加分项：有大型分布式系统、高并发项目测试经验者优先；有性能测试（JMeter/Locust）实战经验者优先；有AI产品（如LLM应用、AIGC平台、智能推荐系统）测试经验者优先；熟悉机器学习基础概念，有使用Python进行数据分析或模型评估经验者优先；有利用AI生成代码（GitHub Copilot、Cursor等）提升测试开发效率的实践经验者优先。",
        ],
      },
    ],
  },
  {
    id: "qa-engineer",
    title: "二、测试工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "技术类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "制定测试计划，组织编写测试用例及方案等；",
          "参与策划、需求、设计、测试、手册等相关评审；",
          "执行测试用例，分析测试结果，编写测试小结、测试报告；",
          "对测试进度进行跟踪，识别测试风险并主动汇报；",
          "负责测试经验积累，测试优秀文档、案例的收集，维护测试资产库并定期组织培训分享；",
          "负责与各利益相关方沟通，保障项目测试进展及质量；",
          "负责产品测试团队成员管理；",
          "负责组织产品测试各阶段评审及验收；",
          "进行缺陷跟踪和管理，确保测试覆盖全面；",
          "持续改进测试方法和工具，提升团队整体测试能力。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机、软件相关专业，3年以上测试经验；",
          "熟悉Linux系统，精通一种或多种语言（如Python、Shell等），有工具、平台开发经验者优先；",
          "具备自动化测试经验优先；",
          "熟练掌握软件测试理论、方法和流程，包括黑盒测试、白盒测试、灰盒测试等，具备较强的逻辑思维能力；",
          "熟悉常用的测试工具和框架如Jmeter、Loadrunner等；",
          "具备良好的团队合作精神，善于协调沟通，具备较高的问题推动解决能力；",
          "有学习欲望，具有自我持续提升的内驱力。",
        ],
      },
    ],
  },
  {
    id: "finance-accountant",
    title: "三、财务会计",
    location: "北京",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "管理类",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "项目成本管理：项目预算及成本管理、项目日常核算等。",
          "税务会计：日常税务管理；税务筹划与优化；熟悉税收优惠政策、办理申报流程：软件产品增值税即征即退、研发加计扣除、高新技术资格认定、重点软件企业认定等相关工作。",
          "其他与岗位相关工作或领导交办任务。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职条件",
        items: [
          "本科及以上学历，会计学、财务管理、税务学等财经类相关专业，有3年以上项目成本管理或办税经验。",
          "持有中级会计师职称或税务师职业资格证书，具备CPA证书者优先。",
          "熟悉软件行业相关税收优惠政策的适用条件、申报流程及后续管理要求；如软件产品增值税即征即退的备案、审核要点，研发加计扣除、高新技术资格认定、重点软件企业税收优惠享受条件等。",
          "其他要求：内外部沟通协作能力强；严谨细致的工作态度；具备强烈的学习意愿与快速学习能力；抗压能力强。",
        ],
      },
    ],
  },
]

type JobCardProps = {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background transition-all duration-300">
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
        </div>
        <div className="flex flex-shrink-0 items-center gap-3 pt-0.5">
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
          <div className="mt-5 border-t border-border/40 pt-5">
            <a
              href="mailto:wu_wting@inforbus.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail size={14} />
              投递简历：wu_wting@inforbus.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CareersContent() {
  return (
    <main>
      {/* Hero with Header */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png"
          alt="加入我们"
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Header overlay */}
        <Header activePath="/about/careers" variant="overlay" isDarkBg={false} />
        
        {/* Hero content */}
        <div className="relative py-16 md:py-20 lg:py-24 3xl:py-32">
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary 3xl:text-sm">
                Talent Recruitment
              </span>
              <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl 3xl:text-6xl">
                加入我们
              </h1>
              <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg 3xl:text-xl">
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
        <div className="mb-8 flex flex-col gap-4 3xl:mb-10">
          <h2 className="text-xl font-bold text-foreground lg:text-2xl 3xl:text-3xl">在招职位</h2>
        </div>

        <div className="flex flex-col gap-3 3xl:gap-4">
          {jobs.map((job) => (
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
          </div>
        </div>
      </section>
    </main>
  )
}
