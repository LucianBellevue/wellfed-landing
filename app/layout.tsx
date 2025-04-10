import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Configure the Roboto font via next/font/google
const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Wellfed - Delicious Recipes & Meal Planning",
  description: "Helping you eat healthier with personalized meal plans, nutrition tracking, and delicious recipes tailored to your dietary preferences.",
  metadataBase: new URL('https://wellfed.us'),
  openGraph: {
    title: "Wellfed - Crave your health through great taste",
    description: "Helping you eat healthier with personalized meal plans, nutrition tracking, and delicious recipes tailored to your dietary preferences.",
    url: "https://wellfed.us",
    siteName: "Wellfed",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/wellfed-logo.png",
        width: 800,
        height: 600,
        alt: "Wellfed Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellfed - Crave your health through great taste",
    description: "Helping you eat healthier with personalized meal plans, nutrition tracking, and delicious recipes.",
    images: ["/wellfed-logo.png"],
  },
  icons: {
    icon: "/wellfed-logo.png",
    shortcut: "/wellfed-logo.png",
    apple: "/wellfed-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} bg-white antialiased`}>
      <body>
        <Providers>
          <Header />
          <main className="flex-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
