import Image from "next/image";
import cardIcon from "@/public/card.svg";
import cancelIcon from "@/public/cancel.svg";

export default function TermsAndCondition() {
  return (
    <section className="my-8">
      <h6>Terms And Conditions</h6>
      <p className="my-4 text-justify text-secondary text-xs md:text-base leading-6 mb-8">
        Please read tge following terms and conditions carefully. By booking a
        trek with us, you agree to be bound by these conditions which constitute
        the agreement between Jomolhari Vacation and you.
      </p>
      <details className="p-8 rounded-md shadow-none bg-background">
        <summary className="flex items-center gap-4">
          <span className="relative w-3 h-3 md:w-5 md:h-5">
            <Image src={cardIcon} alt="card" fill className="object-contain" />
          </span>
          <h6 className="text-sm sm:text-base md:text-xl">Booking & Payment</h6>
        </summary>
        <hr className="border-gray-200 my-2" />
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          1. <b className="text-black font-semibold">Deposit:</b> A 10%
          (Non-refundable) deposit is required at the time of booking.
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          2. <b className="text-black font-semibold">Balance:</b> The remaining
          balance must be paid 20 days before the start of the trek.
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          3. <b className="text-black font-semibold">Payment Method:</b>{" "}
          Payments can be made via bank transfer.
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          4. <b className="text-black font-semibold">Note:</b> Must take cash
          for more convenience during the trek
        </p>
      </details>
      <details className="p-8 rounded-md shadow-none bg-background">
        <summary className="flex items-center gap-4">
          <span className="relative w-3 h-3 md:w-5 md:h-5">
            <Image src={cancelIcon} alt="cancel" fill className="object-contain" />
          </span>
          <h6 className="text-sm sm:text-base md:text-xl">Cancellation Policy</h6>
        </summary>
        <hr className="border-gray-200 my-2" />
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          1. <b className="text-black font-semibold">60+ days out:</b> 100%
          refund.
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          2. <b className="text-black font-semibold">30–59 days out:</b> 75%
          refund.
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          3. <b className="text-black font-semibold">15–29 days out:</b> 50%
          refund.
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          4. <b className="text-black font-semibold">0–14 days out:</b> 100%
          cancellation fee (No refund).
        </p>
        <p className="text-sm md:text-base text-secondary my-0.5 font-normal text-justify">
          5. <b className="text-black font-semibold">No Show:</b> No refund will
          be made for missed connections or "no show."
        </p>
      </details>
    </section>
  );
}
