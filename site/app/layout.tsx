import type { Metadata } from "next";
import { Inter_Tight, Overpass } from "next/font/google";
import { GeistSans } from "geist/font/sans"
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interTight = Inter_Tight({ subsets: ["latin"] });
const overpass = Overpass({ subsets: ["latin"] });

const geist = GeistSans;

export const metadata: Metadata = {
  title: "jaydenpriestley.dev",
  description: "jaydenpriestley.dev is my personal website. It contains all necessary details about me, my projects, hobbies, and my life in general!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
