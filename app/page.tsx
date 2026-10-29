
import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const posts = await getSortedPostsData();

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Markdown Blog
      </h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
              <a
                href={`/posts/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </a>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {post.date}
            </p>

            <p className="mt-2">
              {post.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
             {(post.tags ?? []).map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
