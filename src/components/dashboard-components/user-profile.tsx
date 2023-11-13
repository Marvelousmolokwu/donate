import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {useState} from "react"
import { Button } from "../button/Button";


type  Props ={
  picture: string
}
export const UserProfile = ({picture}:Props) => {

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
    <div className="bg-center bg-no-repeat h-24 w-24 rounded-full border-2 border-accent bg-profile">
<img src={picture} alt="" className="h-full w-full rounded-full"/>
</div>
<h3>User 1234</h3>
<div className="flex gap-3">
        <InstagramIcon className="cursor-pointer" />
        <FacebookIcon className="cursor-pointer" />
        <TwitterIcon className="cursor-pointer" />
      </div>
<div className=" flex flex-col w-full gap-4" >
<Button content="Accounts" handleClick={()=>{}} btnClasses="border-2 border-primary text-primary"/>
<Button content="Payouts" handleClick={()=>{}} btnClasses="border-2 border-primary text-primary"/>

</div>
<p className="text-lightBlue cursor-pointer text-sm "> referral Link :  <span onClick={()=>{
  navigator.clipboard.writeText(referencelink)
  {showCopiedPrompt()}
}} className="text-textcolor  bg-backgroundcolor rounded-sm p-1">{referencelink}</span></p>
{copied &&<p className="shadow-md p-2 rounded-sm bg-backgroundcolor absolute bottom-20">copied!</p>}

    </>
  )
}
