import Link from "next/link";

export default function ReactOut() {
  return (
    <div className="relative bg-cover bg-center bg-[url('/contact.png')] w-full h-50 md:h-60 lg:h-70 xl:h-78 2xl:h-80 text-black p-5 md:p-10 xl:px-15 2xl:px-20">
      <div className="absolute inset-0 bg-white opacity-85 z-5" />
      <div className="absolute z-10 flex flex-col justify-center gap-3 md:gap-4 xl:gap-6">
        <h4>
          Reach Out Anytime <br />
          For Adventure Or Info
        </h4>
        <p>
          Whether you’re planning your next adventure, need more details about
          our services,
          <br /> or just want to chat about travel- don’t hesitate to reach out
        </p>
        <Link href="">
          <button className="bg-white py-2 px-6 text-xs md:text-sm 2xl:text-xl rounded-md cursor-pointer shadow-sm">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
