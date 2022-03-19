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
        <title>第二外国語アプリ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout header="Next.js">
        <div className="flex justify-center bg-yellow-100">
          <div className="flex w-full items-end justify-between p-7 md:w-[90%] lg:w-[85%]">
            <div className="ml-5 text-orange-800">
              <p className="p-3 text-[1.75rem] sm:text-5xl md:text-5xl lg:text-7xl">
                Bonjour le monde!!
              </p>
              <p className="p-3 pt-4 text-[0.5rem] sm:text-[1rem] md:text-xl lg:text-3xl">
                人称や格を楽しく学べるアプリ
              </p>
            </div>
            <img
              className="mr-5 w-[50%] p-1 sm:w-[40%] lg:w-[30%]"
              src="../amico.png"
            />
          </div>
        </div>
        <div className="m-5 text-center">
          <div className="pt-2 pb-2 lg:pt-4">
            <p className="p-3 text-[1.75rem] text-orange-900 sm:text-2xl md:text-3xl lg:text-4xl">
              問題を解く
            </p>
            <div className="flex justify-center">
              <GeneralButton text="フランス語" language="france" />
              <GeneralButton text="ロシア語" language="russia" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
