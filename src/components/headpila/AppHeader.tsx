import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';

interface AppHeaderProps {
  variant: 'greeting' | 'back';
  title?: string;
  backTo?: string;
  backLabel?: string;
}

export function AppHeader({ variant, title, backTo = '/headpila/home', backLabel = '홈으로' }: AppHeaderProps) {
  return (
    <div className={styles.header}>
      {variant === 'back' ? (
        <Link to={backTo} className={styles.backLink}>
          <span className={styles.chevron} aria-hidden="true">
            ‹
          </span>
          {backLabel}
        </Link>
      ) : (
        <span className={styles.greeting}>{title}</span>
      )}
      <span className={styles.logo}>
        <span className={styles.logoHead}>Head</span>
        <span className={styles.logoPila}>Pila</span>
      </span>
    </div>
  );
}
