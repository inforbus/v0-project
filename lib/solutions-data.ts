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
  useCases: string[]
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
      "客户服务AI智能体",
      "数据分析AI智能体",
      "决策支持AI智能体",
      "流程自动化AI智能体",
    ],
    relatedProducts: [
      { name: "中创AI中间件", href: "/middleware" },
      { name: "中创数据集成平台", href: "/digital-platform/data-integration" },
    ],
  },
  {
    slug: "disaster-recovery",
    title: "信创中间件双活容灾解决方案",
    subtitle: "构建高可用的国产化双活容灾系统",
    heroImage: "/images/solutions/disaster-recovery.png",
    overview: "信创中间件双活容灾解决方案是基于国产中间件产品的高可用容灾方案，实现跨地域、跨机房的主主容灾架构，支持RPO=0和RTO<30秒的业务连续性保障。",
    highlights: [
      { icon: "deploy", title: "双活架构", desc: "主主模式，两个数据中心同时提供服务" },
      { icon: "monitor", title: "实时同步", desc: "实现数据库、中间件的实时同步，RPO=0" },
      { icon: "govern", title: "自动切换", desc: "故障自动检测与秒级切换，RTO<30秒" },
      { icon: "decouple", title: "统一管理", desc: "提供统一的容灾管理平台与监控界面" },
    ],
    architecture: {
      title: "容灾架构",
      desc: "采用主主容灾架构，两个数据中心运行相同的应用与数据，通过国产中间件提供的数据同步能力，实现无缝的故障转移。",
      image: "/images/diagrams/mq-disaster-recovery-arch.png",
    },
    features: [
      { title: "国产中间件", desc: "基于中创自主研发的中间件产品" },
      { title: "实时复制", desc: "支持国产数据库的实时数据复制与同步" },
      { title: "自动故障转移", desc: "支持应用级、数据库级、中间件级的自动故障转移" },
      { title: "跨地域部署", desc: "支持跨地域、跨机房的灾难恢复部署" },
      { title: "业务透明", desc: "对应用完全透明，无需修改业务代码" },
      { title: "监控告警", desc: "提供完整的监控、告警和故障预防能力" },
    ],
    benefits: [
      { label: "故障转移时间", value: "<30秒" },
      { label: "数据丢失", value: "零丢失" },
      { label: "系统可用性", value: "99.999%" },
      { label: "部署周期", value: "缩短50%" },
    ],
    useCases: [
      "金融核心系统容灾",
      "政务关键信息系统容灾",
      "大型企业ERP系统容灾",
      "电信运营商计费系统容灾",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "PaaS平台", href: "/paas/platform" },
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
      { label: "信创合规", value: "100%达标" },
    ],
    useCases: [
      "国家关键信息基础设施保护",
      "金融机构信创改造",
      "政府部门系统国产化",
      "能源、电力等战略行业信创建设",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "InforSuite Cache", href: "/middleware" },
      { name: "InforSuite ESB", href: "/middleware" },
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
      "客户服务AI智能体",
      "数据分析AI智能体",
      "决策支持AI智能体",
      "流程自动化AI智能体",
    ],
    relatedProducts: [
      { name: "中创AI中间件", href: "/middleware" },
      { name: "中创数据集成平台", href: "/digital-platform/data-integration" },
    ],
  },
  {
    slug: "disaster-recovery",
    title: "信创中间件双活容灾解决方案",
    subtitle: "构建高可用的国产化双活容灾系统",
    heroImage: "/images/solutions/disaster-recovery.png",
    overview: "信创中间件双活容灾解决方案是基于国产中间件产品的高可用容灾方案，实现跨地域、跨机房的主主容灾架构，支持RPO=0和RTO<30秒的业务连续性保障。",
    highlights: [
      { icon: "deploy", title: "双活架构", desc: "主主模式，两个数据中心同时提供服务" },
      { icon: "monitor", title: "实时同步", desc: "实现数据库、中间件的实时同步，RPO=0" },
      { icon: "govern", title: "自动切换", desc: "故障自动检测与秒级切换，RTO<30秒" },
      { icon: "decouple", title: "统一管理", desc: "提供统一的容灾管理平台与监控界面" },
    ],
    architecture: {
      title: "容灾架构",
      desc: "采用主主容灾架构，两个数据中心运行相同的应用与数据，通过国产中间件提供的数据同步能力，实现无缝的故障转移。",
      image: "/images/diagrams/mq-disaster-recovery-arch.png",
    },
    features: [
      { title: "国产中间件", desc: "基于中创自主研发的中间件产品" },
      { title: "实时复制", desc: "支持国产数据库的实时数据复制与同步" },
      { title: "自动故障转移", desc: "支持应用级、数据库级、中间件级的自动故障转移" },
      { title: "跨地域部署", desc: "支持跨地域、跨机房的灾难恢复部署" },
      { title: "业务透明", desc: "对应用完全透明，无需修改业务代码" },
      { title: "监控告警", desc: "提供完整的监控、告警和故障预防能力" },
    ],
    benefits: [
      { label: "故障转移时间", value: "<30秒" },
      { label: "数据丢失", value: "零丢失" },
      { label: "系统可用性", value: "99.999%" },
      { label: "部署周期", value: "缩短50%" },
    ],
    useCases: [
      "金融核心系统容灾",
      "政务关键信息系统容灾",
      "大型企业ERP系统容灾",
      "电信运营商计费系统容灾",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "PaaS平台", href: "/paas/platform" },
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
      { label: "���可证成本", value: "降低80%" },
      { label: "信创合规", value: "100%达标" },
    ],
    useCases: [
      "国家关键信息基础设施保护",
      "金融机构信创改造",
      "政府部门系统国产化",
      "能源、电力等战略行业信创建设",
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "InforSuite Cache", href: "/middleware" },
      { name: "InforSuite ESB", href: "/middleware" },
    ],
  },
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
