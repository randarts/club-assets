import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S&S Club',
  description: 'S&S Club',
  generator: 'S&S Club',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
