'use client';

import Link from 'next/link';
import { CiDeliveryTruck } from 'react-icons/ci';
import MainLayout from '../layouts/MainLayout';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';

export default function TopMenu() {
  //   const [orders, setOrders] = useState([]);
  const orders = [
    {
      id: 1,
      stripe_id: '122212121',
      name: 'test',
      address: 'mksdlgwls,lhf',
      zipcode: 8722,
      city: 'united kingdom',
      country: 'sousse',
      total: 98222,
      orderItem: [
        {
          id: 1,
          title: 'Brown lether',
          url: 'https://picsum.photos/id/7',
        },
      ],
    },
  ];

  return (
    <>
      <MainLayout>
        <div
          id="OrdersPage"
          className="mt-4 max-w-6xl mx-auto px-2 min-h-[50vh]"
        >
          <div className="bg-white w-full p-6 min-h-[150px]">
            <div className="flex items-center text-xl">
              <CiDeliveryTruck className="text-green-500" size={35} />
              <span className="pl-4">Orders</span>
            </div>
            {orders.length < 1 ? (
              <div className="flex items-center justify-center">
                You have no order history
              </div>
            ) : null}

            {orders.map((order) => (
              <div key={order?.id} className="text-sm pl-12">
                <div className="border-b py-1">
                  <div className="pt-2">
                    <span className="font-bold mr-2">Stripe ID:</span>
                    {order?.stripe_id}
                  </div>

                  <div className="pt-2">
                    <span className="font-bold mr-2">Delivery Address:</span>
                    {order?.name}, {order?.address}, {order?.zipcode},{' '}
                    {order?.city}, {order?.country}
                  </div>

                  <div className="pt-2">
                    <span className="font-bold mr-2">Total:</span>£
                    {order?.total / 100}
                  </div>

                  {/* <div className="pt-2">
                    <span className="font-bold mr-2">Order Created:</span>
                    {moment(order?.created_at).calendar()}
                  </div>

                  <div className="py-2">
                    <span className="font-bold mr-2">Delivery Time:</span>
                    {moment(order?.created_at).add(3, 'days').calendar()}
                  </div>

                  <div className="flex items-center gap-4">
                    {order?.orderItem.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <Link
                          className="py-1 hover:underline text-blue-500 font-bold"
                          href={`/product/${item.product_id}`}
                        >
                          <img
                            className="rounded"
                            width="120"
                            src={item.product.url + '/120'}
                          />
                          {item.product.title}
                        </Link>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
