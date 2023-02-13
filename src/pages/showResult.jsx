import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import PlaceList from './PlaceList';
import TourList from 'pages/TourList';
import 'components/Pages/test.css';
import Img from 'components/test/Img';
import Place from 'components/test/placeOne';
import CarouList from './CarouList';
import NewCarou from 'components/test/newCarou';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/common/Button';
import axios from 'axios';
import AuthService from '../services/auth.service';

const StyledButton = styled.button`
  display: iflex;
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  padding: 1rem;
  align-items: center;
  text-align: center;

  height: 3rem;
  width: 24rem;
  font-size: 1rem;
`;

const H = styled.div`
  display: iflex;
  margin-bottom: 20px;
`;

const Box = styled.div`
  padding: 0px;
  width: 63vw;
  height: 350px;
  /* background-color: pink; */
`;

const Cardtitle = styled.div`
  float: left;
  /* margin-left: 10px; */
  margin-right: 80px;
  margin-top: 12px;
  width: 132px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
`;

const CardPlace = styled.div`
  overflow: auto;
  float: left;
  padding: 10px;
  width: 63vw;
  height: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  text-align: center;
  &::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    border-radius: 6px;
    background: #d1d1d1;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: #77aefc;
    border-radius: 6px;
  }
`;

const ShowResult = () => {
  const location = useLocation();

  const [type, setType] = useState(0);
  const [like, setLike] = useState(false);
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aboutUser, setAboutUser] = useState({});

  
  useEffect(() => {
    setAboutUser(location.state);
  }, []);
 
  
  let aboutType =()=> {

  }

  return (
    <div>
      <div className="app-container"></div>
      <Img aboutUser={aboutUser}></Img>
      <div className="wrap-t">
        <div className="carousel">
          <h2>K-POP PLACE</h2>
          {/* <NewCarou  /> */}
        </div>
      </div>
      <div className="wrap-t">
        <H>
          <h2>K-DRAMA PLACE</h2>
          <Box>
            <CardPlace>
              {place.map((place) => (
                <PlaceList key={place.contentid} place={place} />
              ))}
            </CardPlace>
          </Box>
        </H>
      </div>
      <div className="wrap-t">
        <H>
          <Link to="/">
            <StyledButton>Recommended Trip Place</StyledButton>
          </Link>
        </H>
      </div>
    </div>
  );
};
export default ShowResult;
