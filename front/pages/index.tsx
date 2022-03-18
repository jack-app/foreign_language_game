import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import GeneralButton from '../components/generalButton'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout header="Next.js" title="第二外国語アプリ">
        <div className="">
          <div>
            <p className="text-5xl text-orange-800">Bonjour le monde!!</p>
            <p className="text-xl text-orange-800">
              人称や格を楽しく学べるアプリ
            </p>
          </div>
          <img src="../amico.png" />
        </div>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
  )
}

export default Home
