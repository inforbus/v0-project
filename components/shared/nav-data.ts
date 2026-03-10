export type NavItem = {
  name: string
  href: string
  active: boolean
  children: { name: string; href: string }[]
  isMega: boolean
}

export type ProductCategory = {
  name: string
  href: string
  children: { name: string; href: string }[]
}

export function getProductCategories(): ProductCategory[] {
  return [
    {
      name: "基础中间件",
      href: "/middleware",
      children: [
        { name: "应用服务器", href: "/middleware" },
        { name: "负载均衡软件", href: "/middleware/load-balancer" },
        { name: "分布式数据缓存中间件", href: "/middleware/data-cache" },
        { name: "消息中间件", href: "/middleware/messaging" },
        { name: "工作流中间件", href: "/middleware/workflow" },
        { name: "\u4f01\u4e1a\u670d\u52a1\u603b\u7ebf", href: "/middleware/service-hotline" },
        { name: "中间件统一管理平台", href: "/middleware/management" },
      ],
    },
    {
      name: "数智化平台",
      href: "/digital-platform",
      children: [
        { name: "数据集成平台", href: "/digital-platform/data-integration" },
        { name: "数据治理平台", href: "/digital-platform/data-governance" },
        { name: "大数据分析平台", href: "/digital-platform/big-data" },
        { name: "AI模型管理平台", href: "/digital-platform/ai-model" },
        { name: "业务信息和电子文件交换系统", href: "/digital-platform/file-exchange" },
        { name: "DTP数据传输中心", href: "/digital-platform/dtp" },
      ],
    },
    {
      name: "PaaS云平台",
      href: "/paas",
      children: [
        { name: "PaaS平台", href: "/paas/platform" },
        { name: "iPaaS应用集成服务平台", href: "/paas/ipaas" },
        { name: "业务流程PaaS平台", href: "/paas/bpm" },
      ],
    },
    {
      name: "物联网平台",
      href: "/iot",
      children: [
        { name: "应用安全", href: "/iot/app-security" },
        { name: "统一监管平台", href: "/iot/supervision" },
        { name: "物联网监控平台", href: "/iot/monitoring" },
        { name: "高速公路智慧管控平台", href: "/iot/highway" },
      ],
    },
    {
      name: "应用安全产品",
      href: "/security",
      children: [
        { name: "防篡改软件", href: "/security/anti-tamper" },
        { name: "web应用防火墙", href: "/security/waf" },
        { name: "业务文件安全传输平台", href: "/security/file-transfer" },
      ],
    },
  ]
}

export function getNavItems(activePath: string): NavItem[] {
  return [
    { name: "首页", href: "/", active: activePath === "/", children: [], isMega: false },
    {
      name: "产品中心",
      href: "/products",
      active: activePath === "/products" || activePath.startsWith("/middleware"),
      children: [],
      isMega: true,
    },
    {
      name: "解决方案",
      href: "/solutions",
      active: activePath === "/solutions",
      isMega: false,
      children: [
        { name: "中间件统一管理平台解决方案", href: "/solutions/middleware-management" },
        { name: "智能运维解决方案", href: "/solutions/intelligent-ops" },
        { name: "信创一体化运维监控解决方案", href: "/solutions/xinchuang-ops" },
        { name: "信创全栈中间件解决方案", href: "/solutions/xinchuang-middleware" },
        { name: "数字效能大模型解决方案", href: "/solutions/digital-efficiency-model" },
        { name: "数智中台解决方案", href: "/solutions/smart-platform" },
        { name: "容器云解决方案", href: "/solutions/container-cloud" },
      ],
    },
    {
      name: "成功案例",
      href: "/cases",
      active: activePath === "/cases" || activePath.startsWith("/cases"),
      isMega: false,
      children: [
        { name: "通信大数据行程卡平台", href: "/cases/telecom-big-data-platform" },
        { name: "省级政务大数据服务平台", href: "/cases/government-data-platform" },
        { name: "核心业务系统中间件替换", href: "/cases/core-middleware-replacement" },
      ],
    },
    {
      name: "服务支持",
      href: "/support",
      active: activePath === "/support" || activePath.startsWith("/support"),
      isMega: false,
      children: [
        { name: "在线服务", href: "/support/online" },
        { name: "认证证书", href: "/support/certification" },
        { name: "产品升级", href: "/support/upgrade" },
        { name: "常见问题及解决方案", href: "/support/faq" },
        { name: "Kubernetes服务", href: "/support/kubernetes" },
      ],
    },
    {
      name: "关于我们",
      href: "/about",
      active: activePath === "/about" || activePath === "/news" || activePath.startsWith("/news"),
      isMega: false,
      children: [
        { name: "公司介绍", href: "/about/introduction" },
        { name: "公司荣誉", href: "/about/honors" },
        { name: "发展历程", href: "/about/history" },
        { name: "联系我们", href: "/about/contact" },
        { name: "投资者关系", href: "/about/investor" },
        { name: "公司要闻", href: "/news/company" },
        { name: "加入我们", href: "/about/careers" },
      ],
    },
  ]
}
