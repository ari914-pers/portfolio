import StringEntry from '@/features/home/common/entry/StringEntry';
import { calcDateTimeDiff, convertMonthsToYearMonth } from '@/utils/datetime';
import dayjs from 'dayjs';
import { isUndefined } from 'lodash';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';

type DevDurationEntryProps = {
  from?: Date;
  to?: Date;
};

const DevDurationEntry: FC<DevDurationEntryProps> = ({ from, to }) => {
  const { t } = useTranslation(['home']);

  const duration =
    from && to && convertMonthsToYearMonth(calcDateTimeDiff(from, to, 'M'));
  const startFormatted = dayjs(from).format('YYYY/MM');
  const toFormatted = dayjs(to).format('YYYY/MM');

  return !isUndefined(duration) ? (
    <StringEntry
      fieldName={t('home.personal_development.modal.dev_duration')}
      fieldVal={
        duration.years > 0
          ? `${duration.years}年${duration.months}か月 (${startFormatted} ～ ${toFormatted})`
          : `${duration.months}か月 (${startFormatted} ～ ${toFormatted})`
      }
    />
  ) : null;
};

export default DevDurationEntry;
