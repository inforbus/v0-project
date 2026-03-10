import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

const navItems = getNavItems("/products")

export function ProductsHeroSection() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Background image */}
      <img
        src="/images/products-banner.jpg"
        alt="中国创造 软件中坚"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} />

      {/* Main title and subtitle text content */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
        {/* Red accent line */}
        <div
          className="bg-[#BF1920]"
          style={{ width: 'clamp(40px, 4vw, 60px)', height: '3px', marginTop: 'clamp(8px, 1.2vw, 18px)' }}
        />

        {/* Main title */}
        <h1
          className="font-sans font-bold text-[#332C2B]"
          style={{ fontSize: 'clamp(16px, 2.5vw, 32px)', lineHeight: '1.3' }}
        >
          中国创造 &nbsp; 软件中坚
        </h1>
      </div>
    </div>
  )
}
