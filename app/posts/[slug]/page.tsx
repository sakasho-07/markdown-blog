import { getPostData, slugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return slugs.map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-3xl font-bold">
        {post.title}
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        {post.date}
      </p>

      <p className="mb-8 text-gray-600">
        {post.description}
      </p>

      
<article
  className="leading-8 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
/>

    </main>
  );
}
