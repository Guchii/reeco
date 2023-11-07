"use client"

import { PropsWithChildren } from "react"
import store from "@/../../lib/store"
import { Toaster } from "react-hot-toast"
import { Provider as ReduxProvider } from "react-redux"

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      {children}
      <Toaster position={"bottom-right"} />
    </ReduxProvider>
  )
}
