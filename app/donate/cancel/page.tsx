import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site-config";
import styles from "../status.module.css";

export const metadata: Metadata = {
  title: `Donation Canceled — ${siteConfig.name}`,
};

export default function DonateCancelPage() {
  return (
    <section className="section">
      <div className={`container ${styles.statusWrap}`}>
        <span className={styles.statusIcon}>
          <Icon name="box" size={28} />
        </span>
        <h1>No worries — nothing was charged.</h1>
        <p className="lede" style={{ margin: "0 auto" }}>
          Your card was not charged. You can try again, or use Venmo or
          Zelle instead.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/donate" className="btn btn--primary">
            Try again
          </Link>
          <Link href="/" className="btn btn--ghost">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
