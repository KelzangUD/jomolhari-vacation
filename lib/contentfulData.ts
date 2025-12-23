import { contentfulClient } from "./contentful";

type Props = {
  children: (data: { packages: any[] }) => React.ReactNode;
};

export default async function ContentfulData({ children }: Props) {
  const [packages] = await Promise.all([
    contentfulClient.getEntries({
      content_type: "packages",
    }),
  ]);
  return children({
    packages: packages.items,
  });
}
