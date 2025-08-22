import type { Forklift } from '../types/fortlift';

const API_BASE = 'https://localhost:7239/api/forklifts';

export async function fetchForklifts(): Promise<Forklift[]> {
  const response = await fetch(API_BASE);
  if (!response.ok) throw new Error('Failed to fetch forklifts');
  return await response.json();
}

export async function importForklifts(file: File): Promise<void> {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(`${API_BASE}/import`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) throw new Error('Failed to import forklifts');
}

