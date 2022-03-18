import Link from 'next/link'
import router from 'next/router'
import Questions from '../pages/question'

type GeneralButton = {
  readonly text: string
  readonly content: 'question' | 'register'
}
const GeneralButton = (generalButton: GeneralButton) => {
  const path = `../${generalButton.content}`
  return (
    <div>
      <Link href={path}>
        <div className="m-5 rounded bg-orange-500 p-3 pr-4 pl-4 text-white hover:bg-orange-400">
          {generalButton.text}
        </div>
      </Link>
    </div>
  )
}

export default GeneralButton
