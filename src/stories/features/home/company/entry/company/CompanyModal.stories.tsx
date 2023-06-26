import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Button } from '@mui/material';
import { ICompanyFields } from '../../../../../../../@types/generated/contentful';
import CompanyModal from '@/features/home/company/entry/company/CompanyModal';
import useModalControl from '@/hooks/useModalControl';
import { omit } from 'lodash';

const dummyDoc = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'テストテストテストテスト',
          marks: [
            {
              type: 'bold',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'テスト',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'テスト',
          marks: [
            {
              type: 'underline',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value:
            'テスト　テストテスト　テストテストテスト　テストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテスト',
          marks: [],
          data: {},
        },
      ],
    },
  ],
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Company/CompanyModal',
  component: CompanyModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CompanyModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyModal> = (args) => {
  const { isOpen, handleClose, handleOpen } = useModalControl();

  return (
    <Box width={600}>
      <Button onClick={handleOpen}>Click</Button>
      <CompanyModal {...args} isOpen={isOpen} handleClose={handleClose} />
    </Box>
  );
};

const dummyCompany = {
  description: 'ソフトハウス的な会社',
  joined_at: '2021-06-14T08:28:19.934Z',
  left_at: '2023-06-14T08:28:19.934Z',
  business_content: dummyDoc,
  number_employees: 30,
  occupation: { fields: { title: 'プログラマ' } },
  listing: true,
} as ICompanyFields;

export const Normal = Template.bind({});

Normal.args = {
  entry: dummyCompany,
};

export const withoutLetAt = Template.bind({});

const dummyCompany2 = { ...dummyCompany, left_at: undefined };

withoutLetAt.args = {
  entry: dummyCompany2 as ICompanyFields,
};

export const withoutBusinessDoc = Template.bind({});

const dummy3 = omit<ICompanyFields, keyof ICompanyFields>(
  dummyCompany,
  'business_content'
);
withoutBusinessDoc.args = { entry: dummy3 };

export const withoutOccupation = Template.bind({});

const dummy4 = omit<ICompanyFields, keyof ICompanyFields>(
  dummyCompany,
  'occupation'
);
withoutOccupation.args = { entry: dummy4 };
