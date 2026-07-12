import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

// Mengimpor font Inter
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Graphic Designer',
  description: 'Crafting digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}