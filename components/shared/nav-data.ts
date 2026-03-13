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
      children: [],
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
