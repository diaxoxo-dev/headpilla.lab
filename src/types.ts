export type StageStatus = 'done' | 'wait' | 'idle' | 'fail';

export interface PipelineStage {
  key: string;
  idx: string;
  name: string;
  device: string;
  status: StageStatus;
  log: string | null;
  kv: [string, string][];
  bubble: string;
  note?: string;
  requiresApproval: boolean;
}

export interface PipelineData {
  pipelineKey: string;
  pipelineName: string;
  cmd: string;
  lastRun: string;
  stages: PipelineStage[];
}
