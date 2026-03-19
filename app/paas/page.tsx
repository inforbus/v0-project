import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <h1 className="text-4xl font-bold">PaaS云平台</h1>
        <p className="mt-4 text-lg text-foreground/70">灵活弹性的云原生应用集成平台</p>
      </div>
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
