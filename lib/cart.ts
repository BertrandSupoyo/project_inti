import { Book } from "@/app/types/book"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartItem {
  book: Book
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (book: Book) => void
  removeItem: (bookId: string) => void
  clearCart: () => void
  getItemCount: () => number
  getTotalPrice: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (book: Book) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.book.id === book.id)
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.book.id === book.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }
          return { items: [...state.items, { book, quantity: 1 }] }
        })
      },
      removeItem: (bookId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.book.id !== bookId),
        }))
      },
      clearCart: () => set({ items: [] }),
      getItemCount: () => {
        const state = get()
        return state.items.reduce((total, item) => total + item.quantity, 0)
      },
      getTotalPrice: () => {
        const state = get()
        return state.items.reduce(
          (total, item) => total + item.book.price * item.quantity,
          0
        )
      },
    }),
    {
      name: "cart-storage",
    }
  )
) 