import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const PROBLEMS = [
  {
    icon: "home" as const,
    title: "Shelters run short on basics",
    body: "Beds and meals get funded first — toiletries, socks, and snacks are usually the first things to run out.",
  },
  {
    icon: "people" as const,
    title: "Generosity is scattered",
    body: "People want to give, but a few loose donations here and there rarely add up to something a shelter can actually use.",
  },
  {
    icon: "store" as const,
    title: "Businesses want a way in",
    body: "Local businesses are often willing to help — they just need someone to organize it and tell them what's needed.",
  },
];

const STEPS = [
  {
    icon: "hands" as const,
    title: "Collect",
    body: "We gather money and goods from individuals and local businesses willing to chip in.",
  },
  {
    icon: "box" as const,
    title: "Assemble",
    body: "Everything gets sorted by hand into kits stocked with necessities and shelf-stable food.",
  },
  {
    icon: "home" as const,
    title: "Deliver",
    body: "Finished kits go straight to shelters and outreach partners near you.",
  },
];

const KIT_ITEMS = [
  { icon: "toothbrush" as const, label: "Hygiene items" },
  { icon: "sock" as const, label: "New socks" },
  { icon: "water" as const, label: "Bottled water" },
  { icon: "snack" as const, label: "Shelf-stable food" },
  { icon: "blanket" as const, label: "Warmth & blankets" },
  { icon: "firstaid" as const, label: "First-aid basics" },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal>
              <span className="eyebrow">
                <Icon name="heart" size={13} strokeWidth={2} />
                Founded {siteConfig.foundedYear} &middot; Community-led
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Care, packaged <em>with dignity.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede">
                {siteConfig.shortName} turns donated goods, food, and funds into
                care kits for people experiencing homelessness — assembled by
                hand and delivered straight to local shelters.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className={styles.heroActions}>
                <Link href="/donate" className="btn btn--primary">
                  Donate Now
                  <Icon name="arrow" size={17} />
                </Link>
                <Link href="/contact" className="btn btn--ghost">
                  Partner With Us
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className={styles.heroVisual}>
            <div className={styles.statRow}>
              <div className={styles.statChip}>
                <strong>Volunteer-led</strong>
                <span>No salaries or overhead</span>
              </div>
              <div className={styles.statChip}>
                <strong>Local</strong>
                <span>Delivered to nearby shelters</span>
              </div>
            </div>
            <div className={styles.statChip}>
              <strong>Just getting started</strong>
              <span>Founded {siteConfig.foundedYear} — help us grow</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className={`container ${styles.problemGrid}`}>
          <Reveal>
            <span className="tag">
              <Icon name="pin" size={14} />
              The gap we fill
            </span>
            <h2 style={{ marginTop: 14 }}>
              Good intentions need an easier way to land.
            </h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Most people want to help — they just don&apos;t know what&apos;s
              actually needed, or how to get it there. We close that gap.
            </p>
          </Reveal>

          <RevealGroup className={styles.problemList}>
            {PROBLEMS.map((p) => (
              <RevealItem key={p.title} className={styles.problemItem}>
                <span className={styles.problemIcon}>
                  <Icon name={p.icon} size={19} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="tag">
              <Icon name="check" size={14} />
              How it works
            </span>
            <h2>From a single donation to a delivered kit.</h2>
          </Reveal>

          <RevealGroup className={styles.steps}>
            {STEPS.map((s, i) => (
              <RevealItem key={s.title} className={`card ${styles.stepCard}`}>
                <span className={styles.stepNumber}>0{i + 1}</span>
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
        <div className={`container ${styles.kitTeaser}`}>
          <Reveal>
            <span className="tag">
              <Icon name="box" size={14} />
              Inside a kit
            </span>
            <h2 style={{ marginTop: 14 }}>
              Small things that make a real difference.
            </h2>
            <p className="lede" style={{ marginTop: 14, marginBottom: 22 }}>
              Exact contents shift with what&apos;s donated and the season,
              but every kit centers on the basics people ask shelters for
              most.
            </p>
            <Link href="/care-kits" className="btn btn--forest">
              See the full checklist
              <Icon name="arrow" size={17} />
            </Link>
          </Reveal>

          <RevealGroup className={styles.itemGrid}>
            {KIT_ITEMS.map((item) => (
              <RevealItem key={item.label} className={styles.itemChip}>
                <span className={styles.iconWrap}>
                  <Icon name={item.icon} size={26} />
                </span>
                <span>{item.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.ctaBanner}>
            <div className={styles.ctaTextCol}>
              <h2>Help us pack the next kit.</h2>
              <p>
                Every donation — cash, goods, or a few hours of your time —
                turns into something a shelter can hand straight to someone
                who needs it.
              </p>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <Link href="/donate" className="btn btn--primary">
                Donate Now
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
