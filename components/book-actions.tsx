"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import { Book } from "@/app/types/book"

interface BookActionsProps {
  book: Book
}

export function BookActions({ book }: BookActionsProps) {
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex gap-4">
      {book.sampleUrl ? (
        <Button variant="outline" asChild>
          <Link href={book.sampleUrl} target="_blank" rel="noopener noreferrer">
            Read Sample
          </Link>
        </Button>
      ) : null}
      <Button onClick={() => cart.addItem(book)}>Add to Cart</Button>
    </div>
  )
} 