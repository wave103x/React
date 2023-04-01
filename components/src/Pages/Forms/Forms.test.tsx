import { render, screen } from '@testing-library/react';

import { Forms } from './Forms1';

describe('forms test', () => {
  test('render component', () => {
    render(<Forms />);
    const h1 = screen.getByText("Let's dive into the past");
    expect(h1).toBeInTheDocument();
    const confirmMessage = screen.queryByText('Done!');
    expect(confirmMessage).toBeNull();
    const form = screen.getByRole('add-card');
    expect(form).toBeInTheDocument();
  });
});
