import { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Salgado - Portfolio",
  description: "Guillermo Salgado's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-dark`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
