import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { FlexTabs, FlexTabsProps } from '../component/FlexTabs';

export default {
  title: 'Fancy/FlexTabs',
  component: FlexTabs
} as Meta;

const Template: Story<FlexTabsProps> = (args) => <FlexTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'flextab',
  tabs: [
    { id: '1', name: 'Builder' },
    { id: '2', name: 'Calendar' },
    { id: '3', name: 'Insights' },
    { id: '4', name: 'Moments' },
    { id: '5', name: 'About' },
    { id: '6', name: 'Terminal' }
  ],
  enableTabDropdowns: true,
  tabActions: [
    { label: 'Rename', onSelect: () => console.log('onSelect clicked') },
    { label: 'Duplicate', onSelect: () => console.log('onDuplicate clicked') },
    { label: 'Delete', onSelect: () => console.log('onDelete clicked') }
  ],
  canRename: true,
  canAdd: true,
  canDrag: false
  // style={{ marginTop: 0 }}
};
