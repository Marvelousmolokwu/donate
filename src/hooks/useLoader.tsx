import { useEffect, useState } from "react"


export const useLoader = () => {
    const[isloading, setLoading]=useState<boolean>(true)
    useEffect(()=>{
  
      
          setLoading(false)
       
        }, [])
    
        return(
            {isloading}
        )
      
        
}
