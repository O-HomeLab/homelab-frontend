import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import type { Metadata } from "next";

import Navbar from "@/components/navbar/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "HomeLab",
  description: "Dashboard for HomeLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider>
          <Navbar></Navbar>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
