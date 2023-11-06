/* eslint-disable @next/next/no-img-element */
"use client"

import { useMemo, useRef, useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Input } from "./ui/input"

export function EditDialog() {
  const numberRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [price, setPrice] = useState<undefined | number>(undefined)
  const [quantity, setQuantity] = useState<undefined | number>(undefined)
  const [reason, setReason] = useState<string>("")
  const total = useMemo(
    () => (price && quantity ? price * quantity : 0),
    [price, quantity]
  )
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Edit</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[640px]">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setOpen(false)
          }}
        >
          <DialogHeader>
            <DialogTitle>
              {((str: string, maxlength: number = 48) => {
                return str.length > maxlength
                  ? str.slice(0, maxlength - 1) + "…"
                  : str
              })(
                "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid"
              )}
            </DialogTitle>
            <DialogDescription>American Roland</DialogDescription>
            <div className="flex items-center gap-4">
              <img
                src={"/avocado.jpg"}
                height={120}
                width={120}
                alt={"avocado"}
              />
              <div className="flex flex-col flex-1 gap-4">
                <div className="flex items-center">
                  <span className="font-semibold w-[100px]">
                    Price{`(${"$"})`}
                  </span>
                  <Input
                    required
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    name="price"
                    type="number"
                    placeholder={"9999"}
                    min={0}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-[100px]">Quantity</span>
                  <Button
                    type="button"
                    size={"icon"}
                    className="self-start"
                    onClick={() =>
                      setQuantity((q) =>
                        typeof q !== "undefined" ? (q > 0 ? q - 1 : 0) : 0
                      )
                    }
                  >
                    <MinusIcon />
                  </Button>
                  <Input
                    name="quantity"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    value={quantity}
                    min={0}
                    required
                    className="max-w-[100px]"
                    ref={numberRef}
                    placeholder="10"
                    type="number"
                  />
                  <Button
                    onClick={() =>
                      setQuantity((q) => (typeof q !== "undefined" ? q + 1 : 0))
                    }
                    type="button"
                    size={"icon"}
                  >
                    <PlusIcon />
                  </Button>
                  <span className="block"> x 6 * 1LB</span>
                </div>

                <div className="flex items-center">
                  <span className="font-semibold w-[100px]">Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Choose reason</span>
              <span className="text-gray-600 ">(optional)</span>
            </div>
            {reason ? (
              <button
                onClick={() => setReason("")}
                className="self-start py-2 text-primary"
              >
                clear choice
              </button>
            ) : null}
            <div className="flex flex-wrap gap-2">
              <RadioGroup
                value={reason}
                onValueChange={setReason}
                name="reason"
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="peer"
                    value="Missing Product"
                    id="r1"
                  />
                  <Label htmlFor="r1" className={"peer-checked:bg-red-400"}>
                    Missing Product
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Quantity is not the same" id="r2" />
                  <Label htmlFor="r2">Quantity is not the same</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Price is not the same" id="r3" />
                  <Label htmlFor="r3">Price is not the same</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Other" id="r4" />
                  <Label htmlFor="r4">Other</Label>
                </div>
              </RadioGroup>
            </div>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button
              variant={"ghost"}
              type="button"
              onClick={() => setOpen(false)}
              className="text-primary hover:text-primary"
            >
              Cancel
            </Button>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
