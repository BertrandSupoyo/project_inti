"use client"

import { create } from "zustand"
import { Book } from "@/app/types/book"

interface CartStore {
  items: Book[]
  addItem: (book: Book) => void
  removeItem: (bookId: string) => void
  clearCart: () => void
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addItem: (book) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === book.id)
      if (existingItem) {
        return state
      }
      return { items: [...state.items, book] }
    }),
  removeItem: (bookId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== bookId),
    })),
  clearCart: () => set({ items: [] }),
})) 