import { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string | null;
  onDone: () => void;
}

export function Toast({ message, onDone }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onDone, 2200);
    return () => clearTimeout(timer);
  }, [message, onDone]);

  return (
    <div
      className={message ? `${styles.toast} ${styles.show}` : styles.toast}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
