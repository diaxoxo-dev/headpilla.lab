import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadPilaScreen } from '../../../components/headpila/HeadPilaScreen';
import { PrimaryButton } from '../../../components/headpila/PrimaryButton';
import { onboardingSlides } from '../data/onboardingSlides';
import styles from './OnboardingScreen.module.css';

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const slide = onboardingSlides[index];
  const isLast = index === onboardingSlides.length - 1;

  function handleNext() {
    if (isLast) {
      navigate('/headpila/home');
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <HeadPilaScreen>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <div className={styles.imageWrap}>
          <img src={slide.image} alt="" className={styles.image} />
        </div>

        <div className={styles.dots}>
          {onboardingSlides.map((_, i) => (
            <span key={i} className={i === index ? styles.dotActive : styles.dot} />
          ))}
        </div>

        <p className={styles.desc}>
          {slide.description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <PrimaryButton className={styles.cta} onClick={handleNext}>
          다음
        </PrimaryButton>
      </div>
    </HeadPilaScreen>
  );
}
