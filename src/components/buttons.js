import React from "react";
import "./style.css";
function Buttons({id,children, ...props}) { 
  return(
    <div>
      <button id={id} {...props}>{children}</button>
    </div>
    )
}

export default Buttons;