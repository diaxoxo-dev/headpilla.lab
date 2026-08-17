import styles from './AlertCard.module.css';

interface AlertCardProps {
  eyebrow: string;
  title?: string;
  description: string;
  tone?: 'warn' | 'info';
}

export function AlertCard({ eyebrow, title, description, tone = 'warn' }: AlertCardProps) {
  return (
    <div className={`${styles.card} ${tone === 'info' ? styles.info : ''}`}>
      {tone === 'info' && (
        <span className={styles.avatar} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 3.5A2.5 2.5 0 0 1 3.5 1h7A2.5 2.5 0 0 1 13 3.5v4A2.5 2.5 0 0 1 10.5 10H5l-2.8 2.1a.5.5 0 0 1-.8-.4V10A2.5 2.5 0 0 1 1 7.5v-4Z"
              stroke="#ffffff"
              strokeWidth="1.1666"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      <div className={styles.body}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
