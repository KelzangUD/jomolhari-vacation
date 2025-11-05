"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CursorFollower from "./components/CursorFollower";
import Container from "./ui/container";
import Nav from "./Nav";
import Footer from "./Footer";
import Loader from "./ui/Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <main>
            <Container>
              {children}
              <Footer />
            </Container>
          </main>
          <CursorFollower />
        </>
      )}
    </>
  );
}
