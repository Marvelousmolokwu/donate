type Props={
    mainInfo: string;
    btnText: string | React.ReactNode;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Template = ({mainInfo, btnText, handleClick}:Props) => {
  return (
   <>
    <div className="card-styles">
      {mainInfo}
   </div>
   
       <div className="flex justify-between items-center"> <h2>Details</h2>
       <button className="text-primary font-semibold" onClick={handleClick}>
         {btnText}
       </button>
       </div>
      </>
 
  )
}
