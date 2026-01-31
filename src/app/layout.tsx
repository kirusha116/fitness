import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  subsets: ['cyrillic'],
})

const raleway = localFont({
  src: [
    {
      path: '../fonts/Monorale-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-raleway',
})

const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
})

export const metadata: Metadata = {
  title: 'Fitness',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} ${gilroy.variable} antialiased`}
    >
      <body className="font-montserrat">{children}</body>
    </html>
  )
}
