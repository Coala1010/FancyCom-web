import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { SlugField, SlugFieldProps } from '../component/SlugField';

export default {
  title: 'Fancy/SlugField',
  component: SlugField
} as Meta;

const Template: Story<SlugFieldProps> = (args) => <SlugField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  domainPrefix: 'www.google.com',
  domainPrefixItems: [
    { key: '1', label: 'www.linkedin.com', value: 'www.linkedin.com' },
    { key: '2', label: 'www.google.com', value: 'www.google.com' },
    { key: '3', label: 'www.facebook.com', value: 'www.facebook.com' }
  ],
  showPrefixDropdown: true,
  placeholder: 'My-slug-name',
  value: '',
  showCopyButton: true,
  showLinkIcon: true
};
