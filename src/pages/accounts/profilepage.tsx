
import { useModal } from "../../hooks/useModal"
import { Datacolumn } from "./datacolumn"
import { Template } from "./template"
import { useState } from "react"
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userslice';


export const ProfilePage = () => {

  const { ShowModal , ModalComp, hideModal} = useModal()
  const user = useSelector(selectUser)
   const handleClick = ()=>{


ShowModal()

   }
   const [formData, setFormData] = useState({
      name: [user.name] ,
      email: 'user@gmail.com',
      phoneNumber: 'Input phone number',
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    {hideModal()}
alert("profile updated!")
    
     
    };
  {console.log(formData.name)}
  return (
 <>
 <section>
    <Template mainInfo="Manage Your personal information here." btnText="Edit Profile"handleClick={handleClick}/>
       
       <Datacolumn contentName="Name" content={<p>{formData.name.length === 1 ?  "User": formData.name    }</p>}/>
       <Datacolumn contentName="Email" content={<p>{formData.email}</p>}/>
       <Datacolumn contentName="Phone Number" content={<p>{formData.phoneNumber}</p>}/>
       <Datacolumn contentName="Account Number" content={ <div>   <p>000736366</p>
            <p>Monnify</p>
            <p>sterling Bank</p></div>}/>
        
            <Datacolumn contentName="Documents" content={ ""
            }/>
    </section>
{ModalComp(
   <form className="font-semibold w-[60%]"onSubmit={handleSubmit}>
<label htmlFor="">
   Name:
   <input type="text" name="name" value={formData.name} onChange={handleChange} />
</label>
<label htmlFor="">
   Email:
   <input type="email" name="email" value={formData.email} onChange={handleChange} />
</label>
<label htmlFor="">
   Phone Number:
   <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
</label>
<input type="submit" value={"Submit"} className="bg-primary text-backgroundcolor"  />
   </form> 
   
)}
 
 </>
  )
}
