"use client";

import Image, { StaticImageData } from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { SafeHtmlRenderer } from "../../components/SafeHtmlRenderer";
import { packageData } from "../../data/packageData";
import TrekOverview from "./components/TrekOverview";
import ItineraryOverview from "./components/ItineraryOverview";
import PackagePricing from "./components/PackagePricing";
import Services from "./components/Services";
import TermsAndCondition from "./components/TermsAndCondition";
import phoneIcon from "@/public/phone.svg";

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
      <h4>{contain?.title}</h4>
      <div className="flex flex-col md:flex-row md:justify-between gap-6 my-4 md:my-10">
        <TrekOverview
          trekOverview={contain?.trekOverview}
          days={contain?.packageDuration}
          difficulty={contain?.difficulty}
          groupSize={contain?.groupSize}
        />
        <div className="relative w-full h-70 align-right rounded-md md:rounded-2xl overflow-hidden shadow">
          <Image
            src={contain?.image}
            alt={contain?.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <ItineraryOverview itineraryOverview={contain?.itineraryOverview} />
      <PackagePricing
        header={contain?.packagePricing?.header}
        tableContain={contain?.packagePricing?.tableContain}
        pricingPerHead={contain?.packagePricing?.pricingPerHead}
      />
      <Services inclusive={contain?.inclusive} exclusive={contain?.exclusive} />
      <TermsAndCondition />
      <div className="my-8 xl:mt-10">
        <h6 className="my-1">Direct Contact</h6>
        <p className="text-sm md:text-xl">
          For any inquires, you can reach us directly via phone or whatsapp.
        </p>
        <div className="flex items-center gap-4 my-4">
          <span className="p-2 rounded-md bg-blue-100">
            <div className="relative w-4 h-4">
              <Image
                src={phoneIcon}
                alt="phone"
                fill
                className="object-cover"
              />
            </div>
          </span>
          <p className="text-secondary text-sm xl:text-base ">
            +975-1-12345678
          </p>
        </div>
      </div>
    </div>
  );
}
