import { useEffect } from 'react';
import type { ReactNode } from 'react';
import styles from './BottomSheet.module.css';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function BottomSheet({ open, onClose, children }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.scrim} role="presentation" onClick={onClose}>
      <div className={styles.sheet} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className={styles.handle} aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}
