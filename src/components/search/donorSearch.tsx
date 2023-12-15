
import user from "../../data/donors.json";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useNavigate } from "react-router-dom";

 
export const DonorSearch = () => {
    const {hideModal} = useModal()
    const [searchlist, setSearchlist] = useState("")
    const navigate = useNavigate()
    
    const filteredPersons = user.filter((person)=>{
    
      return( person.name.toLowerCase().includes(searchlist.toLowerCase()) || person.country.toLowerCase().includes(searchlist.toLowerCase()))
  })
  const handleChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
  setSearchlist(e.currentTarget.value)


  })
  
    return (
      <>
      
      <section className="fc-flex h-[60vh] mt-5">
      <input onChange={handleChange} type="search" placeholder="search"  className="outline-none border border-secondary rounded-lg"/>
        <div className="h-[90%] overflow-auto w-[20rem] lg:w-[30rem] scrollbar my-5 rounded-xl border border-secondary p-2">
          <ul >
           
            { searchlist.length >= 1 ?  
            filteredPersons.length !== 0 ? 
              filteredPersons.map((user)=>(
              
                <li
              key={user.id}
              className="border-b-2 border-accent  p-2   hover:bg-kit text-accent"
            >
              <button className="flex items-center justify-between w-full" onClick={()=>{ 
            
    navigate(`donorprofile/${user.id}`)
    hideModal()
    window.location.reload()
   }}>
               
              
                  <h4>
                    {user.id}. {user.name}
                  </h4>
    
                  <img
                    src={`https://flagsapi.com/${user.country}/flat/32.png`}
                    alt=""
                  />
               
              </button>
            </li>
              )
            ): <h3 className="text-center"> User not Found!</h3>
     : user.map((user) => (
              <li
                key={user.id}
                className="border-b-2 border-accent  p-2   hover:bg-kit text-accent"
               
              >
                <button className="flex items-center justify-between w-full"    onClick={ 
                    ()=>{ 
                     
                    navigate(`donorprofile/${user.id}`) 
                    hideModal()
                    window.location.reload()
                  }
                
                   }>
                
           
                    <h4>
                      {user.id}. {user.name}
                    </h4>
  
                    <img
                      src={`https://flagsapi.com/${user.country}/flat/32.png`}
                      alt=""
                    />
      
                </button>{" "}
              </li>
            ))}
          
            
          </ul>
        </div>
      </section>
        
      </>
    );
  };

