import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryList } from "@/components/category-list"

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Categories</h1>
            <p className="text-xl text-muted-foreground mx-auto">
              Browse our extensive collection of e-books by category to find your next great read.
            </p>
          </div>
        </section>
        <CategoryList />
      </main>
      <SiteFooter />
    </div>
  )
}