import ParallaxPage from "./layouts/ParallaxPage";
import FeaturePackageServer from "./layouts/FeaturePackage.server";
import WhyChooseUs from "./layouts/WhyChooseUs";
import Numbers from "./layouts/Numbers";
import UpcomingEvents from "./layouts/UpcomingEvents";
import Testimonial from "./layouts/Testimonial";
import FAQ from "./layouts/FAQ";
import ReactOut from "./layouts/ReactOut";

export default function Home() {
  return (
    <>
      <ParallaxPage />
      <FeaturePackageServer />
      <WhyChooseUs />
      <Numbers />
      <UpcomingEvents />
      <Testimonial />
      <FAQ />
      <ReactOut />
    </>
  );
}
