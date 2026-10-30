import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const posts = await getSortedPostsData();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-12">
        <p className="mb-3 text-sm font-semibold tracking-widest text-orange-700">
          MY LEARNING JOURNAL
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-stone-800">
          Markdown Blog
        </h1>

        <p className="mt-4 text-stone-600">
          学んだことを、少しずつ記録していくブログです。
        </p>
      </header>

      <section>
        <h2 className="mb-6 border-l-4 border-orange-500 pl-3 text-2xl font-bold text-stone-800">
          最新の記事
        </h2>

        <ul className="space-y-5">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-2xl border border-orange-300 bg-orange-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-stone-800">
                <a
                  href={`/posts/${post.slug}`}
                  className="transition hover:text-orange-700"
                >
                  {post.title}
                </a>
              </h3>

              <p className="mt-3 text-sm text-stone-500">
                {post.date}
              </p>

              <p className="mt-3 leading-7 text-stone-700">
                {post.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(post.tags ?? []).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}