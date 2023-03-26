import { render, screen } from '@testing-library/react';

import { Form } from './Form';

describe('form test', () => {
  const setCardState = jest.fn();
  test('render component', () => {
    render(<Form setStateCard={setCardState} />);
    expect(screen.getByRole('add-card')).toBeInTheDocument();
    expect(screen.getByText('Who heard it')).toBeInTheDocument();
  });
});
