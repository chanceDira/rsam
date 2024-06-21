import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSAM",
  description: `Rwandan music is part of a continuum that constantly shape-shifts in subtle ways that
stretch over lifetimes and across borders.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head>
      <title>{`EnhancifAI - Transform Your Data with AI`}</title>
      <meta name="description" content={metadata.description || ''} />
      <meta name="image" content={'/img10.png'} />
    </Head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  </>
  );
}
