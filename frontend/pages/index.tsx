import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

const Home: NextPage = (props) => {
  return (
    <>
      <Layout header="Next.js" title="第二外国語アプリ">
        <div className="">
          <h5 className="">Hello World!</h5>
          <div className="">
            <Link href="/register">問題を登録する</Link>
            <br />
            <Link href="/question">問題を解く</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
