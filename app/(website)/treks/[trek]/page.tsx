"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { SafeHtmlRenderer } from "../../components/SafeHtmlRenderer";
import { packageData } from "../../data/packageData";

type itineraryOverviewProps = {
  day: number;
  place: string;
  distance: string;
  duration: string;
  altitude: string;
  keyActivity: string;
};

type packageTableProps = {
  item: string;
  noOfPeople: number;
  amount: number;
};

type PackagePricingProps = {
  header: string;
  tableContain: packageTableProps[];
  pricingPerHead: string;
};

type inclusiveProps = {
  supportAndStaff: string;
  logistics: string;
  accommodationAndMeals: string;
  equipment: string;
  Other: string;
};

type bookingProps = {
  deposit: string;
  balance: string;
  paymentMethod: string;
  note: string;
};

// Define the type for a package item
interface PackageItem {
  title: string;
  trekOverview: string;
  itineraryOverview?: itineraryOverviewProps[];
  packagePricing?: PackagePricingProps;
  inclusive?: inclusiveProps;
  exclusive?: string[];
  booking?: bookingProps;
  cancellationPolicy?: string[];
}

export default function Trek() {
  const pathname = usePathname();
  const [contain, setContain] = useState<PackageItem | null>(null);

  useEffect(() => {
    if (pathname && packageData) {
      const slug = pathname.split("/")[2].replaceAll("%20", " ");
      const foundItem = packageData.find((item) => item?.title === slug);
      if (foundItem) {
        setContain(foundItem);
      }
    }
  }, [pathname]);

  if (!contain) {
    return <div>Content not found or still loading...</div>;
  }

  return (
    <div className="z-10 p-5 md:p-10 xl:p-25 bg-white">
      <h4>{contain?.title}</h4>
      <div className="my-4">
        <h6>Trek Overview</h6>
        <p className="my-2">{contain?.trekOverview}</p>
      </div>
      {contain?.itineraryOverview !== undefined &&
        contain?.itineraryOverview?.length > 0 && (
          <div className="my-4">
            <h6>Itinerary Overview</h6>
            <ul className="flex flex-col gap-2 my-2">
              {contain?.itineraryOverview?.map((item) => (
                <li key={item?.keyActivity} className="flex gap-1 text-justify">
                  <span className="font-semibold w-15">Day {item?.day}:</span>
                  <span className="flex flex-col">
                    <span>{item?.place}</span>
                    {item?.distance !== "" && (
                      <span>Distance: {item?.distance}</span>
                    )}
                    {item?.duration !== "" && (
                      <span>Duration: {item?.duration}</span>
                    )}
                    {item?.altitude !== "" && (
                      <span>Altitude: {item?.altitude}</span>
                    )}
                    <span>{item?.keyActivity}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      <div className="my-4">
        <h6>Package Pricing</h6>
        <p className="my-2 text-base">*{contain?.packagePricing?.header}</p>
        <table className="border border-border w-full">
          <thead className="">
            <tr className="border border-border bg-black text-white">
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">No. of Pax</th>
              <th className="p-2 text-left">Total Amount (Nu)</th>
            </tr>
          </thead>
          <tbody>
            {contain?.packagePricing?.tableContain?.map((item) => (
              <tr key={item?.item}>
                <td className="p-2 text-left border border-border">
                  {item?.item}
                </td>
                <td className="p-2 text-left border border-border">
                  {item?.noOfPeople}
                </td>
                <td className="p-2 text-left border border-border">
                  {item?.amount}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="p-2 text-left font-semibold"></td>
              <td className="p-2 text-left"></td>
              <td className="p-2 text-left font-semibold">
                Gross Total:{" "}
                {contain?.packagePricing?.tableContain?.reduce((acc, curr) => {
                  return acc + curr?.amount;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm my-2">
          *Pricing Per Head : {contain?.packagePricing?.pricingPerHead}
        </p>
      </div>
      <div className="my-4">
        <h6>Inclusive (Provided Services)</h6>
        <ul className="my-2 flex flex-col gap-2">
          <li>
            <span className="font-semibold">Support & Staff:</span>{" "}
            {contain?.inclusive?.supportAndStaff}
          </li>
          <li>
            <span className="font-semibold">Logistics:</span>{" "}
            {contain?.inclusive?.logistics}
          </li>
          <li>
            <span className="font-semibold">Accommodation And Meals:</span>
            {contain?.inclusive?.accommodationAndMeals}
          </li>
          <li>
            <span className="font-semibold">Equipment:</span>
            {contain?.inclusive?.equipment}
          </li>
          <li>
            <span className="font-semibold">Other:</span>{" "}
            {contain?.inclusive?.Other}
          </li>
        </ul>
      </div>
      <div>
        <h6>Excluded</h6>
        <ul className="my-2 flex flex-col gap-2">
          {contain?.exclusive?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h6>Terms And Conditions</h6>
        <p>Booking and Payment</p>
        <ul>
          <li>Deposit: {contain?.booking?.deposit}</li>
          <li>Balance: {contain?.booking?.balance}</li>
          <li>Payment Method: {contain?.booking?.paymentMethod}</li>
          <li>Note: {contain?.booking?.note}</li>
        </ul>
        <p>Cancellation Policy</p>
        <ul>
          {contain?.cancellationPolicy?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
