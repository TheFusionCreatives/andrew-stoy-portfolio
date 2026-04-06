import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Andrew Stoy - Psychology & Technology Integration',
  description: 'Psychology-focused professional integrating behavioral science and technology to improve mental health outcomes.',
  keywords: ['psychology', 'technology', 'mental health', 'crisis intervention', 'business systems'],
  authors: [{ name: 'Andrew Stoy' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-dark-bg text-gray-light">
        {children}
      </body>
    </html>
  )
}
