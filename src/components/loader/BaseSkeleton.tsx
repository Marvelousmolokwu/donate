
type Props={
  type:string
}
export const BaseSkeleton = ({type}:Props) => {
    const classes = type
  return (
    <div className='animate-pulse'>
         
 
<div className={`bg-skeletonColor ${classes}`}></div>

</div>



  )
}
