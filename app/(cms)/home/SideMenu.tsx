import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="basis-[5vw] h-screen text-white bg-black">
      <div className="w-full">
        <Link
          href="/home"
          className="flex justify-center items-center hover:cursor-pointer my-2 p-2 hover:bg-gray-800"
        >
          <span className="relative w-7 h-7">
            <Image
              src="/logo-blue.svg"
              alt="logo"
              fill
              className="object-content"
            />
          </span>
        </Link>
        <hr className="border-0.5 border-border" />
        <div className="">
          <ul>
            <li className="my-2 flex justify-center">
              <Link href="/home/content-manager">
                <button className="group relative items-center p-2 rounded overflow-hidden hover:cursor-pointer hover:bg-gray-600">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Pen tool.svg"
                      alt="pen icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              </Link>
            </li>
            <li className="my-2 flex justify-center">
              <Link href="/home/media-library">
                <button className="group relative items-center p-2 rounded overflow-hidden hover:cursor-pointer hover:bg-gray-600">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Image.svg"
                      alt="image icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
