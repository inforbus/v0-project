"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { getNavItems, type NavItem } from "./nav-data"

function MobileNavItem({ item }: { item: NavItem }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="border-b border-border/40 last:border-b-0">
      <div className="flex items-center justify-between">
        {item.href ? (
          <Link
            href={item.href}
            className={`flex-1 py-3 text-base font-medium transition-colors ${item.active ? "text-primary" : "text-foreground"}`}
          >
            {item.name}
          </Link>
        ) : (
          <button
            type="button"
            className={`flex-1 py-3 text-left text-base font-medium transition-colors ${item.active ? "text-primary" : "text-foreground"}`}
          >
            {item.name}
          </button>
        )}
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
      {hasChildren && expanded && (
        <div className="pb-2 pl-4">
          {item.children.map((child, cIdx) => (
            <MobileSubNavItem key={cIdx} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

function MobileSubNavItem({ item }: { item: NavItem }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="border-b border-border/20 last:border-b-0">
      <div className="flex items-center justify-between">
        {item.href ? (
          <Link
            href={item.href}
            className="flex-1 py-2.5 pl-2 text-sm text-foreground/70 transition-all duration-150 hover:text-primary"
          >
            {item.name}
          </Link>
        ) : (
          <button
            type="button"
            className="flex-1 py-2.5 pl-2 text-left text-sm text-foreground/70 transition-all duration-150 hover:text-primary"
          >
            {item.name}
          </button>
        )}
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="p-1 text-muted-foreground"
            aria-label={expanded ? "收起" : "展开"}
          >
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <div className="pb-2 pl-4">
          {item.children.map((grandchild, gcIdx) => (
            <Link
              key={gcIdx}
              href={grandchild.href}
              className="block cursor-pointer rounded-md py-2 pl-2 text-xs text-foreground/50 transition-all duration-150 hover:bg-primary/5 hover:pl-3 hover:text-primary"
            >
              {grandchild.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header({ variant = "default", isDarkBg = false, activePath = "/" }: { variant?: "default" | "overlay"; isDarkBg?: boolean; activePath?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isOverlay = variant === "overlay"

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use local nav data to ensure consistent rendering between server and client
  const localNavItems = useMemo(() => getNavItems(activePath), [activePath])
  const items = mounted ? localNavItems : []

  return (
    <header className={`relative z-50 ${isOverlay ? "absolute w-full" : "sticky top-0 bg-background"}`}>
      <div className={`border-b ${isOverlay ? "border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm" : "border-border"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="中创软件"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12">
            {items.map((item, index) => (
              <div key={index} className="group/nav relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 whitespace-nowrap py-2.5 text-sm font-medium transition-colors duration-200 ${
                      item.active
                        ? isOverlay
                          ? "text-white"
                          : "text-primary"
                        : isOverlay
                          ? "text-white/70 hover:text-white"
                          : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 whitespace-nowrap py-2.5 text-sm font-medium transition-colors duration-200 ${
                      item.active
                        ? isOverlay
                          ? "text-white"
                          : "text-primary"
                        : isOverlay
                          ? "text-white/70 hover:text-white"
                          : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {item.children.length > 0 && <ChevronDown size={14} />}
                  </button>
                )}

                {item.children.length > 0 && (
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-border bg-background shadow-xl">
                      <div className="flex flex-col py-1">
                        {item.children.map((child, cIdx) => (
                          <div key={cIdx} className="group/submenu relative">
                            {child.children && child.children.length > 0 ? (
                              // Has nested children - show as button with submenu
                              <>
                                <button
                                  type="button"
                                  className="flex w-full items-center justify-between cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm text-foreground transition-colors duration-150 hover:bg-primary/5 hover:text-primary"
                                >
                                  {child.name}
                                  <ChevronDown size={12} className="ml-2 transition-transform group-hover/submenu:rotate-180" />
                                </button>
                                {/* Third level submenu */}
                                <div className="pointer-events-none absolute left-full top-0 z-50 ml-1 opacity-0 transition-all duration-200 group-hover/submenu:pointer-events-auto group-hover/submenu:opacity-100">
                                  <div className="overflow-hidden rounded-lg border border-border bg-background shadow-xl">
                                    <div className="flex flex-col py-1">
                                      {child.children.map((grandchild, gcIdx) => (
                                        <Link
                                          key={gcIdx}
                                          href={grandchild.href}
                                          className="block cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm text-foreground transition-colors duration-150 hover:bg-primary/5 hover:text-primary"
                                        >
                                          {grandchild.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              // No nested children - regular link
                              <Link
                                href={child.href}
                                className="block cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm text-foreground transition-colors duration-150 hover:bg-primary/5 hover:text-primary"
                              >
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex-shrink-0 lg:hidden ${isOverlay ? "text-white" : "text-foreground"}`}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && mounted && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-white/20 lg:hidden">
          <div className="px-4 py-4">
            {items.map((item, index) => (
              <MobileNavItem key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
