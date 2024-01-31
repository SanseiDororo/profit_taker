import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const space_mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Profit Taker',
  description: 'Next JS Profit Calculator Example',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  )
}
