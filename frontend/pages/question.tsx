import Link from 'next/link';
import Header from '../components/header';

const Question = () => {
  const title = '問題';
  return (
    <>
      <Header title={title}>
        <h1>React</h1>
      </Header>
      <Link href="/">
        <a>トップページに戻る &gt;&gt;</a>
      </Link>
    </>
  );
};

export default Question;
