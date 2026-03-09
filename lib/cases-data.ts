/* ── Success case data (shared between home page and detail page) ──── */
export const cases = [
  {
    slug: "central-enterprise-digital-system",
    title: "首个央企全栈式自主可控超大型数字化系统",
    tag: "央企",
    desc: "完成首个央企全栈式自主可控超大型数字化系统建设，实现核心业务流程全面数字化升级",
    photo: "/images/case-central-enterprise.jpg",
    metrics: "超大规模",
  },
  {
    slug: "commercial-bank-localization",
    title: "某大型商业银行全栈国产化项目",
    tag: "金融",
    desc: "完成大型商业银行全栈国产化建设，保障金融核心系统安全稳定运行，提升国产化水平",
    photo: "/images/case-financial-bank.jpg",
    metrics: "全栈化",
  },
  {
    slug: "national-highway-toll-stations",
    title: "全国高速公路标准化收费站项目",
    tag: "交通",
    desc: "建设全国高速公路标准化收费站系统，实现跨地域统一管理和实时交易处理",
    photo: "/images/case-highway-toll.jpg",
    metrics: "全国覆盖",
  },
  {
    slug: "real-estate-group-localization",
    title: "某开发投资集团核心业务系统国产化建设",
    tag: "地产",
    desc: "完成地产集团核心业务系统的国产化建设，实现业务连续性与系统自主可控",
    photo: "/images/case-real-estate.jpg",
    metrics: "核心系统",
  },
  {
    slug: "operator-middleware-services",
    title: "某运营商中间件产品及运维服务项目",
    tag: "电信",
    desc: "提供运营商级别的中间件产品和全链路运维服务，保障关键业务系统稳定运行",
    photo: "/images/case-telecom-operator.jpg",
    metrics: "运营商级",
  },
  {
    slug: "provincial-government-document-exchange",
    title: "某省政务内外网公文交换平台",
    tag: "政务",
    desc: "建设省级政务内外网公文交换平台，实现安全高效的跨部门公文流转与管理",
    photo: "/images/case-government-document.jpg",
    metrics: "政务级",
  },
]

export type CaseItem = (typeof cases)[number]
