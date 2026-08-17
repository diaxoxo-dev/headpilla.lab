import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadPilaScreen } from '../../../components/headpila/HeadPilaScreen';
import { AppHeader } from '../../../components/headpila/AppHeader';
import { Card } from '../../../components/headpila/Card';
import { CircularTimer } from '../../../components/headpila/CircularTimer';
import { PrimaryButton } from '../../../components/headpila/PrimaryButton';
import { BottomSheet } from '../../../components/headpila/BottomSheet';
import { markFlowDone } from '../flowState';
import styles from './InterventionScreen.module.css';

const TOTAL_SECONDS = 3 * 60;

const STEPS = [
  { n: 1, title: '코로 4초 들이쉬기', desc: '배가 먼저 부풀어 오르도록 천천히.' },
  { n: 2, title: '7초 참기', desc: '숨을 멈추고 편안하게 기다립니다.' },
  { n: 3, title: '입으로 8초 내쉬기', desc: '후 소리를 내며 천천히 내쉽니다.' },
];

export function InterventionScreen() {
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (showResult || remaining <= 0) return;
    const timer = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(timer);
  }, [showResult, remaining]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');
  const progress = 1 - remaining / TOTAL_SECONDS;

  function handleComplete() {
    markFlowDone();
    setShowResult(true);
  }

  function handleRestart() {
    setRemaining(TOTAL_SECONDS);
    setShowResult(false);
  }

  return (
    <HeadPilaScreen>
      <AppHeader variant="back" />

      <Card radius="sm" className={styles.timerCard}>
        <div className={styles.timerText}>
          <h2 className={styles.timerTitle}>4-7-8 호흡법</h2>
          <p className={styles.timerDesc}>코로 4초 들이쉬고, 7초 참고, 8초에 걸쳐 천천히 내쉽니다.</p>
          <p className={styles.timerStatus}>들이쉬는 중...</p>
        </div>
        <CircularTimer label={`${mm}:${ss}`} progress={progress} />
      </Card>

      <div className={styles.methodHeading}>중재 방법</div>
      <Card radius="sm" className={styles.stepsCard}>
        {STEPS.map((step, i) => (
          <div key={step.n} className={styles.step} style={{ borderTop: i > 0 ? '1px solid #e0e4ec' : 'none' }}>
            <span className={`${styles.stepBadge} ${styles[`stepBadge${step.n}`]}`}>{step.n}</span>
            <div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </div>
          </div>
        ))}
      </Card>

      <PrimaryButton className={styles.cta} onClick={handleComplete}>
        완료
      </PrimaryButton>

      <BottomSheet open={showResult} onClose={() => setShowResult(false)}>
        <img src="/headpila/images/result-character.png" alt="" className={styles.resultImage} />
        <h2 className={styles.resultTitle}>세션을 완료했어요.</h2>
        <p className={styles.resultDesc}>
          잘 하셨어요! 3분 호흡 세션 완료!
          <br />
          덕분에 위험도가 낮아지고 있어요.
        </p>

        <div className={styles.resultStats}>
          <div className={styles.resultStatCard}>
            <div className={styles.resultBadgeRow}>
              <span className={`${styles.resultBadge} ${styles.warn}`}>High</span>
              <span className={styles.resultBadge}>Mid</span>
            </div>
            <div className={styles.resultStatLabel}>위험도 변화</div>
            <div className={styles.resultStatSub}>위험도가 낮아졌어요!</div>
          </div>
          <div className={styles.resultStatCard}>
            <span className={styles.resultBadgeWide}>3:12</span>
            <div className={styles.resultStatLabel}>세션 시간</div>
            <div className={styles.resultStatSub}>세션을 완료했어요!</div>
          </div>
        </div>

        <div className={styles.resultActions}>
          <PrimaryButton variant="subtle" className={styles.resultRestart} onClick={handleRestart}>
            다시 하기
          </PrimaryButton>
          <PrimaryButton className={styles.resultHome} onClick={() => navigate('/headpila/home')}>
            홈으로
          </PrimaryButton>
        </div>
      </BottomSheet>
    </HeadPilaScreen>
  );
}
