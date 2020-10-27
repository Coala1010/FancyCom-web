import CheckIcon from '@material-ui/icons/Check';
import DraftsIcon from '@material-ui/icons/Drafts';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Timeline, TimelineProps } from '../component/Timeline';

export default {
  title: 'Fancy/Timeline',
  component: Timeline
} as Meta;

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

const timelineArray = [
  {
    title: 'Completed profile data',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <CheckIcon style={{ color: 'white', fontSize: 17 }} />
  },
  {
    title: 'Completed profile data',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <DraftsIcon style={{ color: 'white', fontSize: 17 }} />
  },
  {
    title: 'Completed profile data',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <EditIcon style={{ color: 'white', fontSize: 17 }} />
  },
  {
    title: 'Completed profile data',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <LaunchIcon style={{ color: 'white', fontSize: 17 }} />
  },
  {
    title: 'Completed profile data',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <LockIcon style={{ color: 'white', fontSize: 17 }} />
  },
  {
    title: 'Completed profile data',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <NotificationsActiveIcon style={{ color: 'white', fontSize: 17 }} />
  }
];

export const Primary = Template.bind({});
Primary.args = {
  data: timelineArray,
  type: 'VERTICAL',
  barColor: '#49A6E9',
  lineColor: '#49A6E9'
};
