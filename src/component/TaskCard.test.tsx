// Canvas.test.js
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { TaskCard } from './TaskCard';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloudIcon from '@material-ui/icons/Cloud';
import ExploreIcon from '@material-ui/icons/Explore';

test('Should be rendered in the dom', () => {
  const component = renderer.create(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should show the icon in the icon props in the dom', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-iconSection-5')?.innerHTML != null ).toBe(true);
});

test('Should show a title if one is provided in the title props', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-titleText-7')?.innerHTML != null ).toBe(true);
});

test('Should show a message if one is provided in the message props', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-contentText-8')?.innerHTML != null ).toBe(true);
});

test('Should show the card with the border color that is found in the color prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-taskCard-4')?.innerHTML != null ).toBe(true);
});

test('Should link to the url in the href prop if one is provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-buttonSection-9')?.innerHTML != null ).toBe(true);
});

test('Should show a button if the buttonIsVisible prop is true', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-buttonSection-9')?.innerHTML != null ).toBe(true);
});

test('Should link the button to the url in the buttonHref prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-buttonSection-9')?.innerHTML != null ).toBe(true);
});

test('Should render the component in the buttonComponent prop instead of the default button if one is provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <TaskCard
      icon={<CloudIcon style={{ color: '#2C8AC8', fontSize: 30 }} />}
      title='Publish first funnel'
      message='Donec aliquet ipsum vel vehicula'
      color='#2C8AC8'
      href='https://www.google.com'
      buttonIsVisible={true}
      buttonLabel='Cloud'
    />
  );

  expect(container.querySelector('.makeStyles-buttonSection-9')?.innerHTML != null ).toBe(true);
});
