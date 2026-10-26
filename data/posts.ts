/**
 * Blog posts. Add a new object to the top of the array to publish.
 * `body` is a list of blocks:
 *   - a plain string        -> paragraph
 *   - { h: "..." }          -> heading
 *   - { img, alt, width, height, caption, size? } -> photo with its story (files in /public/blog/<slug>/)
 * Set `draft: true` to hide a post from the site, feed and sitemap.
 */
export type PostBlock =
  | string
  | { h: string }
  | { img: string; alt: string; width: number; height: number; caption: string; size?: "sm" | "md" | "lg" };

export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags: string[];
  /** Optional thumbnail (path under /public). Also used as the share image. */
  cover?: string;
  draft?: boolean;
  body: PostBlock[];
};

const P = "/blog/how-i-got-here";

export const posts: Post[] = [
  {
    slug: "how-i-got-here",
    title: "How I got here, and why I'm not done yet",
    date: "2026-10-27",
    summary:
      "Mechanical engineer, network engineer, data scientist, gym regular, occasional hiker and a student again. A few curious turns, and why this website exists.",
    tags: ["story", "career", "life"],
    cover: `${P}/hike.webp`,
    body: [
      "I studied mechanical engineering. Then I started my career at Telkom as a network engineer, which is not exactly a straight line if you're drawing one. I didn't plan the rest either. Most of it began with me getting curious about something and not stopping.",
      { h: "The network engineer who got nosy about data" },
      "Networks produce a ridiculous amount of data. At some point I stopped just looking at it and started asking what it could tell us. So I taught myself data analytics, a little at a time, between the day job and far too many open tabs.",
      {
        img: `${P}/witel.webp`,
        alt: "A large group of colleagues posing outdoors in front of a banner at Witel Jakarta Barat",
        width: 900,
        height: 371,
        size: "sm",
        caption:
          "With the Witel Jakarta Barat crew. Different job, same habit of asking why something is doing what it's doing.",
      },
      "Then Telkom ran an internal bootcamp. I signed up, learned a lot, and ended up winning a data scientist competition. I'm still a bit surprised about that one. What came next mattered more to me: I got the chance to move to a business digital unit.",
      { h: "A new team, and use cases that looked nothing alike" },
      "That move changed a lot. New team, new people, new problems. One week it's a model, the next it's a conversation with someone who has never opened a dashboard, and both turn out to be the real work.",
      {
        img: `${P}/dbt.webp`,
        alt: "The Digital Business & Technology team lined up in a meeting room, each making the same hand sign",
        width: 900,
        height: 506,
        size: "md",
        caption:
          "The new team at Digital Business & Technology. Every group photo ends with a hand sign, and this was ours.",
      },
      "Somewhere in that first stretch I also noticed I'd been sitting down way too much, so I started going to the gym. Nothing heroic. Mostly just showing up.",
      {
        img: `${P}/gym.webp`,
        alt: "Black and white photo of sneakers resting on a leg press machine in a gym",
        width: 760,
        height: 1013,
        size: "sm",
        caption: "The leg press view. I'm told this is what leg day looks like from the inside.",
      },
      "It sounds small, but it changed how I work. More energy, better focus, and a very good excuse to close the laptop.",
      { h: "The compliance work nobody warned me about" },
      "One of the more unexpected turns was privacy. I ended up as an assessor, checking how we comply with Indonesia's PDP Law (UU PDP) and GDPR, and writing guidance for official documents like the RoPA, the record of processing activities. It isn't glamorous. It did teach me to think about how data should be treated, and not only what you can do with it.",
      "After a good while of mixed use cases and new kinds of work, I got a promotion. That's the handshake.",
      {
        img: `${P}/promotion.webp`,
        alt: "Adryan in a maroon polo shaking hands while receiving an envelope on stage",
        width: 820,
        height: 843,
        size: "sm",
        caption: "Promotion day. A handshake, an envelope, and me trying very hard to look composed.",
      },
      { h: "More sport, more places" },
      "Once the gym habit stuck, I wanted to try other things. Mini soccer is the loud one. I won't promise I'm good, but I run a lot and I'm fun to have on the team.",
      {
        img: `${P}/soccer.webp`,
        alt: "Four players moving across a mini soccer pitch at night",
        width: 1000,
        height: 667,
        size: "md",
        caption: "Mini soccer night. If you can find me in this photo you win nothing, but I'd be flattered.",
      },
      "Then I got curious about the world outside Jakarta. Weekend trips out of town, a few hikes where the view was worth the sore legs, and one big trip to Saudi Arabia.",
      {
        img: `${P}/hike.webp`,
        alt: "Adryan smiling at a mountain viewpoint next to a wooden sign",
        width: 760,
        height: 724,
        size: "sm",
        caption: "Catching my breath mid-hike. The view paid for the legs.",
      },
      {
        img: `${P}/saudi.webp`,
        alt: "Adryan in glasses and a blue top, squinting in the sun with a rocky mountain behind him",
        width: 900,
        height: 506,
        size: "md",
        caption: "Saudi Arabia, squinting in the sun. It was bright, I was squinting, and this is the one that came out.",
      },
      { h: "Back to school" },
      "After all of that, I applied for a master's degree: Master of Information Technology at Universitas Indonesia. I wasn't sure how it would feel to be a student again. It turned out to be great. New people, new ideas, new connections, and classmates from industries I'd never worked in.",
      {
        img: `${P}/mti.webp`,
        alt: "A full classroom posing for a group photo on the first day of the MTI program at Universitas Indonesia",
        width: 900,
        height: 413,
        size: "sm",
        caption: "Day one of MTI at UI. Almost everyone in this room was a stranger to me. Not for long.",
      },
      { h: "So, this website" },
      "Looking back, the pattern is pretty simple. I keep looking for new things to do, new things to learn, and new people to learn them with. Somehow all of it has been fun.",
      "That's why this site exists. It's a place to keep track of where I'm heading, and a way to meet more people along the way. If something here sounds interesting, or you're working on something similar, or you just want to say hi, I'd really like to hear from you.",
      "Thanks for reading. More soon.",
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
  const words = p.body
    .map((b) => (typeof b === "string" ? b : "h" in b ? b.h : b.caption))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
