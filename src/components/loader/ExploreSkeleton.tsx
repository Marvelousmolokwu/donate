import { BaseSkeleton } from "./BaseSkeleton"


export const ExploreSkeleton = () => {
  return (
    <>
<div className="grid grid-cols-3  grid-rows-2 lg:grid-rows-1 lg:gap-20">

<div className="col-span-3 lg:col-span-2 lg:row-start-1">
        <BaseSkeleton type={"headingSkeleton"}/>
        <BaseSkeleton type={"textSkeleton"}/>
        <BaseSkeleton type={"textSkeleton"}/>
        <BaseSkeleton type={"textSkeleton"}/>
        <BaseSkeleton type={"linkSkeleton"}/>
      

  
      
</div>
<div className="row-start-1 row-span-1 ">
<BaseSkeleton type={"imageSkeleton"}/> 
</div>

    
</div>


    

    

 </>
  )
}
