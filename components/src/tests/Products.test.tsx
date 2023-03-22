import { Products } from '../components';
import { render, screen } from '@testing-library/react';

import IProduct from '../Types/Product';

describe('products test', () => {
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

  test('one', () => {
    render(<Products />);
    const title = screen.queryByText(testProduct.title);
    expect(title).toBeNull;
  });
});
