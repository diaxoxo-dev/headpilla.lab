import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OfficePipelinePage } from './pages/OfficePipelinePage';
import { HeadPilaRoutes } from './pages/headpila/routes';
import './styles/tokens.css';
import './styles/headpila-tokens.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OfficePipelinePage />} />
        <Route path="/dashboard.html" element={<OfficePipelinePage />} />
        <Route path="/headpila/*" element={<HeadPilaRoutes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
