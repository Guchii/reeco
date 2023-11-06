/* eslint-disable @next/next/no-img-element */

import { Check, X } from "lucide-react"

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

export enum Status {
  Missing = "Missing",
  MissingUrgent = "Missing - Urgent",
  Approved = "Approved",
  PriceUpdated = "Price Updated",
  QuantityUpdated = "Price Updated",
  PriceQuantityUpdated = "Price and Quantity Updated",
  Available = "Available",
}

const invoices = [
  {
    id: "nice",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    status: Status.Missing,
    price: "250",
    quantity: "500",
  },
  {
    id: "nice2",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    status: Status.PriceQuantityUpdated,
    price: "250",
    quantity: "500",
  },
]

export function ProductsTable() {
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
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
              <img
                src="/avocado.jpg"
                height={50}
                width={50}
                alt={invoice.name}
              />
            </TableCell>
            <TableCell className="max-w-[200px]">{invoice.name}</TableCell>
            <TableCell>{invoice.brand}</TableCell>
            <TableCell>${invoice.price}</TableCell>
            <TableCell className="flex items-center gap-2">
              <span className="font-bold">{invoice.quantity}</span> x 6 * 1LB
            </TableCell>
            <TableCell>
              ${Number(invoice.price) * Number(invoice.quantity)}
            </TableCell>
            <TableCell className="flex items-center gap-4">
              <div className="flex justify-center flex-1">
                <Badge className="justify-center w-full">
                  {invoice.status}
                </Badge>
              </div>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-green-700"
              >
                <Check />
              </Button>
              <MissingDialog />
              <EditDialog />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
