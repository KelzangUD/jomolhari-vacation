import CursorFollower from "./components/CursorFollower";
import Container from "./ui/container";
import Nav from "./Nav";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <Container>
        {children}
        <Footer />
      </Container>
      <CursorFollower />
    </>
  );
}
