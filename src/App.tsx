import React from "react";
import "./App.css";
import DesignComponent from "./component/Design/Design";
import BlockIcon from '@material-ui/icons/Block';
import BorderOuterIcon from '@material-ui/icons/BorderOuter';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloudIcon from '@material-ui/icons/Cloud';
import ExploreIcon from '@material-ui/icons/Explore';

import CheckIcon from '@material-ui/icons/Check';
import DraftsIcon from '@material-ui/icons/Drafts';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import { Selector } from './component/Selector';
import { FlexTabs } from './component/FlexTabs';
import { SlugField } from './component/SlugField';
import { TaskCard } from './component/TaskCard';
import { Timeline } from './component/Timeline';
import { ToolBar } from './component/ToolBar';

const selectorArray = [
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

const tabItems = [
  { id: '1', name: 'Builder' },
  { id: '2', name: 'Calendar' },
  { id: '3', name: 'Insights' },
  { id: '4', name: 'Moments' },
  { id: '5', name: 'About' },
  { id: '6', name: 'Terminal' }
];

const tabActionItems = [
  { label: 'Rename', onSelect: () => console.log('onSelect clicked') },
  { label: 'Duplicate', onSelect: () => console.log('onDuplicate clicked') },
  { label: 'Delete', onSelect: () => console.log('onDelete clicked') }
];

const domainPrefixItems = [
  { key: '1', label: 'www.linkedin.com', value: 'www.linkedin.com' },
  { key: '2', label: 'www.google.com', value: 'www.google.com' },
  { key: '3', label: 'www.facebook.com', value: 'www.facebook.com' }
];

const timelineItems = [
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

function App() {
  return (
    <div>
      {/* <DesignComponent/> */}
      {/* <Selector
        items={selectorArray}
        onChange={() => console.log('onChange clicked')}
      /> */}
      {/* <FlexTabs
        name='flextab'
        tabs={tabItems}
        enableTabDropdowns={true}
        tabActions={tabActionItems}
        canRename={true}
        canAdd={true}
        canDrag={true}
      /> */}
      {/* <SlugField
        domainPrefix='www.google.com'
        domainPrefixItems={domainPrefixItems}
        showPrefixDropdown={true}
        placeholder='My-slug-name'
        value=''
        showCopyButton={true}
        showLinkIcon={true}
      /> */}
      {/* <TaskCard
        icon={<CheckCircleIcon style={{ color: 'red', fontSize: 30 }} />}
        title='Watch Getting Started Video'
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        buttonIsVisible={true}
        // buttonComponent={<View />}
        buttonHref='https://www.google.com'
        buttonLabel='Button'
      />
      <TaskCard
        icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
        title='Publish first funnel'
        message='Donec aliquet ipsum vel vehicula'
        color='#2C8AC8'
        href='https://www.google.com'
        buttonIsVisible={true}
        buttonLabel='Cloud'
      />
      <TaskCard
        icon={<ExploreIcon style={{ color: '#E06969', fontSize: 30 }} />}
        title='Blog title goes here'
        message='Lorem ipsum sit dolor amet...'
        color='#E06969'
        buttonIsVisible={false}
      /> */}
      {/* <Timeline
        data={timelineItems}
        type='VERTICAL'
        barColor='#49A6E9'
        lineColor='#49A6E9'
      /> */}
      <ToolBar
        title='Project Name > Object Name'
      />
    </div>
  );
}

export default App;
