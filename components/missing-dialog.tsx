"use client"

import { X } from "lucide-react"
import { useDispatch } from "react-redux"

import { editProduct } from "@/lib/actions/product"
import { Status } from "@/lib/reducers/product"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function MissingDialog({ id }: { id: string }) {
  const dispatch = useDispatch()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="text-destructive">
          <X />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Missing product</AlertDialogTitle>
          <AlertDialogDescription>
            Is{" "}
            <span className="inline max-w-[10px] truncate">
              {((str: string, maxlength: number = 48) => {
                return str.length > maxlength
                  ? str.slice(0, maxlength - 1) + "…"
                  : str
              })(
                "Chicken Breast Fillets, Boneless, Marinated 6 ounce Raw, invivid"
              )}
            </span>{" "}
            urgent?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              dispatch(editProduct(id, { status: Status.Missing }))
            }}
          >
            No
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              dispatch(editProduct(id, { status: Status.MissingUrgent }))
            }}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
