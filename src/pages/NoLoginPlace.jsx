import React, { useEffect, useState } from 'react';
import NoLoginList from './NoLoginList';
import 'components/Pages/test.css';
import SecondHeader from 'components/Header/secondHeader';
import Img from 'components/test/Img';
import PlaceListTwo from './PlaceListTwo';
import NewCarou from 'components/test/newCarou';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/common/Button';
import axios from 'axios';

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

{
  /* <style>-------------------------------------------------------- */
}

function NoLoginPlace() {
  const [type, setType] = useState(0);
  const [like, setLike] = useState(false);
  const [place, setPlace] = useState(null);
  const [placeTwo, setPlaceTwo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);

      try {
        const responseOne = await axios.get(`http://localhost:8080/survey/result/type=mir`);
        const responseTwo = await axios.get(`http://localhost:8080/survey/result/type=nori`);
        console.debug(responseOne.data);
        setPlace(responseOne.data);
        setPlaceTwo(responseTwo.data);
        console.log('데이터1', responseOne.data);
        console.log('데이터2', responseTwo.data);
        // setA(place.areacode);
      } catch (e) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
  }
  // 아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }

  return (
    <div>
      <SecondHeader />
      <div className="wrap-t">
        <div className="carousel">
          <h2>Place One</h2>

          <NewCarou key={place.contentid} place={place} />
        </div>
      </div>
      <div className="wrap-t">
        
        <H>
          <h2>Place Two</h2>
          <Box>
            <CardPlace>
              {place.map((place) => (
                <NoLoginList key={place.contentid} place={place} />
              ))}
            </CardPlace>
          </Box>
        </H>
      </div>
      <div className="wrap-t">
        <H>
          <h2>Place Three</h2>
          <Box>
            <CardPlace>
              {placeTwo.map((place) => (
                <NoLoginList key={place.contentid} place={place} />
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
}
export default NoLoginPlace;
