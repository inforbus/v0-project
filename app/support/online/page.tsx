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



      <Footer />
    </div>
  )
}
