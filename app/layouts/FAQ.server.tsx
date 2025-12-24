import ContentfulData from "@/lib/contentfulData";
import FAQ from "./FAQ";

export default function FAQServer() {
  return <ContentfulData>{({ faq }) => <FAQ faq={faq} />}</ContentfulData>;
}
