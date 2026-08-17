import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadPilaScreen } from '../../../components/headpila/HeadPilaScreen';
import { AppHeader } from '../../../components/headpila/AppHeader';
import { BottomNavBar } from '../../../components/headpila/BottomNavBar';
import { Card } from '../../../components/headpila/Card';
import { StatCard } from '../../../components/headpila/StatCard';
import { Chip } from '../../../components/headpila/Chip';
import { AlertCard } from '../../../components/headpila/AlertCard';
import { isFlowDone } from '../flowState';
import styles from './HomeScreen.module.css';

const QUICK_MENU = ['수면 기록', '스트레스', '증상 입력', '약 복용'];
const ALERT_DELAY_MS = 10_000;

export function HomeScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isFlowDone()) return;
    const timer = setTimeout(() => navigate('/headpila/detection-guide'), ALERT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <HeadPilaScreen bottomNav={<BottomNavBar />}>
      <AppHeader variant="greeting" title="좋은 아침이에요." />

      <Card radius="sm" className={styles.headscore}>
        <div className={styles.headscoreHeader}>
          <span className={styles.headscoreLabel}>Headscore</span>
          <span className={styles.headscoreSub}>좋은 컨디션이시네요.</span>
        </div>
        <span className={styles.headscoreBadge}>62</span>
        <img src="/headpila/images/home-mascot.png" alt="" className={styles.headscoreMascot} />
      </Card>

      <div className={styles.quickMenu}>
        {QUICK_MENU.map((label) => (
          <Chip key={label}>{label}</Chip>
        ))}
      </div>

      <div className={styles.statGrid}>
        <StatCard label="수면" value="78" sub="양호" />
        <StatCard label="스트레스" value="52" sub="보통" />
        <StatCard label="두통 위험" value="LOW" sub="낮음" />
      </div>

      <div className={styles.alertSection}>
        <div className={styles.alertHeading}>알림</div>
        <AlertCard
          tone="info"
          eyebrow="AI"
          description={'HRV가 높고 수면이 길어요. 오늘 두통 위험이\n낮습니다. 상쾌한 하루를 보내세요.'}
        />
      </div>
    </HeadPilaScreen>
  );
}
