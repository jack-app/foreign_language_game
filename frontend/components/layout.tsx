import Head from 'next/head';
import Header from './header';

type props = any;

const Layout = (props: props) => {
  return (
    <>
      <Header title={props.title} />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
