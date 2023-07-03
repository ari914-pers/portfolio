import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import useModalControl from '@/hooks/useModalControl';
import { FC } from 'react';
import { ICompanyFields } from '../../../../../../@types/generated/contentful';
import Stack from '@/components/atoms/wrappers/Stack';
import StringEntry from '@/features/home/common/entry/StringEntry';
import DurationEntry from '@/features/home/common/entry/DurationEntry';
import { isEmpty } from 'lodash';
import DocumentEntry from '@/features/home/common/entry/DocumentEntry';
import { useTranslation } from 'next-i18next';

type CompanyModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & { entry: ICompanyFields };

const CompanyModal: FC<CompanyModalProps> = ({
  isOpen,
  handleClose,
  entry: {
    description,
    joined_at,
    left_at,
    business_content,
    number_employees,
    occupation,
    listing,
  },
}) => {
  const { t } = useTranslation('home');

  return (
    <BaseModal
      modalTitle={t('home.company.modal.title')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Stack designProps={{}} spacing='md'>
        <StringEntry
          fieldName={t('home.company.description')}
          fieldVal={description}
        />
        {joined_at && (
          <DurationEntry
            fieldName={t('home.company.tenure')}
            from={new Date(joined_at)}
            to={left_at ? new Date(left_at) : new Date()}
          />
        )}
        {!isEmpty(business_content) && (
          <DocumentEntry
            fieldName={t('home.company.business_content')}
            fieldVal={business_content}
          />
        )}
        {number_employees && (
          <StringEntry
            fieldName={t('home.company.number_employees')}
            fieldVal={number_employees}
          />
        )}
        {!isEmpty(occupation) && (
          <StringEntry
            fieldName={t('home.company.occupation')}
            fieldVal={occupation.fields.title}
          />
        )}
        <StringEntry
          fieldName={t('home.company.listing.title')}
          fieldVal={
            listing
              ? t('home.company.listing.true')
              : t('home.company.listing.false')
          }
        />
      </Stack>
    </BaseModal>
  );
};

export default CompanyModal;
