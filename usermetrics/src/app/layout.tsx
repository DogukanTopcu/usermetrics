import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from 'react'
import { UserProvider } from "@/context/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Metrics",
  description: "User Metrics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <UserProvider>
            {children}
          </UserProvider>
        </Suspense>
      </body>
    </html>
  );
}
