import { notFound } from "next/navigation"

import { getCategoryById, getBooksByCategory, getAllCategories } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookCard } from "@/components/book-card"

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    categoryId: category.id,
  }))
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = getCategoryById(params.categoryId)
  
  if (!category) {
    notFound()
  }
  
  const books = getBooksByCategory(params.categoryId)
  
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{category.name}</h1>
            <p className="text-xl text-muted-foreground mx-auto">
              {category.description}
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Books in {category.name}</h2>
            {books.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center">No books found in this category.</p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}