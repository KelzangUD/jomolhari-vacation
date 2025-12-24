import { contentfulClient } from "./contentful";

type Props = {
  children: (data: {
    packages: any[];
    numbers: any[];
    upcomingEvents: any[];
    testimonial: any[];
    faq: any[];
  }) => React.ReactNode;
};

export default async function ContentfulData({ children }: Props) {
  const [packages, numbers, upcomingEvents, testimonial, faq] =
    await Promise.all([
      contentfulClient.getEntries({
        content_type: "packages",
      }),
      contentfulClient.getEntries({
        content_type: "numbers",
      }),
      contentfulClient.getEntries({
        content_type: "upcomingEvents",
      }),
      contentfulClient.getEntries({
        content_type: "testimonial",
      }),
      contentfulClient.getEntries({
        content_type: "faq",
      }),
    ]);

  return children({
    packages: packages.items,
    numbers: numbers.items,
    upcomingEvents: upcomingEvents.items,
    testimonial: testimonial.items,
    faq: faq.items,
  });
}
