export  type ButtonProps = {
    btnClasses?: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    content: string;
  };
  export const navStyle = ( {isActive}: { isActive: boolean }):React.CSSProperties => {
 
    return {
      borderBottom: isActive ? "3px solid #22457f " : "",
      transition: isActive ? "border  linear  ": "",
   
  
    };
  };