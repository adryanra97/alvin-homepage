import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { formatDate, publishedPosts, readingMinutes } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on data, AI, IT management and life, by Adryan Rizky Alviano.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/feed.xml" } },
};

export default function BlogPage() {
  return (
    <>
      <PageHead
        eyebrow="Blog"
        title="Notes from"
        accent="my notebook."
        intro="Short write-ups on what I build and learn, plus a little about who I am outside work."
      />
      <section className="section section-tight">
        <div className="container post-list">
          {publishedPosts.length === 0 ? <p>No posts yet. Check back soon.</p> : null}
          {publishedPosts.map((p) => (
            <article key={p.slug} className={`post-item${p.cover ? " has-cover" : ""}`}>
              {p.cover ? (
                <Link href={`/blog/${p.slug}`} className="post-cover" tabIndex={-1} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover} alt="" loading="lazy" />
                </Link>
              ) : null}
              <div className="post-text">
              <p className="post-meta">
                <time dateTime={p.date}>{formatDate(p.date)}</time> · {readingMinutes(p)} min read
              </p>
              <h2>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p>{p.summary}</p>
              <p className="post-tags">{p.tags.map((t) => <span key={t}>#{t}</span>)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
