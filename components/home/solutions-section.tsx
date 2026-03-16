"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const solutions = [
  {
    tab: "AI 智能体管理平台",
    title: "AI 智能体管理平台解决方案",
    slug: "ai-agent",
    icon: "/images/solution-ai-agent.png",
    desc: "企业级全场景 AI 智能体管理平台，通过整合大模型能力、RAG 知识库及安全防护机制，实现智能体的全生命周期管理，帮助企业从会说到会做，打通业务最后一公里。",
  },
  {
    tab: "信创中间件双活容灾",
    title: "信创中间件双活容灾解决方案",
    slug: "disaster-recovery",
    icon: "/images/solution-middleware.png",
    desc: "基于自主可控技术体系，提供覆盖消息中间件、应用服务器、负载均衡等全栈中间件产品，支持多活容灾与自动故障转移，为关键行业核心系统提供安全、稳定的基础设施支撑。",
  },
  {
    tab: "信创全栈自主可控",
    title: "信创全栈自主可控中间件解决方案",
    slug: "xinchuang-middleware",
    icon: "/images/solution-xinchuang.png",
    desc: "全栈中间件产品矩阵涵盖应用运行、消息通信、流量调度、数据缓存四大核心领域，各组件既可独立部署也可协同工作，全面助力国产化替代与数字化转型。",
  },
]

interface Solution {
  tab: string
  title: string
  slug: string
  icon: string
  desc: string
}

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<string>(solutions[0].slug)

  const activeSolution = solutions.find((s) => s.slug === activeTab) || solutions[0]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <ScrollReveal>
        <div className="relative mx-auto w-full max-w-[90%] px-4 py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36">
          {/* Section Title */}
          <div className="mb-12 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-28">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
              解决方案
            </h2>
            <p className="mt-4 text-base text-gray-600 md:mt-6 md:text-lg lg:mt-8 lg:text-xl xl:mt-10 xl:text-2xl 2xl:mt-12 2xl:text-2xl 3xl:mt-14 3xl:text-3xl">
              为不同行业和场景提供定制化解决方案
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-12 flex flex-wrap gap-3 md:mb-14 md:gap-4 lg:mb-16 lg:gap-5 xl:gap-6 2xl:mb-20 3xl:mb-24">
            {solutions.map((solution) => (
              <button
                key={solution.slug}
                onClick={() => setActiveTab(solution.slug)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 md:px-6 md:py-3 md:text-base lg:px-7 lg:py-3.5 lg:text-lg xl:px-8 xl:py-4 2xl:px-9 2xl:py-4.5 2xl:text-xl 3xl:px-10 3xl:py-5 3xl:text-2xl ${
                  activeTab === solution.slug
                    ? "bg-primary text-white"
                    : "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                {solution.tab}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-20 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={activeSolution.icon}
                alt={activeSolution.title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col justify-center">
                <h3 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl lg:mb-10 lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
                  {activeSolution.title}
                </h3>
                <p className="mb-8 text-base text-gray-600 leading-relaxed md:mb-10 md:text-lg lg:mb-12 lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl">
                  {activeSolution.desc}
                </p>
                <Link
                  href={`/solutions/${activeSolution.slug}`}
                  className="inline-block w-fit rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90 md:px-10 md:py-3.5 lg:px-12 lg:py-4 xl:text-lg 2xl:text-xl 3xl:text-2xl"
                >
                  了解更多
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
