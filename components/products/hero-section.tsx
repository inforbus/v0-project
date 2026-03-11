"use client"

import { useMemo } from "react"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export function ProductsHeroSection() {
  const navItems = useMemo(() => getNavItems("/about/introduction"), [])
  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Background image */}
      <img
        src="/images/products-banner.jpg"
        alt="中国创造 软件中坚"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} variant="overlay" />

      {/* Main title and subtitle text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Main title */}
        <h1
          className="font-sans font-bold text-white text-center"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: '1.2', maxWidth: '90%' }}
        >
          中国创造 &nbsp; 软件中坚
        </h1>
      </div>
    </div>
  )
}
