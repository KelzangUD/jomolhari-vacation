import { contentfulClient } from "./contentful";

type Props = {
  children: (data: { packages: any[]; numbers: any[]; upcomingEvents: any[] }) => React.ReactNode;
};

export default async function ContentfulData({ children }: Props) {
  const [packages, numbers, upcomingEvents] = await Promise.all([
    contentfulClient.getEntries({
      content_type: "packages",
    }),
    contentfulClient.getEntries({
      content_type: "numbers",
    }),
    contentfulClient.getEntries({
      content_type: "upcomingEvents",
    }),
  ]);

  return children({
    packages: packages.items,
    numbers: numbers.items,
    upcomingEvents: upcomingEvents.items,
  });
}
