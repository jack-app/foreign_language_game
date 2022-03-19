import Link from 'next/link'

type GeneralButton = {
  readonly text: string
  readonly language: 'france' | 'russia' | undefined
}
const GeneralButton = (generalButton: GeneralButton) => {
  const path = `../register/${generalButton.language}`
  return (
    <div>
      <Link href={path}>
        <div className="m-5 inline-block w-auto rounded bg-orange-500 p-4 pr-6 pl-6 text-xl text-white hover:bg-orange-400">
          {generalButton.text}
        </div>
      </Link>
    </div>
  )
}

export default GeneralButton
