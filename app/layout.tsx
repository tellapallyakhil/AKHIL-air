import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const calligraphy = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "For You ❤️",
  description: "A little story inside my heart, made just for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={calligraphy.className}>{children}</body>
    </html>
  );
}
