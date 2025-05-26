"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function Cart() {
  const cart = useCart()
  const itemCount = cart.getItemCount()
  const totalPrice = cart.getTotalPrice()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Shopping Cart</h4>
            {itemCount > 0 && (
              <Button variant="ghost" size="sm" onClick={() => cart.clearCart()}>
                Clear all
              </Button>
            )}
          </div>
          <Separator />
          {itemCount === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-4">
              Your cart is empty
            </div>
          ) : (
            <>
              <ScrollArea className="h-[300px]">
                <div className="grid gap-4">
                  {cart.items.map((item) => (
                    <div key={item.book.id} className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.book.coverImage}
                            alt={item.book.title}
                            className="h-10 w-8 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium leading-none">
                              {item.book.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">
                            Rp. {(item.book.price * item.quantity).toFixed(3)}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => cart.removeItem(item.book.id)}
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <Separator />
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Total</p>
                <p className="text-sm font-medium">Rp. {totalPrice.toFixed(3)}</p>
              </div>
              <Button asChild className="w-full">
                <Link href="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
} 