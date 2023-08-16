'use client';

import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const TopMenu = () => {
  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-6xl">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-xs text-[#333333] px-2 h-8"
          >
            <li className="relative px-3">
              <Link
                href="/auth"
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <div>Login</div>
                <BsChevronDown />
              </Link>

              <div
                id="AuthDropdown"
                className="hidden absolute bg-white w-52 text-[#333333] z-40 top-5 left-0 border shadow-lg"
              >
                <div className="flex items-center justify-start gap-1 p-3">
                  <img src="https://picsum.photos/200" alt="img" width={50} />
                  <div className="font-bold text-sm">Fadhel Gaaloul</div>
                </div>

                <div className="border-b" />
                <ul className="bg-white">
                  <li className="text-xs py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href="/orders">My Orders</Link>
                  </li>
                  <li className="text-xs py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    Sign out
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
            <li className="px-3 hover:underline cursor-pointer">
              Help & Contact
            </li>
          </ul>

          <ul
            id="ToMenuRight"
            className="flex items-center text-xs text-[#333333] px-2 h-8"
          >
            <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
              <img src="/images/uk.png" alt="uk-flag" width={32} />
              Ship to
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              <div className="relative">
                <AiOutlineShoppingCart size={22} />
                <div className="absolute text-xs -top-[3px] -right-[5px] bg-red-500 w-4 h-3 rounded-full">
                  <div className="flex items-center justify-center -mt-[1px] text-white">
                    3
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
