// Canvas.test.js
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { SlugField } from './SlugField';
import BlockIcon from '@material-ui/icons/Block';
import BorderOuterIcon from '@material-ui/icons/BorderOuter';
import BorderClearIcon from '@material-ui/icons/BorderClear';

const domainPrefixItems = [
  { key: '1', label: 'www.linkedin.com', value: 'www.linkedin.com' },
  { key: '2', label: 'www.google.com', value: 'www.google.com' },
  { key: '3', label: 'www.facebook.com', value: 'www.facebook.com' }
];

test('Should be rendered in the dom', () => {
  const component = renderer.create(
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={domainPrefixItems}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should show the domainPrefix value in the dom', () => {
  const { queryByLabelText, getByText, container } = render(
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={domainPrefixItems}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  );

  expect(container.querySelector('.makeStyles-domainPrefixSection-5')?.innerHTML.includes('linkedin')).toBe(true);
});

test('Should not render a dropdown when the showPrefixDropdown prop is false', () => {
  const { queryByLabelText, getByText, container } = render(
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={domainPrefixItems}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  );

  expect(container.querySelectorAll('.makeStyles-domainPrefixSection-5').length).toBe(1);
});

test('Should show a [copy] button if the showCopyButton prop is true', () => {
  const { queryByLabelText, getByText, container } = render(
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={domainPrefixItems}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  );

  expect(container.querySelector('.makeStyles-buttonsSection-10')?.innerHTML != null).toBe(true);
});

test('Should link the chosen domain prefix and slug value if provided (link icon href should match prop)', () => {
  const { queryByLabelText, getByText, container } = render(
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={domainPrefixItems}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  );

  expect(container.querySelector('.makeStyles-buttonsSection-10')?.innerHTML != null).toBe(true);
});

test('Should render the label prop in the dom if provided', () => {
  const { queryByLabelText, getByText, container } = render(
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={domainPrefixItems}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  );

  expect(container.querySelector('.makeStyles-domainPrefixSection-5')?.innerHTML.includes('linkedin')).toBe(true);
});
