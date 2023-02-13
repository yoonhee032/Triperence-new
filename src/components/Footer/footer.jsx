import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [search, setsearch] = useState('out');
  const [COURSE, setCOURSE] = useState('out');
  const [MEET, setMEET] = useState('out');
  const [searchbox, setsearchbox] = useState('none');

  return (
    <div>
      <div className="af">
        <Link to="/">
          <div className="g">
            <div className="logof">
              <img src={require('../../icons/Vector.svg').default} alt="" />
            </div>
            <div className="logotf">
              <img src={require('../../icons/Triperence1.svg').default} alt="" />
            </div>
          </div>
        </Link>
        <div className="dlatlf">
          <Link className="menuf" to="/">
            <p>HOME</p>
          </Link>
          <Link className="menuf1" to="/search">
            <p>MAP</p>
          </Link>
          <Link className="menuf2" to="/place">
            <p>PLACE</p>
          </Link>
          <Link className="menuf3" to="/surveyFirst">
            <p>TEST</p>
          </Link>
        </div>

        <div className="cof">Copyright © 2022. Triperence. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
