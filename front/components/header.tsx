const Header: any = (props: any) => {
  return (
    <div className="h-[5rem] w-[100%] bg-orange-500">
      <p className="p-3 align-middle text-2xl text-white">{props.title}</p>
    </div>
  )
}

export default Header
