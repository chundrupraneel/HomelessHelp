import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./care-kits.module.css";

export const metadata: Metadata = {
  title: `Care Kits — ${siteConfig.name}`,
  description: "What's inside a care kit, and how it gets from a donation to a shelter.",
};

const CHECKLIST = [
  {
    icon: "toothbrush" as const,
    title: "Hygiene essentials",
    body: "Toothbrush, toothpaste, soap, deodorant, travel wipes.",
  },
  {
    icon: "sock" as const,
    title: "New socks",
    body: "Always new, never used — one of the most-requested items at shelters.",
  },
  {
    icon: "water" as const,
    title: "Bottled water",
    body: "Sealed water for the days between shelter visits.",
  },
  {
    icon: "snack" as const,
    title: "Shelf-stable food",
    body: "Granola bars, crackers, and other food that doesn't need to be cooked.",
  },
  {
    icon: "blanket" as const,
    title: "Warmth",
    body: "A blanket or hand warmers, prioritized in colder months.",
  },
  {
    icon: "firstaid" as const,
    title: "First-aid basics",
    body: "Bandages, antiseptic wipes, and over-the-counter pain relief.",
  },
];

const STEPS = [
  {
    icon: "hands" as const,
    title: "Collect",
    body: "Individuals and local businesses donate goods, food, or funds toward supplies.",
  },
  {
    icon: "box" as const,
    title: "Assemble",
    body: "Volunteers sort and pack everything into individual kits by hand.",
  },
  {
    icon: "home" as const,
    title: "Deliver",
    body: "Kits are dropped off directly with shelters and outreach partners.",
  },
];

const WISHLIST = [
  "Travel-size toiletries (toothpaste, soap, shampoo)",
  "New socks and underwear, all sizes",
  "Granola bars, crackers, and other non-perishable snacks",
  "Bottled water",
  "Hand warmers and small blankets",
  "Basic first-aid supplies",
];

export default function CareKitsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <Reveal>
              <span className="eyebrow">What&apos;s inside</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 style={{ marginTop: 14 }}>One kit, packed with the basics.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede" style={{ marginTop: 16 }}>
                Every {siteConfig.shortName} kit is built around the items
                shelters tell us run out the fastest — hygiene products,
                food, and a little extra warmth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="tag">The checklist</span>
            <h2>What goes into a typical kit.</h2>
          </Reveal>

          <RevealGroup className={styles.checklist}>
            {CHECKLIST.map((item) => (
              <RevealItem key={item.title} className={styles.checklistItem}>
                <span className={styles.checklistIcon}>
                  <Icon name={item.icon} size={19} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className={styles.note}>
            <span className={styles.noteIcon}>
              <Icon name="check" size={17} />
            </span>
            <p>
              Exact contents shift depending on what&apos;s been donated and
              the time of year — winter kits lean more on warmth, summer
              kits more on water and sun protection.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="tag">The process</span>
            <h2>From donation to delivery.</h2>
          </Reveal>

          <RevealGroup className={styles.processSteps}>
            {STEPS.map((s) => (
              <RevealItem key={s.title} className={`card ${styles.stepCard}`}>
                <span className={styles.stepIcon}>
                  <Icon name={s.icon} size={22} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--alt">
        <div className={`container ${styles.wishlistGrid}`}>
          <Reveal className={`card ${styles.wishlistCard}`}>
            <span className="tag">For businesses & individuals</span>
            <h2>Have items to give instead of cash?</h2>
            <p>
              We&apos;re always glad to take physical donations. Here&apos;s
              what&apos;s most useful right now:
            </p>
            <div className={styles.wishlistList}>
              {WISHLIST.map((item) => (
                <div key={item} className={styles.wishlistRow}>
                  <Icon name="check" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn--forest" style={{ alignSelf: "flex-start", marginTop: 6 }}>
              Arrange a drop-off
              <Icon name="arrow" size={17} />
            </Link>
          </Reveal>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="tag">Where kits go</span>
            <h2>Building partnerships, one shelter at a time.</h2>
            <p className="lede">
              We&apos;re actively building relationships with local shelters
              and outreach groups. As partnerships are confirmed, they&apos;ll
              be listed here.
            </p>
          </Reveal>

          <RevealGroup className={styles.partnerGrid}>
            {[1, 2, 3].map((n) => (
              <RevealItem key={n} className={`card ${styles.partnerCard}`}>
                <span className={styles.partnerIcon}>
                  <Icon name="pin" size={20} />
                </span>
                <h3 style={{ fontStyle: "italic", color: "var(--ink-faint)" }}>
                  Partner shelter {n}
                </h3>
                <p style={{ fontSize: "0.88rem" }}>
                  [Add a confirmed shelter or outreach partner here]
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
