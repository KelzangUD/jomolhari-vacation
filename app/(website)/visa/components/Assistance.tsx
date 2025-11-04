import Link from "next/link";

export default function Assistance() {
  return (
    <div className="p-4 md:p-6 xl:p-8 bg-white rounded-2xl shadow">
      <h6 className="font-semibold">Need Assistance?</h6>
      <p className="text-xs md:text-base leading-6 mt-4 text-secondary">
        If you have any questions or need help with your visa application,
        Please feel free contact us.
      </p>
      <Link
        href="/contact-us"
        className="flex gap-1 text-xs my-2 md:my-4 md:text-sm rounded-md cursor-pointer text-blue-500 hover:underline hover:text-blue-700 transition ease-in-out duration-150"
      >
        Contact Us →
      </Link>
    </div>
  );
}
