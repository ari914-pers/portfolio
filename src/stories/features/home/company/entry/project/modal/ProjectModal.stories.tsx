import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Button } from '@mui/material';
import {
  IBusiessContent,
  IDevelopEnv,
  IFeedback,
  IResponsiblePhase,
} from '../../../../../../../../@types/generated/contentful';
import ProjectModal from '@/features/home/company/entry/project/modal/ProjectModal';
import useModalControl from '@/hooks/useModalControl';
import { Document } from '@contentful/rich-text-types';

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

const dummyCollectionEntry = {
  fields: {
    title: 'テキストテキスト',
    note: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
};

const dummyFeedback = {
  fields: {
    title: 'テストテスト',
    description: dummyDoc,
    category: '取り組み',
  },
};

const dummyFields = {
  fields: {
    img_icon: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
        },
      },
    },
    name: 'Zenn.dev',
    memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
};

const dummyDevEnv = {
  fields: {
    os: 'AWS',
    languages: [dummyFields, dummyFields, dummyFields],
    frameworks: [dummyFields, dummyFields],
    tools: [dummyFields],
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Project/Modal/ProjectModal',
  component: ProjectModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof ProjectModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectModal> = (args) => {
  const { isOpen, handleClose, handleOpen } = useModalControl();

  return (
    <Box width={800}>
      <Button onClick={handleOpen}>Click</Button>
      <ProjectModal {...args} isOpen={isOpen} handleClose={handleClose} />
    </Box>
  );
};

export const Normal = Template.bind({});

Normal.args = {
  entry: {
    title: 'テストテスト',
    summary: dummyDoc as Document,
    joined_at: '2023-02-14T08:28:19.934Z',
    left_at: '2023-05-14T08:28:19.934Z',
    responsible_phases: [
      dummyCollectionEntry,
      dummyCollectionEntry,
    ] as IResponsiblePhase[],
    business_contents: [
      dummyCollectionEntry,
      dummyCollectionEntry,
    ] as IBusiessContent[],
    feedbacks: [dummyFeedback, dummyFeedback] as IFeedback[],
    develop_envs: dummyDevEnv as unknown as IDevelopEnv,
  },
};

// export const withoutTitle = Template.bind({});
//
// withoutTitle.args = {
// entry: {
// fields: {
// note: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
// },
// } as IResponsiblePhase,
// };
//
// export const withUndefined = Template.bind({});
//
// withUndefined.args = {
// entry: undefined,
// };
