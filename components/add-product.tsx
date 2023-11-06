"use client"

import { nanoid } from "nanoid"
import { useDispatch } from "react-redux"

import { addProduct } from "@/lib/actions/product"

import { Button } from "./ui/button"

type Props = {}

export default function AddProduct({}: Props) {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() =>
        dispatch(
          addProduct({
            id: nanoid(),
            name: "Organic Avocado Hass, 48ct",
            image: "/avocado.jpg",
            brand: "Hormen Black Labelmany",
            status: undefined,
            price: 40000,
            quantity: "500",
          })
        )
      }
      variant="outline"
      className="border-primary text-primary"
    >
      Add Item
    </Button>
  )
}
