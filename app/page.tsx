'use client';

import CarouselComp from './components/CarouselComp';
import Product from './components/Product';
import MainLayout from './layouts/MainLayout';

export default function Home() {
  const products = [
    {
      id: 1,
      title: 'Brown lether',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iste itaque cupiditate nulla corrupti sed quisquam odit dolorum asperiores esse eos quidem error fuga nesciunt? Accusantium, culpa voluptas. Praesentium, ducimus.',
      url: 'https://picsum.photos/id/7',
      price: 2500,
    },
    {
      id: 2,
      title: 'Blue lether',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iste itaque cupiditate nulla corrupti sed quisquam odit dolorum asperiores esse eos quidem error fuga nesciunt? Accusantium, culpa voluptas. Praesentium, ducimus.',
      url: 'https://picsum.photos/id/20',
      price: 3000,
    },
  ];
  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-fit mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
