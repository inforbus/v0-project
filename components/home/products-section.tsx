import { ScrollReveal } from "@/components/shared/scroll-reveal"

const productValues = [
  {
    title: "遵循国际标准",
    description:
      "通过Jakarta EE10/9.1/9/8及Java EE8/7/6完整兼容认证，支持应用场景最丰富。公司作为Jakarta EE企业级会员，参与Jakarta EE最新几十项规范制定，引领中间件技术发展。",
    icon: "/figma/asset-4.svg",
  },
  {
    title: "应用平滑迁移",
    description:
      "兼容主流国外和开源同类中间件的私有协议及配置，保障应用平滑迁移，降低信创改造成本。",
    icon: "/figma/asset-5.svg",
  },
  {
    title: "支撑云原生",
    description:
      "支持容器镜像、Helm chart、Operator等部署模式，支持系统弹性伸缩、滚动升级及配置热更新，灵活接入状态、链路追踪、日志等第三方监控运维平台，可实现多云环境的统一纳管。",
    icon: "/figma/asset.svg",
  },
  {
    title: "高性能",
    description:
      "采用高性能线程池、连接池及网络处理等核心技术，支持用户高并发、大吞吐访问，可规模化同等替代国外产品，性能优于Tomcat等开源中间件产品。",
    icon: "/figma/asset-2.svg",
  },
  {
    title: "高安全",
    description:
      "通过第三方权威机构源代码安全检测和系统漏洞扫描，支持SM2/SM3/SM4等国密算法，支持TLCP安全传输协议，满足等保2.0三级、四级要求。集成应用安全防护模块，加固应用安全。",
    icon: "/figma/asset-1.svg",
  },
  {
    title: "高可靠",
    description:
      "支持大规模集群部署，提供故障转移和弹性伸缩能力。提供线程分组、流量控制及过载保护等功能，实现系统故障有效隔离，保障应用系统运行稳定可靠。",
    icon: "/figma/asset-3.svg",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1287px] px-5 md:px-8">
        <ScrollReveal>
          <h2 className="text-balance text-center text-3xl font-bold leading-none text-[#242222] md:text-[40px]">
            产品价值
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {productValues.map((item, index) => (
            <ScrollReveal key={item.title}>
              <article
                className={`relative flex min-h-[265px] gap-6 py-8 md:gap-8 md:py-10 lg:gap-9 ${
                  index < 4 ? "border-b border-[#C7CDD4]" : ""
                } ${index % 2 === 0 ? "md:pr-6 lg:pr-10" : "md:pl-6 lg:pl-10"}`}
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[88px] w-[88px] shrink-0 object-contain md:h-[108px] md:w-[108px]"
                />
                <div className="min-w-0 pt-1">
                  <h3 className="text-pretty text-2xl font-medium leading-9 text-[#242222]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-pretty text-[17px] leading-[30px] text-[#242222]/80">
                    {item.description}
                  </p>
                </div>

                {index < 4 && (
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-3 hidden h-6 w-6 rotate-45 border-[#C7CDD4] bg-background md:block ${
                      index % 2 === 0
                        ? "-right-[45px] border-r border-t lg:-right-[57px]"
                        : "-left-[45px] border-b border-l lg:-left-[57px]"
                    }`}
                  />
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
