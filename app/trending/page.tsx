import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getTrendingBooks } from "@/lib/data"
import { BookCard } from "@/components/book-card"

export default function TrendingPage() {
  const trendingBooks = getTrendingBooks()
  
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Trending Books</h1>
            <p className="text-xl text-muted-foreground mx-auto">
              Discover the most popular e-books that readers can't put down right now.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trendingBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}