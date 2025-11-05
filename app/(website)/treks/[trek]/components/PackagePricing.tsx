type packageTableProps = {
  item: string;
  noOfPeople: number;
  amount: number;
};

type PackagePricingProps = {
  header?: string;
  tableContain?: packageTableProps[];
  pricingPerHead?: string;
};

export default function PackagePricing({
  header,
  tableContain,
  pricingPerHead,
}: PackagePricingProps) {
  return (
    <div className="md:my-10">
      <h6 className="text-base md:text-2xl">Package Pricing</h6>
      <div className="p-8 bg-gray-50 shadow text-center my-8 rounded-2xl w-80">
        <span>
          <p className="text-secondary text-xs md:text-sm">
            Standard Package Pricing
          </p>
          <h6 className="text-primary font-bold text-base md:text-2xl -my-1">
            {pricingPerHead}
          </h6>
          <p className="text-secondary text-xs md:text-sm">per person</p>
        </span>
        <hr className="border-0.1 border-bottom border-gray-200 my-4" />
        <span>
          <p className="font-semibold text-sm md:text-base text-left">
            Cost Break ({header})
          </p>
          {tableContain?.map((item) => (
            <ul
              key={item?.item}
              className="flex justify-between text-secondary my-2 text-sm"
            >
              <li>
                {item?.item}({item?.noOfPeople})
              </li>
              <li>Nu. {item?.amount}/-</li>
            </ul>
          ))}
          <span className="flex justify-between">
            <p className="font-semibold text-sm md:text-base">Gross Total</p>
            <p className="font-semibold text-sm md:text-base">
              Nu.
              {tableContain?.reduce((acc, curr) => {
                return acc + curr?.amount;
              }, 0)}
              /-
            </p>
          </span>
        </span>
        <hr className="border-0.1 border-bottom border-gray-200 my-4" />
        <button
          className={`bg-primary py-2 px-4 rounded-full overflow-hidden cursor-pointer text-sm lg:text-base text-white hover:bg-blue-700`}
        >
          Book This Package
        </button>
      </div>
    </div>
  );
}
