import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, mkdirSync, readdirSync, readFileSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// 원본 office-template.html은 저장소 루트의 .claude/pipeline-status/*.json을
// fetch로 읽어 렌더링한다. 이 프로젝트는 저장소 루트 하위 폴더에 살고 있으므로,
// 개발 서버에서는 미들웨어로, 빌드 시에는 dist로 복사해 같은 경로(/.claude/pipeline-status/*)를 유지한다.
const STATUS_SRC = resolve(__dirname, '../.claude/pipeline-status');

function pipelineStatusStatic() {
  return {
    name: 'pipeline-status-static',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use('/.claude/pipeline-status', (req, res, next) => {
        const file = resolve(STATUS_SRC, '.' + (req.url ?? ''));
        if (file.startsWith(STATUS_SRC) && existsSync(file)) {
          res.setHeader('Content-Type', 'application/json');
          res.end(readFileSync(file));
        } else {
          next();
        }
      });
    },
    closeBundle() {
      if (!existsSync(STATUS_SRC)) return;
      const dest = resolve(__dirname, 'dist/.claude/pipeline-status');
      mkdirSync(dest, { recursive: true });
      for (const f of readdirSync(STATUS_SRC)) {
        copyFileSync(resolve(STATUS_SRC, f), resolve(dest, f));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), pipelineStatusStatic()],
  server: {
    fs: { allow: ['..'] },
  },
});
