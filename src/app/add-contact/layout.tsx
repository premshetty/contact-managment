import SideBar from '@/components/SideBar'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Contact',
  description: 'Create contact page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row">
          <SideBar />
          <main id="content" className="w-full  bg-gray-900 relative pb-20">

            {children}
          </main>


        </div>

      </body>
    </html>
  )
}
