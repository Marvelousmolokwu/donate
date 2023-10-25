
type cardPorps ={
    image:string
    title: string
    cardContent:string
}

export const Card = ({image, title, cardContent}:cardPorps) => {
  return (
<div className="bg-secondary p-8  rounded-md items-center flex flex-col gap-4 lg:w-[35%] ">
        <img src={image} alt="" width="120px" />
<h3 className="text-2xl border-b-4 border-secondary py-2">{title}</h3>
<p>{cardContent}</p>
    </div>
  )
}
