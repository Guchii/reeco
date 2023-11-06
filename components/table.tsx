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

import { Button } from "./ui/button"

const invoices = [
  {
    id: "nice",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    price: "$250.00",
    total: "$250.00",
    quantity: "Credit Card",
  },
  {
    id: "nice",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    price: "$250.00",
    total: "$250.00",
    quantity: "Credit Card",
  },
  {
    id: "nice",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    price: "$250.00",
    total: "$250.00",
    quantity: "Credit Card",
  },
  {
    id: "nice",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    price: "$250.00",
    total: "$250.00",
    quantity: "Credit Card",
  },
  {
    id: "nice",
    name: "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid",
    image: "/avocado.jpg",
    brand: "Hormen Black Labelmany",
    price: "$250.00",
    total: "$250.00",
    quantity: "Credit Card",
  },
]

export function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold"></TableHead>
          <TableHead className="font-bold">Product name</TableHead>
          <TableHead className="font-bold">Brand</TableHead>
          <TableHead className="font-bold">Price</TableHead>
          <TableHead className="font-bold">Quantity</TableHead>
          <TableHead className="font-bold">Total</TableHead>
          <TableHead className="font-bold text-right">Status</TableHead>
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
            <TableCell>{invoice.price}</TableCell>
            <TableCell>{invoice.quantity}</TableCell>
            <TableCell>{invoice.total}</TableCell>
            <TableCell className="flex items-center justify-end">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-green-700"
              >
                <Check />
              </Button>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-destructive"
              >
                <X />
              </Button>
              <Button variant={"ghost"}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
