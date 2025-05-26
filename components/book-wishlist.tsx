import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface WishlistCardProps {
  bookId: string
  title: string
  author: string
  coverImage: string
  description: string
}

export function WishlistCard({ bookId, title, author, coverImage, description }: WishlistCardProps) {
  return (
    <Link href={`/books/${bookId}`} className="block h-full">
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-center">{title}</h3>
          <p className="text-sm text-muted-foreground text-center">by {author}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-xs text-muted-foreground text-center line-clamp-2">{description}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
