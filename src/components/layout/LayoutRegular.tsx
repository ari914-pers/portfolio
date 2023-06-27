import { FC, PropsWithChildren } from 'react';
import Header from '../molecules/surfaces/Header';
import Footer from '../molecules/surfaces/Footer';

const LayoutRegular: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutRegular;
