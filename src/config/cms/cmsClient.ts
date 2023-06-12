import { createClient } from 'contentful';

const cmsClient = createClient({
  space: process.env.CMS_SPACE_ID ?? '',
  accessToken: process.env.CMS_ACCESS_TOKEN ?? '',
  environment:
    process.env.NODE_ENV === 'development'
      ? process.env.CMS_ENVIRONMENT_DEV
      : process.env.CMS_ENVIRONMENT,
});

export default cmsClient;
