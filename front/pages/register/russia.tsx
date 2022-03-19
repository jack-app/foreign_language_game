import Link from 'next/link'
import Header from '../../components/header'

const Register = () => {
  const title = '問題を登録する'
  return (
    <>
      <Header title={title}>
        <h1>React</h1>
      </Header>
      <Link href="/">
        <a>トップページに戻る &gt;&gt;</a>
      </Link>
    </>
  )
}

export default Register
