import { contentfulClient } from "./contentful";

type Props = {
  children: (data: { packages: any[]; numbers: any[] }) => React.ReactNode;
};

export default async function ContentfulData({ children }: Props) {
  const [packages, numbers] = await Promise.all([
    contentfulClient.getEntries({
      content_type: "packages",
    }),
    contentfulClient.getEntries({
      content_type: "numbers",
    }),
  ]);

  return children({
    packages: packages.items,
    numbers: numbers.items,
  });
}
