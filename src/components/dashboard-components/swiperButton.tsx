import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForward from '@mui/icons-material/ArrowForward'

import { useSwiper } from 'swiper/react'

export const SwiperButton = () => {
    const swiper = useSwiper()
  return (
   <div className='text-accent flex justify-between'>
    <button onClick={()=>swiper.slidePrev()}>
        <ArrowBack/>
    </button>
    <button onClick={()=>swiper.slideNext()}>
        <ArrowForward/>
    </button>
   </div>
  )
}
