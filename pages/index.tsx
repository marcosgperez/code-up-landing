import Head from 'next/head';
import Otf from '@components/Otf/Otf';
import SecondScreen from '@components/SecondScreen';
import ThirdScreen from '@components/ThirdScreen';
import PortfolioScreen from '@components/PortfolioScreen';
import ContactContainer from '@components/ContactContainer';

const Main = () => {
  return (
    <>
      <Head>
        <title>Code Up - We code all</title>
      </Head>
      <div className="view Main">
        <Otf />
      </div>
      <SecondScreen />
      <ThirdScreen />
      {/* <PortfolioScreen /> */}
      <ContactContainer />
    </>
  );
};
export default Main;
