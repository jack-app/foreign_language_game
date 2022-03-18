import Head from 'next/head';

const Header: any = (props: any) => {
  return (
    <>
      <h2>{props.title}</h2>
    </>
  );
};

export default Header;
