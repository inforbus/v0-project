export interface SolutionDetail {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  overview: string
  highlights: { icon: string; title: string; desc: string }[]
  architecture: {
    title: string
    desc: string
    image: string
  }
  features: { title: string; desc: string }[]
  benefits: { label: string; value: string }[]
  values?: { title: string; desc: string }[]
  useCases: string[]
  relatedProducts: { name: string; href: string }[]
}

export const solutions: SolutionDetail[] = [
  {
    slug: "middleware-management",
    title: "中间件统一管理平台解决方案",
    subtitle: "打破烟囱式格局，实现中间件的快速部署、规模化管理、深度运维分析及治理",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format",
    overview: "数智效能底座旨在建设中间件服务及运管能力体系，打破原有烟囱式格局，规范中间件软件来源、种类以及版本，实现中间件的快速部署规模化管理、深度运维分析及中间件治理。推动上层业务与中间件解耦，解决中间件管理中的版本复杂不统一、自动化程度低、运维监控不完善、管理分散等问题，降低中间件管理成本，提升中间件运维效率。",
    highlights: [
      { icon: "deploy", title: "快速部署", desc: "支持中间件的一键式自动化部署，将部署时间从天级缩短至分钟级" },
      { icon: "monitor", title: "深度监控", desc: "全链路性能监控与智能告警，实时掌握中间件运行状态" },
      { icon: "govern", title: "统一治理", desc: "规范中间件版本、配置、安全策略，实现集中化管控" },
      { icon: "decouple", title: "业务解耦", desc: "推动上层业务与底层中间件解耦，提升系统灵活性" },
    ],
    architecture: {
      title: "平台架构",
      desc: "平台采用分层架构设计，包含接入层、服务层、管控层和数据层，通过统一的API网关提供服务接入，实现中间件生命周期的全面管理。",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png",
    },
    features: [
      { title: "自动化部署", desc: "支持多种中间件的自动化安装、配置、升级和卸载，提供模板化部署能力" },
      { title: "性能监控", desc: "实时采集中间件运行指标，提供多维度可视化展示与智能告警" },
      { title: "配置管理", desc: "集中管理中间件配置，支持配置版本对比、回滚和审计" },
      { title: "故障诊断", desc: "提供智能化故障定位与根因分析，快速解决中间件运行问题" },
      { title: "安全管控", desc: "提供中间件安全基线检查、漏洞扫描和安全加固能力" },
      { title: "报表分析", desc: "提供多维度运维报表，包括资源利用率、健康度、安全态势等" },
    ],
    benefits: [
      { label: "部署效率提升", value: "90%" },
      { label: "运维成本降低", value: "40%" },
      { label: "故障发现时间", value: "<3min" },
      { label: "中间件统一纳管率", value: "100%" },
    ],
    useCases: [
      "大型企业中间件集群统一运维管理",
      "金融行业中间件标准化部署与监控",
      "政务云平台中间件服务治理",
      "电信运营商多省中间件集中管控",
    ],
    relatedProducts: [
      { name: "InforSuite UMP", href: "/middleware/management" },
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
    ],
  },
  {
    slug: "intelligent-ops",
    title: "智能运维解决方案",
    subtitle: "基于AI的智能化运维体系，实现从被动运维到主动运维的转变",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format",
    overview: "智能运维解决方案通过引入机器学习与大数据分析技术，构建智能化的运维监控与管理平台。实现故障的智能预测、自动诊断与快速恢复，大幅提升运维效率，降低运维成本。",
    highlights: [
      { icon: "deploy", title: "智能监控", desc: "基于机器学习的异常检测，自动识别潜在风险" },
      { icon: "monitor", title: "故障自愈", desc: "预定义故障处理流程，实现常见问题自动修复" },
      { icon: "govern", title: "容量预测", desc: "基于历史数据趋势分析，提前规划资源扩容" },
      { icon: "decouple", title: "知识沉淀", desc: "构建运维知识库，持续积累运维经验" },
    ],
    architecture: {
      title: "运维架构",
      desc: "采用数据采集层、数据处理层、智能分析层和展示层四层架构，通过无侵入式探针采集数据，经消息中间件实时传输至智能分析引擎。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format",
    },
    features: [
      { title: "智能告警", desc: "基于动态基线的智能告警，减少误报90%以上" },
      { title: "根因分析", desc: "自动关联上下游调用链，快速定位故障根因" },
      { title: "容量规划", desc: "基于资源使用趋势的智能容量预测与扩容建议" },
      { title: "自动巡检", desc: "定时自动化健康检查，变被动响应为主动防御" },
      { title: "报表中心", desc: "多维度运维数据报表，辅助管理决策" },
      { title: "工单管理", desc: "运维工单全流程管理，确保问题闭环处理" },
    ],
    benefits: [
      { label: "运维效率提升", value: "60%" },
      { label: "故障发现时间", value: "<1min" },
      { label: "误报率降低", value: "90%" },
      { label: "自动化巡检覆盖", value: "100%" },
    ],
    useCases: [
      "大型企业数据中心智能运维",
      "金融机构核心系统监控",
      "能源企业分布式系统运维",
      "政务云平台基础设施监控",
    ],
    relatedProducts: [
      { name: "InforSuite UMP", href: "/middleware/management" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
    ],
  },
  {
    slug: "xinchuang-ops",
    title: "信创一体化运维监控解决方案",
    subtitle: "面向信创环境的全链路一体化运维管理能力",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format",
    overview: "面向信创环境提供全链路一体化运维管理能力，涵盖监控告警、自动化部署、故障诊断与性能优化，保障信创基础设施平稳运行，大幅降低运维成本与复杂度。",
    highlights: [
      { icon: "deploy", title: "全栈适配", desc: "完成主流国产芯片、操作系统、数据库的深度适配" },
      { icon: "monitor", title: "统一监控", desc: "信创环境下全栈组件的统一监控与告警" },
      { icon: "govern", title: "安全合规", desc: "满足等保三级、密码应用等安全规范要求" },
      { icon: "decouple", title: "平滑迁移", desc: "提供从国外中间件到国产中间件的平滑迁移方案" },
    ],
    architecture: {
      title: "监控架构",
      desc: "基于国产化技术栈构建，支持多种国产芯片平台部署，通过统一的监控���口实现对全栈信创组件的综合监控。",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80&auto=format",
    },
    features: [
      { title: "信创适配", desc: "支持鲲鹏、飞腾、龙芯、海光等国产芯片平台" },
      { title: "统一纳管", desc: "对信创环境下各类中间件进行统一纳管" },
      { title: "性能基测", desc: "提供信创环境专属的性能基准测试工具" },
      { title: "迁移评估", desc: "自动化的中间件迁移评估与兼容性检测" },
      { title: "安全加固", desc: "信创环境专属的安全配置基线与加固策略" },
      { title: "合规报告", desc: "自动生成信创合规检查报告，辅助审计" },
    ],
    benefits: [
      { label: "信创适配芯片", value: "6大类" },
      { label: "互认证数量", value: "200+" },
      { label: "迁移成功率", value: "99.9%" },
      { label: "性能达标率", value: "100%" },
    ],
    useCases: [
      "金融机构信创中间件替换",
      "政务系统信创迁移",
      "电信运营商核心系统国产化",
      "能源企业信创改造",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite UMP", href: "/middleware/management" },
      { name: "InforSuite LB", href: "/middleware/load-balancer" },
    ],
  },
  {
    slug: "ai-agent",
    title: "企业级全场景 AI 智能体管理平台解决方案",
    subtitle: "",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format",
    overview: `随着大语言模型（LLM）技术的爆发，企业对 AI 的需求已从简单的"对话问答"转向深度的"业务协同"。本解决方案旨在构建一套以任务为导向、以领域为核心的企业级智能体管理平台。
本平台通过整合底层大模型能力、RAG（检索增强生成）知识库以及 AI 安全防护机制，向上对接互联网及内网用户，中台实现智能体的全生命周期管理（AgentMgt、UserMgt、RAGMgt），核心层通过"任务与领域（Task & Domain）"引擎实现业务逻辑的自动化编排，并通过强大的连接器（Connection）触达 ERP、数据库、WeChat 等各类生产系统。`,
    highlights: [
      { icon: "deploy", title: "打通业务'最后一公里'", desc: `传统 LLM 往往是孤岛，本方案通过 Connection 层实现与现有 ERP、RDB、Email 等系统的深度集成，让 Agent 具备"手"的能力，从"会说到会做"。` },
      { icon: "monitor", title: "知识沉淀与共享", desc: "利用 RAG 机制将企业私有知识（如规章制度、技术文档）转化为 Agent 的即时背景知识，解决大模型幻觉问题。" },
      { icon: "govern", title: "多领域敏捷支撑", desc: "通过 Domain A/B/C 的划分，实现不同业务部门（HR、销售、IT）的隔离与协同，确保任务处理的专业性。" },
      { icon: "decouple", title: "全链路安全可控", desc: "底座内置 AI Security 模块，针对数据脱敏、内容审查、访问授权进行全方位监控，满足企业合规性需求。" },
    ],
    architecture: {
      title: "平台架构",
      desc: "企业级全场景 AI 智能体管理平台架构，涵盖用户接入、Agent 平台、任务编排、系统连接和生产环保四大层次。",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png",
    },
    features: [
      { title: "多端响应式交互", desc: "AgentWebSite 支持跨设备访问，提供流畅的对话式交互体验。" },
      { title: "RAG 检索增强", desc: "支持多种格式文档上传与自动向量化，使 Agent 能够基于企业最新文档进行精准答复。" },
      { title: "可视化任务编排", desc: "支持对 Task 进行流转设计，定义 Agent 在遇到特定条件时的决策分支。" },
      { title: "异构系统桥接", desc: "WebSSH：允许 IT Support Agent 直接对服务器进行远程诊断。\nRDB Connection：实现 Agent 对数据库的自然语言查询 (Text-to-SQL)。" },
      { title: "安全防御体系", desc: "AI Security 模块对敏感词、隐私字段（如身份证、工资条）进行自动过滤。" },
    ],
    benefits: [
      { label: "降低开发门槛", value: "配置上线" },
      { label: "响应效率提升", value: "7x24h" },
      { label: "成本降低", value: "显著下降" },
      { label: "可扩展性", value: "支持横向扩展" },
    ],
    values: [
      { title: "降低开发门槛", desc: "业务人员可通过配置 AgentMgt 和 Task 模块快速上线智能体，无需深度编写 LLM 调用代码。" },
      { title: "提升响应效率", desc: "通过 ASKHR 和 IT Support Agent，实现 7x24 小时自动响应，显著降低人力资源与运维成本。" },
      { title: "决策数据化", desc: "通过连接 ERP 和 RDB，Agent 能够实时调取最新数据生成分析报告，辅助管理层决策。" },
      { title: "架构可扩展性", desc: "支持 Domain 的横向扩展。当企业业务增加时，只需新增 Domain 模块和对应的 Connection 即可快速集成。" },
    ],
    useCases: [
      `场景 1：智慧 HR 咨询 (ASKHR Agent)
员工询问："我的年假还剩几天？"
流程：用户请求 -> AgentPlatform -> ASKHR Agent -> Connection (RDB) -> ERP 系统。
结果：Agent 自动查询考勤库并给出准确答复。`,
      `场景 2：智能 IT 运维 (IT Support Agent)
运维人员："某服务器 CPU 占用过高，请排查。"
流程：用户请求 -> IT Support Agent -> Connection (WebSSH) -> 执行指令 -> 观察结果。
结果：Agent 反馈进程列表并建议重启相关服务。`,
      `场景 3：销售数据驱动 (Sales Agent)
销售主管："分析上季度华东区销售额下滑原因。"
流程：Sales Agent -> RAG (读取季度报告) + Connection (RDB 查询销售明细) -> 生成分析。`,
    ],
    relatedProducts: [
      { name: "大模型 (LLM)", href: "#" },
      { name: "向量数据库 (Vector DB)", href: "#" },
      { name: "开发工具 (Lite XL/Zed/Neovim)", href: "#" },
      { name: "Apache Airflow", href: "#" },
      { name: "安全组件", href: "#" },
    ],
  },
  {
    slug: "disaster-recovery",
    title: "信创全栈中间件解决方案",
    subtitle: "基于自主可控技术体系，提供覆盖全场景的国产中间件产品矩阵",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format",
    overview: "基于自主可控技术体系，提供覆盖消息中间件、应用服务器、负载均衡、分布式缓存等全栈中间件产品，为关键行业核心系统提供安全、稳定、高效的基础设施支撑。",
    highlights: [
      { icon: "deploy", title: "全栈覆盖", desc: "应用服务器、消息中间件、负载均衡、缓存等全品类覆盖" },
      { icon: "monitor", title: "高性能", desc: "核心组件性能达到国际同类产品水平" },
      { icon: "govern", title: "高可靠", desc: "支持多活容灾、自动故障转移等企业级特性" },
      { icon: "decouple", title: "易迁移", desc: "提供与国外中间件的API级兼容，实现无缝替换" },
    ],
    architecture: {
      title: "产品架构",
      desc: "全栈中间件产品矩阵涵盖应用运行、消息通信、流量调度、数据缓存四大核心领域，各组件既可独立部署也可协同工作。",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png",
    },
    features: [
      { title: "InforSuite AS", desc: "高性能应用服务器，支持Java EE全规范" },
      { title: "InforSuite MQ", desc: "企业级消息中间件，支持多种消息协议" },
      { title: "InforSuite LB", desc: "智能负载均衡软件，支持多种调度算法" },
      { title: "InforSuite Cache", desc: "分布式数据缓存中间件，提供亿��数据访问能力" },
      { title: "InforSuite WF", desc: "工作流中间件，支持复���业务流程编排" },
      { title: "InforSuite ESB", desc: "企业服务总线，实现异构系统集成" },
    ],
    benefits: [
      { label: "产品覆盖类型", value: "6大类" },
      { label: "服务客户", value: "1000+" },
      { label: "API兼容率", value: "99%" },
      { label: "平均性能提升", value: "15%" },
    ],
    useCases: [
      "金融核心系统中间件国产化替代",
      "政务系统基础设施升级",
      "电信业务支撑系统架构",
      "大型企业数字化转型",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "InforSuite LB", href: "/middleware/load-balancer" },
      { name: "InforSuite Cache", href: "/middleware/data-cache" },
    ],
  },
  {
    slug: "digital-efficiency-model",
    title: "数字效能大模型解决方案",
    subtitle: "融合AI大模型技术，赋能企业数字化转型与效能提升",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80&auto=format",
    overview: "融合AI大模型与企业业务场景，提供智能化的代码生成、文档处理、知识管理和运维辅助能力，大幅提升企业研发、运营和管理效率。",
    highlights: [
      { icon: "deploy", title: "智能编码", desc: "AI辅助代码生成与审查，提升研发效率" },
      { icon: "monitor", title: "知识库", desc: "企业知识智能检索与问答，释放知识价值" },
      { icon: "govern", title: "数据分析", desc: "自然语言驱动的数据查询与可视化分析" },
      { icon: "decouple", title: "运维助手", desc: "AI运维助手辅助故障诊断与处理" },
    ],
    architecture: {
      title: "技术架构",
      desc: "基于大语言模型构建企业智能底座，通过RAG、Fine-Tuning等技术实现领域知识的注入，提供多场景的智能化服务。",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format",
    },
    features: [
      { title: "代码助手", desc: "智能代码生成、补全、审查和重构建议" },
      { title: "文档智能化", desc: "自动生成技术文档、API文档和用户手册" },
      { title: "智能问答", desc: "基于企业知识库的智能问答系统" },
      { title: "数据洞察", desc: "自然语言查询数据，自动生成分析报告" },
      { title: "流程自动化", desc: "AI驱动的业务流程自动化与优化" },
      { title: "知识管理", desc: "企业知识的自动提取、分类和管理" },
    ],
    benefits: [
      { label: "研发效率提升", value: "30%" },
      { label: "文档生成时间", value: "-80%" },
      { label: "知识查询准确率", value: "95%" },
      { label: "流程自动化覆盖", value: "60%" },
    ],
    useCases: [
      "软件研发效能提升",
      "企业知识管理",
      "运维智能化",
      "业务流程优化",
    ],
    relatedProducts: [
      { name: "数智效能底座", href: "/digital-platform" },
    ],
  },
  {
    slug: "smart-platform",
    title: "数智中台解决方案",
    subtitle: "数据驱动的中台建设，构建企业数字化中枢",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format",
    overview: "数智中台解决方案围绕数据集成、数据治理、大数据分析、AI模型管理，构建企业级数字化中枢，打破业务与数据壁垒，赋能业务决策与创新。",
    highlights: [
      { icon: "deploy", title: "数据集成", desc: "多源异构数据的统一集成与处理" },
      { icon: "monitor", title: "数据治理", desc: "全生命周期数据质量管理与治理" },
      { icon: "govern", title: "大数据分析", desc: "PB级数据处理与多维度分析" },
      { icon: "decouple", title: "AI模型", desc: "预训练模型库与模型生命周期管理" },
    ],
    architecture: {
      title: "中台架构",
      desc: "采用数据湖、数据仓库、数据集市三层架构，集成、治理、分析、应用全流程打通，形成数据驱动的决策支撑体系。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format",
    },
    features: [
      { title: "数据集成", desc: "支持百种数据源接入，实时与批量融合处理" },
      { title: "数据治理", desc: "血缘追踪、质量监控、元数据管理" },
      { title: "大数据分析", desc: "支持多种分析引擎，PB级数据秒级查询" },
      { title: "AI模型管理", desc: "预训练模型库、模型训练与部署" },
      { title: "数据可视化", desc: "拖拽式报表与仪表板建设" },
      { title: "数据共享", desc: "安全的数据共享与API发布" },
    ],
    benefits: [
      { label: "数据集成时间", value: "-70%" },
      { label: "查询性能提升", value: "10倍" },
      { label: "数据治理覆盖", value: "100%" },
      { label: "模型训练周期", value: "-50%" },
    ],
    useCases: [
      "企业数据中台建设",
      "金融风险管理",
      "零售客户分析",
      "制造业生产优化",
    ],
    relatedProducts: [
      { name: "数据集成平台", href: "/digital-platform/data-integration" },
      { name: "数据治理平台", href: "/digital-platform/data-governance" },
    ],
  },
  {
    slug: "container-cloud",
    title: "容器云解决方案",
    subtitle: "云原生架构支撑，加速应用现代化转型",
    heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80&auto=format",
    overview: "容器云解决方案基于Kubernetes等云原生技术，提供容器编排、服务治理、应用管理等完整能力，加速企业应用现代化转型与业务创新。",
    highlights: [
      { icon: "deploy", title: "容器编排", desc: "多集群容器管理与自动调度" },
      { icon: "monitor", title: "服务治理", desc: "微服务框架与流量治理" },
      { icon: "govern", title: "应用管理", desc: "应用全生命周期管理" },
      { icon: "decouple", title: "弹性伸缩", desc: "自动化弹性伸缩与成本优化" },
    ],
    architecture: {
      title: "云平台架构",
      desc: "采用容器编排层、服务治理层、应用管理层和可观测性层，支持多云、混合云部署，提供统一的应用管理体验。",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80&auto=format",
    },
    features: [
      { title: "容器引擎", desc: "兼容业界标准的容器运行时" },
      { title: "编排调度", desc: "基于Kubernetes的多集群编排" },
      { title: "服务治理", desc: "微服务框架与服务网格" },
      { title: "CI/CD", desc: "完整的应用交付流水线" },
      { title: "可观测性", desc: "应用性能监控与链路追踪" },
      { title: "存储管理", desc: "容器持久化存储解决方案" },
    ],
    benefits: [
      { label: "应用上线时间", value: "-60%" },
      { label: "资源利用率", value: "提升3倍" },
      { label: "运维成本降低", value: "50%" },
      { label: "故障恢复时间", value: "<1分钟" },
    ],
    useCases: [
      "企业应用现代化",
      "微服务架构建设",
      "多云管理",
      "边缘计算部署",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
    ],
  },
]
