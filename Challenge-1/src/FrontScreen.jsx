import React, { useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Button from "./Button";
import "./FrontScreen.css";
import Card from "./Card";
import HeadLine from "./HeadLine";
import Para from "./Para";
import BackScreen from "./BackScreen";
import { useNavigate } from 'react-router-dom';

function FrontScreen(props) {

  const navigate = useNavigate();
  const ratings = [1, 2, 3, 4, 5];
  const [buttonClickedNum, setButtonClickedNum] = useState(-1);
  const [isbuttonSelected, setIsButtonSelected] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (isbuttonSelected == false) {
      alert("Select a rating");
    } else {
      console.log('Handle Submit',buttonClickedNum);
      props.frontScreenToAppCallback(buttonClickedNum);
      // window.location.href = "/backscreen";
      navigate('/backscreen');
    }
  };

  return (
    <Card>
      <div className="star">
        <img src="/images/icon-star.svg" alt="Star" id="pic" />
      </div>
      <div className="text">
        <HeadLine>How did we do?</HeadLine>
        <Para>
          Please let us know how we did with our support request. All feedback
          is appreciated to help us improve our offering!
        </Para>
      </div>
      <div className="rateButtons">
        {ratings.map((item, index, arr) => {
          return (
            <Button
              key={index}
              num={item}
              buttonClickedNum={buttonClickedNum}
              onButtonClick={setButtonClickedNum}
              funIsbuttonSelected={setIsButtonSelected}
            />
          );
        })}
      </div>
      <button className="main-btn" onClick={handleSubmit}>
        SUBMIT
      </button>
    </Card>
  );
}

export default FrontScreen;
