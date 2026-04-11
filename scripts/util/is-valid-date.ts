import { t } from 'try';
import { Temporal } from 'temporal-polyfill';

export const isValidDate = (date: string): boolean => t(() => Temporal.PlainDate.from(date)).ok;
