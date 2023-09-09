import React from 'react'
import Card from './Card';
import './BackScreen.css';
import HeadLine from './HeadLine';
import Para from './Para';

function BackScreen(props) {

  console.log(props.ratingNumber);

  return (
    <Card className="Jodd">
        <div className="picture">
          <img src="/images/illustration-thank-you.svg" alt="ThankYou"/>
        </div>
        <div className='items-selected'>
            <p className="items">You selected {props.ratingNumber} out of 5</p>
        </div>
        <div className="thankyou-text">
            <HeadLine className="thank-you">Thank You !</HeadLine>
            <Para className="thank-you-note">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </Para>
        </div>
    </Card>
  );
}

export default BackScreen
