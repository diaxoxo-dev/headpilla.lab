const FLOW_DONE_KEY = 'headpila:flow-done';

export function isFlowDone(): boolean {
  return sessionStorage.getItem(FLOW_DONE_KEY) === '1';
}

export function markFlowDone(): void {
  sessionStorage.setItem(FLOW_DONE_KEY, '1');
}
