import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from './services/auth.service';
import EventBus from './common/EventBus';

function Header() {
  let navigate = useNavigate();
  const [search, setsearch] = useState('out');
  const [COURSE, setCOURSE] = useState('out');
  const [MEET, setMEET] = useState('out');
  const [searchbox, setsearchbox] = useState('none');
  const [login, setlogin] = useState('');
  const [currentUser, setCurrentUser] = useState(undefined);
  const [v, setv] = useState(null);
  const onclick = () => {
    if (v == null) {
      setv('a');
    } else {
      setv(null);
    }
  };
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    navigate('/login');
    window.location.reload();
  };

  return (
    <div>
      <div className="a">
        <Link to="/">
          <div className="logo">
            <img className="w" src={require('../../icons/Vector.svg').default} alt="" />
          </div>
          <div className="logot">
            <img src={require('../../icons/Triperence.svg').default} alt="" />
          </div>
        </Link>
        <div className="dlatll">
          <Link
            className="menu"
            to="/search"
            style={{ marginRight: '24px' }}
            onMouseOver={() => setsearch('on')}
            onMouseOut={() => setsearch('out')}
          >
            {search === 'out' ? <div>MAP</div> : <div style={{ color: '#77AEFC' }}>MAP</div>}
          </Link>

          <Link
            className="menu"
            to="/spot"
            style={{ marginRight: '24px', marginLeft: '0px' }}
            onMouseOver={() => setCOURSE('on')}
            onMouseOut={() => setCOURSE('out')}
          >
            {COURSE === 'out' ? <div>PLACE</div> : <div style={{ color: '#77AEFC' }}>PLACE</div>}
          </Link>

          <Link
            className="menu"
            to="/surveyFirst"
            style={{ marginLeft: '0px' }}
            onMouseOver={() => setMEET('on')}
            onMouseOut={() => setMEET('out')}
          >
            {MEET === 'out' ? <div>TEST</div> : <div style={{ color: '#77AEFC' }}>TEST</div>}
          </Link>
        </div>

        {currentUser ? (
          <>
            <div className="login" onClick={onclick}>
              {currentUser.nickname} ▼
            </div>
            <img
              className="logi"
              onClick={onclick}
              src={require('icons/defaultprofile.svg').default}
              onerror="this.src='images/default.png'"
            />
            {v ? (
              <div className="kkk">
                <img
                  className="logi"
                  src={require('icons/defaultprofile.svg').default}
                  onError="this.src='images/default.png'"
                  style={{ float: 'left' }}
                />
                <div style={{ marginLeft: '50px' }}>
                  <div className="i">{currentUser.nickname} ▼</div>
                  <Link to="w">
                    <div className="p">My Page ></div>
                  </Link>
                </div>
                <hr style={{ width: '200px', marginTop: '20px', marginBottom: '20px' }} />

                <div className="l" onClick={logOut}>
                  log out
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <Link to="/login">
            {' '}
            <div className="loginbox">Login/Sign up</div>
          </Link>
        )}

        {/* <div className="searchimg">
          <input className="searchbox" />

          <button className="searchbutton" href="/">
            <img className="sl" src={require('../../icons/Icon.svg').default} alt="" />
          </button>
        </div> */}
        <div className="wow" />
        <div className="wow1" onClick={() => setsearchbox('vis')} />
      </div>
    </div>
  );
}

export default Header;
