import { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";

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
  // 设置默认值
  const defaultValues = {
    title: "Twitter Card Default Title",
    description: "Twitter Card Default Description",
    image: "https://example.com/default-image.jpg",
    creator: "@default_creator",
    site: "@default_site",
    card: "summary" as const,
  };

  // 合并查询参数和默认值
  const metadata = {
    ...defaultValues,
    ...searchParams,
  };

  // 验证图片尺寸要求
  // summary card: 144x144px min, 4096x4096px max, < 5MB
  // summary_large_image: 300x157px min, 4096x4096px max, < 5MB
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
    },
  };
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
