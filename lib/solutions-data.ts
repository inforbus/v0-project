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
    heroImage: "/images/solutions/middleware-management-hero.jpg",
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
      image: "/images/diagrams/middleware-arch.png",
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
    heroImage: "/images/solutions/open-source-governance-hero.jpg",
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
      image: "/images/solutions/open-source-governance-arch.jpg",
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
