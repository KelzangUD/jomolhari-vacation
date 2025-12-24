import ContentfulData from "@/lib/contentfulData";
import Testimonial from "./Testimonial";

export default function TestimonialServer() {
  return (
    <ContentfulData>
      {({ testimonial }) => <Testimonial testimonial={testimonial} />}
    </ContentfulData>
  );
}
