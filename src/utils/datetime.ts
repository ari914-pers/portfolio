import dayjs, { OpUnitType, QUnitType, extend, locale } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

locale('ja');
extend(duration);
extend(relativeTime);

export const calcDateTimeDiff = (
  from: Date,
  to: Date,
  unit: QUnitType | OpUnitType
) => {
  return dayjs(to).diff(dayjs(from), unit);
};

export const convertMonthsToYearMonth = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return { years, months: remainingMonths };
};
