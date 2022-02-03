import type { NextPage } from 'next';
import DefaultLayout from '@/layouts/DefaultLayout';

const Home: NextPage = (): JSX.Element => (
  <DefaultLayout title='main'>
    <div>initial</div>
  </DefaultLayout>
);

export default Home;
