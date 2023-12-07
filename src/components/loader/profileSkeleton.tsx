
import { BaseSkeleton } from './BaseSkeleton'
export const ProfileSkeleton = () => {
  return (
    <>
    <div className='lg:grid lg:grid-cols-4 items-center'>
        <BaseSkeleton type="profileSkeleton"/>
        <div className='lg:col-span-3'><BaseSkeleton type="headingSkeleton"/>
        <BaseSkeleton type="textSkeleton"/>
        <BaseSkeleton type="textSkeleton"/></div>
        
    </div>
    <div className='my-5'>
    <BaseSkeleton type="textSkeleton"/>
    <BaseSkeleton type="textSkeleton"/>
    <BaseSkeleton type="textSkeleton"/>
    </div>
    <div className='grid grid-cols-4 gap-2 lg:gap-10'>
    <BaseSkeleton type="boxSkeleton "/>
    <BaseSkeleton type="boxSkeleton "/>
    <BaseSkeleton type="boxSkeleton "/>
    <BaseSkeleton type="boxSkeleton "/>
    </div>
    </>
  )
}
