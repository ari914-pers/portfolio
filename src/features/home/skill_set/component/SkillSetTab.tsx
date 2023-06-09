import { FC, useContext } from 'react';
import {
  ICategorySkillFields,
  ISkillsetFields,
} from '../../../../../@types/generated/contentful';
import { Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from '@mui/lab';
import BaseRendererForCollectionContents from '@/features/home/common/BaseRendererForCollectionContents';
import { filter, toString } from 'lodash';
import SkillSetEntry from '../entry/SkillSetEntry';
import useTabsControl from '@/hooks/useTabsControl';
import { categoriesSkillSet } from '@/consts/features/home.const';
import { renderCollection } from '@/utils/component';
import { SkillSetContext } from '../SkillSetView';
import Renderer from '@/components/atoms/display/Renderer';

type SkillSetTabProps = { isUsedOnHome: boolean };

const SkillSetTab: FC<SkillSetTabProps> = ({ isUsedOnHome = true }) => {
  const { entries } = useContext(SkillSetContext);
  const [currentTab, handleChangeTab] =
    useTabsControl<Exclude<ICategorySkillFields['title'], undefined>>('言語');

  return (
    <TabContext value={currentTab}>
      <TabList
        onChange={handleChangeTab}
        sx={{ bgcolor: (theme) => theme.palette.primary.light }}
        indicatorColor='secondary'
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
      >
        {renderCollection(categoriesSkillSet, (category, index) => (
          <Tab value={category} label={category} key={toString(index)} />
        ))}
      </TabList>
      {renderCollection(categoriesSkillSet, (category, index) => (
        <TabPanel
          value={category}
          key={toString(index)}
          sx={{ bgcolor: (theme) => theme.palette.common.white }}
        >
          {isUsedOnHome ? (
            <BaseRendererForCollectionContents
              collection={filter(
                entries,
                (entry: ISkillsetFields) =>
                  entry.category?.fields.title === category
              )}
              isRenderedWithCard={false}
              EntryRenderer={SkillSetEntry}
              itemSpacing='md'
            />
          ) : (
            <Renderer
              entries={entries}
              iteratee={(entry) => <SkillSetEntry entry={entry} />}
              processEntries={(entries) =>
                filter(
                  entries,
                  (entry: ISkillsetFields) =>
                    entry.category?.fields.title === category
                )
              }
            />
          )}
        </TabPanel>
      ))}
    </TabContext>
  );
};

export default SkillSetTab;
