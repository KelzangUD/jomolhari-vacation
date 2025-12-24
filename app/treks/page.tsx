import ContentfulData from "@/lib/contentfulData";
import TrekkingPage from "./TrekkingPage";

export default function FAQServer() {
  return (
    <ContentfulData>
      {({ packages }) => <TrekkingPage packages={packages} />}
    </ContentfulData>
  );
}
