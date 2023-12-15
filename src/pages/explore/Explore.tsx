import { useEffect, useState } from "react"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import axios from "axios"
import { ExploreSkeleton } from "../../components/loader/ExploreSkeleton";
interface NewsItem {
    author: string;
    title:string;
    url:string;
    urlToImage?:string;
    description:string;
  
  }

export const Explore = () => {
    const [data, setData] = useState<NewsItem[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery]= useState("charity")
    const [retryMessage, setRetryMessage] = useState<string | null>(null);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      
        setQuery(query.length === 1 ? "charity": e.currentTarget.value)
      

console.log(query)
    }
useEffect((

)=>{
 
    axios(`https://newsapi.org/v2/everything?q=${query}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`).then((res) => {
        if (res.status === 200) {
          setData(res.data.articles);
       
          
        } else {
          throw new Error(`Request failed with status ${res.status}`);
        }})
    
    .catch(error =>{
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        setRetryMessage("too many request, try again after awhile")
      }else{
        setError(error)
     }
    })
      
    .finally(()=>
            setLoading(false))
 
    

},[query])

if (error){
    return(
      <div className="text-center my-10">
          
        <h2>Oops... An error just occured
          <span className="font-normal block text-accent my-2">   Check your Internet Connection</span>
       
        </h2>
      </div>
        
    )
}
if (loading){
    return(
       <div className="container mt-20">
<ExploreSkeleton/>
<ExploreSkeleton/>
<ExploreSkeleton/>
<ExploreSkeleton/>
       </div>
    )
}

  return (
<>


  <section className="container mt-10">

    <div className="lg:flex lg:justify-center ">
    <div className="lg:w-[50%] flex justify-center text-primary items-center border rounded-lg border-primary px-1 focus-within:border-2 focus-within:border-primary">
  <SearchRoundedIcon fontSize="medium" /> 
    <input type="search" placeholder="Search" className="outline-none border-none w-full " onChange={handleChange} />
</div>
    </div>
    
    <h1 className="text-accent  hidden lg:block">Recent News</h1>
    {retryMessage && <p>{retryMessage}</p>}
  {data?.length === 0 ?<h1 className="text-primary text-center">data not found!</h1>

  :data?.map((news, index)=>
  <article key={index} className="my-5" >
    {news.title === "[Removed]" ? <div></div>: <div className="flex flex-col-reverse justify-between lg:flex-row lg:items-center">  <div className="w-full lg:w-[80%]"><h3>{news.title}</h3>

<p>{news.description}</p>
<a href={`${news.url}`} className="text-accent text-sm">{news.url}</a></div>

<img src={`${news.urlToImage}`} alt="resource_img" className="rounded-lg w-full  sm:h-52 lg:w-[20%] lg:h-32" />


</div>}

</article>)}

</section>
 

</>
  )
}
