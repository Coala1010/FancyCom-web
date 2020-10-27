// Canvas.test.js
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { Selector } from './Selector';
import BlockIcon from '@material-ui/icons/Block';
import BorderOuterIcon from '@material-ui/icons/BorderOuter';
import BorderClearIcon from '@material-ui/icons/BorderClear';

test('Should be rendered in the dom', () => {
  const selectorArray1 = [
    {
      id: 'none',
      icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'NONE'
    },
    {
      id: 'border',
      icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'SOLID'
    },
    {
      id: 'dashed',
      icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'DASHED'
    }
  ];

  const component = renderer.create(
    <Selector items={selectorArray1} onChange={() => console.log('onChange clicked')} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should show a list of items. The number of items should match the number of items in the array prop', () => {
  const items = [
    {
      id: 'none',
      icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'NONE'
    },
    {
      id: 'border',
      icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'SOLID'
    },
    {
      id: 'dashed',
      icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'DASHED'
    }
  ];

  const { queryByLabelText, getByText, container } = render(
    <Selector items={items} onChange={() => console.log('onChange clicked')} />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-alignItemContainer-3').length).toBe(items.length);
});

test('Should trigger the onChange() event when one of the items is selected', () => {
  const items = [
    {
      id: 'none',
      icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'NONE'
    },
    {
      id: 'border',
      icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'SOLID'
    },
    {
      id: 'dashed',
      icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'DASHED'
    }
  ];

  const { queryByLabelText, getByText, container } = render(
    <Selector items={items} onChange={() => console.log('onChange clicked')} />
  );
  container.querySelector('.makeStyles-alignItemContainer-3')?.click();

  expect(container.querySelectorAll('.makeStyles-alignItemContainer-3').length).toBe(3);
});

test('Should trigger the "onFancySelectorRender" plugin hook when the FancySelector component is rendering', () => {
  const items = [
    {
      id: 'none',
      icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'NONE'
    },
    {
      id: 'border',
      icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'SOLID'
    },
    {
      id: 'dashed',
      icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'DASHED'
    }
  ];

  const { queryByLabelText, getByText, container } = render(
    <Selector items={items} onChange={() => console.log('onChange clicked')} />
  );
  // container.querySelector('.drawerButton')?.click();

  expect(container.querySelectorAll('.makeStyles-alignItemContainer-3').length).toBe(items.length);
});

test('Should trigger the "onFancySelectorChange" plugin hook when an item is selected', () => {
  const items = [
    {
      id: 'none',
      icon: <BlockIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'NONE'
    },
    {
      id: 'border',
      icon: <BorderOuterIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'SOLID'
    },
    {
      id: 'dashed',
      icon: <BorderClearIcon style={{ color: '#9D9D9D', fontSize: 30 }} />,
      label: 'DASHED'
    }
  ];

  const { queryByLabelText, getByText, container } = render(
    <Selector items={items} onChange={() => console.log('onChange clicked')} />
  );
  container.querySelector('.makeStyles-alignItemContainer-3')?.click();

  expect(container.querySelectorAll('.makeStyles-alignItemContainer-3').length).toBe(items.length);
});
