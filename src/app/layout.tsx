import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FRY Ambient Weather Portal',
  description: 'Submit your Ambient Weather API Key to link your account',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       

        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      </head>

      <body className={inter.className}>{children}</body>
    </html>

  )
}
