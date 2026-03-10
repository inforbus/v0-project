"use client"

import Image from "next/image"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { OnlineServiceHeroSection } from "@/components/online-service/hero-section"
import { getNavItems } from "@/components/shared/nav-data"
import { Footer } from "@/components/shared/footer"

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
      <OnlineServiceHeroSection />

      {/* Contact Section */}
      <section id="contact" className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <form onSubmit={handleSubmit} className="rounded-lg bg-background p-8 shadow-sm">
            {/* Product/Issue Name */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-foreground">
                产品名称/问题名称 <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                placeholder="请输入产品名称/问题名称"
                className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            {/* Service Type Radio Options */}
            <div className="mb-8">
              <label className="mb-3 block text-sm font-medium text-foreground">
                请选择服务类型 <span className="text-primary">*</span>
              </label>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: "consultation", label: "产品咨询" },
                  { value: "maintenance", label: "售后维护" },
                  { value: "feedback", label: "投诉建议" },
                  { value: "trial", label: "申请试用版" },
                  { value: "certification", label: "兼容认证" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value={option.value}
                      className="h-4 w-4 text-primary"
                      required
                    />
                    <span className="text-sm text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Issue Content */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-foreground">
                请详细填写问题内容 <span className="text-primary">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="请详细填写问题内容"
                className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            {/* User Information */}
            <div className="mb-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  您的姓名 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  您的公司/单位 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="请输入您的公司/单位名称"
                  className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  您的电话 <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="请输入您的电话"
                  className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            {/* Captcha */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-foreground">
                验证码 <span className="text-primary">*</span>
              </label>
              <div className="flex gap-3 items-center">
                <div className="flex-1 rounded-md border border-border bg-muted px-4 py-3">
                  <input
                    type="text"
                    placeholder="验证码"
                    className="w-full bg-transparent text-foreground placeholder:text-foreground/50 focus:outline-none"
                    required
                  />
                </div>
                <div className="h-12 w-24 rounded-md border border-border bg-muted flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpRN1ck3SjU81tEMFe9TTmXF2u0ZU5.png"
                    alt="验证码"
                    width={80}
                    height={40}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline whitespace-nowrap"
                >
                  看不清，换一张
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="rounded-md bg-primary px-12 py-3 font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "loading" ? "提交中..." : formStatus === "success" ? "提���成功！" : "确认提交"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h3 className="mb-8 text-2xl font-bold text-foreground text-center">
            快速联系方式
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-background p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-1 text-sm text-foreground/60">咨询热线</p>
              <p className="font-medium text-foreground">400-618-6180</p>
            </div>

            <div className="rounded-lg bg-background p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-1 text-sm text-foreground/60">网址</p>
              <p className="font-medium text-foreground">www.inforbus.com</p>
            </div>

            <div className="rounded-lg bg-background p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-1 text-sm text-foreground/60">公司地址</p>
              <p className="font-medium text-foreground text-sm">山东省济南市历下区千佛山东路41-1号</p>
            </div>

            <div className="rounded-lg bg-background p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-1 text-sm text-foreground/60">在线客服时间</p>
              <p className="font-medium text-foreground">周一至周五 9:00-17:30</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
