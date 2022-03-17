import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Router } from 'react-router-dom';
import styles from '../styles/Home.module.css';

type languages = string;

const languages = [
  { id: 1, lang: 'フランス語' },
  { id: 2, lang: 'ロシア語' },
];

const handleChangePage = () => {};

const Home: NextPage = (props) => {
  return (
    <>
      <h1>第二外国語　勉強ゲーム</h1>

      <h2>言語を選択してゲームを始める</h2>
      <div>
        {languages.map((language) => {
          return (
            <button key={language.id} onClick={handleChangePage}>
              {language.lang}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
