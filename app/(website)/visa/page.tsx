import Image from "next/image";
import Link from "next/link";

export default function Visa() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-cover bg-top bg-gray-100 bg-[url('/map.svg')] bg-blend-overlay">
      <h4 className="mt-15">Visa Information</h4>
      <p className="my-2 text-xs md:text-base">
        Guidance on visa applications, documents, and requirements.
      </p>
      <div className="my-6 flex flex-col gap-4">
        <div>
          <h6 className="font-semibold">Overview</h6>
          <p className="text-xs md:text-base">
            All visitors <span className="font-semibold">require a visa</span>{" "}
            before traveling to Bhutan, expect citizens of{" "}
            <span className="font-semibold">
              India, Bangladesh,and the Maldives
            </span>
            .
          </p>
        </div>
        <div className="my-4">
          <h6 className="font-semibold">
            Visa Fees & Sustainable Development Fee (SDF)
          </h6>
          <p className="text-xs md:text-base">
            As part of the visa application process, travelers must pay:
          </p>
          <ul className="flex flex-col gap-2 mt-3 list-disc ml-8 text-xs md:text-sm">
            <li>
              <span className="font-semibold">
                Sustainable Development Fee (SDF):
              </span>{" "}
              US $100 per day (per adult) Concessionary rates apply for
              children.
            </li>
            <li>
              <span className="font-semibold">Visa Application Fee:</span> US
              $40 (one-off, non-refundable)
            </li>
          </ul>
          <div className="flex items-center gap-4 my-4">
            <a
              href="https://immi.gov.bt/faq/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs md:text-sm rounded-md cursor-pointer hover:underline hover:text-blue-600 transition ease-in-out duration-150"
            >
              For More Info →
            </a>
          </div>
        </div>
        <div>
          <h6 className="font-semibold">What You’ll Need to Apply</h6>
          <p className="text-xs md:text-base">
            To apply for a visa online, please prepare:
          </p>
          <ul className="flex flex-col gap-2 mt-3 list-disc ml-8 text-xs md:text-sm">
            <li>
              A{" "}
              <span className="font-semibold">
                digital copy of your valid passport
              </span>
              .
            </li>
            <li>
              A{" "}
              <span className="font-semibold">
                recent digital passport photo
              </span>
              .
            </li>
            <li>
              Your{" "}
              <span className="font-semibold">arrival and departure dates</span>
              .
            </li>
            <li>
              <span className="font-semibold">Payment details</span>
            </li>
          </ul>
          <p className="my-2 text-xs md:text-sm italic">
            (Tip: Inform your bank about the international transfer to Bhutan to
            avoid delays.)
          </p>
        </div>
        <div>
          <h6 className="font-semibold">Steps to Apply for a Visa</h6>
          <p className="text-xs md:text-base">
            Follow these simple steps to complete your application:
          </p>
          <ul className="flex flex-col gap-2 mt-3 list-disc ml-8 text-xs md:text-sm">
            <li>
              <span className="font-semibold">
                Sign our Pledge of Friendship
              </span>
              — a commitment to protect, preserve, and positively contribute to
              Bhutan.
            </li>
            <li>
              <span className="font-semibold">Create an account</span> on the
              visa portal.
            </li>
            <li>
              <span className="font-semibold">
                Add your travel information.
              </span>
            </li>
            <li>
              <span className="font-semibold">Pay the visa fee and SDF</span>{" "}
              for your planned stay.
            </li>
            <li>
              <span className="font-semibold">Submit your application.</span>
              <br />{" "}
              <span className="italic">
                You can save your application anytime and return later to
                complete it.
              </span>
            </li>
          </ul>
          <p className="text-xs md:text-base my-2">
            Once submitted, your visa will be{" "}
            <span className="font-semibold">
              reviewed within five working days
            </span>
            .
          </p>
        </div>
        <div>
          <h6 className="font-semibold">Need Assistance?</h6>
          <p className="text-xs md:text-base">
            If you have any questions or need help with your visa application,
            Please feel free contact us.
          </p>
          <Link
            href="/contact-us"
            className="flex gap-1 text-xs my-2 md:my-4 md:text-sm rounded-md cursor-pointer hover:underline hover:text-blue-600 transition ease-in-out duration-150"
          >
            Contact Us →
          </Link>
        </div>
        <div>
          <div className="mt-6">
            {" "}
            <a
              href="https://immi.gov.bt/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {" "}
              Apply for Visa{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
