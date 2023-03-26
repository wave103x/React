import { render, screen } from '@testing-library/react';

import { FormCardList } from './FormCardList';

describe('test card list', () => {
  const testData = [
    {
      name: 'Name',
      word: 'gaga',
      date: new Date(),
      heard: 'mom',
      feelings: ['sad'],
      faked: true,
    },
  ];
  test('render component', () => {
    render(<FormCardList {...testData} />);
    const cardList = screen.getByTestId('card-list');
    expect(cardList).toHaveStyle('display: block');
  });
});
