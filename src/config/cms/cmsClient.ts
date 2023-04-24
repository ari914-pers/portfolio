import { createClient } from 'contentful';

const cmsClient = createClient({
  space: process.env.CMS_SPACE_ID ?? '',
  accessToken: process.env.CMS_ACCESS_TOKEN ?? '',
});

export default cmsClient;
