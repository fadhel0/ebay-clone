'use client';

import CheckoutItem from '../components/CheckoutItem';
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
        <div id="CheckoutPage" className="mt-4 max-w-5xl mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4 ">Checkout</div>
          <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
            <div className="w-[65%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-xl font-semibold mb-2">
                  Shipping Address
                </div>
                <div>
                  <ul className="text-sm mt-2">
                    <li>Test: test</li>
                    <li>Test: test</li>
                    <li>Test: test</li>
                    <li>Test: test</li>
                    <li>Test: test</li>
                  </ul>
                </div>
              </div>

              <div id="Items" className="bg-white rounded-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default page;
