import Link from "next/link";
import arrowRightIcon from "@/public/arrow-right.svg";
import jomolhariTrekImage from "@/public/jomolhari trek.png";
import snowManTrek from "@/public/snowman trek.png";
import Card from "../components/Card";
import PrimaryButton from "../ui/PrimaryButton";

export default function FeaturePackage() {
  return (
    <div className="p-5 md:px-10 xl:px-15 2xl:px-20  md:py-10 xl:py-25 bg-light-secondary">
      <h4>Feature Packages</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 my-5 md:my-10 xl:my-15">
        <Card
          image={jomolhariTrekImage}
          title="Jomolhari Trek"
          subtitle="3D4N | Nu.10,500/-"
          height="h-50 lg:h-70 xl:h-80"
        />
        <Card
          image={snowManTrek}
          title="Snowman Trek"
          subtitle="25D24N | Nu.100,500/-"
          height="h-50 lg:h-70 xl:h-80"
        />
      </div>
      <div className="">
        <Link href="">
          <PrimaryButton text="View All" icon={arrowRightIcon} style="flex justify-between items-center gap-4" />
        </Link>
      </div>
    </div>
  );
}
