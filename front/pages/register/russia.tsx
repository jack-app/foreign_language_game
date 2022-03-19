import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import Header from '../../components/header'

const RegisterRussia = () => {
  const title = '単語を登録する'

  const initialState = [{ word: '' }]

  const [texts, setText] = useState(initialState)
  const [word, setWord] = useState('')

  const addWord = (event: any) => {
    event.preventDefault()
    if (texts === []) return
    console.log(texts)
    setText((texts) => [...texts, { word }])
    setWord('')
    console.log(texts)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (texts === []) return
    console.log(texts)
    setText((texts) => [...texts, { word }])
    const words = [...texts, { word }]
    words.shift()
    words.pop()
    setWord('')
    console.log(words)
    router.push('../question/russia')
  }
  return (
    <>
      <Header />
      <Link href="/">
        <a>&lt;&lt; トップページに戻る</a>
      </Link>
      <p className="p-3 text-center text-[1.75rem] text-orange-900 sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </p>
      <div className="grid place-items-center">
        <form className="m-5" onSubmit={addWord}>
          <input
            className="bg-gray-200"
            value={word}
            onChange={(event) => {
              setWord(event.target.value)
            }}
          />
          <p className="pt-4">以下の単語が出題されます</p>
          <ul className="bg-orange-200">
            {texts.map((text, item) => (
              <li key={item}>{text.word}</li>
            ))}
          </ul>
        </form>
        <button
          className="m-5 inline-block w-auto rounded bg-orange-500 p-3 pr-6 pl-6 text-xl text-white hover:bg-orange-400"
          onClick={handleSubmit}
        >
          問題へ進む
        </button>
      </div>
    </>
  )
}

export default RegisterRussia
