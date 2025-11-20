import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-5 md:p-10 xl:px-15 2xl:px-20 items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div>
          <h4>Jomolhari Vacation</h4>
          <p className="my-4 text-sm 2xl:text-lg">
            More than just travel-we craft experiences{" "}
            <b className="font-extrabold">beyond reach</b>. Whether you seek
            calm snowy retreats or vibrant mountain views, your next
            unforgettable adventure begins here.
          </p>
        </div>
        <div className="md:text-right">
          <h4>Reach Us</h4>
          <div className="flex md:justify-end gap-5 my-2 md:my-4">
            <a
              href="https://wa.me/+97517914799"
              target="_blank"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-115"
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp"
                  fill
                  className="object-cover bg-white p-1 rounded"
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/jomolharivacationtour/"
              target="_blank"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-115"
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  fill
                  className="object-cover bg-white p-1 rounded"
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/jomolhari_vacation/"
              target="_blank"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-115"
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  fill
                  className="object-cover bg-white p-1 rounded"
                />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@jomolharivac"
              target="_blank"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-115"
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <Image
                  src="/tik-tok.svg"
                  alt="whatsapp"
                  fill
                  className="object-cover bg-white p-1 rounded"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sonam-rinchen-44571816a/"
              target="_blank"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-115"
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  fill
                  className="object-cover bg-white p-1 rounded"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="my-2 md:my-0 xl:mb-4">
        <p className="text-xs lg:text-sm text-center text-secondary">
          © {new Date().getFullYear()} Jomolhari Vacation. All rights reserved.
          Email: sonamvacation@gmail.com | Phone: +97517914799
        </p>
      </div>
    </footer>
  );
}
