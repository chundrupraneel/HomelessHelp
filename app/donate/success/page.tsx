import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getStripe } from "@/lib/stripe";
import { siteConfig } from "@/lib/site-config";
import styles from "../status.module.css";

export const metadata: Metadata = {
  title: `Thank You — ${siteConfig.name}`,
};

export default async function DonateSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  let amount: string | null = null;

  const stripe = getStripe();
  if (stripe && session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.amount_total) {
        amount = (session.amount_total / 100).toLocaleString("en-US", {
          style: "currency",
          currency: session.currency ?? "usd",
        });
      }
    } catch {
      amount = null;
    }
  }

  return (
    <section className="section">
      <div className={`container ${styles.statusWrap}`}>
        <span className={`${styles.statusIcon} ${styles.statusIconGood}`}>
          <Icon name="heart" size={28} />
        </span>
        <h1>Thank you{amount ? ` for your ${amount} donation` : ""}!</h1>
        <p className="lede" style={{ margin: "0 auto" }}>
          Your support goes straight into the next round of care kits.
          We&apos;re grateful you&apos;re part of this.
        </p>
        <Link href="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
