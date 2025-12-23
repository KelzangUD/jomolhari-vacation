import ContentfulData from "@/lib/contentfulData";
import FeaturePackage from "./FeaturePackages";

export default function FeaturePackageServer() {
  return (
    <ContentfulData>
      {({ packages }) => <FeaturePackage packages={packages} />}
    </ContentfulData>
  );
}
