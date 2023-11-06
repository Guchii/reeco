import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-secondary text-secondary-foreground">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
                "relative cursor-pointer"
              )}
            >
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-400 rounded-full text-[10px] grid place-content-center font-bold">
                5
              </div>
              <ShoppingCart className="w-5 h-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
