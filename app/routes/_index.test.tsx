import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import Index from './_index';

describe('Index Route', () => {
  test('it should render', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Index,
      },
    ]);

    render(<RemixStub initialEntries={['/']} />);

    expect(await screen.findByText('Welcome to Remix')).toBeVisible();
  });
});
