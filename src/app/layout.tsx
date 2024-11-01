import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";
import CartProvider from "@/providers/CartContext";
import { siteConfig } from "@/config/site";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${syne.className} text-slate-700`}
      >
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="grow"> {children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
