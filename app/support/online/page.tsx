"use client"

import Image from "next/image"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { getNavItems } from "@/components/shared/nav-data"

export default function OnlineServicePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const navItems = getNavItems("/support/online")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("loading")
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 3000)
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <Header navItems={navItems} />

      {/* Banner Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
                  在线服务
                </h1>
                <p className="text-lg text-foreground/70">
                  24小时在线支持，为您的业务保驾护航
                </p>
              </div>
              <p className="text-base leading-relaxed text-foreground/60">
                我们提供专业的产品咨询、技术支持、售后维护等一站式服务，帮助您快速解决问题，提升业务效率。
              </p>
            </div>
            <div className="relative h-64 w-full lg:h-80">
              <Image
                src="/images/support-banner.jpg"
                alt="在线服务"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            我们的服务
          </h2>
          <p className="text-lg text-foreground/60">
            选择适合您的服务方式
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "产品咨询",
              description: "了解我们的产品特性、技术方案和应用场景，获取专业的产品建议",
              icon: "🎯",
            },
            {
              title: "售后维护",
              description: "获得专业的技术支持团队服务，解决产品使用中的各类问题",
              icon: "🔧",
            },
            {
              title: "投诉建议",
              description: "反馈您的使用意见，帮助我们持续改进产品和服务质量",
              icon: "💬",
            },
            {
              title: "申请试用版",
              description: "免费体验我们的产品功能，了解是否符合您的业务需求",
              icon: "✨",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group/service h-full rounded-lg border border-border bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:bg-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl group-hover/service:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                联系我们
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      您的姓名 <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="请输入您的姓名"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                      所属公司/单位 <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="请输入公司/单位名称"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      联系电话 <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="请输入联系电话"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="请输入电子邮箱"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                    服务类型 <span className="text-primary">*</span>
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="">请选择服务类型</option>
                    <option value="consultation">产品咨询</option>
                    <option value="maintenance">售后维护</option>
                    <option value="feedback">投诉建议</option>
                    <option value="trial">申请试用版</option>
                    <option value="certification">兼容认证</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    留言内容 <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="请详细描述您的需求或问题"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95 active:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? "提交中..." : formStatus === "success" ? "提交成功！" : "提交"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  快速联系方式
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">咨询热线</p>
                      <p className="text-base font-medium text-foreground">
                        400-618-6180
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">网址</p>
                      <p className="text-base font-medium text-foreground">
                        www.inforbus.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">公司地址</p>
                      <p className="text-base font-medium text-foreground">
                        山东省济南市历下区千佛山东路41-1号
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">在线客服时间</p>
                      <p className="text-base font-medium text-foreground">
                        周一至周五 9:00-17:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
          服务详情
        </h2>

        <div className="space-y-12">
          {[
            {
              title: "产品咨询",
              description: "为您详细介绍产品的功能特性、技术方案、应用场景和优势，帮助您了解产品是否适合您的业务需求。我们的专业团队可以根据您的具体情况提供定制化的解决方案建议。",
              points: [
                "深入了解产品功能和特点",
                "获取行业解决方案建议",
                "对接专业技术团队",
                "免费评估技术可行性",
              ],
            },
            {
              title: "售后维护",
              description: "提供全面的产品使用支持和技术维护服务，包括产品安装配置、使用培训、故障排查、性能优化等。我们的技术支持团队会快速响应您的问题，确保您的系统平稳运行。",
              points: [
                "快速响应技术问题",
                "提供产品使用培训",
                "定期系统维护和优化",
                "紧急故障处理支持",
              ],
            },
            {
              title: "投诉建议",
              description: "我们重视您的每一条反馈意见。通过投诉建议渠道，您可以向我们反映使用过程中遇到的问题或对产品和服务的改进建议，帮助我们不断提升产品质量和服务水平。",
              points: [
                "专业的投诉处理流程",
                "及时的问题反馈和跟进",
                "建议汇总和产品优化",
                "客户满意度调查和改进",
              ],
            },
            {
              title: "申请试用版",
              description: "想要体验我们的产品？申请试用版可以让您在一定的试用期内免费使用产品的全部功能，了解产品是否满足您的业务需求。我们提供完整的试用支持和技术指导。",
              points: [
                "免费获取试用版本",
                "完整的功能体验",
                "专业的试用期技术支持",
                "灵活的升级和付费方案",
              ],
            },
            {
              title: "兼容认证",
              description: "中创软件产品已获得多项国家级兼容认证和信创认证，确保产品的安全性、可靠性和适配性。您可以申请产品兼容认证，我们会安排专业团队进行全面的技术评估和认证。",
              points: [
                "国家级兼容认证",
                "信创产品认证支持",
                "专业的评估和测试",
                "完整的认证文档支持",
              ],
            },
          ].map((detail, idx) => (
            <div key={idx} className="rounded-lg border border-border bg-muted/50 p-8">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {detail.title}
              </h3>
              <p className="mb-6 leading-relaxed text-foreground/70">
                {detail.description}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {detail.points.map((point, pidx) => (
                  <div key={pidx} className="flex gap-3">
                    <span className="flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-semibold">
                      ✓
                    </span>
                    <span className="text-sm text-foreground/70">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
