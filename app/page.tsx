import ParallaxPage from "./layouts/ParallaxPage";
import FeaturePackageServer from "./layouts/FeaturePackage.server";
import WhyChooseUs from "./layouts/WhyChooseUs";
import NumbersServer from "./layouts/Numbers.server";
import UpcomingEventsServer from "./layouts/UpcomingEvents.server";
import Testimonial from "./layouts/Testimonial";
import FAQ from "./layouts/FAQ";
import ReactOut from "./layouts/ReactOut";

export default function Home() {
  return (
    <>
      <ParallaxPage />
      <FeaturePackageServer />
      <WhyChooseUs />
      <NumbersServer />
      <UpcomingEventsServer />
      <Testimonial />
      <FAQ />
      <ReactOut />
    </>
  );
}
