import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import AboutBlock from "@/components/AboutBlock";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProject from "@/components/FeaturedProject";
import SkillsBento from "@/components/SkillsBento";
import { Skyline } from "@/components/Art";
import { Icon, LinkedInIcon } from "@/components/icons";
import { hero, profile, projects } from "@/data/site";
import { publicImage } from "@/lib/images";
import HeroCollage from "@/components/HeroCollage";

const highlights = (years: number) => [
  { value: `${years}+`, label: "years working with data and technology" },
  { value: "6", label: "specialised AI agents in my flagship project" },
  { value: "2", label: "bootcamp batches facilitated, plus jury duty" },
];

export default function Home() {
  const heroImg = publicImage("hero");
  const heroSm = heroImg ? publicImage("hero-sm") : null;
  const years = new Date().getFullYear() - profile.careerStartYear;

  return (
    <>
      {/* HERO */}
      <section className={`hero${heroImg ? " hero-photo" : ""}`}>
        {heroImg ? (
          <div className="hero-bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImg}
              srcSet={heroSm ? `${heroSm} 800w, ${heroImg} 1600w` : undefined}
              sizes="100vw"
              alt=""
              fetchPriority="high"
            />
          </div>
        ) : null}
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className={`eyebrow${heroImg ? " eyebrow-light" : ""}`}>
              {hero.eyebrow.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </p>
            <h1>
              {hero.titleLead} <span className="accent">{hero.titleAccent}</span>
            </h1>
            <p className="hero-sub">{hero.subline}</p>
            <p className="lead">{hero.intro}</p>
            <div className="cta-row">
              <Link href="/projects" className={`btn ${heroImg ? "btn-light" : "btn-primary"}`}>
                See what I&apos;ve built <ArrowRight size={16} />
              </Link>
              <a href="#contact" className="btn btn-outline">
                Let&apos;s collaborate
              </a>
            </div>
            {heroImg ? <p className="hero-quote">“{profile.tagline}”</p> : null}
          </div>

          <div className="hero-art">
            {heroImg ? <HeroCollage /> : null}
            {heroImg ? null : <p className="hand-quote">“{profile.tagline}”</p>}
            {heroImg ? null : (
              <>
                <div className="hero-shape">
                  <Skyline id="hero" />
                </div>
                <span className="red-slash" aria-hidden="true" />
              </>
            )}
            {heroImg ? null : (
              <ul className="info-card">
                {hero.infoCards.map((c) => (
                  <li key={c.title}>
                    <Icon name={c.icon} size={22} />
                    <div>
                      <strong>{c.title}</strong>
                      <span>{c.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {heroImg ? (
          <div className="container">
            <ul className="hero-strip">
              {hero.infoCards.map((c) => (
                <li key={c.title}>
                  <Icon name={c.icon} size={22} />
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {/* HIGHLIGHTS + COLLAB */}
      <section className="stats" aria-label="Highlights">
        <div className="container stats-grid">
          {highlights(years).map((h) => (
            <div className="stat" key={h.label}>
              <strong className="stat-num">{h.value}</strong>
              <span className="stat-label">{h.label}</span>
            </div>
          ))}
          <a href="#contact" className="stat stat-cta">
            <span className="stat-cta-eyebrow">Open to collaboration</span>
            <strong>Got an idea or a project? Let&apos;s talk.</strong>
            <ArrowRight size={20} className="stat-cta-arrow" />
          </a>
        </div>
      </section>

      {/* ABOUT (teaser) */}
      <section className="section">
        <AboutBlock />
      </section>

      {/* EXPERIENCE (teaser) */}
      <section className="section section-alt">
        <div className="container exp-grid">
          <div>
            <p className="eyebrow">
              <span>Experience</span>
            </p>
            <h2>
              Where I've worked
              <br />
              <span className="accent">&amp; studied.</span>
            </h2>
            <p className="body-text">
              Telkom Indonesia and Danone, plus a Mechanical Engineering degree and an ongoing Master of IT, both at Universitas Indonesia.
            </p>
            <Link href="/experience" className="btn btn-primary">
              View Full Experience <ArrowRight size={16} />
            </Link>
          </div>
          <ExperienceTimeline limit={2} />
        </div>
      </section>

      {/* PROJECTS (teaser) */}
      <section className="projects">
        <div className="container projects-grid">
          <div className="projects-intro">
            <p className="eyebrow eyebrow-light">
              <span>Projects</span>
            </p>
            <h2>
              From ideas
              <br />
              to <span className="accent-light">real solutions.</span>
            </h2>
            <p className="body-text light">
              A collection of projects that showcase my interest in data, AI, and building practical applications.
            </p>
            <Link href="/projects" className="btn btn-light">
              View All Projects ({projects.length}) <ArrowRight size={16} />
            </Link>
          </div>
          <FeaturedProject />
        </div>
      </section>

      {/* SKILLS (teaser) */}
      <section className="section">
        <div className="container">
          <div className="skills-head">
            <div>
              <p className="eyebrow">
                <span>Skills</span>
              </p>
              <h2>
                Tools &amp; <span className="accent">technologies.</span>
              </h2>
              <p className="body-text">
                What I use to turn ideas into real solutions, and where it shows up.
              </p>
            </div>
            <Link href="/skills" className="btn btn-outline">
              All Skills <ArrowRight size={16} />
            </Link>
          </div>
          <SkillsBento />
        </div>
      </section>
    </>
  );
}
