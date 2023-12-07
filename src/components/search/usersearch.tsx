import { Link, useNavigate } from "react-router-dom";
import user from "../../data/user.json";
import { useState } from "react";

export const UserSearch =()=>{
     const [searchlist, setSearchlist] = useState("")
     const navigate = useNavigate()
     const items =user.map((users) => (
      Object.values(users)[0]))
      
     const filteredPersons = items.map(item=>item.filter((itemName:{name:string})=>{ return(itemName.name.toLowerCase().includes(searchlist.toLowerCase()))}))
console.log(filteredPersons)

  const handleChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
  setSearchlist(e.currentTarget.value)
  })


  return(
    <>
    <section className="flex flex-col h-[60vh]">
     <input onChange={handleChange} type="search" placeholder="search"  className="outline-none border border-secondary"/>
 <div className="h-[90%] overflow-auto w-[20rem] lg:w-[30rem] scrollbar my-5 rounded-xl border border-secondary p-2">
        <ul>
        { searchlist.length >= 1 ?  
           filteredPersons.length !== 0 ? 
             filteredPersons.map(persons => persons.map((person:{name:string;
            id:number;
          img:string} )=>
          <li
          key={person.id}
          className="border-b-2 border-accent  p-2   hover:bg-kit text-accent"
        >
          <button onClick={()=>{navigate(`/donordashboardprofile/${person.id}`)
          window.location.reload()}}>
            
            <div className="flex items-center justify-between">
              <h4>
               {person.name}
              </h4>
             
            </div>
          </button>{" "}
        </li>
          ))
         
             
          : (<h3 className="text-center"> User not Found!</h3>):
      
          user.map((users) => (
            Object.values(users)[0].map((person:{
              id:number;
              name:string;
              img:string;
            })=>
            <li 
            className="border-b-2 border-accent  p-2   hover:bg-kit text-accent"
            key={
              person.id}>
 <button onClick={()=>{navigate(`/donordashboardprofile/${person.id}`)
          window.location.reload()}}>
                            {" "}
                             <div className="flex items-center gap-5">
                              <div className="rounded-full object-cover h-8 w-8">
                              <img
                                 src={person.img} 
                                 alt=""
                                 className="h-full w-full rounded-full"
                               />
                              </div>
                             
                               <h4 className="text-left">
                                 {person.name}
                               </h4>
            
                              
                             </div>
                           </button>{" "}
            
</li>
            ))
            




)}




 
      
           
         
    </ul>
    </div>
  
  </section>
  </>
  )
}