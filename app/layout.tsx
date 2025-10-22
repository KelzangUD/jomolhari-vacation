import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorFollower from "./components/CursorFollower";
import Container from "./ui/container";
import Nav from "./Nav";
import Footer from "./Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jomolhari Vacation",
  description: "Travel Agent Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Container>
          {children}
          <Footer />
        </Container>
        <CursorFollower />
      </body>
    </html>
  );
}
