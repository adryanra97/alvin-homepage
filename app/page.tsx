import Link from "next/link";
import { ArrowRight, Download, MapPin, BarChart3, Building2, Users } from "lucide-react";
import AboutBlock from "@/components/AboutBlock";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import { Skyline } from "@/components/Art";
import { Icon, LinkedInIcon } from "@/components/icons";
import { hero, profile, projects, skillGroups } from "@/data/site";
import { publicImage } from "@/lib/images";

export default function Home() {
  const heroImg = publicImage("hero");
  const years = new Date().getFullYear() - profile.careerStartYear;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              {hero.eyebrow.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </p>
            <h1>
              {hero.titleLead} <span className="accent">{hero.titleAccent}</span>
            </h1>
            <p className="lead">{hero.intro}</p>
            <div className="cta-row">
              <Link href="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              {profile.cvUrl ? (
                <a href={profile.cvUrl} className="btn btn-outline" download>
                  Download CV <Download size={15} />
                </a>
              ) : (
                <a href={profile.links.linkedin} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  LinkedIn <LinkedInIcon size={15} />
                </a>
              )}
            </div>
          </div>

          <div className="hero-art">
            <p className="hand-quote">“{profile.tagline}”</p>
            <div className="hero-shape">
              {heroImg ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={heroImg} alt="Jakarta" className="art-img" />
              ) : (
                <Skyline id="hero" />
              )}
            </div>
            <span className="red-slash" aria-hidden="true" />
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
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="Ringkasan">
        <div className="container stats-grid">
          <div className="stat">
            <Building2 size={26} />
            <div>
              <small>Currently at</small>
              <strong>{profile.company}</strong>
            </div>
          </div>
          <div className="stat">
            <MapPin size={26} />
            <div>
              <small>Based in</small>
              <strong>{profile.city}</strong>
            </div>
          </div>
          <div className="stat">
            <BarChart3 size={26} />
            <div>
              <small>
                <b className="big">{years}+</b>
              </small>
              <strong>Years of Experience</strong>
            </div>
          </div>
          <div className="stat">
            <Users size={26} />
            <div>
              <small>Focus Area</small>
              <strong>Data · AI · Governance</strong>
            </div>
          </div>
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
            <h2>My professional journey</h2>
            <p className="body-text">
              A journey of learning, contributing, and growing in the world of data, AI, and people.
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
        <div className="container skills-grid">
          <div>
            <p className="eyebrow">
              <span>Skills</span>
            </p>
            <h2>
              Tools &amp;
              <br />
              Technologies
            </h2>
            <p className="body-text">
              A combination of technical skills, AI, governance, and soft skills that I use to turn ideas into real
              solutions.
            </p>
            <Link href="/skills" className="btn btn-outline">
              All Skills <ArrowRight size={16} />
            </Link>
          </div>
          <Skills groups={skillGroups.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
