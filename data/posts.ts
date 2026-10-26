/**
 * Blog posts. Add a new object to the top of the array to publish.
 * `body` is a list of blocks: plain strings are paragraphs, { h: "..." } is a heading.
 * Set `draft: true` to hide a post from the site, feed and sitemap.
 */
export type PostBlock = string | { h: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags: string[];
  draft?: boolean;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, and why this site exists",
    date: "2026-10-26",
    summary: "A short hello: what you will find here, and why a data scientist keeps a blog.",
    tags: ["intro"],
    body: [
      "This is the starter post. It is a placeholder written to show how the blog looks, so please rewrite it in your own words, or set draft: true in data/posts.ts to hide it.",
      { h: "What this place is" },
      "A home for the projects I build, and a notebook for what I learn along the way: data science, AI, IT management, and the occasional non-work thought.",
      { h: "What to expect" },
      "Short notes rather than essays. Things I tried, what worked, what did not, and what I would do differently.",
    ],
  },
];

export const publishedPosts = posts
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function formatDate(d: string): string {
  return new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function readingMinutes(p: Post): number {
  const words = p.body.map((b) => (typeof b === "string" ? b : b.h)).join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
