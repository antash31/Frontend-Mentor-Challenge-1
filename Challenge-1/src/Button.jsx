import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
function Button(props) {


  const handleClick = (e) => {
    props.onButtonClick(props.num);
    props.funIsbuttonSelected(true);
  
    console.log("Props.nums",props.num);
    console.log("props.buttonClickedNum",props.buttonClickedNum);

  };
  

  const buttonStyle =
    props.num === props.buttonClickedNum
      ? {
          backgroundColor: "hsl(25,97%,53%)",
          color: "white",
        }
      : {};

  return (
    <button id="btn-num" style={buttonStyle} onClick={handleClick}>
      {props.num}
    </button>
  );
}

export default Button;
