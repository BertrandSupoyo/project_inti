"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BookCard } from "@/components/book-card"
import { Book } from "@/app/types/book"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { searchBooks, SearchFilter } from "@/lib/search"

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q") || ""
  const searchFilter = (searchParams.get("filter") as SearchFilter) || "all"
  
  const [query, setQuery] = useState(searchQuery)
  const [filter, setFilter] = useState<SearchFilter>(searchFilter)
  const [results, setResults] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery, searchFilter)
    }
  }, [searchQuery, searchFilter])

  const performSearch = async (searchTerm: string, filter: SearchFilter) => {
    setIsLoading(true)
    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const searchResults = searchBooks(searchTerm, filter)
      setResults(searchResults)
    } catch (error) {
      console.error("Search error:", error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}&filter=${filter}`)
    }
  }

  const handleFilterChange = (value: SearchFilter) => {
    setFilter(value)
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}&filter=${value}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-3xl mx-auto">
              <div className="flex-1 flex gap-2">
                <Select value={filter} onValueChange={handleFilterChange}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Search in..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="description">Description</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder={`Search by ${filter === "all" ? "title, author, or description" : filter}...`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
              </div>
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>

          {searchQuery && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">
                Search Results for "{searchQuery}"
                {filter !== "all" && (
                  <span className="text-muted-foreground font-normal text-lg">
                    {" "}in {filter}
                  </span>
                )}
              </h1>
              <p className="text-muted-foreground">
                {isLoading
                  ? "Searching..."
                  : `Found ${results.length} result${results.length === 1 ? "" : "s"}`}
              </p>
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-[350px] rounded-lg bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
              {results.length === 0 && searchQuery && !isLoading && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No results found for "{searchQuery}"{filter !== "all" && ` in ${filter}`}. 
                    Try a different search term or filter.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 