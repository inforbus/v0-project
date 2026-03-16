export interface SolutionDetail {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  overview: string
  overviewHighlight?: string
  highlights: { icon: string; title: string; desc: string }[]
  architecture: {
    title: string
    desc: string
    image: string
    images?: { title: string; image: string }[]
  }
  features: { title: string; desc: string }[]
  benefits: { label: string; value: string }[]
  values?: { title: string; desc: string }[]
  useCases: { title: string; desc: string }[]
  relatedProducts: { name: string; href: string }[]
}

export const solutions: SolutionDetail[] = [
  {
    slug: "middleware-management",
    title: "中间件统一管理平台解决方案",
    subtitle: "打破烟囱式格局，实现中间件的快速部署、规模化管理、深度运维分析及治理",
    heroImage: "/images/solutions/ai-agent.png",
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
      image: "/images/diagrams/ai-agent-arch.png",
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
      { title: "大型企业中间件集群统一运维管理", desc: "支持多种中间件产品的统一纳管，实现规模化部署、集中化监控和智能化运维，显著降低运维成本和管理复杂度。" },
      { title: "金融行业中间件标准化部署与监控", desc: "提供金融级的可靠性和安全性保障，支持合规性检查和审计追踪，保障金融机构的业务连续性。" },
      { title: "政务云平台中间件服务治理", desc: "实现中间件的统一治理和标准化管理，支持多租户隔离和资源限额控制，满足政务云的要求。" },
    ],
    relatedProducts: [
      { name: "InforSuite UMP", href: "/middleware/management" },
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
    ],
  },
  {
    slug: "open-source-governance",
    title: "开源治理解决方案",
    subtitle: "构建安全可控的开源生态，实现开源创新与安全合规的平衡",
    heroImage: "/images/solutions/disaster-recovery.png",
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
      image: "/images/diagrams/mq-disaster-recovery-arch.png",
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
      { title: "企业应用现代化", desc: "加速企业遗留系统向云原生应用的转型，支持灰度迁移和滚动升级，降低迁移风险。" },
      { title: "微服务架构建设", desc: "提供完整的微服务治理能力，支持服务网格和流量管理，实现高效的服务间协作。" },
      { title: "多云管理", desc: "支持跨多个公有云和私有云的统一管理，提供一致的应用部署体验。" },
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
    ],
  },
  {
    slug: "ai-agent",
    title: "AI 智能体管理平台解决方案",
    subtitle: "构建自主可控的AI智能体管理与编排平台",
    heroImage: "/images/solutions/ai-agent.png",
    overview: "AI智能体管理平台解决方案是一套完整的企业级AI智能体管理与编排系统，提供智能体的开发、部署、运维和治理全生命周期能力，帮助企业快速构建和管理AI应用。",
    highlights: [
      { icon: "deploy", title: "快速开发", desc: "提供完整的AI智能体开发框架与工具链，加速AI应用开发" },
      { icon: "monitor", title: "智能编排", desc: "支持复杂的多智能体协作与流程编排能力" },
      { icon: "govern", title: "统一管理", desc: "集中管理、监控和治理企业级AI智能体资源" },
      { icon: "decouple", title: "安全可控", desc: "提供数据安全、模型保护和执行审计能力" },
    ],
    architecture: {
      title: "平台架构",
      desc: "采用分布式微服务架构，包含智能体开发框架、编排引擎、运行时环境和管控平台，支持高并发、高可用的AI应用运行。",
      image: "/images/diagrams/ai-agent-arch.png",
    },
    features: [
      { title: "智能体开发框架", desc: "提供Python、Java等多语言开发框架，简化AI智能体开发" },
      { title: "多模态支持", desc: "支持文本、语音、图像等多模态数据处理" },
      { title: "动态编排", desc: "支持动态配置智能体流程，实现灵活的业务编排" },
      { title: "分布式执行", desc: "支持分布式执行与并发调度，提升运行效率" },
      { title: "可观测性", desc: "提供完整的日志、监控、链路追踪能力" },
      { title: "版本管理", desc: "支持模型和策略的版本管理与灰度发布" },
    ],
    benefits: [
      { label: "开发效率提升", value: "5倍" },
      { label: "模型训练成本降低", value: "60%" },
      { label: "应用上线时间", value: "-80%" },
      { label: "系统可用性", value: "99.99%" },
    ],
    useCases: [
      { title: "客户服务AI智能体", desc: "构建自动应答、智能路由、人机协作的客户服务系统，提升服务质量和效率。" },
      { title: "数据分析AI智能体", desc: "自动化数据处理、模式识别、报告生成，加速数据分析工作流程。" },
      { title: "决策支持AI智能体", desc: "基于多源数据的智能决策推荐，辅助企业管理层做出更好的业务决策。" },
    ],
    relatedProducts: [
      { name: "中创AI中间件", href: "/middleware" },
      { name: "中创数据集成平台", href: "/digital-platform/data-integration" },
    ],
  },
  {
    slug: "disaster-recovery",
    title: "信创中间件双活容灾解决方案",
    subtitle: "基于准实时数据同步技术，提供专业的国产中间件高可用容灾服务",
    heroImage: "/images/solutions/disaster-recovery.png",
    overview: `在数字化转型与信创改造的双重驱动下，核心业务系统对中间件的高可用性提出了更高要求。传统主备容灾模式存在切换中断、数据丢失、RTO/RPO难以保障等痛点，已无法满足金融、电信、能源等关键行业的连续性要求。

中创信创中间件双活容灾解决方案，基于自主研发的数据同步工具软件，提供准实时数据同步能力，实现消息中间件、缓存中间件的本地或异地集群间数据热备份。方案支持数据双向同步，两侧集群均处于活跃可用状态，任意一侧均可独立承载业务读写，真正实现"双活"架构。`,
    overviewHighlight: "提供热备能力，服务随时可用，业务应用容灾切换的工作量小、操作少、耗时短。",
    highlights: [
      { icon: "deploy", title: "双活保畅", desc: `区别于传统的"冷备"模式，本方案实现真正的双活架构。两侧集群均可同时提供读写服务，无需等待数据同步完成，无需临时启动服务。当故障发生时，业务流量可直接切换至健康集群，整个过程近乎无感知，RTO趋近于零，保障业务连续性。` },
      { icon: "monitor", title: "高性能", desc: "采用增量数据捕获与高效传输协议，同步效率达到业界领先水平。数据同步延迟低至毫秒级，确保两侧集群数据高度一致，满足高频交易、实时发布等对时效性要求高的业务场景。" },
      { icon: "govern", title: "高可用", desc: "中间件集群本身具备高可用能力，叠加数据同步工具的高可用设计，形成双重保障机制。工具自身也支持高可用集群部署，确保同步链路持续稳定运行，为业务连续性提供坚实支撑。" },
      { icon: "decouple", title: "易部署", desc: `数据同步工具采用轻量化设计，无需繁杂的参数调优与脚本编写。同步规则简洁清晰，大幅降低运维门槛，实现"开箱即用"的方案体验。` },
    ],
    architecture: {
      title: "容灾架构",
      desc: "采用主主容灾架构，两个数据中心运行相同的应用与数据，通过国产中间件提供的数据同步能力，实现无缝的故障转移。支持消息中间件(MQ)和关系型数据库(RDS)的双向实时同步。",
      image: "/images/diagrams/mq-disaster-recovery-arch.png",
      images: [
        { title: "MQ双活容灾架构", image: "/images/diagrams/mq-disaster-recovery-arch.png" },
        { title: "RDS双活容灾架构", image: "/images/diagrams/rds-disaster-recovery-arch.png" },
      ],
    },
    features: [
      { title: "双向同步", desc: "支持两个集群间的双向数据实时同步，两侧均可独立承载业务流量。通过全局唯一标识与环形检测算法，彻底解决双向同步场景下的数据循环问题，确保数据流向清晰可控。" },
      { title: "并发处理", desc: "采用多线程并行处理与批量传输机制，充分利用网络带宽与计算资源。支持按实例规模进行并发调优，轻松应对高吞吐业务场景下的同步压力。" },
      { title: "安全传输", desc: "全链路支持TLS/SSL加密传输，保障数据在跨域同步过程中的安全性，满足信创环境的安全合规要求。" },
      { title: "进度监控", desc: "提供完善的同步状态监控能力，采集同步延迟、吞吐量、堆积量等关键指标，运维人员可全面掌握同步链路健康状态。" },
    ],
    benefits: [
      { label: "故障转移时间", value: "趋近于零" },
      { label: "数据丢失", value: "零丢失" },
      { label: "系统可用性", value: "99.999%" },
      { label: "部署周期", value: "缩短50%" },
    ],
    useCases: [
      { title: "关键业务系统保障升级", desc: "适用于金融核心交易、能源调度控制、电信计费等对连续性要求极高的关键业务。通过构建双活架构，使系统可用性大幅提升，满足行业监管对业务连续性的严苛要求。" },
      { title: "中间件迁移上云", desc: "数据同步工具同样可用于集群迁移，为企业云化转型提供平滑迁移路径。通过双活同步实现本地数据中心与云平台的数据实时对齐，大幅降低迁移风险，保障业务平稳上云。" },
      { title: "国产化改造数据迁移", desc: "在信创替代过程中，实现国外中间件（如Kafka、Redis）向中创中间件的平滑过渡。支持异构数据源同步，保障改造期间业务不中断、数据零丢失。" },
    ],
    relatedProducts: [
      { name: "InforSuite HTMQ", href: "/middleware" },
      { name: "InforSuite HCMQ", href: "/middleware" },
      { name: "InforSuite Cloud MQ", href: "/middleware" },
      { name: "InforSuite RDS", href: "/middleware" },
    ],
  },
  {
    slug: "xinchuang-middleware",
    title: "信创全栈自主可控中间件解决方案",
    subtitle: "构建完全自主可控的国产中间件技术体系",
    heroImage: "/images/solutions/xinchuang-middleware.png",
    overview: "信创全栈自主可控中间件解决方案提供从应用服务器、消息中间件、数据缓存到服务总线的完整中间件产品体系，基于自主研发的核心技术，完全替代国外产品，满足国家信创战略要求。",
    highlights: [
      { icon: "deploy", title: "完全自主", desc: "100%自主研发，无第三方代码依赖" },
      { icon: "monitor", title: "产品完整", desc: "覆盖应用中间件全技术栈，产品体系完整" },
      { icon: "govern", title: "兼容替代", desc: "兼容国际标准，平滑替代国外产品" },
      { icon: "decouple", title: "生态支撑", desc: "支持国产芯片、操作系统、数据库等生态" },
    ],
    architecture: {
      title: "中间件技术体系",
      desc: "包含应用服务器、消息中间件、数据缓存、服务总线等完整产品线，形成自主可控的国产中间件生态体系。",
      image: "/images/diagrams/rds-disaster-recovery-arch.png",
    },
    features: [
      { title: "应用服务器", desc: "兼容Jakarta EE标准的企业级应用服务器" },
      { title: "消息中间件", desc: "支持高吞吐、低延迟的分布式消息中间件" },
      { title: "数据缓存", desc: "内存级的分布式数据缓存解决方案" },
      { title: "服务总线", desc: "企业服务总线，支持异构系统集成" },
      { title: "负载均衡", desc: "高性能四层和七层负载均衡" },
      { title: "统一管理", desc: "全栈中间件统一部署、管理和监控" },
    ],
    benefits: [
      { label: "研发成本", value: "降低40%" },
      { label: "迁移周期", value: "缩短30%" },
      { label: "许可证成本", value: "降低80%" },
      { label: "信创合���", value: "100%达标" },
    ],
    useCases: [
      { title: "国家关键信息基础设施保护", desc: "满足国家对关键基础设施的自主可控要求，构建安全可靠的国产中间件平台。" },
      { title: "金融机构信创改造", desc: "替代国外中间件产品，建设符合信创要求的自主可控金融IT基础设施。" },
      { title: "政府部门系统国产化", desc: "为政务系统提供自主可控的中间件支撑，满足政府信创建设的需要。" },
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "InforSuite Cache", href: "/middleware" },
      { name: "InforSuite ESB", href: "/middleware" },
    ],
  },
]
