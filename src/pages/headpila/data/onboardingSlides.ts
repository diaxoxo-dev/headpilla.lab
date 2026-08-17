export interface OnboardingSlide {
  image: string;
  title: string;
  description: string;
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    image: '/headpila/images/onboarding-1-character.png',
    title: '두통이 오기 전에\n먼저 알아채요',
    description: '생체 신호를 분석해 두통 전조를 감지하고,\n비약물 중재로 일상을 지켜드립니다.',
  },
  {
    image: '/headpila/images/onboarding-2-character.png',
    title: '두통이 오기 전에\n먼저 알아채요',
    description: '생체 신호를 분석해 두통 전조를 감지하고,\n비약물 중재로 일상을 지켜드립니다.',
  },
];
