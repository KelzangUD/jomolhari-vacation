import ContentfulData from "@/lib/contentfulData";
import Numbers from "./Numbers";

export default function NumbersServer() {
  return (
    <ContentfulData>
      {({ numbers }) => <Numbers numbers={numbers} />}
    </ContentfulData>
  );
}
