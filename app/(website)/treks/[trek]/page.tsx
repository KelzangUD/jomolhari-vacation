"use client";

import Image, { StaticImageData } from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { SafeHtmlRenderer } from "../../components/SafeHtmlRenderer";
import { packageData } from "../../data/packageData";
import TrekOverview from "./components/TrekOverview";
import ItineraryOverview from "./components/ItineraryOverview";

type itineraryOverviewProps = {
  day: number;
  place: string;
  description: string;
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
  image: StaticImageData;
  packageDuration: string;
  difficulty: string;
  groupSize: string;
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
      <h4 className="mt-15 md:mt-10">{contain?.title}</h4>
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6 my-4 md:my-10">
        <TrekOverview
          trekOverview={contain?.trekOverview}
          days={contain?.packageDuration}
          difficulty={contain?.difficulty}
          groupSize={contain?.groupSize}
        />
        <div className="relative w-full h-70 align-right rounded-2xl overflow-hidden shadow">
          <Image
            src={contain?.image}
            alt={contain?.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <ItineraryOverview itineraryOverview={contain?.itineraryOverview} />
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
      <div className="my-4">
        <h6>Excluded</h6>
        <ul className="my-2 flex flex-col gap-2">
          {contain?.exclusive?.map((item) => (
            <li key={item}>
              <span className="font-semibold">{item.split(":")[0]}</span>
              {item?.split(":")[1]}{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4">
        <h6>Terms And Conditions</h6>
        <p className="text-base my-2 font-semibold">Booking and Payment</p>
        <ul>
          <li className="my-1">
            <span className="font-semibold">Deposit:</span>{" "}
            {contain?.booking?.deposit}
          </li>
          <li className="my-1">
            <span className="font-semibold">Balance:</span>{" "}
            {contain?.booking?.balance}
          </li>
          <li className="my-1">
            <span className="font-semibold">Payment Method:</span>{" "}
            {contain?.booking?.paymentMethod}
          </li>
          <li className="my-1">
            <span className="font-semibold">Note:</span>{" "}
            {contain?.booking?.note}
          </li>
        </ul>
        <p className="text-base my-2 font-semibold">Cancellation Policy</p>
        <ul>
          {contain?.cancellationPolicy?.map((item) => (
            <li key={item} className="my-1">
              <span className="font-semibold">{item?.split(":")[0]}:</span>{" "}
              {item?.split(":")[1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
