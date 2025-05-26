"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SearchFilter } from "@/lib/search"

export function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<SearchFilter>("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}&filter=${filter}`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop"
          alt="Books on shelves"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover Your Next Favorite E-Book
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized recommendations based on your reading preferences. Explore thousands of titles across all genres.
          </p>
          <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto items-center space-x-2">
            <div className="flex-1 flex gap-2">
              <Select value={filter} onValueChange={setFilter}>
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
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="outline" asChild>
              <Link href="/categories">Browse Categories</Link>
            </Button>
            <Button asChild>
              <Link href="/trending">Trending Books</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}