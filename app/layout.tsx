import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import bookmark from '../public/logo-bookmark.svg';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookmark",
  description: "A bookmarking website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} text-black font-[ubuntu]`}>
        <header className="flex items-center mx-[5%] my-8 gap-12 mb-48">
          <a><Image src={bookmark} width={150} height={150} alt="logo"></Image></a>
          <a className="ml-[auto]">FEATURES</a>
          <a>PRICES</a>
          <a>CONTACT</a>
          <button className="bg-red-500 p-1 px-4 text-white rounded font-bold">LOGIN</button>
        </header>
        <main>
        { children }
        </main>
      </body>
    </html>
  );
}
