import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Net Core AI — Premium Web Development Agency",
  description:
    "Net Core AI builds custom, high-performance websites and web applications for businesses that demand the best. 3+ years of delivering premium digital experiences.",
  authors: [{ name: "Net Core AI" }],
  openGraph: {
    title: "Net Core AI — Premium Web Development Agency",
    description:
      "Custom web development and design for businesses that demand the best.",
    type: "website",
    url: "https://netcoreai.tech",
    siteName: "Net Core AI",
    images: [
      {
        url: "https://netcoreai.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Net Core AI — Premium Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Core AI — Premium Web Development Agency",
    description:
      "Custom web development and design for businesses that demand the best.",
    images: ["https://netcoreai.tech/og-image.jpg"],
  },
  alternates: {
    canonical: "https://netcoreai.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0C0A09] text-stone-50">
        {children}
      </body>
    </html>
  );
}
