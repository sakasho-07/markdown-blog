
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
const postsDirectory = path.join(process.cwd(), "posts");

const fileNames = fs.readdirSync(postsDirectory);
export const slugs = fileNames.map((fileName) => fileName.slice(0, -3));

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(content);

const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags,
    contentHtml,
  };
}

export async function getSortedPostsData() {
  const posts = await Promise.all(
    slugs.map((slug) => getPostData(slug))
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
