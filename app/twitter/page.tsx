import { Metadata, ResolvingMetadata } from "next";

type TwitterCardProps = {
  params: {};
  searchParams: {
    title?: string;
    description?: string;
    creator?: string;
    site?: string;
    card?: "summary" | "summary_large_image" | "app" | "player";
  };
};

export async function generateMetadata(
  { params, searchParams }: TwitterCardProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const defaultValues = {
    title: "Twitter Card Default Title",
    description: "Twitter Card Default Description",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    creator: "@default_creator",
    site: "@default_site",
    card: "summary" as const,
  };

  const metadata = {
    ...defaultValues,
    ...searchParams,
  };

  const imageUrl = metadata.image;

  return {
    title: metadata.title,
    description: metadata.description,
    twitter: {
      card: metadata.card,
      site: metadata.site,
      creator: metadata.creator,
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: imageUrl,
          alt: metadata.title,
        },
      ],
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [imageUrl],
      url: metadata.site,
    },
  } as Metadata;
}

export default function Page({ searchParams }: TwitterCardProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Twitter Card Preview</h1>
      <div className="space-y-2">
        <p>Title: {searchParams.title}</p>
        <p>Description: {searchParams.description}</p>
        <p>Card Type: {searchParams.card}</p>
        <p>Creator: {searchParams.creator}</p>
        <p>Site: {searchParams.site}</p>
      </div>
    </div>
  );
}
