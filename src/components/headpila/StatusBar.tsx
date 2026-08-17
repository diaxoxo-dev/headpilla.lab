import styles from './StatusBar.module.css';

export function StatusBar() {
  return (
    <div className={styles.bar} aria-hidden="true">
      <span className={styles.time}>12:39</span>
      <span className={styles.icons}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.5" fill="currentColor" />
          <rect x="5.5" y="4" width="3" height="8" rx="0.5" fill="currentColor" />
          <rect x="11" y="0" width="3" height="12" rx="0.5" fill="currentColor" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path
            d="M1 4a10 10 0 0 1 14 0M3.5 6.7a6.5 6.5 0 0 1 9 0M6 9.3a3 3 0 0 1 4 0"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" />
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
          <rect x="22" y="4" width="2" height="4" rx="1" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
