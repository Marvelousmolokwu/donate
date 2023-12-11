
type Props={
    content:React.ReactNode,
    openNotification:boolean
}

export const Updated = ({content, openNotification}:Props) => {
  

  return (
    <div className={`fixed bg-backgroundcolor border-b-4  border-primary shadow-md text-primary rounded-md top-10 right-0 transition-all ease-in delay-0  p-3 w-[90%] lg:w-[30%] z-50 ${openNotification ? "translate-x-1" : "translate-x-[180%]"}`}>
      {content}</div>
  )
}
