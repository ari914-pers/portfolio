import StringEntry from '@/features/home/common/entry/StringEntry';
import { calcDateTimeDiff, convertMonthsToYearMonth } from '@/utils/datetime';
import dayjs from 'dayjs';
import { DefaultTFuncReturn } from 'i18next';
import { isUndefined } from 'lodash';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';

type DevDurationEntryProps = {
  from?: Date;
  to?: Date;
  fieldName: DefaultTFuncReturn;
};

const DurationEntry: FC<DevDurationEntryProps> = ({ from, to, fieldName }) => {
  const { t } = useTranslation('common');

  const duration =
    from && to && convertMonthsToYearMonth(calcDateTimeDiff(from, to, 'M'));
  const startFormatted = dayjs(from).format('YYYY/MM');
  let toFormatted = dayjs(to).format('YYYY/MM');

  const currentYearAndMonth = dayjs().format('YYYY/MM');
  toFormatted =
    toFormatted === currentYearAndMonth
      ? t('common.date_time.current')
      : toFormatted;

  return !isUndefined(duration) ? (
    <StringEntry
      fieldName={fieldName}
      fieldVal={
        duration.years > 0
          ? `${duration.years}年${duration.months}か月 (${startFormatted} ～ ${toFormatted})`
          : `${duration.months}か月 (${startFormatted} ～ ${toFormatted})`
      }
    />
  ) : null;
};

export default DurationEntry;
