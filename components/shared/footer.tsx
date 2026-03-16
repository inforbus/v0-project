import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted pb-4 pt-8 3xl:pb-6 3xl:pt-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            <FooterColumn title="产品中心" links={[
              { label: "基础中间件", href: "/middleware" },
              { label: "数智化平台", href: "/digital-platform" },
              { label: "PaaS云平台", href: "/paas" },
              { label: "物联网平台", href: "/iot" },
              { label: "应用安全产品", href: "/security" },
            ]} />
            <FooterColumn title="解决方案" links={[
              { label: "信创中间件解决方案", href: "#" },
              { label: "信创运维管理解决方案", href: "#" },
              { label: "数字化转型解决方案", href: "#" },
              { label: "容器云解决方案", href: "#" },
            ]} />
            <FooterColumn title="服务与支持" links={[
              { label: "产品升级", href: "#" },
              { label: "资料中心", href: "#" },
              { label: "Kubernetes服务", href: "#" },
              { label: "中间件百科", href: "#" },
            ]} />
            <FooterColumn title="关于我们" links={[
              { label: "公司介绍", href: "/about/introduction" },
              { label: "公司荣誉", href: "/about/honors" },
              { label: "发展历程", href: "/about/history" },
              { label: "新闻资讯", href: "/news" },
              { label: "投资者关系", href: "/about/investor" },
            ]} />
          </div>

          <div className="relative border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-sm text-foreground 3xl:text-base">扫描关注中创中间件微信公众号或视频号</p>
            <div className="mt-3 flex gap-3 3xl:mt-4 3xl:gap-4">
              {/* WeChat QR Code */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-E5GuTtKdhXDCzFLIy5RdbIxTjYqf6k.png"
                alt="中创股份微信公众号二维码"
                width={72}
                height={72}
                className="rounded 3xl:h-[92px] 3xl:w-[92px]"
              />
              {/* Video Account QR Code */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-u8eXoO3zYildei5JSTej7TrWsELyEF.png"
                alt="中创股份视频号二维码"
                width={72}
                height={72}
                className="rounded 3xl:h-[92px] 3xl:w-[92px]"
              />
            </div>
            <div className="mt-4 space-y-2 text-sm text-foreground 3xl:mt-6 3xl:space-y-3 3xl:text-base">
              <p>产品咨询：400-618-6180</p>
              <p>邮箱：www.inforbus.com</p>
              <p>地址：山东省济南市历下区千佛山东路41-1号</p>
            </div>
            <a
              href="#"
              className="mt-4 inline-flex cursor-pointer items-center justify-center rounded bg-primary px-3 py-1.5 text-sm font-normal text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95 active:bg-primary/80 3xl:mt-6 3xl:px-4 3xl:py-2 3xl:text-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" strokeWidth="2" />
              </svg>
              联系我们
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-3 text-center 3xl:mt-10 3xl:pt-4">
          <p className="text-xs text-foreground 3xl:text-sm">
            网站备案许可证号： 鲁公网安备 37010202002930号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站备案号：鲁ICP备11001434号-5
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="relative pl-4">
      <div className="absolute left-0 top-0 h-full w-[0.5px] bg-border" />
      <div className="absolute left-0 top-[6px] h-[18px] w-1 rounded-full bg-foreground" />
      <h4 className="text-base font-normal text-foreground 3xl:text-xl">{title}</h4>
      <ul className="mt-3 space-y-2.5 3xl:mt-5 3xl:space-y-4">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="footer-link-animated cursor-pointer text-xs text-foreground/70 transition-all duration-200 hover:text-primary hover:underline active:text-primary/80 3xl:text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
