import type { PipelineStage } from '../types';
import styles from './StageCard.module.css';

interface StageCardProps {
  stage: PipelineStage;
  statusLabel: string;
  statusColor: string;
  onOpen: () => void;
}

export function StageCard({ stage, statusLabel, statusColor, onOpen }: StageCardProps) {
  return (
    <button type="button" className={styles.card} onClick={onOpen}>
      <div className={styles.head}>
        <div>
          <div className={styles.idx}>
            STAGE {stage.idx}
            {stage.requiresApproval ? ' · 승인필요' : ''}
          </div>
          <div className={styles.name}>{stage.name}</div>
        </div>
        <div className={styles.badge} style={{ color: statusColor }}>
          {statusLabel}
        </div>
      </div>
      <div className={styles.bubble}>{stage.bubble}</div>
    </button>
  );
}
