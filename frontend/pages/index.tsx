import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import GeneralButton from '../components/generalButton';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="第二外国語アプリ">
        <div className="title">
          <div>
            <h1 className="text-red-500">Bonjour le monde!!</h1>
            <h3>人称や格を楽しく学べるアプリ</h3>
          </div>
          <img src="../../top.png" />
        </div>
        <div className="">
          <div className="">
            <Link href="/register">問題を解く</Link>
            <br />
            <Link href="/question">問題を登録する</Link>
            <GeneralButton text="フランス語" />
            <GeneralButton text="ロシア語" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
