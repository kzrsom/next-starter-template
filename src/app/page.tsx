"use client";

import { useState } from "react";

const navItems = [
  ["Home", "home"],
  ["Vision", "about"],
  ["History", "history"],
  ["Principles", "principles"],
  ["Join the Dialogue", "action"],
];

const principles = [
  {
    title: "Self-Determination",
    text: "Supporting local decision-making through lawful, peaceful, and democratic means.",
    color: "blue",
  },
  {
    title: "Human Rights",
    text: "Promoting dignity, safety, equal treatment, and protection for marginalized communities.",
    color: "emerald",
  },
  {
    title: "Reconciliation",
    text: "Encouraging dialogue, historical reflection, and peaceful negotiation for a shared future.",
    color: "amber",
  },
];

const regions = [
  {
    title: "Lower Shabelle",
    text: "A region shaped by diverse communities, agriculture, trade, and experiences of political exclusion and contestation over resources.",
  },
  {
    title: "Middle Juba",
    text: "A region often referenced in conversations about governance, access, development, and community representation.",
  },
  {
    title: "Lower Juba",
    text: "A historically significant area where local identity, security, and political inclusion remain central concerns.",
  },
  {
    title: "Biimaal Revolt",
    text: "Remembered as part of the broader history of anti-colonial resistance and the defense of local autonomy, dignity, and community rights.",
  },
];

const guidingPrinciples = [
  ["Lawful Recognition", "Seeking constitutional and democratic pathways for political acknowledgment."],
  ["Accountability", "Public administration that is transparent, fair, and answerable to citizens."],
  ["Fair Development", "Investing in neglected areas and ensuring equitable access to services and opportunity."],
  ["Protection from Harm", "Opposing abuse, forced displacement, exploitation, and unjust taxation."],
];

function scrollToSection(id: string, closeMenu?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  closeMenu?.();
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => scrollToSection("home")}>
            <span className="brand-mark" />
            <span>
              <strong>SOUTHEAST STATE</strong>
              <small>Self-Governance Platform</small>
            </span>
          </button>

          <nav className="desktop-nav">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                className={id === "action" ? "nav-button primary" : "nav-button"}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="menu-button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id, () => setMenuOpen(false))}
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Peaceful civic advocacy for self-determination
            </div>

            <h1>
              Building a future of{" "}
              <span>dignity, justice,</span> and local self-rule.
            </h1>

            <p className="lead">
              Southeast State is a civic platform supporting the Southeast
              region&apos;s proposal to manage its own affairs as an independent
              federal state within Somalia through lawful, peaceful, and
              democratic means.
            </p>

            <p>
              It seeks to protect the rights, heritage, and political agency of
              indigenous and marginalized people while promoting lawful
              recognition, accountable administration, fair development, and an
              end to abuse, displacement, exploitation, and unjust taxation.
            </p>

            <div className="hero-actions">
              <button
                className="button primary"
                onClick={() => scrollToSection("about")}
              >
                Explore the Vision
              </button>
              <button
                className="button secondary"
                onClick={() => scrollToSection("history")}
              >
                Read Historical Context
              </button>
            </div>

            <div className="stats">
              {[
                ["Peaceful", "Civic advocacy grounded in dialogue and law"],
                ["Democratic", "Participation, representation, and accountability"],
                ["Just", "Human rights, reconciliation, and lawful negotiation"],
              ].map(([title, text]) => (
                <div className="glass-card stat-card" key={title}>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-card glass-card">
            <div className="mission-grid">
              <article>
                <label>Core Mission</label>
                <h3>Lawful recognition and self-rule</h3>
                <p>Advocating an independent federal state model through democratic processes.</p>
              </article>
              <article>
                <label>Community</label>
                <h3>Rights and dignity for all</h3>
                <p>Protecting heritage, agency, and equal civic participation.</p>
              </article>
            </div>

            <article className="policy-card">
              <label>Policy Direction</label>
              <div className="policy-grid">
                {[
                  ["Accountable administration", "Transparent institutions that serve the public."],
                  ["Fair development", "Balanced investment and social services for neglected areas."],
                  ["Protection from abuse", "Ending displacement, exploitation, and unjust taxation."],
                  ["Negotiated solutions", "Reconciliation and lawful dialogue over confrontation."],
                ].map(([title, text]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Vision Statement"
            title="A lawful and democratic path toward self-governance"
          >
            This platform supports a future where the Southeast region can
            manage its own affairs within a stable constitutional framework,
            with institutions shaped by the people they serve.
          </SectionHeading>

          <div className="card-grid three-columns">
            {principles.map((principle, index) => (
              <article className="content-card" key={principle.title}>
                <div className={`number ${principle.color}`}>0{index + 1}</div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Historical Reading"
              title="Communities of southern Somalia and the legacy of resistance"
            >
              This platform presents a careful historical perspective on
              communities in Lower Shabelle, Middle Juba, and Lower Juba, along
              with the legacy of the Biimaal Revolt.
            </SectionHeading>
            <p>
              It recognizes the resistance of southern communities against
              Italian colonial rule, their contribution to the struggle for
              freedom, and the concerns many people continue to express about
              marginalization after independence.
            </p>
          </div>

          <div className="stack">
            {regions.map((region) => (
              <article className="content-card" key={region.title}>
                <h3>{region.title}</h3>
                <p>{region.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="section section-muted">
        <div className="container">
          <SectionHeading
            centered
            eyebrow="Guiding Principles"
            title="What this movement stands for"
          >
            A civic framework focused on lawful recognition, accountable
            administration, and the protection of local communities.
          </SectionHeading>

          <div className="card-grid four-columns">
            {guidingPrinciples.map(([title, text]) => (
              <article className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="action" className="section">
        <div className="container">
          <div className="cta">
            <div>
              <SectionHeading
                eyebrow="Join the Civic Conversation"
                title="A peaceful platform for dialogue, dignity, and democratic reform"
              >
                The path forward lies in listening, reconciliation, and
                principled negotiation. This platform invites communities,
                elders, youth, and advocates to engage in a shared civic vision.
              </SectionHeading>
            </div>

            <div className="support-card">
              <div className="support-grid">
                {[
                  ["Focus", "Self-governance"],
                  ["Method", "Peaceful advocacy"],
                  ["Values", "Justice and rights"],
                  ["Goal", "Local self-rule"],
                ].map(([title, value]) => (
                  <div key={title}>
                    <small>{title}</small>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <button
                className="button primary full-width"
                onClick={() =>
                  alert("Thank you for supporting peaceful civic dialogue.")
                }
              >
                Support the Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© Southeast State — A peaceful civic advocacy platform for self-determination.</p>
          <p>Grounded in human rights, democratic participation, reconciliation, and lawful negotiation.</p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <label>{eyebrow}</label>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
