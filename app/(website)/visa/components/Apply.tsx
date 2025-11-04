export default function Apply() {
  return (
    <div className="p-4 md:p-6 xl:p-8 bg-white rounded-2xl shadow">
      <h6 className="font-semibold">What You’ll Need to Apply</h6>
      <p className="text-xs md:text-base text-secondary">
        To apply for a visa online, please prepare:
      </p>
      <ul className="flex flex-col gap-2 mt-3 list-disc ml-6 text-xs md:text-sm">
        <li>
          A{" "}
          <span className="font-semibold">
            digital copy of your valid passport
          </span>
          .
        </li>
        <li>
          A <span className="font-semibold">recent digital passport photo</span>
          .
        </li>
        <li>
          Your{" "}
          <span className="font-semibold">arrival and departure dates</span>.
        </li>
        <li>
          <span className="font-semibold">Payment details</span>
        </li>
      </ul>
      <p className="my-2 text-xs md:text-sm italic leading-5 text-secondary">
        (Tip: Inform your bank about the international transfer to Bhutan to
        avoid delays.)
      </p>
      <div className="mt-6">
        {" "}
        <a
          href="https://immi.gov.bt/home/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-sm text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {" "}
          Apply for Visa{" "}
        </a>{" "}
      </div>
    </div>
  );
}
