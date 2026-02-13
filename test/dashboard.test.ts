import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test } from 'vitest';
import Dashboard from '../src/pages/Dashboard';

test('filters table based on search and status', async () => {
  render(createElement(Dashboard));

  const searchInput = screen.getByPlaceholderText(/search projects/i);
  await userEvent.type(searchInput, 'Client');
  expect(screen.getByText(/Client Portal/i)).toBeInTheDocument();
  expect(screen.queryByText(/SomeOtherProject/i)).toBeNull();

  const statusDropdown = screen.getByRole('combobox');
  await userEvent.selectOptions(statusDropdown, 'Active');
  expect(screen.getByText(/Client Portal/i)).toBeInTheDocument();
});
