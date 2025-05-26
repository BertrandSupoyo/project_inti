import { notFound } from "next/navigation"
import { getBookById, books } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import PaymentForm from "@/components/payment-form"

export function generateStaticParams() {
  return books.map((book) => ({
    bookId: book.id,
  }))
}

export default function PaymentPage({ params }: { params: { bookId: string } }) {
  const book = getBookById(params.bookId)
  if (!book) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Complete Your Purchase</h1>
              <p className="text-muted-foreground mt-2">You are purchasing: {book.title}</p>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
              <div>
                <h2 className="font-semibold">{book.title}</h2>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
              </div>
              <div className="text-xl font-bold">${book.price}</div>
            </div>

            <PaymentForm book={book} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 