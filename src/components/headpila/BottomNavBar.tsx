import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import styles from './BottomNavBar.module.css';

const ICONS: Record<string, ReactNode> = {
  home: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 8 9 2l7 6v8a1 1 0 0 1-1 1h-3v-6H6v6H3a1 1 0 0 1-1-1V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  stats: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 15V9M9 15V3M15 15v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  alerts: (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path
        d="M8 1.5c-2.2 0-4 1.8-4 4v2.3c0 .6-.2 1.2-.6 1.6L2 11h12l-1.4-1.6a2.4 2.4 0 0 1-.6-1.6V5.5c0-2.2-1.8-4-4-4ZM6.5 14a1.5 1.5 0 0 0 3 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  my: (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <circle cx="8" cy="5" r="3.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 16c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  other: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="4" cy="9" r="1.4" fill="currentColor" />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" />
      <circle cx="14" cy="9" r="1.4" fill="currentColor" />
    </svg>
  ),
};

const TABS: { key: keyof typeof ICONS; label: string; to: string | null }[] = [
  { key: 'home', label: 'Home', to: '/headpila/home' },
  { key: 'stats', label: 'MENU', to: null },
  { key: 'alerts', label: 'MENU', to: null },
  { key: 'my', label: 'MY', to: null },
  { key: 'other', label: 'OTHER', to: null },
];

export function BottomNavBar() {
  const location = useLocation();

  return (
    <nav className={styles.nav} aria-label="주요 메뉴">
      {TABS.map((tab) => {
        const active = tab.to !== null && location.pathname === tab.to;
        const content = (
          <>
            <span className={styles.icon}>{ICONS[tab.key]}</span>
            {tab.label}
          </>
        );
        return tab.to ? (
          <Link key={tab.key} to={tab.to} className={`${styles.tab} ${active ? styles.active : ''}`}>
            {content}
          </Link>
        ) : (
          <span key={tab.key} className={styles.tab} aria-disabled="true">
            {content}
          </span>
        );
      })}
    </nav>
  );
}
