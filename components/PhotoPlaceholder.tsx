import { Icon } from "./Icon";
import styles from "./PhotoPlaceholder.module.css";

export function PhotoPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`${styles.placeholder} ${className ?? ""}`}>
      <Icon name="box" size={30} className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
