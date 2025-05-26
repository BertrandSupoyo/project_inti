import Link from "next/link"
import { Star } from "lucide-react"
import { Book } from "@/app/types/book"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={book.coverImage}
          alt={book.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold leading-none tracking-tight">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          by {book.author}
        </p>
        {book.description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {book.description}
          </p>
        )}
        {book.rating !== undefined && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{book.rating.toFixed(1)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="font-bold">Rp. {book.price.toFixed(3)}</span>
        <Button asChild>
          <Link href={`/books/${book.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}