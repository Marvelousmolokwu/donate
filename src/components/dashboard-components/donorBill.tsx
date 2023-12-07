
import { useRef, useState } from "react"
import { Form } from "react-router-dom"

type Props ={
  name:string
}

export const DonorBill = ({name}:Props) => {
 const[detailsinputed, setDetailsinputed] = useState(false)
 const amountRef = useRef<HTMLInputElement >(null)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
setDetailsinputed(true)




}
const data ={
  amount:amountRef.current?.value
  }

  return (
<>
<section className="flex flex-col items-center ">
{
  !detailsinputed &&
  <Form method="post" action="" className="text-lg font-semibold" onSubmit={handleSubmit}>
<h3>donate to <span className="text-primary">{name}</span></h3>
<label htmlFor="account-number" className="font-semibold">
    Account
<select name="account" id="">
  <option value="naira">Naira account: 2345678999 </option>
  <option value="dollar">Dollar account: 234567890</option>
</select>
</label>
<label htmlFor="" className="font-semibold">
    Enter donations
    <input type="number" placeholder='N2,000' name="amount" ref={amountRef} />
</label>
<label htmlFor="" className="font-semibold">
  select Payment type
    <select name="bank-tranfer" id="" >
        <option value="Nigerian-instant-Transfer">Nigerian instant Transfer</option>
        <option value="Apple-pay">Apple pay</option>
        <option value="Debit-or-credit">Debit or Credit</option>
    </select>
</label>
 <label htmlFor="" className="font-semibold">
      Enter your card number
      <input type="number"  />
    </label>
    <label htmlFor="" className="font-semibold">
      Enter your Pin 
      <input type="password" max={5} />
    </label>
<input type="submit" value={"continue"} className="bg-primary text-backgroundcolor"/>

</Form>
}

{detailsinputed &&<div className="flex flex-col items-center gap-5">
  <h3>{`You just sent N${data.amount} to ${name}`}</h3>
  <div className="bg-primary text-backgroundcolor h-52 w-52 rounded-full flex items-center justify-center">  <h1 >Thank You!</h1></div>

</div>}

</section>
</>
  )
}
