import { Toaster } from "@/components/ui/sonner"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { inter } from "./font"
import "./globals.css"

export const metadata: Metadata = {
  title: "Todo App",
  description: "Aplicación de TODOs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
