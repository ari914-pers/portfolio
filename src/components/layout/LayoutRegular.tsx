import { FC, PropsWithChildren } from 'react';
import Header from '../molecules/surfaces/Header';
import Footer from '../molecules/surfaces/Footer';
import Stack from '../atoms/wrappers/Stack';

const LayoutRegular: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Stack designProps={{}} alignItems='center'>
          {children}
        </Stack>
      </main>
      <Footer />
    </>
  );
};

export default LayoutRegular;
