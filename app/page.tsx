import fs from "node:fs";
import path from "node:path";
import { ArrowRight, Download, Mail, MapPin, BarChart3, Building2, Users, Quote } from "lucide-react";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Skyline, Skyline2, PortraitPlaceholder } from "@/components/Art";
import { Icon, LinkedInIcon, GitHubIcon, Logo } from "@/components/icons";
import { about, contact, experiences, hero, nav, profile } from "@/data/site";

function publicImage(name: string): string | null {
  const exts = ["jpg", "jpeg", "png", "webp"];
  for (const ext of exts) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) {
      return `/images/${name}.${ext}`;
    }
  }
  return null;
}

export default function Home() {
  const heroImg = publicImage("hero");
  const profileImg = publicImage("profile");
  const contactImg = publicImage("contact");
  const years = new Date().getFullYear() - profile.careerStartYear;
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="home" className="hero">
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
                <a href="#projects" className="btn btn-primary">
                  View My Work <ArrowRight size={16} />
                </a>
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
                <strong>{profile.city.split(",")[0]}, Indonesia</strong>
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
                <strong>Data · AI · People</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">
                <span>About Me</span>
              </p>
              <h2>
                {about.titleLead} <span className="accent">{about.titleAccent}</span>
              </h2>
              <p className="body-text">{about.body}</p>
              <a href="#experience" className="btn btn-outline">
                More About Me <ArrowRight size={16} />
              </a>
            </div>
            <div className="about-visual">
              <div className="about-photo">
                {profileImg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profileImg} alt={profile.name} className="art-img" />
                ) : (
                  <PortraitPlaceholder />
                )}
              </div>
              <blockquote className="about-quote">
                <Quote size={18} aria-hidden="true" />
                <p>{about.quote}</p>
                <span className="swoosh" aria-hidden="true" />
              </blockquote>
              <ul className="values">
                {about.values.map((v) => (
                  <li key={v.title}>
                    <Icon name={v.icon} size={24} />
                    <strong>{v.title}</strong>
                    <span>{v.sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-alt">
          <div className="container exp-grid">
            <div>
              <p className="eyebrow">
                <span>Experience</span>
              </p>
              <h2>My professional journey</h2>
              <p className="body-text">
                A journey of learning, contributing, and growing in the world of data, technology, and people.
              </p>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Full Experience <ArrowRight size={16} />
              </a>
            </div>
            <ol className="timeline">
              {experiences.map((e) => (
                <li key={e.org + e.period}>
                  <span className="tl-dot" aria-hidden="true" />
                  <span className={`tl-badge tl-${e.icon}`}>
                    <Icon name={e.icon} size={22} />
                  </span>
                  <div className="tl-main">
                    <strong>
                      {e.org} {e.current ? <em>(Current)</em> : null}
                    </strong>
                    <ul className="tl-roles">
                      {e.roles.map((r) => (
                        <li key={r.title + r.period}>
                          <span>{r.title}</span>
                          {e.roles.length > 1 ? <small>{r.period}</small> : null}
                        </li>
                      ))}
                    </ul>
                    {e.highlights ? (
                      <ul className="tl-highlights">
                        {e.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div className="tl-meta">
                    <strong>{e.period}</strong>
                    {e.place ? (
                      <span>
                        <MapPin size={13} /> {e.place}
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects">
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
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                View All Projects <ArrowRight size={16} />
              </a>
            </div>
            <Projects />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
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
                A combination of technical skills and soft skills that I use to turn ideas into real solutions.
              </p>
            </div>
            <Skills />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">
                <span>Let&apos;s Connect</span>
              </p>
              <h2>
                {contact.titleLead} <span className="accent">{contact.titleAccent}</span>
              </h2>
              <p className="body-text">{contact.body}</p>
              <div className="cta-row">
                <a
                  href={profile.email ? `mailto:${profile.email}` : profile.links.linkedin}
                  className="btn btn-primary"
                  target={profile.email ? undefined : "_blank"}
                  rel={profile.email ? undefined : "noopener noreferrer"}
                >
                  Get in touch <ArrowRight size={16} />
                </a>
                <a href={profile.links.linkedin} className="round" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon size={18} />
                </a>
                <a href={profile.links.github} className="round" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GitHubIcon size={18} />
                </a>
                <a href={profile.links.credly} className="round" target="_blank" rel="noopener noreferrer" aria-label="Credly badges">
                  <Icon name="award" size={18} />
                </a>
                {profile.email ? (
                  <a href={`mailto:${profile.email}`} className="round round-light" aria-label="Email">
                    <Mail size={18} />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="contact-art">
              <p className="hand-quote hand-quote-contact">“{contact.quote}”</p>
              <div className="contact-shape">
                {contactImg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={contactImg} alt="" className="art-img" />
                ) : (
                  <Skyline2 id="contact" />
                )}
              </div>
              <span className="red-slash red-slash-2" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="brand" aria-label="Kembali ke atas">
            <Logo initials={profile.initials} />
            <span className="brand-stack">
              <strong>{profile.name}</strong>
              <small>Data · Technology · People</small>
            </span>
          </a>
          <nav className="footer-nav" aria-label="Navigasi footer">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <p className="copy">
            © {year} {profile.name}.
            <br />
            All rights reserved.
          </p>
          <a href="#home" className="to-top" aria-label="Kembali ke atas">
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}
