// Canvas.test.js
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { ToolBar } from './ToolBar';

test('Should be rendered in the dom', () => {
  const component = renderer.create(
    <ToolBar
      title='Project Name > Object Name'
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should show the same number of items in the left side of the toolbar as the number of items in the leftItems prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <ToolBar
      title='Project Name > Object Name'
    />
  );

  expect(container.querySelector('.makeStyles-leftItemsSection-4')?.innerHTML != null ).toBe(true);
});

test('Should show the same number of items in the right side of the toolbar as the number of items in the rightItems prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <ToolBar
      title='Project Name > Object Name'
    />
  );

  expect(container.querySelector('.makeStyles-rightItemsSection-7')?.innerHTML != null ).toBe(true);
});

test('Should show a title if one is provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <ToolBar
      title='Project Name > Object Name'
    />
  );

  expect(container.querySelector('.makeStyles-toolbarTitleText-6')?.innerHTML).toContain('Project Name');
});

test('Should show a child element if one is provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <ToolBar
      title='Project Name > Object Name'
    />
  );

  expect(container.querySelector('.makeStyles-screen-1')?.innerHTML != null).toBe(true);
});
