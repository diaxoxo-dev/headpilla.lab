import styles from './CircularTimer.module.css';

interface CircularTimerProps {
  label: string;
  progress: number;
  size?: number;
}

export function CircularTimer({ label, progress, size = 106 }: CircularTimerProps) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.min(1, Math.max(0, progress)));

  return (
    <svg width={size} height={size} className={styles.svg} role="img" aria-label={`타이머 ${label}`}>
      <circle cx={size / 2} cy={size / 2} r={r} className={styles.track} strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        className={styles.progress}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className={styles.label}>
        {label}
      </text>
    </svg>
  );
}
