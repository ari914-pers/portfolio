import { EntityORFieldOrUndefined } from '@/types/cms.type';
import React, { MouseEventHandler } from 'react';
import { flow, identity, isUndefined, size, slice, toString } from 'lodash';
import {
  MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME,
  NO_SIZE_CONTENT_COLLECTION,
} from '@/consts/features/home.const';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { BaseCardProps } from '@/types/components/common.type';
import Renderer from '@/components/atoms/display/Renderer';
import { useTranslation } from 'next-i18next';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import Container from '@/components/atoms/wrappers/Container';
import MarkAndMore from '@/components/atoms/display/MarkAndMore';
import { EntryRendererComp } from '@/types/features/home.type';
import Stack from '@/components/atoms/wrappers/Stack';
import { DimensionKey } from '@/types/style.type';
import { genSizingPropertyVal } from '@/utils/style.util';
import Image from 'next/image';
import { DIR_PATH_TO_ASSET_IMAGE } from '@/consts/app.const';

type BaseCardForCollectionContentsProps<
  T extends EntityORFieldOrUndefined,
  isRenderedWithCard extends boolean
> = {
  collection: T[];
  isRenderedWithCard: isRenderedWithCard;
  cardTitle?: isRenderedWithCard extends true ? BaseCardProps['title'] : null;
  cardDescription?: isRenderedWithCard extends true
  ? BaseCardProps['description']
  : null;
  cardBtnActionClickHandler?: MouseEventHandler<HTMLButtonElement>;
  EntryRenderer: EntryRendererComp<T>;
  itemSpacing?: DimensionKey;
  processFunc?: (entries: T[]) => T[];
};

const BaseRendererForCollectionContents = <
  U extends EntityORFieldOrUndefined,
  isRenderedWithCard extends boolean
>({
  collection,
  isRenderedWithCard,
  cardTitle,
  cardDescription,
  cardBtnActionClickHandler,
  EntryRenderer,
  itemSpacing,
  processFunc,
}: BaseCardForCollectionContentsProps<U, isRenderedWithCard>) => {
  const { t } = useTranslation(['common']);
  const collectionSize = size(collection);

  if (collectionSize === NO_SIZE_CONTENT_COLLECTION || isUndefined(collection))
    return (
      <Stack designProps={{}} alignItems='center'>
        <Image
          src={`${DIR_PATH_TO_ASSET_IMAGE}/empty_data.jpg`}
          width={200}
          height={200}
          alt='NO DATA'
        />
      </Stack>
    );

  return isRenderedWithCard ? (
    <BaseCard
      title={cardTitle}
      description={cardDescription}
      btnAction={
        collectionSize > MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME ? (
          <LabeledButton
            buttonProps={{ onClick: cardBtnActionClickHandler ?? identity }}
          >
            {t('common.label.btnDetail', { ns: 'common' })}
          </LabeledButton>
        ) : null
      }
    >
      <Stack designProps={{}} direction='column' spacing={itemSpacing}>
        <Renderer
          entries={collection}
          processEntries={flow(processFunc ?? identity, (entries) =>
            slice(
              entries,
              NO_SIZE_CONTENT_COLLECTION,
              MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME
            )
          )}
          iteratee={(entry, index) => (
            <EntryRenderer entry={entry} key={toString(index)} />
          )}
        />
        {collectionSize > MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME && (
          <Container designProps={{}}>
            <MarkAndMore />
          </Container>
        )}
      </Stack>
    </BaseCard>
  ) : (
    <>
      <Renderer
        entries={collection}
        processEntries={flow(processFunc ?? identity, (entries) =>
          slice(
            entries,
            NO_SIZE_CONTENT_COLLECTION,
            MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME
          )
        )}
        iteratee={(entry, index) => (
          <EntryRenderer entry={entry} key={toString(index)} />
        )}
      />
      {collectionSize > MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME && (
        <Stack designProps={{}} alignItems='center'>
          <MarkAndMore />
          {cardBtnActionClickHandler && (
            <LabeledButton
              buttonProps={{
                onClick: cardBtnActionClickHandler,
                MUIButtonProps: {
                  sx: { width: genSizingPropertyVal(25, '%') },
                },
              }}
            >
              {t('common.label.btnDetail', { ns: 'common' })}
            </LabeledButton>
          )}
        </Stack>
      )}
    </>
  );
};

export default BaseRendererForCollectionContents;
