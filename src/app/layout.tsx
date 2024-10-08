import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - Teslo | Shop',
    default: 'Home Teslo | Shop'
  },
  description: "Ecommerce Shop for Teslo Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
