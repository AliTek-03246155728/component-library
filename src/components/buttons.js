import React from "react";
import "./style.css";
function Button({id,children, ...props}) { 
  return(
    <div>
      <button id={id} {...props}>{children}</button>
    </div>
    )
}

export default Button;