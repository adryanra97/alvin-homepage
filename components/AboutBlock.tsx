import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { about, profile } from "@/data/site";
import { publicImage } from "@/lib/images";
import { PortraitPlaceholder } from "./Art";
import { Icon } from "./icons";

export default function AboutBlock({ asPage = false }: { asPage?: boolean }) {
  const profileImg = publicImage("profile");
  const Heading = asPage ? "h1" : "h2";
  return (
    <div className="container about-grid">
      <div>
        <p className="eyebrow">
          <span>About Me</span>
        </p>
        <Heading>
          {about.titleLead} <span className="accent">{about.titleAccent}</span>
        </Heading>
        <p className="body-text">{about.body}</p>
        {asPage ? null : (
          <Link href="/about" className="btn btn-outline">
            More About Me <ArrowRight size={16} />
          </Link>
        )}
      </div>
      <div className="about-visual">
        <div className={`about-photo${profileImg ? " has-photo" : ""}`}>
          {profileImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profileImg} alt={profile.name} className="art-img" />
          ) : (
            <PortraitPlaceholder />
          )}
        </div>
        <blockquote className="about-quote">
          <Quote size={30} aria-hidden="true" />
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
  );
}
