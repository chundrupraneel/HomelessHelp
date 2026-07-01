import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch to donate items, partner as a business, or volunteer.",
};

const REASONS = [
  {
    icon: "store" as const,
    title: "Sponsor a kit",
    body: "Cover the cost of supplies for a batch of kits, with recognition for your business.",
  },
  {
    icon: "box" as const,
    title: "Host a drop-off",
    body: "Let your storefront or office serve as a collection point for donated goods.",
  },
  {
    icon: "people" as const,
    title: "Volunteer",
    body: "Help collect, sort, or pack kits at our next assembly session.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 style={{ marginTop: 14 }}>Let&apos;s talk.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede" style={{ marginTop: 16 }}>
                Whether you&apos;re a business looking to partner, or
                someone with items to donate or time to give — we&apos;d
                love to hear from you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal style={{ marginBottom: 40 }}>
            <span className="tag">For businesses</span>
            <h2 style={{ marginTop: 10 }}>A few ways to partner.</h2>
          </Reveal>

          <RevealGroup className={styles.reasonGrid}>
            {REASONS.map((r) => (
              <RevealItem key={r.title} className={`card ${styles.reasonCard}`}>
                <span className={styles.reasonIcon}>
                  <Icon name={r.icon} size={22} />
                </span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal style={{ marginBottom: 32 }}>
            <span className="tag">Reach us directly</span>
            <h2 style={{ marginTop: 10 }}>Send a message.</h2>
          </Reveal>

          <div className={styles.contactGrid}>
            <Reveal className={`card ${styles.contactCard}`}>
              <span className={styles.contactIcon}>
                <Icon name="mail" size={20} />
              </span>
              <h3>Email</h3>
              <a href={`mailto:${siteConfig.email}`} className={styles.contactValue}>
                {siteConfig.email}
              </a>
              <p style={{ fontSize: "0.88rem" }}>
                Best for partnership inquiries and detailed questions.
              </p>
            </Reveal>

            <Reveal delay={0.08} className={`card ${styles.contactCard}`}>
              <span className={styles.contactIcon}>
                <Icon name="phone" size={20} />
              </span>
              <h3>Phone</h3>
              <span className={styles.contactValue}>{siteConfig.phone}</span>
              <p style={{ fontSize: "0.88rem" }}>
                Best for arranging a drop-off or quick questions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
