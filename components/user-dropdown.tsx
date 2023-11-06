"use client"

import { ChevronDown, LogOutIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function UserDropdown() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent hover:text-current"
        >
          Hello, James <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="space-y-4 w-80">
        <span className="font-bold">James Charles</span>
        <Button className="w-full gap-2">
          Sign out <LogOutIcon size={16} />
        </Button>
      </PopoverContent>
    </Popover>
  )
}
