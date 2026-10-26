import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { formatDate, publishedPosts, readingMinutes } from "@/data/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = publishedPosts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.summary,
      url: `/blog/${p.slug}`,
      type: "article",
      publishedTime: p.date,
      images: p.cover ? [p.cover] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = publishedPosts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <article className="section section-tight post">
      <div className="container post-body">
        <Link href="/blog" className="back-link">
          <ArrowLeft size={16} /> All posts
        </Link>
        <p className="post-meta">
          <time dateTime={p.date}>{formatDate(p.date)}</time> · {readingMinutes(p)} min read
        </p>
        <h1>{p.title}</h1>
        {p.body.map((b, i) => {
          if (typeof b === "string") return <p key={i}>{b}</p>;
          if ("h" in b) return <h2 key={i}>{b.h}</h2>;
          return (
            <figure key={i} className={`post-fig post-fig-${b.size ?? "md"}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.img} alt={b.alt} width={b.width} height={b.height} loading="lazy" decoding="async" />
              <figcaption>{b.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </article>
  );
}
