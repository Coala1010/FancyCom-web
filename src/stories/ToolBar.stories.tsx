import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { ToolBar, ToolBarProps } from '../component/ToolBar';

export default {
  title: 'Fancy/ToolBar',
  component: ToolBar
} as Meta;

const Template: Story<ToolBarProps> = (args) => <ToolBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Project Name > Object Name'
};
