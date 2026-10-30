import { getPostData, slugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 transition hover:bg-orange-200"
        >
          ← 記事一覧へ戻る
        </Link>
      </div>
      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold tracking-widest text-orange-700">
          MY LEARNING JOURNAL
        </p>

        <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-stone-800">
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-stone-500">
          {post.date}
        </p>

        <p className="mt-5 leading-7 text-stone-600">
          {post.description}
        </p>
      </header>

      <article
        className="rounded-2xl border border-orange-300 bg-orange-50 p-6 leading-8 text-stone-700 shadow-sm [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-stone-800 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:border-l-4 [&_h2]:border-orange-400 [&_h2]:pl-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-stone-800 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <div className="mt-8 flex justify-end">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 transition hover:bg-orange-200"
        >
          ← 記事一覧へ戻る
        </Link>
      </div>
    </main>
  );
}