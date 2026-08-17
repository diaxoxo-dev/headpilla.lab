import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadPilaScreen } from '../../../components/headpila/HeadPilaScreen';
import { AppHeader } from '../../../components/headpila/AppHeader';
import { BottomNavBar } from '../../../components/headpila/BottomNavBar';
import { StatCard } from '../../../components/headpila/StatCard';
import { AlertCard } from '../../../components/headpila/AlertCard';
import { PrimaryButton } from '../../../components/headpila/PrimaryButton';
import styles from './DetectionGuideScreen.module.css';

const METHODS = [
  {
    key: 'breathing',
    label: '호흡법',
    duration: '3분',
    enabled: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8.4" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'stretching',
    label: '스트레칭',
    duration: '5분',
    enabled: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3M5 5l2 2M13 13l2 2M15 5l-2 2M7 13l-2 2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: 'eye-rest',
    label: '눈 휴식',
    duration: '2분',
    enabled: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M1.5 10S4.5 4.5 10 4.5 18.5 10 18.5 10 15.5 15.5 10 15.5 1.5 10 1.5 10Z" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="10" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
  },
] as const;

export function DetectionGuideScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('breathing');

  return (
    <HeadPilaScreen bottomNav={<BottomNavBar />}>
      <AppHeader variant="back" />

      <AlertCard
        eyebrow="HeadPila Alert"
        title="두통 전조 신호가 감지됐어요."
        description={'심박 변동성이 낮고 수면이 부족해요.\n지금 중재를 시작하면 두통을 예방할 수 있어요.'}
      />

      <div className={styles.statGrid}>
        <StatCard label="두통 위험도" value="LOW" sub="평소보다 높음" tone="warn" />
        <StatCard label="심박 변동성" value="28" sub="ms (낮음)" />
        <StatCard label="수면" value="5.2" sub="h (부족)" tone="warn" />
        <StatCard label="스트레스" value="52" sub="점 (보통)" />
      </div>

      <div className={styles.methodHeading}>중재 방법 선택</div>
      <div className={styles.methods}>
        {METHODS.map((m) => (
          <button
            key={m.key}
            type="button"
            className={`${styles.method} ${selected === m.key ? styles.methodActive : ''}`}
            onClick={() => setSelected(m.key)}
            disabled={!m.enabled}
          >
            <div className={styles.methodIcon}>{m.icon}</div>
            <div className={styles.methodDuration}>{m.duration}</div>
            <div className={styles.methodLabel}>{m.label}</div>
          </button>
        ))}
      </div>

      <PrimaryButton
        className={styles.cta}
        disabled={selected !== 'breathing'}
        onClick={() => navigate('/headpila/intervention')}
      >
        다음
      </PrimaryButton>
    </HeadPilaScreen>
  );
}
