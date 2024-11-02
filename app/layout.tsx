import type { Metadata } from "next";
import Header from "../components/organisms/Header";
import Navigation from "../components/organisms/Navigation";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Tiendanimal",
  description: "Tienda de articulos de mascotas",
  icons: {
    icon: "/dog.ico",
    shortcut: "/dog.ico",
    apple: "/dog.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={openSans.variable}>
      <body>
        <Header />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
