import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";

export default function Contact() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20  bg-white">
      <h4 className="mt-15">Contact Us</h4>
      <p className="my-2 xl:my-4">
        We’re here to help! Reach out to us with any questions or inquires about
        our trekking/hiking adventure’s in Bhutan.
      </p>
      <div className="mt-4 xl:mt-10">
        <label className="text-xs md:text-base">Your Name</label>
        <input
          placeholder="Enter Your Name"
          className="border border-border py-2 px-2 md:px-6 bg-border/10 rounded-md md:rounded-xl w-full my-3 text-xs md:text-base"
        />
      </div>
      <div className="xl:mt-2">
        <label className="text-xs md:text-base">Your Email</label>
        <input
          placeholder="Enter Your Email"
          className="border border-border py-2 px-2 md:px-6 bg-border/10 rounded-md md:rounded-xl w-full my-3 text-xs md:text-base"
        />
      </div>
      <div className="xl:mt-2">
        <label className="text-xs md:text-base">Subject</label>
        <input
          placeholder="Enter The Subject"
          className="border border-border py-2 px-2 md:px-6 bg-border/10 rounded-md md:rounded-xl w-full my-3 text-xs md:text-base"
        />
      </div>
      <div className="xl:mt-2">
        <label className="text-xs md:text-base">Message</label>
        <textarea
          placeholder="Enter Your Message"
          className="border border-border py-2 px-2 md:px-6 bg-border/10 rounded-md md:rounded-xl w-full my-3 text-xs md:text-base"
          rows={6}
        />
      </div>
      <div className="xl:mt-4">
        <PrimaryButton text="Send Message" />
      </div>
      <div className="mt-6 xl:mt-10">
        <p className="font-bold my-2">Direct Contact</p>
        <p>
          For immediate assistance, you can reach us directly via phone or
          whatsapp
        </p>
        <div className="flex items-center gap-2 xl:gap-10 my-4 xl:my-10">
          <span className="p-2 xl:p-4 rounded-md bg-[#d9d9d9]">
            <div className="relative w-4 h-4 2xl:w-6 2xl:h-6">
              <Image
                src="/phone.svg"
                alt="phone"
                fill
                className="object-cover"
              />
            </div>
          </span>
          <span className="ml-2">
            <p className="text-sm xl:text-base">Phone/whatsapp info</p>
            <p className="text-secondary text-sm xl:text-base ">
              +975-1-12345678
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
