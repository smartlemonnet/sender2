import type { Metadata } from "next";
import "./globals.css";

// TODO: Re-enable Google Fonts when deploying to production environment
// Fonts temporarily disabled due to build environment constraints (fonts.googleapis.com blocked)
// Original config: Geist and Geist_Mono from next/font/google
// To restore: uncomment imports and font config, and update globals.css font variables

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
