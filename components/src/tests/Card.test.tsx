import { Card } from '../components';
import { render, screen } from '@testing-library/react';

import IProduct from '../Types/Product';

describe('card testing', () => {
  const testProduct: IProduct = {
    id: 1,
    title: 'Ковш VM J',
    description:
      'Ковш применяется для разработки котлованов, карьеров в грунтах I-IV категорий и разгрузки сыпучих материалов, плотность до 1600 кг/м3 (песок, суглинок, растительный грунт, щебень).',
    price: 81000,
    stock: 11,
    baseVehicle: 'John Deere',
    category: 'Ковши экскаваторные',
    thumbnail: 'https://i.imgur.com/TAHhLzs.jpg',
  };

  beforeAll(() => {});

  test('render component', () => {
    render(<Card product={testProduct} />);
    const card = screen.getByText(testProduct.title);
    const img = screen.getByRole('img');
    const category = screen.getByText(testProduct.category);
    const desc = screen.getByText(testProduct.description);
    const price = screen.getByText(testProduct.price);
    expect(card).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
