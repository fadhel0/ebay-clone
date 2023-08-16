'use client';

import Link from 'next/link';

const MainHeader = () => {
  return (
    <>
      <div id="MainHeader" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-6xl">
          <div className="flex items-center w-full bg-white">
            <div className="flex lg:justify-start justify-between gap-10 max-w-6xl w-full px-3 py-5 mx-auto">
              <Link href="/">
                <img src="/images/logo.svg" alt="logo" width={120} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
