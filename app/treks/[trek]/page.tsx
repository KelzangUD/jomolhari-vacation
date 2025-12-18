"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { packageData } from "../../data/packageData";
import TrekOverview from "./components/TrekOverview";
import ItineraryOverview from "./components/ItineraryOverview";
import Services from "./components/Services";
import TermsAndCondition from "./components/TermsAndCondition";
import Contact from "@/app/components/Contact";
import { motion } from "motion/react";

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
      <motion.div
        initial={{
          opacity: 0,
          y: -60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4>{contain?.title}</h4>
      </motion.div>
      <div className="flex flex-col md:flex-row md:justify-between gap-6 my-4 md:my-10">
        <TrekOverview
          trekOverview={contain?.trekOverview}
          days={contain?.packageDuration}
          difficulty={contain?.difficulty}
          groupSize={contain?.groupSize}
        />
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="relative w-full h-70 align-right rounded-md md:rounded-2xl overflow-hidden shadow"
        >
          <Image
            src={contain?.image}
            alt={contain?.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      <ItineraryOverview itineraryOverview={contain?.itineraryOverview} />
      <Services exclusive={contain?.exclusive} />
      <TermsAndCondition />
      <Contact
        title="For More Information"
        subtitle="For any inquires, you can reach us directly via phone or whatsapp or mail"
      />
    </div>
  );
}
