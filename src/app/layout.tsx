import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alisson Peixer',
  description: 'Desenvolvedor FullStack',
  icons: {
    icon: "/logo-az.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + ' bg-gradient-creme bg-radind'}>{children}</body>
    </html>
  )
}
