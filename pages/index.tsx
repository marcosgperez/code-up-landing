import Head from 'next/head';
import Otf from '@components/Otf/Otf';
import SecondScreen from '@components/SecondScreen';
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
    </>
  );
};
export default Main;
