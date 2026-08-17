import type { CSSProperties, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  radius?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  className?: string;
}

export function Card({ children, radius = 'md', style, className }: CardProps) {
  const radiusClass = radius === 'sm' ? styles.sm : radius === 'lg' ? styles.lg : styles.md;
  return (
    <div className={[styles.card, radiusClass, className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}
