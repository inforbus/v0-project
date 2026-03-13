"use client"

export function SolutionCasesSection({ type = "xinchuang-middleware" }: { type?: string }) {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="relative mx-auto max-w-6xl px-4 py-16 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-24">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl 3xl:text-6xl">
          应用案例
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg 3xl:text-xl">
          应用案例内容待添加 - {type}
        </p>
      </div>
    </section>
  )
}
