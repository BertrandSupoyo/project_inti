export interface Book {
  id: string
  title: string
  author: string
  price: number
  coverImage: string
  description: string
  category?: string
  rating?: number
  publishedDate?: string
} 