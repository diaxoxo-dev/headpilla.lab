import styles from './StatCard.module.css';

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  tone?: 'primary' | 'warn';
}

export function StatCard({ label, value, sub, tone = 'primary' }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={`${styles.badge} ${tone === 'warn' ? styles.warn : ''}`}>{value}</div>
      <div className={styles.label}>{label}</div>
      <div className={styles.sub}>{sub}</div>
    </div>
  );
}
