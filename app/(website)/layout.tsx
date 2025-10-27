"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import CursorFollower from "./components/CursorFollower";
import Container from "./ui/container";
import Nav from "./Nav";
import Footer from "./Footer";
import Loader from "./ui/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // ✅ Detect route changes

  useEffect(() => {
    // Trigger loader whenever route changes
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]); // ✅ Runs on every route change

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Container>
            {children}
            <Footer />
          </Container>
          <CursorFollower />
        </>
      )}
    </>
  );
}
