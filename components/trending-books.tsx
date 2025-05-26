import { getTrendingBooks } from "@/lib/data"
import { BookCard } from "@/components/book-card"

export function TrendingBooks() {
  const trendingBooks = getTrendingBooks()
  
  return (
    <section className="py-16 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Trending Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most popular e-books that readers can't put down right now
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trendingBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  )
}