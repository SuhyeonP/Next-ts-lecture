import type { NextPage } from 'next';
import DefaultLayout from '@/layouts/DefaultLayout';
import HeaderColor from '@/components/HeaderColor';

const Home: NextPage = (): JSX.Element => (
  <DefaultLayout title='main'>
    <div>
      initial
      <div style={{ width: '220px' }}>
        <HeaderColor />
      </div>
    </div>
  </DefaultLayout>
);

export default Home;
