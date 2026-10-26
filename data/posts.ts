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
      "Mechanical engineer turned network engineer turned data scientist, with a detour through teaching, privacy compliance, the gym, mini soccer and back to school. Here's how it happened, and why this website exists.",
    tags: ["story", "career", "life"],
    cover: `${P}/hike.webp`,
    body: [
      "I studied mechanical engineering. When I joined Telkom I was a network engineer, so if you're keeping score, that was already one turn away from my degree. I didn't plan the turns after that either. I'd get curious about something, poke at it for a while, and somehow it turned into the next chapter.",
      { h: "Too much data, not enough questions" },
      "Here's something nobody tells you about networks: they never stop producing data. Logs, alarms, performance numbers, all day long. At some point I noticed I was mostly looking at all of it and not really asking it anything. So I started learning data analytics on the side, a little at a time, because I wanted answers I couldn't get by staring at a dashboard.",
      {
        img: `${P}/witel.webp`,
        alt: "A large group of colleagues posing outdoors in front of a banner at Witel Jakarta Barat",
        width: 900,
        height: 371,
        size: "lg",
        caption: "With the Witel Jakarta Barat crew. Different job, same habit of asking why something is doing what it's doing.",
      },
      "Then Telkom ran an internal data science bootcamp. I joined, learned a ton, and ended up winning the competition. I did not see that coming.",
      "What I saw coming even less was the part after. Once the competition was over I became a facilitator. I taught data science to other people at Telkom, across two batches, and I also sat on the jury side, judging the people who came after me. Going from competitor to teacher in a few months was a weird switch. It was also the fastest way to find out what I actually understood. You can nod along to an idea for years, and then someone asks \"but why?\" and you realise you've only been nodding.",
      { h: "A unit that never does the same thing twice" },
      "After that I got the chance to move to a business digital unit, Digital Business & Technology (DBT). New team, new people, and a very different kind of work. I can't get into client details, but I can tell you the use cases never repeated themselves.",
      "My first one was IoT data, mapping how vehicles move around. Then another IoT project, this time sensors measuring how things get used. Then, with barely any warning, I was in video analytics, which is nothing like working with tables. One of those projects was about watching how chickens move around. I'm not joking, and yes, I now have opinions about chicken behaviour. After that came CCTV, counting how crowded a place gets.",
      "Every time I had to learn a new way of looking at a problem, and a lot of these were big B2B and B2G engagements, so there were more people in the room and more riding on the result than anything I'd done before.",
      {
        img: `${P}/dbt.webp`,
        alt: "The Digital Business & Technology team lined up in a meeting room, each making the same hand sign",
        width: 900,
        height: 506,
        size: "lg",
        caption: "The new team at Digital Business & Technology. Every group photo ends with a hand sign, and this was ours.",
      },
      "Somewhere in the middle of all that I noticed I'd been sitting down for far too long, so I started going to the gym. Nothing heroic. I just kept showing up. It changed how I work more than I expected: more energy, a clearer head, and a good excuse to step away from the laptop.",
      {
        img: `${P}/gym.webp`,
        alt: "Black and white photo of sneakers resting on a leg press machine in a gym",
        width: 760,
        height: 1013,
        size: "sm",
        caption: "The leg press view. I'm told this is what leg day looks like from the inside.",
      },
      { h: "Management, privacy and a lot of documents" },
      "Then I moved towards the management side. A big part of it was privacy. I kept an eye on UU PDP, Indonesia's personal data protection law, and helped turn it into standards the team could actually follow. I also set up standards and assessments for the talents on the team, which taught me that evaluating people is harder than evaluating models.",
      "Later I became an assessor for UU PDP and GDPR compliance, and wrote guidance for official documents like the RoPA, the record of processing activities. It isn't glamorous, I'll say that up front. But it changed how I think about data. It's not only about what I can build with it. It's also about whether I should, and how to handle it properly.",
      "After that I switched again, into customer experience (CX) analytics and digitalization. That's a different muscle: less sensors and cameras, more about what people feel and do when they use something. Then I came back to management, this time leading several use cases at once.",
      "Some time after that, the promotion came. That's the handshake.",
      {
        img: `${P}/promotion.webp`,
        alt: "Adryan in a maroon polo shaking hands while receiving an envelope on stage",
        width: 820,
        height: 843,
        size: "sm",
        caption: "Promotion day. A handshake, an envelope, and me trying very hard to look composed.",
      },
      { h: "A side assignment that turned into a highlight" },
      "A while after the promotion, I was selected as an expert at Telkom Indonesia. This one sits outside my day-to-day work. It's a separate assignment, and it's been a really good one. I get to join forums and seminars that I wouldn't normally be in the room for, hear how people think about leadership in a complicated world, and bring a few of those ideas back to my own work.",
      "It still feels a bit like a bonus level, to be honest.",
      {
        img: `${P}/expert.webp`,
        alt: "Four photos: the TelkomGroup Expert booklet, the Expert Insight Leadership and Forum Expert Q2 2026 screen, Adryan taking a selfie at the venue, and a presentation slide titled The World Has Changed, Has Your Leadership",
        width: 1408,
        height: 1408,
        size: "md",
        caption: "Expert Insight Leadership & Forum Expert, Telkom Group, Q2 2026. The booklet, the screens, and one very pleased selfie.",
      },
      { h: "Moving more, going places" },
      "Once the gym habit stuck, I wanted to try other sports. Mini soccer is the loud one. I won't promise I'm good, but I run a lot and I'm fun to have on the team.",
      {
        img: `${P}/soccer.webp`,
        alt: "Four players moving across a mini soccer pitch at night",
        width: 1000,
        height: 667,
        size: "lg",
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
        size: "lg",
        caption: "Saudi Arabia, squinting in the sun. It was bright, I was squinting, and this is the one that came out.",
      },
      { h: "Going back to school" },
      "After all of that, I applied for a master's degree: Master of Information Technology at Universitas Indonesia. I wasn't sure how it would feel to be a student again. It turned out to be great. New people, new ideas, new connections, and classmates from industries I'd never worked in.",
      {
        img: `${P}/mti.webp`,
        alt: "A full classroom posing for a group photo on the first day of the MTI program at Universitas Indonesia",
        width: 900,
        height: 413,
        size: "lg",
        caption: "Day one of MTI at UI. Almost everyone in this room was a stranger to me. Not for long.",
      },
      { h: "So, this website" },
      "Looking back, the pattern is pretty simple. I keep looking for new things to do, new things to learn, and new people to learn them with. It has all been fun, which makes me a little suspicious, because I'm not sure that's how it's supposed to go.",
      "This site is where I write it down. Partly to keep track of how far I've come, and partly because I'd like to meet more people. If you work on something similar, or you're curious about any of this, or you just want to say hi, I'd really like to hear from you.",
      "Thanks for reading.",
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
