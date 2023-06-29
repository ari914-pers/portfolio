import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material';
import {
  IFutureGoal,
  IFutureGoalFields,
} from '../../../../../../../../@types/generated/contentful';
import FutureGoalModal from '@/features/home/company/entry/future_goal/modal/FutureGoalModal';
import useModalControl from '@/hooks/useModalControl';
import { set } from 'lodash';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/FutureGoal/Modal/FutureGoalModal',
  component: FutureGoalModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof FutureGoalModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FutureGoalModal> = (args) => {
  const { isOpen, handleClose, handleOpen } = useModalControl();

  return (
    <>
      <Button onClick={handleOpen}>Click</Button>
      <FutureGoalModal {...args} isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

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

const dummyEntry = {
  title: 'テストテストテストテストテスト',
  description: dummyDoc,
  priority: 12,
  occupation: {
    fields: {
      title: 'フロントエンド',
    },
  },
  span_goal: {
    fields: {
      title: '来年の夏まで',
    },
  },
} as IFutureGoalFields;

const dummy2: IFutureGoalFields = {
  ...dummyEntry,
  priority: 1,
  title: 'test2',
};

const dummy3 = set<IFutureGoal>({ ...dummyEntry }, ['fields', 'priority'], 2);

export const Normal = Template.bind({});

Normal.args = {
  entries: [
    dummyEntry,
    dummy2,
    dummyEntry,
    dummyEntry,
    dummy3,
  ] as IFutureGoalFields[],
};

// export const withoutDescription = Template.bind({});
//
// const dummy2: IFutureGoal = {
// ...dummyEntry,
// fields: { description: {} as Document },
// };
//
// withoutDescription.args = {
// entry: dummy2 as IFutureGoal,
// };
//
// export const withStyledPriority = Template.bind({});
//
// const dummy3: IFutureGoal = {
// ...dummyEntry,
// fields: { priority: 1 },
// };
//
// withoutDescription.args = {
// entry: dummy3 as IFutureGoal,
// };
