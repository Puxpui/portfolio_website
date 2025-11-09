import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puxpui",
  description: "Puxpui Website",
  icons: {
    icon: "https://scontent.fkkc4-2.fna.fbcdn.net/v/t39.30808-6/362937095_110062712167258_582266945226472703_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHoNeE9S_cIacSCBW4clKNHqYxi2FXunjGpjGLYVe6eMTZY2FCA78HRK_HgInrcxWwcDYKJiQZPf5Mnqd4uJibD&_nc_ohc=wtZWlzs3ltcQ7kNvwGwH4z4&_nc_oc=AdlnYVwz82wJNYIl2WgGZypCNW-B1V4ZksIzkBLJS669fZmTmAivt5ls9ZXkHb45ywyYP-xD1EE5_lXFJ0FIng24&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&_nc_gid=XaHTKZwGsItZ4YcUXOevMA&oh=00_Afg2omw2m1uCsrKIOVwywjhl6rkTl_07FGCtInR1gGMaHQ&oe=6916981C",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
