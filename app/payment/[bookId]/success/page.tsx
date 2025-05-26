import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { getBookById, books } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return books.map((book) => ({
    bookId: book.id,
  }))
}

export default function PaymentSuccessPage({ params }: { params: { bookId: string } }) {
  const book = getBookById(params.bookId)
  if (!book) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Payment Successful!</h1>
            <p className="text-muted-foreground">
              Thank you for purchasing {book.title}. You will receive an email confirmation shortly.
            </p>
            <div className="pt-6">
              <Button asChild>
                <Link href="/">
                  Return to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 