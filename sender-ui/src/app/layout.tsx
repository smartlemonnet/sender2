import type { Metadata } from "next";
import "./globals.css";

// Fonts temporarily disabled due to build environment constraints
// Original config used: Geist and Geist_Mono from next/font/google
// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sender Control Center",
  description:
    "Interfaccia MVP per il modulo cold email marketing della suite Bluelime Universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
