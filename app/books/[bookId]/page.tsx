import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Calendar, ArrowLeft } from "lucide-react"
import { getBookById, books } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookCard } from "@/components/book-card"
import { BookActions } from "@/components/book-actions"

export function generateStaticParams() {
  return books.map((book) => ({
    bookId: book.id,
  }))
}

// Fungsi untuk mengubah deskripsi menjadi vektor frekuensi kata
function textToVector(text: string) {
  if (!text) return {};
  const words = text.toLowerCase().match(/\b\w+\b/g) || []
  const freqMap: Record<string, number> = {}
  
  words.forEach((word) => {
    freqMap[word] = (freqMap[word] || 0) + 1
  })
  
  return freqMap
}

// Fungsi untuk menghitung cosine similarity antara dua vektor teks
function calculateSimilarity(textA: string, textB: string) {
  const vectorA = textToVector(textA)
  const vectorB = textToVector(textB)

  const uniqueWords = new Set([...Object.keys(vectorA), ...Object.keys(vectorB)])

  const dotProduct = Array.from(uniqueWords).reduce((sum, word) => {
    return sum + (vectorA[word] || 0) * (vectorB[word] || 0);
  }, 0);

  const magnitudeA = Math.sqrt(Object.values(vectorA).reduce((sum, val) => sum + val ** 2, 0));
  const magnitudeB = Math.sqrt(Object.values(vectorB).reduce((sum, val) => sum + val ** 2, 0));

  return magnitudeA && magnitudeB ? (dotProduct / (magnitudeA * magnitudeB)) : 0;
}

export default function BookPage({ params }: { params: { bookId: string } }) {
  const book = getBookById(params.bookId)
  if (!book) notFound()

  // Hitung Cosine Similarity untuk setiap buku lain berdasarkan deskripsi
  const similarityScores = books.map((b) => ({
    book: b,
    similarity: calculateSimilarity(book.description, b.description)
  }))

  // Urutkan berdasarkan kesamaan dan ambil 4 buku terkait
  const relatedBooks = similarityScores
    .filter((b) => b.book.id !== book.id) // Hindari buku itu sendiri
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="aspect-[2/3] w-full max-w-xs overflow-hidden rounded-lg border">
                <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{book.title}</h1>
                <p className="text-xl text-muted-foreground mt-2">by {book.author}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="ml-1 font-medium">{book.rating.toFixed(1)}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex flex-wrap gap-2">
                  {book.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      <Link href={`/categories/${category}`}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Link>
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">About this book</h2>
                <p className="text-muted-foreground">{book.description}</p>
              </div>

              <BookActions book={book} />
            </div>
          </div>

          {relatedBooks.length > 0 && (
            <section className="py-12">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">You might also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {relatedBooks.map(({ book, similarity }) => (
                  <div key={book.id} className="relative">
                    <BookCard book={book} />
                    <Badge className="absolute top-2 right-2 bg-white text-black">
                      {(similarity * 100).toFixed(1)}%
                    </Badge>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}