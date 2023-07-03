import React, { FC, PropsWithChildren } from 'react';
import Stack from '@/components/atoms/wrappers/Stack';
import { isExternalServiceLinks } from '@/utils/cmsEntry.util';
import Link from '@/components/atoms/navs/links/Link';
import IconBox from '@/components/atoms/wrappers/IconBox';
import { IExternalServiceLink } from '../../../../../@types/generated/contentful';
import Renderer from '@/components/atoms/display/Renderer';
import { processStrIntoURLFormat } from '@/utils/common.util';

type ServiceLinkEntryProp = {
  fieldVal: IExternalServiceLink[] | undefined;
};

const ServiceLinkEntry: FC<PropsWithChildren<ServiceLinkEntryProp>> = ({
  fieldVal,
}) => {
  return isExternalServiceLinks(fieldVal) ? (
    <Stack designProps={{}} direction='row' spacing='md'>
      <Renderer
        entries={fieldVal}
        iteratee={(link) => {
          return (
            <Link href={link.fields.url_link} key={link.fields.url_link}>
              <IconBox
                srcURL={
                  new URL(
                    processStrIntoURLFormat(
                      link.fields.image_logo.fields.file.url
                    )
                  )
                }
                size='lg'
              />
            </Link>
          );
        }}
      />
    </Stack>
  ) : null;
};

export default ServiceLinkEntry;
