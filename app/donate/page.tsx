import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { DonateForm } from "@/components/DonateForm";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./donate.module.css";

export const metadata: Metadata = {
  title: `Donate — ${siteConfig.name}`,
  description: "Donate by card, Venmo, or Zelle to help fund care kits for people experiencing homelessness.",
};

export default function DonatePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <Reveal>
              <span className="eyebrow">Donate</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 style={{ marginTop: 14 }}>Fund the next care kit.</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede" style={{ marginTop: 16 }}>
                Every donation goes straight into supplies — hygiene
                products, food, and warmth — for kits delivered to local
                shelters.
              </p>
            </Reveal>
            <Reveal delay={0.22} className={styles.disclosure}>
              <span className={styles.disclosureIcon}>
                <Icon name="check" size={16} />
              </span>
              <p>
                {siteConfig.shortName} is not yet a registered 501(c)(3), so
                donations made here are <strong>not currently
                tax-deductible</strong>. Every dollar still goes directly
                toward kit supplies — no paid staff, no overhead.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className={`card ${styles.cardPanel}`}>
            <h3>Donate with card</h3>
            <DonateForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal style={{ marginBottom: 36 }}>
            <span className="tag">Other ways to give</span>
            <h2 style={{ marginTop: 10 }}>Prefer Venmo or Zelle?</h2>
          </Reveal>

          <div className={styles.manualGrid}>
            <Reveal className={`card ${styles.manualCard}`}>
              <span className={styles.manualIcon}>
                <Icon name="phone" size={20} />
              </span>
              <h3>Venmo</h3>
              <p>Scan to donate via Venmo:</p>
              <Image
                src="/venmo-qr.jpg"
                alt="Venmo QR code"
                width={180}
                height={180}
                className={styles.qrCode}
              />
              <p style={{ fontSize: "0.85rem" }}>
                Please include your email in the note so we can say thanks.
              </p>
            </Reveal>

            <Reveal delay={0.08} className={`card ${styles.manualCard}`}>
              <span className={styles.manualIcon}>
                <Icon name="mail" size={20} />
              </span>
              <h3>Zelle</h3>
              <p>Send your donation directly via Zelle to:</p>
              <span className={styles.handle}>{siteConfig.zelle}</span>
              <p style={{ fontSize: "0.85rem" }}>
                Please include your email in the memo so we can say thanks.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={`card ${styles.itemsCard}`}>
            <span className="tag">Giving goods instead?</span>
            <h2>Donate items, not just cash.</h2>
            <p>
              Toiletries, socks, snacks, and water are always welcome. See
              the full wishlist and how to arrange a drop-off.
            </p>
            <Link href="/care-kits" className="btn btn--forest">
              View the wishlist
              <Icon name="arrow" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
