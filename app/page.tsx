import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import AboutBlock from "@/components/AboutBlock";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsBento from "@/components/SkillsBento";
import { Skyline } from "@/components/Art";
import { Icon, LinkedInIcon } from "@/components/icons";
import { about, hero, profile, projects } from "@/data/site";
import { publicImage } from "@/lib/images";
import HeroCollage from "@/components/HeroCollage";

const NUMBER_WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

/** Career path for the home page: the few moves that explain the rest. */
const CAREER_PATH = [
  { year: "2015", role: "Mechanical Engineering", org: "Universitas Indonesia · Cum Laude" },
  { year: "2018", role: "Engineering Intern", org: "Danone Early Life Nutrition" },
  { year: "2020", role: "Great People Trainee", org: "Telkom Indonesia" },
  { year: "2022", role: "Junior Data Scientist", org: "Telkom Indonesia" },
  { year: "2025", role: "Data Scientist", org: "Telkom Indonesia", current: true },
  { year: "Now", role: "Master of Information Technology", org: "Universitas Indonesia", current: true },
];

const highlights = (years: number) => [
  { value: `${years}+`, label: "years working with data and technology" },
  { value: "80+", label: "professional certifications from Google, Microsoft & Coursera" },
  { value: "80%+", label: "faster issue identification with AI at Telkom" },
];

export default function Home() {
  const heroImg = publicImage("hero");
  const heroSm = heroImg ? publicImage("hero-sm") : null;
  const years = new Date().getFullYear() - profile.careerStartYear;

  return (
    <div className="home-mk">
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
              <strong className="stat-num" data-count>{h.value}</strong>
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

      {/* PRINCIPLE: one statement, full width */}
      <section className="mk-quote" aria-label="How I work">
        <div className="container">
          <p className="mk-quote-label">How I work</p>
          <blockquote>
            <p>{about.quote}</p>
          </blockquote>
        </div>
      </section>

      {/* EXPERIENCE (teaser) */}
      <section className="section section-alt">
        <div className="container">
          <div className="pj-head mk-head">
            <div>
              <p className="eyebrow">
                <span>Experience</span>
              </p>
              <h2>From mechanical engineer to data scientist at Telkom.</h2>
              <p className="body-text">
                {years} years in data and technology, on an engineering degree and an ongoing Master of IT, both at Universitas Indonesia.
              </p>
            </div>
            <Link href="/experience" className="btn btn-primary">
              View Full Experience <ArrowRight size={16} />
            </Link>
          </div>
          <ol className="mk-path">
            {CAREER_PATH.map((c) => (
              <li key={c.year + c.role} className={c.current ? "is-current" : undefined}>
                <span className="mk-path-year">{c.year}</span>
                <strong>{c.role}</strong>
                <span className="mk-path-org">{c.org}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS (teaser) */}
      <section className="projects">
        <div className="container pj-wrap">
          <div className="pj-head">
            <div>
              <p className="eyebrow eyebrow-light">
                <span>Projects</span>
              </p>
              <h2>{NUMBER_WORDS[projects.length] ?? projects.length} projects, each built to answer one real question.</h2>
              <p className="body-text light">
                What I build to learn, and to solve real problems with AI, grounded in data and told as stories.
              </p>
            </div>
            <Link href="/projects" className="btn btn-outline-light">
              All projects ({projects.length}) <ArrowRight size={16} />
            </Link>
          </div>
          <ProjectShowcase />
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
              <h2>Most of my time now goes into LLMs and agentic AI.</h2>
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
    </div>
  );
}
