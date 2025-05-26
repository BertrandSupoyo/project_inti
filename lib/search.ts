import { books } from "@/lib/data"
import type { Book } from "@/app/types/book"

export type SearchFilter = "all" | "title" | "author" | "description"

export function searchBooks(query: string, filter: SearchFilter = "all"): Book[] {
  const searchTerm = query.toLowerCase().trim()
  
  if (!searchTerm) return []

  return books.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm)
    const authorMatch = book.author.toLowerCase().includes(searchTerm)
    const descriptionMatch = book.description.toLowerCase().includes(searchTerm)

    switch (filter) {
      case "title":
        return titleMatch
      case "author":
        return authorMatch
      case "description":
        return descriptionMatch
      default:
        return titleMatch || authorMatch || descriptionMatch
    }
  })
} 