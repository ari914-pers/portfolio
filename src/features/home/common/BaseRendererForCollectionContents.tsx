import { EntityORFieldOrUndefined } from '@/types/cms.type';
import React, { MouseEventHandler } from 'react';
import { identity, isUndefined, size, slice } from 'lodash';
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
  cardBtnActionClickHandler?: isRenderedWithCard extends true
    ? MouseEventHandler<HTMLButtonElement>
    : null;
  EntryRenderer: EntryRendererComp<T>;
  itemSpacing?: DimensionKey;
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
}: BaseCardForCollectionContentsProps<U, isRenderedWithCard>) => {
  const { t } = useTranslation(['common']);
  const collectionSize = size(collection);

  if (collectionSize === NO_SIZE_CONTENT_COLLECTION || isUndefined(collection))
    return null;

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
          entries={slice(
            collection,
            NO_SIZE_CONTENT_COLLECTION,
            MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME
          )}
          iteratee={(entry) => <EntryRenderer entry={entry} />}
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
        entries={slice(
          collection,
          NO_SIZE_CONTENT_COLLECTION,
          MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME
        )}
        iteratee={(entry) => <EntryRenderer entry={entry} />}
      />
      {collectionSize > MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME && (
        <Container designProps={{}}>
          <MarkAndMore />
        </Container>
      )}
    </>
  );
};

export default BaseRendererForCollectionContents;
