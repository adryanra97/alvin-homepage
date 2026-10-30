import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/caveat/500.css";
import "./globals.css";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import Interactions from "@/components/Interactions";
import { profile } from "@/data/site";
import { siteUrl } from "@/lib/site-url";


const title = `${profile.name} (${profile.nickname}) — Data Scientist & AI Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  keywords: [
    profile.name,
    "Adryan Rizky Alviano",
    "Data",
    "Agentic AI",
    "Prompt Engineering",
    "LLM",
    "Machine Learning",
    "Telkom Indonesia",
    "Data Scientist",
    "Data Governance",
    "TOGAF",
    "Enterprise Architecture",
    "ERP",
    "Business Process Reengineering",
    "Blockchain",
    "DAMA-DMBOK",
    "UU PDP",
    "Responsible AI",
    "Universitas Indonesia",
    "Magister Teknologi Informasi",
    "Huawei HCIA",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: profile.description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: profile.description },
  // Prevent preview/staging copies from competing with the production site in search results.
  robots: process.env.VERCEL_ENV === "preview"
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1220" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nickname,
    url: siteUrl,
    jobTitle: profile.role,
    worksFor: { "@type": "Organization", name: profile.company },
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
    knowsAbout: ["Generative AI", "Agentic AI", "Data Governance", "Machine Learning", "UU PDP", "Enterprise Architecture", "TOGAF", "IT Management"],
    address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
    sameAs: [profile.links.linkedin, profile.links.github],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <ContactSection />
        <Footer />
        <Motion />
        <Interactions />
        <Analytics />
      </body>
    </html>
  );
}
