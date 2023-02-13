import React from 'react';
import 'components/Pages/home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="lb-wrap">
      <div className="lb-text">
        <h1>Let me know your travel preferences!</h1>
        <h1>We'll recommend a perfect travel destination for you!</h1>

        <Link to="./survey">
          <button className="lets">
            <div>
              <div className="oo">
                LET’S TEST
                <img className="go" src={require('icons/next.svg').default} alt="" />
              </div>
            </div>
          </button>
        </Link>
      </div>
      <div className="lb-image">
        <img src={require('../images/main_test.jpg')}></img>
      </div>
    </div>
  );
}

export default Home;
