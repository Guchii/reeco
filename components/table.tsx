/* eslint-disable @next/next/no-img-element */
"use client"

import { Check, X } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"

import { editProduct } from "@/lib/actions/product"
import { Status } from "@/lib/reducers/product"
import { RootState } from "@/lib/store"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { EditDialog } from "./edit-dialog"
import { MissingDialog } from "./missing-dialog"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export function ProductsTable() {
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold"></TableHead>
          <TableHead className="max-w-[200px] font-bold">
            Product name
          </TableHead>
          <TableHead className="font-bold">Brand</TableHead>
          <TableHead className="font-bold">Price</TableHead>
          <TableHead className="font-bold">Quantity</TableHead>
          <TableHead className="font-bold">Total</TableHead>
          <TableHead className="font-bold">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">
              <img
                src="/avocado.jpg"
                height={50}
                width={50}
                alt={product.name}
              />
            </TableCell>
            <TableCell className="max-w-[200px]">{product.name}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell className="flex items-center gap-2">
              <span className="font-bold">{product.quantity}</span> x 6 * 1LB
            </TableCell>
            <TableCell>
              ${Number(product.price) * Number(product.quantity)}
            </TableCell>
            <TableCell className="flex items-center gap-4">
              <div className="flex justify-center flex-1">
                {product.status ? (
                  <Badge
                    className={cn("justify-center w-full", {
                      "bg-green-100 text-green-700":
                        product.status === Status.Approved,
                      "bg-orange-100 text-orange-700":
                        product.status === Status.Missing,
                      "bg-red-100 text-red-700":
                        product.status === Status.MissingUrgent,
                    })}
                  >
                    {product.status}
                  </Badge>
                ) : null}
              </div>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-green-700"
                onClick={() =>
                  dispatch(
                    editProduct(product.id, {
                      status: Status.Approved,
                    })
                  )
                }
              >
                <Check />
              </Button>
              <MissingDialog name={product.name} id={product.id} />
              <EditDialog product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
