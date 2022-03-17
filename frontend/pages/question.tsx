import Link from 'next/link';
import Header from '../components/header';

const Question = () => {
  const title = 'Other';
  return (
    <>
      <Header title={title}>
        <h1>React</h1>
      </Header>
      <Link href="/">
        <a>Go to index page &gt;&gt;</a>
      </Link>
    </>
  );
};

export default Question;
