"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/site-config";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/care-kits", label: "Care Kits" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.bar}>
      <div className={`container ${styles.row}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark}>
            <Icon name="heart" size={18} strokeWidth={1.8} />
          </span>
          <span className={styles.wordmark}>{siteConfig.shortName}</span>
        </Link>

        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.linkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/donate" className={`btn btn--primary ${styles.cta}`}>
          Donate
        </Link>

        <button
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <Icon name="close" size={22} /> : <Icon name="menu" size={22} />}
        </button>
      </div>

      <div className={`container ${styles.mobilePanel} ${open ? styles.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/donate"
          className="btn btn--primary"
          style={{ marginTop: 12 }}
          onClick={() => setOpen(false)}
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
