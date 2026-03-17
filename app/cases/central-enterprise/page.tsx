import { Metadata } from "next"
import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "央企中间件统一管理平台 | 中创股份",
  description: "央企中间件统一管理平台案例详情，实现多活容灾、智能路由、业务数字化管理的完整解决方案",
}

export default function CentralEnterpriseCase() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Banner */}
      <section className="relative h-64 md:h-80 lg:h-96 3xl:h-[500px] overflow-hidden">
        <Image
          src="/images/cases/central-enterprise-banner.png"
          alt="央企中间件统一管理平台"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold 3xl:text-7xl">
                央企中间件统一管理平台
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 3xl:text-2xl">
                多活容灾 · 智能路由 · 业务数字化
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <main className="flex-1">
        {/* Project Background */}
        <section className="py-14 md:py-20 lg:py-[80px] 3xl:py-[100px] border-b border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <ScrollReveal>
              <div className="mb-8 lg:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground border-l-4 border-[#BF1920] pl-4 3xl:text-5xl">
                  项目背景
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <Image
                  src="/images/cases/central-background.png"
                  alt="项目背景"
                  width={1200}
                  height={400}
                  className="rounded-xl w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Project Achievement */}
        <section className="py-14 md:py-20 lg:py-[80px] 3xl:py-[100px] border-b border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <ScrollReveal>
              <div className="mb-8 lg:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground border-l-4 border-[#BF1920] pl-4 3xl:text-5xl">
                  项目成果
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <Image
                  src="/images/cases/central-achievement.png"
                  alt="项目成果"
                  width={1200}
                  height={400}
                  className="rounded-xl w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Capability */}
        <section className="py-14 md:py-20 lg:py-[80px] 3xl:py-[100px] border-b border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <ScrollReveal>
              <div className="mb-8 lg:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground border-l-4 border-[#BF1920] pl-4 3xl:text-5xl">
                  核心能力
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <Image
                  src="/images/cases/central-capability.png"
                  alt="核心能力"
                  width={1200}
                  height={400}
                  className="rounded-xl w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-14 md:py-20 lg:py-[80px] 3xl:py-[100px] border-b border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <ScrollReveal>
              <div className="mb-8 lg:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground border-l-4 border-[#BF1920] pl-4 3xl:text-5xl">
                  技术栈
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <Image
                  src="/images/cases/central-techstack.png"
                  alt="技术栈"
                  width={1200}
                  height={400}
                  className="rounded-xl w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <ScrollReveal>
              <div className="rounded-2xl bg-gradient-to-r from-[#BF1920] to-[#8B1315] p-8 md:p-12 lg:p-16 3xl:p-20 text-center text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 3xl:text-5xl">
                  了解更多解决方案
                </h3>
                <p className="text-base md:text-lg text-white/80 mb-8 3xl:text-xl">
                  中创股份为企业提供全方位的中间件解决方案，助力数字化转型
                </p>
                <a
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-[#BF1920] transition-all duration-300 hover:scale-105 active:scale-95 3xl:px-10 3xl:py-3.5 3xl:text-lg"
                >
                  查看全部解决方案
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
