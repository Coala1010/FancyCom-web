// Canvas.test.js
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { Timeline } from './Timeline';

import CheckIcon from '@material-ui/icons/Check';
import DraftsIcon from '@material-ui/icons/Drafts';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

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

test('Should be rendered in the dom', () => {
  const component = renderer.create(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should show the same number of events as there are items in the data prop array', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelectorAll('.makeStyles-scheduleItemContainer-3').length).toBe(timelineItems.length);
});

test('Should render each event with a title matching the value in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-title-10')?.innerHTML).toBe('Completed profile data');
});

test('Should render the title for each event with a style matching the value in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-title-10')?.style != null).toBe(true);
});

test('Should render each event with a subtitle matching the value in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-content-11')?.innerHTML).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
});

test('Should render the subtitle for each event with a style matching the value in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-content-11')?.className != null).toBe(true);
});

test('Should render the start and end dates for each event positioned at a location matching the values in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-dateText-8')?.innerHTML != null).toBe(true);
});

test('Should render an icon for each event that matches the value in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-iconCircle-5')?.innerHTML != null).toBe(true);
});

test('Should render the icon for each event with a style matching the iconStyle value in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-iconCircle-5')?.innerHTML != null).toBe(true);
});

test('Should render each activity event with the zIndex order provided in its data array item', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-iconCircle-5')?.innerHTML != null).toBe(true);
});

test('Should show the timeline using the style provided in the style props', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-scheduleItemContainer-3')?.className != null).toBe(true);
});

test('Should show the bars in the provided color', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-barSection-4').className != null).toBe(true);
});

test('Should show the bars using the style provided int he style props', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-timelineBar-6').className != null).toBe(true);
});

test('Should show the lines in the provided color', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-timelineBar-6').className != null).toBe(true);
});

test('Should show the lines using the style provided int he style props', () => {
  const { queryByLabelText, getByText, container } = render(
    <Timeline
      data={timelineItems}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9'
    />
  );

  expect(container.querySelector('.makeStyles-timelineBar-6').className != null).toBe(true);
});
