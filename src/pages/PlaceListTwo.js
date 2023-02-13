import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceTwo from 'components/test/placeTwo';
import TourItem from './TourItem';
import axios from 'axios';
import Map from 'components/map/map';
import Categories from 'components/categoriescom/Categories';
import ManageEvents from 'components/Container';

const Box = styled.div`
  padding: 0px;
  width: 63vw;
  height: 350px;
  /* background-color: pink; */

`;
const CardPlace = styled.div`
  /* overflow: auto; */
  float: left;
  padding: 10px;
  width: 60vw;
  height: 0px;
  /* background-color: wheat; */
  display: flex;
  text-align: center;     //안에 글씨 센터
`; //리스트 틀

const TourListBlock = styled.div`
  @media screen and (max-width: 1920px) {
    width: 30%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const DIV = styled.div`
  z-index: 100;
`;
const PlaceListTwo = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/survey/result/type=choa`);
        setPlace(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
  }
  //아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }
  // item 값이 유효할 때
  return (
    <>
      <DIV>
        <Box>
          <CardPlace>
            {place.map((place) => (
              <PlaceTwo key={place.contentid} place={place}  />
            ))}
          </CardPlace>
        </Box>
      </DIV>
      
    </>
  );
};

export default PlaceListTwo;
