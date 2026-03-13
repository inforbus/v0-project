export interface NavItem {
  name: string
  href: string
  active?: boolean
  children?: NavItem[]
  isMega?: boolean
}

export function getNavItems(activePath?: string): NavItem[] {
  return [
    {
      name: "首页",
      href: "/",
      active: activePath === "/",
      children: [],
      isMega: false,
    },
    {
      name: "产品中心",
      href: "/products",
      active: activePath === "/products" || activePath.startsWith("/middleware") || activePath.startsWith("/digital-platform") || activePath.startsWith("/paas") || activePath.startsWith("/iot") || activePath.startsWith("/security"),
      children: [
        {
          name: "基础中间件",
          href: "/middleware",
          children: [
            { name: "应用服务器", href: "/middleware/app-server", children: [] },
            { name: "负载均衡软件", href: "/middleware/load-balancer", children: [] },
            { name: "分布式数据缓存中间件", href: "/middleware/cache", children: [] },
            {
              name: "消息中间件",
              href: "/middleware/message",
              children: [
                { name: "中创消息中间件软件", href: "/middleware/message/basic", children: [] },
                { name: "中创高性能消息中间件软件", href: "/middleware/message/performance", children: [] },
                { name: "中创云原生消息中间件软件", href: "/middleware/message/cloud-native", children: [] },
                { name: "中创高吞吐消息队列软件", href: "/middleware/message/high-throughput", children: [] },
              ],
            },
            { name: "工作流中间件", href: "/middleware/workflow", children: [] },
            { name: "企业服务总线", href: "/middleware/esb", children: [] },
            { name: "中间件统一管理平台", href: "/middleware/management", children: [] },
          ],
        },
        { name: "数智化平台", href: "/digital-platform", children: [] },
        { name: "PaaS云平台", href: "/paas", children: [] },
        { name: "物联网平台", href: "/iot", children: [] },
        { name: "应用安全产品", href: "/security", children: [] },
      ],
      isMega: true,
    },
    {
      name: "解决方案",
      href: "/solutions",
      active: activePath === "/solutions" || activePath.startsWith("/solutions"),
      children: [
        { name: "金融行业", href: "/solutions/financial" },
        { name: "政府行业", href: "/solutions/government" },
        { name: "企业应用", href: "/solutions/enterprise" },
      ],
      isMega: false,
    },
    {
      name: "案例中心",
      href: "/cases",
      active: activePath === "/cases" || activePath.startsWith("/cases"),
      children: [
        { name: "金融案例", href: "/cases/financial" },
        { name: "政府案例", href: "/cases/government" },
        { name: "企业案例", href: "/cases/enterprise" },
      ],
      isMega: false,
    },
    {
      name: "技术支持",
      href: "",
      active: activePath === "/support" || activePath.startsWith("/support"),
      children: [
        { name: "在线服务", href: "/support/online" },
        { name: "认证证书", href: "/support/certification" },
        { name: "产品升级", href: "/support/upgrade" },
        { name: "FAQ", href: "/support/faq" },
        { name: "Kubernetes服务", href: "/support/kubernetes" },
      ],
      isMega: false,
    },
    {
      name: "关于我们",
      href: "",
      active: activePath === "/about" || activePath === "/news/company" || activePath.startsWith("/about"),
      children: [
        { name: "公司介绍", href: "/about/introduction" },
        { name: "公司荣誉", href: "/about/honors" },
        { name: "发展历程", href: "/about/history" },
        { name: "投资者关系", href: "/about/investor" },
        { name: "公司要闻", href: "/news/company" },
        { name: "加入我们", href: "/about/careers" },
      ],
      isMega: false,
    },
  ]
}
