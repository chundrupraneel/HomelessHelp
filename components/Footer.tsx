import Link from "next/link";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/site-config";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              <span className={styles.mark}>
                <Icon name="heart" size={16} strokeWidth={1.8} />
              </span>
              <span className={styles.wordmark}>{siteConfig.shortName}</span>
            </Link>
            <p>{siteConfig.tagline}</p>
          </div>

          <div>
            <div className={styles.heading}>Explore</div>
            <ul className={styles.list}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/care-kits">Care Kits</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Reach Us</div>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={styles.stub}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className={styles.stub}>{siteConfig.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {siteConfig.foundedYear} {siteConfig.name}. All rights reserved.
          </span>
          <span>
            {siteConfig.isRegisteredNonprofit
              ? "A registered 501(c)(3) nonprofit organization."
              : "An independent community effort — not yet a registered 501(c)(3)."}
          </span>
        </div>
      </div>
    </footer>
  );
}
