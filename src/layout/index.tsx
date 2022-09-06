import React from 'react';
import Header from './Header';

type TLayout = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: TLayout) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
