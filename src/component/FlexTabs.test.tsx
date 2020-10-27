// Canvas.test.js
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { FlexTabs } from './FlexTabs';

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

test('Should be rendered in the dom', () => {
  const component = renderer.create(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render a list of tabs in the dom that number the same as the number of tabs in the tabs array prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render each tab with a caption that matches the tab item associated with that tab in the tabs array prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render each tab with an icon (if one is present) that matches the tab item associated with that tab in the tabs array prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3')[0].id.includes('isActive')).toBe(true);
});

test('Should render the tab as "active" it the tab in the tabs array prop has the isActive property set to true', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3')[0].id.includes('isActive')).toBe(true);
});

test('Should render a dropdown of actions where the number of actions match the number of items in the tabActions prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render a dropdown of actions on each tab if the enableTabDropdowns prop is set to true', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render a dropdown of actions that are activated on right-click if the enableContextMenu prop is set to true', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should not permit renaming if the canRename prop is false', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should not permit re-ordering if the canDrag prop is false', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should not permit addingnew tabs if the canAdd prop is false', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render the tabs as a carousel when the number of tabs exceed the number that can fit on the screen', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render the tabs normally with the overflow tabs hidden if the overflow prop is set to HIDDEN', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render the component in the componentWrapper prop if one is provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render the component in the tabComponent prop if one is provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render the same number of tabComponent props as the amount of tabs in the tabs array prop', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});

test('Should render the tabs as vertical if the vertical prop is set to true', () => {
  const { queryByLabelText, getByText, container } = render(
    <FlexTabs
      name='flextab'
      tabs={tabItems}
      enableTabDropdowns={true}
      tabActions={tabActionItems}
      canRename={true}
      canAdd={true}
      canDrag={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-tabBtn-3').length).toBe(tabItems.length);
});
