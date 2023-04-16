import { render, screen } from '@testing-library/react';

import { Form } from './Form';

describe('form', () => {
  const setStateCard = jest.fn;
  test('form', () => {
    render(<Form setStateCard={setStateCard} />);
    expect(screen.getByText('Your name')).toBeInTheDocument();
  });
});
