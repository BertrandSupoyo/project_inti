import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBooks } from "@/components/featured-books"
import { TrendingBooks } from "@/components/trending-books"
import { CategoryList } from "@/components/category-list"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedBooks />
        <TrendingBooks />
        <CategoryList />
      </main>
      <SiteFooter />
    </div>
  );
}