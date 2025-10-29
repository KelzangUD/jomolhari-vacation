import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const domainName = "https://jomolhari-vacation.vercel.app/"

export const metadata: Metadata = {
  metadataBase: new URL(`${domainName}`),
  title: {
    default: "Jomolhari Vacation",
    template: "%s | Jomolhari Vacation",
  },
  description: "Experience the life of Highlanders in all Seasons with Reasons",
  keywords: [
    "Jomolhari Vacation",
    "Bhutan Travel",
    "Jomolhari",
    "Vacation",
    "Travel Agency",
    "Bhutan tours",
    "adventure travel",
    "Bhutan Trekking",
    "Bhutan Hiking",
  ],
  authors: [
    {
      name: "Jomolhari Vacation",
      url: `${domainName}`,
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_BT",
    url: `${domainName}`,
    title: "Jomolhari Vacation",
    description:
      "Experience the life of Highlanders in all Seasons with Reasons",
    siteName: "Jomolhari Vacation",
    images: [
      {
        url: "/logo-blue.svg",
        width: 100,
        height: 100,
        alt: "Jomolhari Vacation",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
