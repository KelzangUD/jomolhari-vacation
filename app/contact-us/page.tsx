import Image from "next/image";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20  bg-white">
      <Contact
        title="Contact Us"
        subtitle=" We’re here to help! Reach out to us with any questions or inquires about
        our trekking/hiking adventure’s in Bhutan. You can reach us directly via
        phone or whatsapp or email."
      />
      <div>
        <h4>Social Network</h4>
        <div className="flex gap-5 mt-2 md:mt-8">
          <a
            href="https://wa.me/+97517914799"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.facebook.com/jomolharivacationtour/"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/facebook.svg"
                alt="facebook"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/jomolhari_vacation/"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/instagram.svg"
                alt="instagram"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@jomolharivac"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/tik-tok.svg"
                alt="whatsapp"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sonam-rinchen-44571816a/"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
