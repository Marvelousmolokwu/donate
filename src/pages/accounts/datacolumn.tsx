type Props={
    contentName:string,
    content:React.ReactNode;
}

export const Datacolumn = ({contentName, content}:Props) => {
  return (
   <>
    <div className="border-t border-b border-kit flex justify-between items-center py-5">
   <h5 className="text-primary font-semibold">{contentName}</h5>
     
     
     <div>
        {content}
     </div>
    </div>


   </>
  )
}
