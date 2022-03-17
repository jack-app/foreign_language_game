import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

const Home: NextPage = (props) => {
  return (
    <>
      <Layout header="Next.js" title="This is Top Page.">
        <div className="">
          <h5 className="">Hello World!</h5>
          <Link href="/register">問題を登録する</Link>
          <Link href="/question">問題を解く</Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
