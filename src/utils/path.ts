import { base } from './base';
export const asset = (path: string) => `${base}${path.replace(/^\//, '')}`;