import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloudIcon from '@material-ui/icons/Cloud';
import ExploreIcon from '@material-ui/icons/Explore';
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { TaskCard, TaskCardProps } from '../component/TaskCard';

export default {
  title: 'Fancy/TaskCard',
  component: TaskCard
} as Meta;

const Template: Story<TaskCardProps> = (args) => <TaskCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <CheckCircleIcon style={{ color: 'red', fontSize: 30 }} />,
  title: 'Watch Getting Started Video',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  buttonIsVisible: true,
  // buttonComponent={<View />}
  buttonHref: 'https://www.google.com',
  buttonLabel: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: <CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />,
  title: 'Publish first funnel',
  message: 'Donec aliquet ipsum vel vehicula',
  color: '#2C8AC8',
  href: 'https://www.google.com',
  buttonIsVisible: true,
  buttonLabel: 'Cloud'
};

export const Third = Template.bind({});
Third.args = {
  icon: <ExploreIcon style={{ color: '#E06969', fontSize: 30 }} />,
  title: 'Blog title goes here',
  message: 'Lorem ipsum sit dolor amet...',
  color: '#E06969',
  buttonIsVisible: false
};
