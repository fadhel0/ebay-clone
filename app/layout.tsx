import './globals.css';

import UserProvider from './context/user';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Ecommerce Website',
  description: 'Ecommerce Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
