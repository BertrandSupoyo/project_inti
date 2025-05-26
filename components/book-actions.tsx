"use client"

import { Book } from "@/app/types/book"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import Link from "next/link"

interface BookActionsProps {
  book: Book
}

export function BookActions({ book }: BookActionsProps) {
  const cart = useCart()

  return (
    <div className="flex gap-4">
      {book.sampleUrl ? (
        <Button variant="outline" asChild>
          <Link href={book.sampleUrl} target="_blank" rel="noopener noreferrer">
            Read Sample
          </Link>
        </Button>
      ) : (
        <Button variant="outline" disabled>Sample Not Available</Button>
      )}
      
      <Button onClick={() => cart.addItem(book)}>
        Add to Cart - Rp. {book.price.toFixed(3)}
      </Button>
    </div>
  )
} 