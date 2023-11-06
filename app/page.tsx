import {
  Apple,
  Beer,
  Cherry,
  ChevronRight,
  Drumstick,
  Egg,
  GlassWater,
  Grape,
  PrinterIcon,
  Snowflake,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductsTable } from "@/components/table"

export default function IndexPage() {
  return (
    <section className="bg-background">
      <div className="shadow-lg">
        <div className="container flex flex-col gap-4 py-6">
          <div className="flex items-center">
            Orders <ChevronRight />{" "}
            <span className="underline decoration-dotted">Order 32457ABC</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">Order 32457ABC</span>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-primary text-primary">
                Back
              </Button>
              <Button>Approve Order</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4">
        <div className="flex p-6 flex-wrap [&>div]:w-1/6 [&>div]:space-y-2 mt-4 font-bold divide-x-2 rounded-md shadow-lg">
          <div className="p-4">
            <span className="font-semibold text-gray-500">Supplier</span>
            <p>East coast fruits & vegetables</p>
          </div>
          <div className="p-4">
            <span className="font-semibold text-gray-500">Shipping date</span>
            <p>Thu, Feb 10</p>
          </div>
          <div className="p-4">
            <span className="font-semibold text-gray-500">Total</span>
            <p className="text-2xl">$ 15,028.3</p>
          </div>
          <div className="p-4">
            <span className="font-semibold text-gray-500">Category</span>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 text-gray-700">
              <Apple />
              <Cherry />
              <Grape />
              <Snowflake />
              <Egg />
              <GlassWater />
              <Drumstick />
              <Beer />
            </div>
          </div>
          <div className="p-4">
            <span className="font-medium text-gray-500">Department</span>
            <p>300-444-678</p>
          </div>
          <div className="p-4">
            <span className="font-medium text-gray-500">Status</span>
            <p>Awaiting your approval</p>
          </div>
        </div>
        <div className="p-6 mb-8 space-y-4 rounded-md shadow-lg bg-background text-foreground">
          <div className="flex items-center gap-8">
            <Input
              placeholder="Search..."
              className="max-w-sm mr-auto font-medium"
            />
            <Button variant="outline" className="border-primary text-primary">
              Add Item
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-primary hover:text-primary"
            >
              <PrinterIcon />
            </Button>
          </div>

          <ProductsTable />
        </div>
      </div>
    </section>
  )
}
