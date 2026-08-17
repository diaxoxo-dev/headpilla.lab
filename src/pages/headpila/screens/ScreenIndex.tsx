import { Link } from 'react-router-dom';
import styles from './ScreenIndex.module.css';

const LINKS = [
  { to: '/headpila/onboarding', label: '온보딩', desc: '온보딩-1 / 온보딩-2 (2슬라이드)' },
  { to: '/headpila/home', label: '홈', desc: 'Headscore · 통계 · AI 알림' },
  { to: '/headpila/detection-guide', label: '감지안내', desc: '두통 전조 알림 · 중재 방법 선택' },
  { to: '/headpila/intervention', label: '중재페이지', desc: '4-7-8 호흡법 · 완료 시 결과 팝업' },
];

export function ScreenIndex() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>HeadPila 화면 목록</h1>
      <p className={styles.sub}>클릭하면 각 화면으로 바로 이동합니다.</p>
      <ul className={styles.list}>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className={styles.card}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.desc}>{item.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
