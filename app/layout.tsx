import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";

const Sans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900",],
});

export const metadata: Metadata = {
  title: "Wellfed - Delicious Recipes & Meal Planning",
  description: "Discover recipes and plan meals with Wellfed.",
  openGraph: {
    title: "Wellfed",
    description: "Your go-to food and recipe app.",
    url: "https://www.yourdomain.com",
    images: [
      {
        url: "https://www.yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wellfed Hero Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Sans.variable} antialiased`}
      >
        <Providers>
          <Header />
        {children}
        </Providers>
      </body>
    </html>
  );
}
