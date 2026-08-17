import { useEffect, useState } from 'react';
import type { PipelineData } from '../types';

export function usePipelineData(pipelineKey: string) {
  const [data, setData] = useState<PipelineData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/.claude/pipeline-status/${pipelineKey}.json`)
      .then((r) => r.json())
      .then((json: PipelineData) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) {
          setError(`${pipelineKey}.json을 불러오지 못했습니다. 로컬 서버로 열어주세요.`);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [pipelineKey]);

  return { data, error };
}
