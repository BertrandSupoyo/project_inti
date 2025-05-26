import Link from "next/link"

import { Category } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`} className="block h-full">
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-center">{category.name}</h3>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2 text-center">{category.description}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}