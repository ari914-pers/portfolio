import {
  Grid,
  LinearProgress,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import { ISkillsetFields } from '../../../../../@types/generated/contentful';
import IconBox from '@/components/atoms/wrappers/IconBox';
import { DIR_PATH_TO_ASSET_IMAGE } from '@/consts/app.const';
import Button from '@/components/atoms/inputs/buttons';
import { HelpOutline } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import Stack from '@/components/atoms/wrappers/Stack';
import useModalControl from '@/hooks/useModalControl';
import SkillSetModal from '../component/SkillSetModal';

type SkillSetEntryProps = {
  entry: ISkillsetFields;
};

const SkillSetEntry: FC<SkillSetEntryProps> = ({ entry }) => {
  const { t } = useTranslation('home');

  const { isOpen, handleOpen, handleClose } = useModalControl();
  const matchWithSmartphoneWidth = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('sm')
  );

  const btnMoreInfo = (
    <Button onClick={handleOpen} variant='outlined'>
      <>
        {!matchWithSmartphoneWidth && (
          <Typography
            variant='spanRegular'
            sx={{ marginRight: genOneSideSpacingCssProperty('xs') }}
          >
            {entry.period_work_experience}
          </Typography>
        )}
        <HelpOutline />
      </>
    </Button>
  );

  const tooltipTitleOnIcon = entry.name && entry.memo && (
    <Stack designProps={{}} direction='column' alignItems='center'>
      <Typography variant='spanHeading'>{entry.name}</Typography>
      <Typography variant='spanRegular'>{entry.memo}</Typography>
    </Stack>
  );

  return (
    <>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        spacing={genOneSideSpacingCssProperty('sm')}
        mb={genOneSideSpacingCssProperty('md')}
      >
        <Grid item xs={2}>
          <IconBox
            size='lg'
            srcURL={
              entry.img_icon?.fields.file.url
                ? new URL(entry.img_icon?.fields.file.url)
                : `${DIR_PATH_TO_ASSET_IMAGE}/no_image.png`
            }
            label={entry.name}
            tooltipTitle={tooltipTitleOnIcon}
          />
        </Grid>
        <Grid item xs={6}>
          <Tooltip
            title={`${t('home.skill_set.proficiency_percentage')}: ${entry.proficiency_percentage
            }`}
          >
            <LinearProgress
              value={entry.proficiency_percentage}
              variant='determinate'
            />
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          {btnMoreInfo}
        </Grid>
      </Grid>
      <SkillSetModal entry={entry} isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default SkillSetEntry;
