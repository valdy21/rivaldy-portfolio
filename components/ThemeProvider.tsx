"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Kita suruh React membaca properti bawaan dari NextThemesProvider secara otomatis,
// lalu kita tambahkan secara eksplisit properti 'children' agar TypeScript tenang.
type CustomThemeProviderProps = React.ComponentProps<typeof NextThemesProvider> & {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}