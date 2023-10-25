import { BarLoader } from "react-spinners"

export const Loader = () => {
//  the loader
   
    return(
    <div className="h-[100vh] grid place-items-center"><BarLoader
    color={"#0a2f6c"}
    loading={true}
 
    height={4}
    width={150}
    aria-label="Loading Spinner"
    data-testid="loader"/></div>
    )
    
}
