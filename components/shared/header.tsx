"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { type NavItem, type ProductCategory } from "./nav-data"

function ProductMegaMenu({ productCategories }: { productCategories: ProductCategory[] }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const buttons = container.querySelectorAll<HTMLButtonElement>(".category-btn")
    const hoverContainer = container.closest("[data-mega-menu-wrapper]")

    const handleMouseEnter = (idx: number) => {
      isHoveringRef.current = true
      setActiveIdx(idx)
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      // Reset to 0 when mouse leaves the entire menu
      const timer = setTimeout(() => {
        if (!isHoveringRef.current) {
          setActiveIdx(0)
        }
      }, 200)
      return () => clearTimeout(timer)
    }

    buttons.forEach((btn, idx) => {
      btn.addEventListener("mouseenter", () => handleMouseEnter(idx))
    })

    hoverContainer?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", () => handleMouseEnter)
      })
      hoverContainer?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="flex overflow-hidden rounded-lg border border-border bg-background shadow-xl" 
      style={{ minWidth: "680px" }}
    >
      <div className="flex w-[180px] flex-shrink-0 flex-col bg-muted py-2">
        {productCategories.map((category, idx) => (
          <button
            key={idx}
            type="button"
            className={`category-btn relative flex items-center justify-between px-5 py-3.5 text-left text-sm transition-all duration-150 ${
              activeIdx === idx
                ? "bg-background font-semibold text-primary"
                : "font-medium text-foreground/80 hover:bg-background/80 hover:text-primary"
            }`}
          >
            {category.name}
            <ChevronRight className={`h-3.5 w-3.5 transition-colors ${activeIdx === idx ? "text-primary" : "text-muted-foreground"}`} />
            {activeIdx === idx && (
              <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-primary" />
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-1 flex-col border-l border-border px-6 py-4">
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          {productCategories[activeIdx]?.name}
        </h4>
        <div className="mb-3 h-px w-full bg-border" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {productCategories[activeIdx]?.children.map((child, cIdx) => (
            <Link
              key={cIdx}
              href={child.href}
              className="rounded px-3 py-2.5 text-sm text-muted-foreground transition-all duration-150 hover:bg-primary/5 hover:text-primary"
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileNavItem({ item, productCategories }: { item: NavItem; productCategories: ProductCategory[] }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item.children.length > 0 || item.isMega

  return (
    <div className="border-b border-border/40 last:border-b-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={`flex-1 py-3 text-base font-medium transition-colors ${item.active ? "text-primary" : "text-foreground"}`}
        >
          {item.name}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="p-2 text-muted-foreground"
            aria-label={expanded ? "收起" : "展开"}
          >
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {!item.isMega && hasChildren && expanded && (
        <div className="pb-2 pl-4">
          {item.children.map((child, cIdx) => (
            <Link
              key={cIdx}
              href={child.href}
              className="block cursor-pointer rounded-md py-2.5 pl-2 text-sm text-foreground/70 transition-all duration-150 hover:bg-primary/5 hover:pl-4 hover:text-primary active:scale-[0.97] active:bg-primary/10 active:text-primary"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
      {item.isMega && expanded && (
        <div className="pb-2 pl-4">
          {productCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-2">
              <Link
                href={category.href}
                className="block py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                {category.name}
              </Link>
              <div className="pl-3">
                {category.children.map((child, cIdx) => (
                  <Link
                    key={cIdx}
                    href={child.href}
                    className="block cursor-pointer rounded-md py-2 pl-2 text-sm text-foreground/60 transition-all duration-150 hover:bg-primary/5 hover:pl-4 hover:text-primary"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header({ navItems, productCategories = [], variant = "default" }: { navItems: NavItem[]; productCategories?: ProductCategory[]; variant?: "default" | "overlay" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isOverlay = variant === "overlay"

  return (
    <header className="relative z-50">
      <div className={`border-b bg-transparent ${isOverlay ? "border-white/10" : "border-white/20"}`}>
        <nav className="mx-auto flex w-full items-center justify-between px-6 py-3 lg:px-10 xl:px-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/vector.png"
              alt="INFORS 中创中间件"
              width={280}
              height={30}
              className={`h-6 w-auto md:h-7 3xl:h-8 ${isOverlay ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12">
            {navItems.map((item, index) => (
              <div key={index} className="group/nav relative">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 whitespace-nowrap py-4 text-sm font-medium transition-colors hover:text-primary 3xl:text-base ${item.active ? "text-primary" : isOverlay ? "text-white/90" : "text-foreground"
                    }`}
                >
                  {item.name}
                  {(item.children.length > 0 || item.isMega) && (
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover/nav:rotate-180" />
                  )}
                  {item.active && <span className="absolute -bottom-[13px] left-0 h-[3px] w-full bg-primary" />}
                </Link>

                {item.isMega && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100">
                    <ProductMegaMenu productCategories={productCategories} />
                  </div>
                )}

                {!item.isMega && item.children.length > 0 && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-border/60 bg-background py-2 shadow-lg">
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.href}
                          className="block cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm text-foreground/80 transition-colors duration-150 hover:bg-primary/5 hover:text-primary active:bg-primary/10 active:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className={`p-2 lg:hidden ${isOverlay ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="打开菜单"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-border bg-background lg:hidden">
            <div className="px-4 py-4">
              {navItems.map((item, index) => (
                <MobileNavItem key={index} item={item} productCategories={productCategories} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
