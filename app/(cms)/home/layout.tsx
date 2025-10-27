import SideMenu from "./SideMenu";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-row">
        <SideMenu />
        <div className="basis-[95vw] bg-white">
          <div className="p-5">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
