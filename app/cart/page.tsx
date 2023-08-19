'use client';

import CartItem from '../components/CartItem';
import MainLayout from '../layouts/MainLayout';

const page = () => {
  const product = {
    id: 1,
    title: 'Brown lether',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iste itaque cupiditate nulla corrupti sed quisquam odit dolorum asperiores esse eos quidem error fuga nesciunt? Accusantium, culpa voluptas. Praesentium, ducimus.',
    url: 'https://picsum.photos/id/7',
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-fit mx-auto mb-8 min-h-fit">
          <div className="text-2xl font-bold my-4">Shopping cart</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-3/5">
              <CartItem key={product.id} product={product} />
            </div>

            <div
              id="GoToCheckout"
              className="md:w-[33%] absolute top-0 right-0 m-2"
            >
              <div className="bg-white p-4 border">
                <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                  Go to checkout
                </button>

                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                  <div>Items (3)</div>
                  <div>$12.99</div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>Shippring: </div>
                  <div>Free</div>
                </div>
                <div className="border-b border-gray-300" />
                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                  <div>Subtotal</div>
                  <div>$12.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default page;
