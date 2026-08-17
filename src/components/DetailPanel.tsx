import type { PipelineStage } from '../types';
import styles from './DetailPanel.module.css';

interface DetailPanelProps {
  stage: PipelineStage | null;
  onClose: () => void;
  onDecide: (stage: PipelineStage, approved: boolean) => void;
}

export function DetailPanel({ stage, onClose, onDecide }: DetailPanelProps) {
  const open = stage !== null;

  return (
    <aside
      className={open ? `${styles.panel} ${styles.open}` : styles.panel}
      aria-hidden={!open}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="패널 닫기">
        ✕
      </button>
      {stage && (
        <>
          <h3 className={styles.title}>
            STAGE {stage.idx} · {stage.name}
          </h3>
          <div className={styles.log}>
            {stage.log ? `Ref-Log: ${stage.log}` : '로그 없음 (미실행)'}
          </div>
          <div>
            {stage.kv.map(([k, v]) => (
              <div className={styles.kv} key={k}>
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
          {stage.note && <div className={styles.note}>{stage.note}</div>}
          <div className={styles.actions}>
            {stage.requiresApproval ? (
              <>
                <button type="button" className={styles.approve} onClick={() => onDecide(stage, true)}>
                  ✓ 승인
                </button>
                <button type="button" className={styles.reject} onClick={() => onDecide(stage, false)}>
                  ✕ 반려
                </button>
              </>
            ) : (
              <div className={styles.noApproval}>이 단계는 승인이 필요하지 않습니다.</div>
            )}
          </div>
        </>
      )}
    </aside>
  );
}
