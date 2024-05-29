import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Back Office Wallet",
  description: "Application Next.JS pour la gestion des pass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className + " container antialiased"}>
        <main className="mx-auto my-6 md:my-12">{children}</main>
      </body>
    </html>
  );
}
