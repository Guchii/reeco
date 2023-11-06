"use client"

import { X } from "lucide-react"

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

export function MissingDialog() {
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
              console.log("cancel")
            }}
          >
            No
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              console.log("continue")
            }}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
