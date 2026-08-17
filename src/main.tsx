import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { OfficePipelinePage } from './pages/OfficePipelinePage';
import { HeadPilaRoutes } from './pages/headpila/routes';
import './styles/tokens.css';
import './styles/headpila-tokens.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 이 배포(headpila.lab.smooth.ai.kr)의 목적은 HeadPila 앱이라 루트는 바로 그쪽으로 보낸다.
            OfficePipelinePage는 .claude/pipeline-status/*.json(레포 바깥, 배포에 미포함)을 읽으므로
            이 배포에서는 /dashboard.html로 직접 접근해도 정상 동작하지 않는다 — 로컬 전용 화면. */}
        <Route path="/" element={<Navigate to="/headpila" replace />} />
        <Route path="/dashboard.html" element={<OfficePipelinePage />} />
        <Route path="/headpila/*" element={<HeadPilaRoutes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
