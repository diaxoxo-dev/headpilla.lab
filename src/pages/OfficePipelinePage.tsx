import { useState } from 'react';
import { usePipelineData } from '../hooks/usePipelineData';
import { StageCard } from '../components/StageCard';
import { DetailPanel } from '../components/DetailPanel';
import { Toast } from '../components/Toast';
import type { PipelineStage, StageStatus } from '../types';
import styles from './OfficePipelinePage.module.css';

const STATUS_LABEL: Record<StageStatus, string> = {
  done: '완료',
  wait: '승인대기',
  idle: '대기',
  fail: '실패',
};

const STATUS_COLOR: Record<StageStatus, string> = {
  done: '#3a7d3a',
  wait: '#b57c1f',
  idle: '#666',
  fail: '#b53c3c',
};

export function OfficePipelinePage() {
  const params = new URLSearchParams(window.location.search);
  const pipelineKey = params.get('pipeline') || 'publish-convert';
  const { data, error } = usePipelineData(pipelineKey);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  function handleDecide(stage: PipelineStage, approved: boolean) {
    setToastMessage(
      approved
        ? `✓ ${stage.name} 승인됨 — 다음 단계 진행`
        : `✕ ${stage.name} 반려됨 — 재작업 대기`,
    );
    setOpenIdx(null);
    // 실제 연동 시: 여기서 status json에 PATCH/저장 로직 연결 필요 (현재는 UI 템플릿 단계)
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!data) {
    return null;
  }

  const openStage = openIdx !== null ? data.stages[openIdx] : null;

  return (
    <>
      <header className={styles.topbar}>
        <div>
          <div className={styles.title}>{data.pipelineName}</div>
          <div className={styles.sub}>
            {data.cmd} · 최근 실행: {data.lastRun}
          </div>
        </div>
        <a className={styles.backLink} href="/dashboard.html">
          ← 전체 대시보드
        </a>
      </header>

      <div className={openStage ? `${styles.stageList} ${styles.panelOpen}` : styles.stageList}>
        {data.stages.map((stage, i) => (
          <StageCard
            key={stage.key}
            stage={stage}
            statusLabel={STATUS_LABEL[stage.status]}
            statusColor={STATUS_COLOR[stage.status]}
            onOpen={() => setOpenIdx(i)}
          />
        ))}
      </div>

      <DetailPanel stage={openStage} onClose={() => setOpenIdx(null)} onDecide={handleDecide} />

      <Toast message={toastMessage} onDone={() => setToastMessage(null)} />
    </>
  );
}
