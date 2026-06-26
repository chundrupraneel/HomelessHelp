"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import styles from "./DonateForm.module.css";

const PRESETS = [15, 25, 50, 100];

export function DonateForm() {
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeAmount = custom ? Number(custom) : selected;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!activeAmount || activeAmount < 1) {
      setError("Enter an amount of at least $1.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(activeAmount * 100) }),
      });
      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error ?? "Something went wrong. Please try Venmo or Zelle below.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Couldn't reach the payment processor. Please try Venmo or Zelle below.");
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.amountGrid}>
        {PRESETS.map((amt) => (
          <button
            type="button"
            key={amt}
            className={`${styles.amountBtn} ${selected === amt && !custom ? styles.amountBtnActive : ""}`}
            onClick={() => {
              setSelected(amt);
              setCustom("");
            }}
          >
            ${amt}
          </button>
        ))}
      </div>

      <div className={styles.customRow}>
        <span className={styles.customPrefix}>$</span>
        <input
          type="number"
          inputMode="decimal"
          min={1}
          step="1"
          placeholder="Custom amount"
          className={styles.customInput}
          value={custom}
          onChange={(e) => {
            setCustom(e.target.value);
            setSelected(null);
          }}
        />
      </div>

      {error && <span className={styles.error}>{error}</span>}

      <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
        {loading ? "Redirecting…" : `Donate $${activeAmount || 0} with Card`}
        {!loading && <Icon name="arrow" size={17} />}
      </button>

      <span className={styles.helper}>
        Securely processed by Stripe. You&apos;ll be redirected to complete payment.
      </span>
    </form>
  );
}
