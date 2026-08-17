import type { ButtonHTMLAttributes } from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'subtle';
}

export function PrimaryButton({ variant = 'filled', className, ...rest }: PrimaryButtonProps) {
  const variantClass = variant === 'subtle' ? styles.subtle : styles.filled;
  return <button type="button" className={[styles.btn, variantClass, className].filter(Boolean).join(' ')} {...rest} />;
}
