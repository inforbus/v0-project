"use client"

export function SolutionOverviewSection({ type = "xinchuang-middleware" }: { type?: string }) {
  const content: Record<string, { title: string; description: string }> = {
    "xinchuang-middleware": {
      title: "信创全栈中间件解决方案",
      description: "待添加内容",
    },
    "ai-agent": {
      title: "AI 智能体管理平台解决方案",
      description: "待添加内容",
    },
    "disaster-recovery": {
      title: "信创中间件双活容灾解决方案",
      description: "待添加内容",
    },
  }

  const solutionContent = content[type] || content["xinchuang-middleware"]

  return (
    <section className="border-b border-border bg-muted/40">
      <div className="relative mx-auto max-w-6xl px-4 py-16 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl 3xl:text-6xl">
            {solutionContent.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg 3xl:text-xl">
            {solutionContent.description}
          </p>
        </div>
      </div>
    </section>
  )
}
