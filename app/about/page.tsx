import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: siteConfig.description,
};

const VALUES = [
  {
    icon: "heart" as const,
    title: "Dignity first",
    body: "Every kit is assembled like it's for someone we know — not a handout, but a thoughtful gift.",
  },
  {
    icon: "people" as const,
    title: "Community-powered",
    body: "We exist to connect generosity that's already out there with the people who need it most.",
  },
  {
    icon: "check" as const,
    title: "Practical care",
    body: "We focus on the unglamorous basics — hygiene, food, warmth — that get overlooked the most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <Reveal>
              <span className="eyebrow">Our story</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 style={{ marginTop: 14 }}>Why {siteConfig.shortName} exists</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede" style={{ marginTop: 16 }}>
                {siteConfig.shortName} started as a simple idea: turn the
                things people already want to give — spare goods, a few
                dollars, an afternoon of time — into something a shelter can
                put directly into someone&apos;s hands.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className={`container ${styles.storyGrid}`}>
          <Reveal delay={0.1} className={styles.storyCopy}>
            <span className="tag">The founding story</span>
            <h2>Built from noticing a gap, not a grand plan.</h2>
            <p>
              <em>
                [Replace this paragraph with the real founding story — what
                you saw, what made you want to act, and the first kit you
                ever put together. Keep it specific and personal; that&apos;s
                what businesses and donors respond to.]
              </em>
            </p>
            <p>
              What started small is growing into {siteConfig.shortName}: a
              volunteer-run effort to make giving easier and more useful, one
              care kit at a time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="tag">What we stand for</span>
            <h2 style={{ marginTop: 8 }}>The values behind every kit.</h2>
          </Reveal>

          <RevealGroup className={styles.values}>
            {VALUES.map((v) => (
              <RevealItem key={v.title} className={`card ${styles.valueCard}`}>
                <span className={styles.valueIcon}>
                  <Icon name={v.icon} size={22} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className={`card ${styles.statusCard}`}>
            <span className={styles.statusIcon}>
              <Icon name="calendar" size={20} />
            </span>
            <div>
              <h3>Where we are right now</h3>
              <p>
                {siteConfig.shortName} is a newly founded, volunteer-run
                effort. We&apos;re currently working toward formal nonprofit
                (501(c)(3)) registration — until that&apos;s complete,
                donations support our work directly but aren&apos;t yet
                tax-deductible. We&apos;ll update this page the moment that
                changes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
