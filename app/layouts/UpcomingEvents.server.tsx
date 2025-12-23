import ContentfulData from "@/lib/contentfulData";
import UpcomingEvents from "./UpcomingEvents";

export default function UpcomingEventsServer() {
  return (
    <ContentfulData>
      {({ upcomingEvents }) => <UpcomingEvents upcomingEvents={upcomingEvents} />}
    </ContentfulData>
  );
}
