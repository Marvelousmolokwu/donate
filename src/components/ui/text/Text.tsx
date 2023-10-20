type paragraphProps={
    content:string
}

export const ParagraphText = ({content}:paragraphProps) => {
  return (
<p className="py-5 lg:text-xl">
{content}
</p>
  )
}
