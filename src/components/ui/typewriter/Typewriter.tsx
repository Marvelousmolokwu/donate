import Typewriter from "typewriter-effect"

export const TypingEffect = () => {
  return (
    <div className="text-primary ">
        <span><Typewriter 
   options={{autoStart: true, loop: true}}
   onInit={typewriter =>{
    typewriter.typeString("Lives").pauseFor(2000).deleteAll().typeString("Change").pauseFor(2000).deleteAll().typeString("People").pauseFor(2000).start()
   }}/></span>
        
    </div>
   
  )
}
