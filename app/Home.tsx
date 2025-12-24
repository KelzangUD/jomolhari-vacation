import ParallaxPage from "./layouts/ParallaxPage";
import FeaturePackageServer from "./layouts/FeaturePackage.server";
import WhyChooseUs from "./layouts/WhyChooseUs";
import NumbersServer from "./layouts/Numbers.server";
import UpcomingEventsServer from "./layouts/UpcomingEvents.server";
import TestimonialServer from "./layouts/Testimonial.server";
import FAQServer from "./layouts/FAQ.server";
import ReactOut from "./layouts/ReactOut";

export default function Home() {
  return (
    <>
      <ParallaxPage />
      <FeaturePackageServer />
      <WhyChooseUs />
      <NumbersServer />
      <UpcomingEventsServer />
      <TestimonialServer />
      <FAQServer />
      <ReactOut />
    </>
  );
}
