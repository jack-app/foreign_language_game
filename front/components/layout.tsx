import Head from 'next/head'
import Header from './header'

type Props = any

const Layout = (props: Props) => {
  return (
    <>
      <Header title={props.title} />
      <div>{props.children}</div>
    </>
  )
}

export default Layout
