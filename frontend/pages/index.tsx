import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import GeneralButton from '../components/generalButton';

const Home: NextPage = () => {
  return (
    <>
      <Layout header="Next.js" title="第二外国語アプリ">
        <div className="">
          <h2 className="">Hello World!</h2>
          <div className="">
            <Link href="/register">問題を登録する</Link>
            <br />
            <Link href="/question">問題を解く</Link>
            <GeneralButton text="フランス語" />
            <GeneralButton text="ロシア語" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
