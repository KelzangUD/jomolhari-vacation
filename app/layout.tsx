import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const domainName = "https://jomolhari-vacation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(domainName),
  title: {
    default: "Jomolhari Vacation",
    template: "%s | Jomolhari Vacation",
  },
  description:
    "Experience the life of Highlanders in all Seasons with Reasons.",
  keywords: [
    "Jomolhari Vacation",
    "Bhutan Travel",
    "Bhutan Trekking",
    "Adventure Tours",
    "Jomolhari Trek",
    "Travel Agency Bhutan",
    "Bhutan Tours",
    "Hiking in Bhutan",
  ],
  authors: [{ name: "Jomolhari Vacation", url: domainName }],
  openGraph: {
    type: "website",
    locale: "en_BT",
    url: domainName,
    title: "Jomolhari Vacation",
    description:
      "Experience the life of Highlanders in all Seasons with Reasons.",
    siteName: "Jomolhari Vacation",
    images: [
      {
        url: "/logo-blue.svg",
        width: 512,
        height: 512,
        alt: "Jomolhari Vacation Logo",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
  },
  alternates: {
    canonical: domainName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
