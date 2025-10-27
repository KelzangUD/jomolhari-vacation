import Link from "next/link";

type NavLinkProps = {
  routeName: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ routeName, href }) => {
  return (
    <Link
      href={href}
      className="nav-link relative overflow-hidden p-2 text-white text-left cursor-pointer md:text-center block"
    >
      {routeName}
    </Link>
  );
};
export default NavLink;
