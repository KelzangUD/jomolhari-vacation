import ParallaxPage  from "./layouts/ParallaxPage";
import FeaturePackage from "./layouts/FeaturePackages";
import Hero from "./layouts/Hero";
import WhyChooseUs from "./layouts/WhyChooseUs";
import Numbers from "./layouts/Numbers";
import UpcomingEvents from "./layouts/UpcomingEvents";
import Testimonial from "./layouts/Testimonial";
import ReactOut from "./layouts/ReactOut";

export default function Home() {
  return (
    <>
      <ParallaxPage />
      {/* <Hero /> */}
      <FeaturePackage />
      <WhyChooseUs />
      <Numbers />
      <UpcomingEvents />
      <Testimonial />
      <ReactOut />
    </>
  );
}
