import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Bg from "../assets/img/bg.svg";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://usermetrics.co'),
  title: 'User Metrics',
  description: 'The best detailed dashboard for any community | User Metrics Landing Page',
  keywords: ["dashboard", "community management", "best", "detailed", "community", "management tool", "tool", "customized"],
  openGraph: {
    title: "User Metrics",
    description: "The best detailed dashboard for any community | User Metrics Landing Page",
    url: "http://usermetrics.co",
    siteName: "User Metrics",
    images: [
      {
        url: "https://6580bb8866e83a20252b6bb7--moonlit-palmier-e79a1e.netlify.app/mdi.png",
        width: 800,
        height: 600,
      },
    ]
  },
  twitter: {
    site: '@Usermetricshq',
    title: 'User Metrics',
    description: 'The best detailed dashboard for any community | User Metrics Landing Page',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex items-center justify-center'>
          <Image className='bg pointer-events-none' src={Bg} alt=''  />
        </div>
        <div className='relative z-10'>
            {children}
        </div>
      </body>
    </html>
  )
}
