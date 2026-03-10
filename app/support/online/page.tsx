"use client"

import Image from "next/image"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
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
              <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
                在线服务
              </h1>
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
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "产品咨询",
              icon: "🎯",
            },
            {
              title: "售后维护",
              icon: "🔧",
            },
            {
              title: "投诉建议",
              icon: "💬",
            },
            {
              title: "申请试用版",
              icon: "✨",
            },
            {
              title: "兼容认证",
              icon: "✓",
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
                产品名称/问题名称
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      您的姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                      您的公司/单位
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    您的电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <p className="text-sm text-foreground/60">看不清，换一张</p>
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
                  联系方式
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-base font-medium text-foreground">
                        山东省济南市历下区千佛山东路41-1号
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-base font-medium text-foreground">
                        400-618-6180
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-base font-medium text-foreground">
                        www.inforbus.com
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
