import type { Metadata } from "next"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "关于我们 - 中创软件",
  description: "了解中创软件的发展历程、公司荣誉和产品应用",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">关于我们</h1>
          <p className="mt-4 text-lg text-foreground/70">公司介绍和发展历程</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
