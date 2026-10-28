import { ArrowRight, Mail } from "lucide-react";
import { contact, profile } from "@/data/site";
import { publicImage } from "@/lib/images";
import { Skyline2 } from "./Art";
import { GitHubIcon, Icon, LinkedInIcon } from "./icons";

export default function ContactSection() {
  const contactImg = publicImage("contact");
  const contactSm = contactImg ? publicImage("contact-sm") : null;
  return (
    <section id="contact" className={`contact${contactImg ? " contact-photo" : ""}`}>
      {contactImg ? (
        <div className="contact-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={contactImg}
            srcSet={contactSm ? `${contactSm} 800w, ${contactImg} 1600w` : undefined}
            sizes="100vw"
            alt=""
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="container contact-grid">
        <div>
          <p className={`eyebrow${contactImg ? " eyebrow-light" : ""}`}>
            <span>Let&apos;s Connect</span>
          </p>
          <h2>
            {contact.titleLead} <span className="accent">{contact.titleAccent}</span>
          </h2>
          <p className={`body-text${contactImg ? " light" : ""}`}>{contact.body}</p>
          <div className="cta-row">
            <a
              href={profile.email ? `mailto:${profile.email}` : profile.links.linkedin}
              className={`btn ${contactImg ? "btn-light" : "btn-primary"}`}
              target={profile.email ? undefined : "_blank"}
              rel={profile.email ? undefined : "noopener noreferrer"}
            >
              Get in touch <ArrowRight size={16} />
            </a>
            <a href={profile.links.linkedin} className={`round${contactImg ? " round-light" : ""}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={18} />
            </a>
            <a href={profile.links.github} className={`round${contactImg ? " round-light" : ""}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={18} />
            </a>
            <a href={profile.links.credly} className={`round${contactImg ? " round-light" : ""}`} target="_blank" rel="noopener noreferrer" aria-label="Credly badges">
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
          {contactImg ? null : (
            <>
              <div className="contact-shape">
                <Skyline2 id="contact" />
              </div>
              <span className="red-slash red-slash-2" aria-hidden="true" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
