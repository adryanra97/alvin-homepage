import { ArrowRight, Mail } from "lucide-react";
import { contact, profile } from "@/data/site";
import { publicImage } from "@/lib/images";
import { Skyline2 } from "./Art";
import { GitHubIcon, Icon, LinkedInIcon } from "./icons";

export default function ContactSection() {
  const contactImg = publicImage("contact");
  return (
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
  );
}
