import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Net Core — Premium Web Development Agency",
  description:
    "Net Core builds custom, high-performance websites and web applications for businesses that demand the best. 3+ years of delivering premium digital experiences.",
  keywords: [
    "web development",
    "web design",
    "UI/UX",
    "Next.js",
    "custom websites",
    "digital agency",
  ],
  authors: [{ name: "Net Core AI" }],
  openGraph: {
    title: "Net Core AI — Premium Web Development Agency",
    description:
      "Custom web development and design for businesses that demand the best.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0C0A09] text-stone-50">
        {children}
      </body>
    </html>
  );
}
