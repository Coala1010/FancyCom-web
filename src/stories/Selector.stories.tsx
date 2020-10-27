import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import BlockIcon from '@material-ui/icons/Block';
import BorderOuterIcon from '@material-ui/icons/BorderOuter';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

import { Selector, SelectorProps } from '../component/Selector';

const selectorArray1 = [
  {
    id: 'none',
    icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'NONE',
  },
  {
    id: 'border',
    icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'SOLID',
  },
  {
    id: 'dashed',
    icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'DASHED',
  },
];

const selectorArray2 = [
  {
    id: 'none',
    icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'NONE',
  },
  {
    id: 'border',
    icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'SOLID',
  },
  {
    id: 'dashed',
    icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'DASHED',
  },
  {
    id: 'align-center',
    icon: <FormatAlignCenterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'align-center',
  },
  {
    id: 'align-justify',
    icon: <FormatAlignJustifyIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'align-justify',
  },
  {
    id: 'align-left',
    icon: <FormatAlignLeftIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'align-left',
  },
  {
    id: 'align-right',
    icon: <FormatAlignRightIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
    label: 'align-right',
  },
];

export default {
  title: 'Fancy/Selector',
  component: Selector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<SelectorProps> = (args) => <Selector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: selectorArray1,
  onChange: () => console.log('onChange clicked')
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: selectorArray2,
  onChange: () => console.log('onChange clicked')
};
