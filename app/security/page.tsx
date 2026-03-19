import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function SecurityPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <h1 className="text-4xl font-bold">应用安全产品</h1>
        <p className="mt-4 text-lg text-foreground/70">全方位信息安全防护体系</p>
      </div>
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
