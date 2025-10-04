import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/lib/auth';
import { ReactNode } from 'react';

export const metadata = {
  title: "Baskeet Shop - Best Online Store",
  description: "Baskeet Shop offers premium products with top deals. Discover electronics, fashion, and more.",
  keywords: ["Baskeet", "Baskeet Shop", "Online Store", "E-commerce"],
  icons: {
    icon: "/logo.svg", // ✅ favicon / logo placed in public/logo.png
  },
  openGraph: {
    title: "Baskeet Shop",
    description: "Premium shopping experience with Baskeet.",
    url: "https://www.baskeet.store",
    siteName: "Baskeet",
    images: [
      {
        url: "/Untitled (3).jpeg", // ✅ OG image placed in public/
        width: 1200,
        height: 630,
        alt: "Baskeet Shop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baskeet Shop",
    description: "Premium shopping experience with Baskeet.",
    images: ["/Untitled (3).jpeg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Fallback to ensure favicon + title always show */}
        <link rel="icon" href="/logo.svg" />
        <title>Baskeet Shop - Best Online Store</title>
      </head>
      <body>
        <AuthProvider>
          <Header />
          <main className="container-responsive py-6 min-h-[60vh]">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
