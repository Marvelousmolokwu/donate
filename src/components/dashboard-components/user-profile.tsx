
import TwitterIcon from "@mui/icons-material/Twitter";
import {useState} from "react"
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";


type  Props ={
  picture: string
  username: string
  twitterlink: string
}
export const UserProfile = ({picture, username, twitterlink}:Props) => {
const navigate = useNavigate()
    const [copied, setCopied] = useState(false)
    const referencelink = "uhuuh3444"
    const showCopiedPrompt =(()=>{
        setCopied(true)
        setTimeout(()=>{
     setCopied(false)
        }, 2000
        )
      })
  return (
    <>
    <div className="bg-center  bg-no-repeat h-32 w-32 rounded-full bg-kit border-4 border-accent bg-profile ">
<img src={picture} alt="" className="h-full w-full rounded-full"/>
</div>
<h3><span>@ {!username ? "user": username }</span></h3>
<div className="flex gap-3">
       
        <a href={twitterlink}><TwitterIcon className="cursor-pointer" /></a>
      </div>
<div className=" flex flex-col w-full gap-4" >
<Button content="Accounts" handleClick={()=>{
  navigate("/user/useraccounts/profile")
}} btnClasses="border-2 border-primary text-primary"/>


</div>
<p className="text-lightBlue cursor-pointer text-sm "> referral Link :  <span onClick={()=>{
  navigator.clipboard.writeText(referencelink)
  {showCopiedPrompt()}
}} className="text-textcolor  bg-backgroundcolor rounded-sm p-1">{referencelink}</span></p>
{copied &&<p className="shadow-md p-2 rounded-sm bg-backgroundcolor absolute bottom-20">copied!</p>}

    </>
  )
}
