import {useState} from "react"

import UploadFile from "@mui/icons-material/UploadFile";
type Props ={
    setUpload:React.Dispatch<React.SetStateAction<Boolean>>
    name: string
    id:string
}


export const ImageInput = ({setUpload, name, id }:Props) => {
    const [image, setImage] = useState<string>()
const [filename, setfilename] = useState<string>("no selected file")
  return (
    <><input type="file" accept="application/msword, application/pdf text/plain, image/*"  name={name} id={id} hidden  onChange={({target: {files}})=>{
      
        files && setfilename(files[0].name)
        if(files){
          setImage(URL.createObjectURL(files[0]))
          setUpload(true)
          setTimeout(()=>{
            setUpload(false)
          }, 2000)
          
        }
      }}       required/>
    <div className="border border-overlay rounded-md p-1 w-full h-16 relative ">{
      image ? <img src={image} alt={filename} className="h-full w-full object-cover
      "/> : ""
    }
    <div className="bg-backgroundcolor pb-2 absolute h-1/2 bottom-0 right-0 left-0 text-accent  rounded-b-md" ><UploadFile className=" text-5xl" fontSize="medium"/> Upload file</div>
    </div></>
    
  )
}
