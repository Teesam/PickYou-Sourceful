import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalStoreProvider } from '@/components/store/contextAPI'
import { ToastContainer, Zoom } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStoreProvider>
        <ToastContainer
            transition={Zoom}
            autoClose={4000}
            hideProgressBar
            pauseOnHover={false}
            draggable={false}
            position="top-center"
        />
          {children}
        </GlobalStoreProvider>
      </body>
    </html>
  )
}
