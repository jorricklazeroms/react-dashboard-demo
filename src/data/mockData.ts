export type TaskRow = {
  id: number;
  name: string;
  owner: string;
  status: 'Active' | 'Done' | 'Blocked';
  dueDate: string;
};

export const stats = [
  { label: 'Projects', value: '12' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Tasks', value: '34' }
];

export const mockData: TaskRow[] = [
  { id: 1, name: 'Client Portal', owner: 'Ava', status: 'Active', dueDate: '2026-02-20' },
  { id: 2, name: 'Billing API', owner: 'Noah', status: 'Done', dueDate: '2026-02-12' },
  { id: 3, name: 'Analytics Sync', owner: 'Mia', status: 'Blocked', dueDate: '2026-02-22' },
  { id: 4, name: 'SomeOtherProject', owner: 'Liam', status: 'Done', dueDate: '2026-02-18' },
  { id: 5, name: 'Auth Hardening', owner: 'Emma', status: 'Active', dueDate: '2026-02-15' }
];
