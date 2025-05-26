import Link from "next/link"
import { BookOpen } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Cart } from "@/components/cart"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-center">
        {/* Logo and Navigation - Centered */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://ik.imagekit.io/20ic5ao3f/Logo%20FIX.png?updatedAt=1741660849041"
              alt="Biblily Logo"
              className="h-8 w-8 rounded-md object-cover"
            />
            <span className="text-lg font-bold">Biblily</span>
          </Link>

          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/trending"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Trending
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Theme Toggle, Cart and Auth Buttons - Centered */}
        <div className="absolute right-4 flex items-center space-x-4">
          <ThemeToggle />
          <Cart />
          <Button variant="outline" size="sm" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
