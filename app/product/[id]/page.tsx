'use client';

import SimilarProducts from '@/app/components/SimilarProducts';
import MainLayout from '@/app/layouts/MainLayout';

const page = ({ params }: any) => {
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
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <img className="w-2/5 rounded-lg" src={product?.url + '/200'} />
            ) : (
              <div className="w-2/5"></div>
            )}
            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>
              <div className="border-b py-1"></div>
              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:{' '}
                  <span className="font-bold text-base ml-2">New</span>
                </div>
              </div>
              <div className="border-b py-1"></div>
              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:
                    {product?.price ? (
                      <div className="font-bold text-xl ml-2">
                        US ${(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button className="text-white bg-[#3498c9] py-2 px-20 rounded-full cursor-pointer">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="border-b py-1"></div>
              <div className="pt-3">
                <div className="font-semibold pb-1">Description</div>
                <div className="text-sm">{product?.description}</div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default page;
