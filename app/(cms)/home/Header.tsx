// app/components/LogoutButton.tsx
"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="relative w-4 h-4">
          <Image
            src="/chevron-right.svg"
            alt="arrow icon"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm">
          {pathName.split("/")[2] === undefined
            ? "home"
            : pathName.split("/")[2]}
        </p>
      </div>
      <button
        className="flex justify-between items-center hover:cursor-pointer"
        onClick={handleLogout}
      >
        <p className="text-sm mr-2">Log out</p>
        <span className="relative w-5 h-5">
          <Image
            src="/Log out.svg"
            alt="log out icon"
            fill
            className="object-cover"
          />
        </span>
      </button>
    </div>
  );
}
