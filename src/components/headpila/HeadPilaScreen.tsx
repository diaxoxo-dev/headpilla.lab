import type { ReactNode } from 'react';
import { StatusBar } from './StatusBar';
import styles from './HeadPilaScreen.module.css';

interface HeadPilaScreenProps {
  children: ReactNode;
  bottomNav?: ReactNode;
}

export function HeadPilaScreen({ children, bottomNav }: HeadPilaScreenProps) {
  return (
    <div className={styles.viewport}>
      <div className={styles.phone}>
        <div className={styles.blobs} aria-hidden="true">
          <span className={styles.blobLeft} />
          <span className={styles.blobRight} />
        </div>
        <StatusBar />
        <div className={styles.content}>{children}</div>
        {bottomNav}
      </div>
    </div>
  );
}
