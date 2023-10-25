type buttonProps ={
btnClasses:string

handleClick: ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>void
content: string

}

export const Button = ({content, btnClasses, handleClick}:buttonProps) => {
  return (
<button className={`btn rounded-md py-2 px-4 text-center font-semibold lg:text-lg ${btnClasses}`} onClick={handleClick} >
    {content}
</button>
  )
}
