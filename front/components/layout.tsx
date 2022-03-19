import Head from 'next/head'
import Header from './header'

type Props = any

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  )
}

export default Layout
