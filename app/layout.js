import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grawatty | Home Page",
  description: "Powering the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
