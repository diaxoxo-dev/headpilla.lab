import { Route, Routes } from 'react-router-dom';
import { ScreenIndex } from './screens/ScreenIndex';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { DetectionGuideScreen } from './screens/DetectionGuideScreen';
import { InterventionScreen } from './screens/InterventionScreen';

export function HeadPilaRoutes() {
  return (
    <Routes>
      <Route index element={<ScreenIndex />} />
      <Route path="onboarding" element={<OnboardingScreen />} />
      <Route path="home" element={<HomeScreen />} />
      <Route path="detection-guide" element={<DetectionGuideScreen />} />
      <Route path="intervention" element={<InterventionScreen />} />
    </Routes>
  );
}
