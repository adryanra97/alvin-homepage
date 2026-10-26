import Link from "next/link";
import { nav, profile } from "@/data/site";
import { Logo } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="brand">
          <Logo initials={profile.initials} />
          <span className="brand-stack">
            <strong>{profile.name}</strong>
            <small>Data · AI · People</small>
          </span>
        </Link>
        <nav className="footer-nav" aria-label="Footer">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="copy">
          © {year} {profile.name}.
          <br />
          All rights reserved.
        </p>
        <a href="#top" className="to-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
}
